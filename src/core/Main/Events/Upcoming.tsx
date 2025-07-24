import {FlatList} from 'react-native';
import {Heading, Screen} from '../../../common/components';
import React, {useEffect} from 'react';
import EventCard from '../Home/Components/EventCard';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {
  eventRegisterRequest,
  fetchEventRequest,
} from '../../../redux/reducers/event';
import {Event} from '../Home/type';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainParamList} from '..';

type UpcomingScreenNavigationProp = NativeStackNavigationProp<MainParamList>;

const Upcoming = () => {
  const navigation = useNavigation<UpcomingScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const {eventDetails} = useAppSelector(state => state.event);
  const {userData} = useAppSelector(state => state.currentUser);

  const onRegister = (event?: Event) => {
    dispatch(eventRegisterRequest({event_id: event?.id}));
    
  };

useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchEventRequest()); // Fetch events whenever the tab is focused
    }, [dispatch]),
  );

  return (
    <Screen className="mt-3 px-2 gap-3  " scrollable>
     
      <FlatList
        data={eventDetails?.filter(event =>
          event?.end_date ? new Date(event.end_date) > new Date() : false,
        )}
        keyExtractor={(item, index) => item.id?.toString() ?? index.toString()}
        renderItem={({item}) => (
          <EventCard event={item} onRegister={onRegister}   />
        )}
        contentContainerStyle={{gap: 16, marginBottom: 24}}
        scrollEnabled={false} // important since Screen is already scrollable
      />
    </Screen>
  );
};

export default Upcoming;
