import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import {Body, Heading, Screen, Title} from '../../../common/components';
import EventCard from '../Home/Components/EventCard';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {
  fetchEventRequest,
  markAttendanceRequest,
} from '../../../redux/reducers/event';
import {Event} from '../Home/type';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {MainParamList} from '..';

type Props = NativeStackNavigationProp<MainParamList, 'BottomTab'>;
export const History = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<Props>();
  const EventType = 'Virtual';

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchEventRequest()); // Fetch events whenever the tab is focused
    }, [dispatch]),
  );

  const {eventDetails} = useAppSelector(state => state.event);
  const Attended = eventDetails?.filter(event => event.isAttended)
  // Safely sort events by end_date in ascending order
  // const today = new Date();
  // today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate comparison

  // const sortedEvents = [
  //   ...(eventDetails || []).filter(event => event.isRegistered),
  // ].sort((a, b) => {
  //   const dateA = new Date(a?.end_date ?? '');
  //   const dateB = new Date(b?.end_date ?? '');

  //   // Normalize both dates to midnight
  //   const isTodayA = dateA.toDateString() === today.toDateString();
  //   const isTodayB = dateB.toDateString() === today.toDateString();

  //   // Prioritize today's events first
  //   if (isTodayA && !isTodayB) return -1;
  //   if (!isTodayA && isTodayB) return 1;

  //   // Else, sort normally by ascending date
  //   return dateA.getTime() - dateB.getTime();
  // });

  const onAttend = (event?: Event) => {
    if (EventType === 'Virtual') {
      if (event) {
        navigation.navigate('QrScanner', {event});
      }
    } else {
      dispatch(markAttendanceRequest({event_id: event?.id}));
    }
  };

  return (
    <Screen className="mt-5 mx-2 pb-0" scrollable>
      <Title className="text-start">History</Title>
      <View className="mt-5 w-full border-t border-border" />
      <View className="justify-center items-center my-4 bg-primary/20 rounded-2xl">
        <Title className="text-primary mt-6">{Attended?.length}</Title>
        <Body className="pb-4">Events Attended</Body>
      </View>
      <Screen className="px-0  gap-3 mb-0" scrollable>
        <FlatList
          data={Attended}
          keyExtractor={(item, index) =>
            item.id?.toString() ?? index.toString()
          }
          renderItem={({item}) => (
            <EventCard event={item}  />
          )}
          contentContainerStyle={{gap: 16, marginBottom: 24}}
          scrollEnabled={false} // important since Screen is already scrollable
        />
      </Screen>
    </Screen>
  );
};

