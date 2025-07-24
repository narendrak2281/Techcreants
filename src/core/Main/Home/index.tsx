import React, {useEffect, useState} from 'react';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
  Heading,
  Screen,
  Subtitle,
  Text,
  Title,
} from '../../../common/components';
import messaging from '@react-native-firebase/messaging';
import {TouchableOpacity, View, FlatList, Alert} from 'react-native';
import Images from '../../../common/styles/images';
import {cn, formatTime} from '../../../common/utils';
import {Heart, Star} from '../../../assets/icons';
import {Card1} from './Components/Card1';
import EventCard from './Components/EventCard';
import {Event} from './type';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {formatDate} from '../../../common/utils/formatDate';
import {refreshToken} from '../../../redux/reducers/auth';
import {fetchEventRequest} from '../../../redux/reducers/event';
import {PermissionsAndroid} from 'react-native';

export const Home = () => {
  // const [events,setEvents] = useState<Event[]>([])

  const {userDetails, userData} = useAppSelector(state => state.currentUser);
  const {eventDetails} = useAppSelector(state => state.event);

  const normalizedProfileImage =
    typeof userDetails.profile_image === 'string'
      ? userDetails.profile_image
      : userDetails.profile_image?.uri;

  console.log(normalizedProfileImage);
  const dispatch = useAppDispatch();

  const requestPermissionsAndroid = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // console.log('Notification permission granted');
      getToken();
    } else {
      console.log('Notification permission denied');
    }
  };

  const getToken = async () => {
   const FcmToken = await messaging().getToken();
   console.log('FCM Token:', FcmToken);
  }

  useEffect(() => {
    console.log('Events are fetched BottomTab');
    dispatch(refreshToken());
  }, []);

  useEffect(() => {
    console.log('Event Fetched');
    dispatch(fetchEventRequest());
  }, []);

  useEffect(() => {
    console.log('Requesting permissions for notifications');
    requestPermissionsAndroid();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  return (
    <Screen className="mt-8 " scrollable>
      {/* Header */}
      <View className={cn('flex-row mb-10')}>
        <View className="flex-1 items-start">
          <Subtitle>Hello,</Subtitle>
          <Heading>
            {userDetails.first_name} {userDetails.last_name}
            {}
          </Heading>
          <Text>{formatDate(new Date(1747230159000), 'datetime')}</Text>
        </View>
        <Avatar alt="Zach Nugent's Avatar" className="w-16 h-16">
          <AvatarImage source={{uri: normalizedProfileImage}} />
          <AvatarFallback>
            <Title>
              {userDetails.first_name?.[0]}
              {userDetails.last_name?.[0]}
            </Title>
          </AvatarFallback>
        </Avatar>
      </View>

      {/* Card */}
      <View className="flex-row gap-4 mb-6">
        <Card1 title="Rating" subtitle="4.5" icon={Star} />
        <Card1 title="Wallet" subtitle={'120\nHearts'} icon={Heart} />
      </View>

      <View className="items-start flex-row mb-4">
        <Heading className="flex-1 text-start">Upcoming Events</Heading>
        <TouchableOpacity>
          <Subtitle className="text-primary">See all</Subtitle>
        </TouchableOpacity>
      </View>

      <View className="flex-col gap-y-4 mb-6">
        <FlatList
          data={eventDetails?.filter(event =>
            event?.end_date ? new Date(event.end_date) > new Date() : false,
          )}
          keyExtractor={(item, index) =>
            item.id?.toString() ?? index.toString()
          }
          renderItem={({item}) => <EventCard event={item} />}
          contentContainerStyle={{gap: 16, marginBottom: 24}}
          scrollEnabled={false} // important since Screen is already scrollable
        />
      </View>
    </Screen>
  );
};
