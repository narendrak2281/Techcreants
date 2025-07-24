import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {Screen} from '../../../common/components';
import EventCard from '../Home/Components/EventCard';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {fetchEventRequest} from '../../../redux/reducers/event';

const Past = () => {
  const dispatch = useAppDispatch();

  const {eventDetails} = useAppSelector(state => state.event);

  useEffect(() => {
    dispatch(fetchEventRequest()); // Initial load
  }, [dispatch]);

  return (
    <Screen className="mt-3 px-3 gap-4" scrollable>
      <FlatList
        data={eventDetails?.filter(event =>
          // ignored if end_date is missing
          event?.end_date ? new Date(event.end_date) <= new Date() : false,
        )}
        keyExtractor={(item, index) => item.id?.toString() ?? index.toString()}
        renderItem={({item}) => <EventCard event={item} isIcon />}
        contentContainerStyle={{gap: 16, marginBottom: 24}}
        scrollEnabled={false}
      />
    </Screen>
  );
};

export default Past;
