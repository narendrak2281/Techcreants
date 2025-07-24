import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Card, CardHeader, Text} from '../../../../common/components'; // Make sure this supports className
import {Event} from '../type';
import Images from '../../../../common/styles/images';
import {Address1, Attended, Clock, Share} from '../../../../assets/icons';
import {cn, formatDate, parseMoment} from '../../../../common/utils';
import {CircleCheck} from '../../../../assets/icons';
import {canAttendEvent, getNormalizedImage} from '../../../../common/utils';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from 'lucide-react-native';
import {MainParamList} from '../..';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RegistrationStatus} from '../type';
interface Props {
  event?: Event;
  onPress?: () => void;
  isIcon?: boolean;
  onRegister?: (event?: Event) => void;
  onAttend?: (event?: Event) => void;
}
type NAV = NativeStackNavigationProp<MainParamList>;

const EventCard = ({event, onPress, isIcon, onRegister, onAttend}: Props) => {
  // const [hasAttended, setHasAttended] = useState(event?.isAttended);
  // const [hasRegistered, setIsRegistered] = useState(event?.isRegistered);
  const [isDisabled, setDisabled] = useState(!event?.allow_attendance);
  const [status, setStatus] = useState(event?.registration_status);
  const navigation = useNavigation<NAV>();

  const check = (value: RegistrationStatus): boolean =>
    status === value;

  const renderActionButton = () => {
    // If no onRegister function is provided or user has already attended, do not render any button.

    switch (status) {
      // If the user is already registered then render the "Attend" button.
      case 'REGISTER':
        return (
          <TouchableOpacity
            className="rounded-lg mt-4 bg-primary py-2"
            onPress={() => {
              onRegister?.(event);
              setStatus('REGISTERED');
            }}>
            <Text className="text-lg text-white font-bodyBold text-center">
              Register
            </Text>
          </TouchableOpacity>
        );
      case 'REGISTERED':
        return (
          <TouchableOpacity
            disabled={isDisabled}
            className={cn(
              'rounded-lg mt-4 py-2',
              isDisabled ? 'bg-muted' : 'bg-primary',
            )}
            onPress={() => {
              if (!isDisabled) {
                handleNavigation(event, 'QrScanner'); // Navigate to QrScanner
              }
            }}>
            <Text
              className={cn(
                'text-lg font-bodyBold text-center',
                isDisabled ? 'text-muted-foreground' : 'text-white',
              )}>
              Attend
            </Text>
          </TouchableOpacity>
        );
        case 'AWAITING_APPROVAL':
          return (
            <View className='flex-row gap-1'>
              <Clock className='color-yellow-600' width={15} />
              <Text className='text-yellow-600 items-center justify-center text-lg'>Waiting for Approval</Text>

            </View>
          );

    
      default:
        return null;
    }
  };

  const WrapperComponent =
    onRegister || isIcon || onAttend ? View : TouchableOpacity;

  useEffect(() => {
    console.log('Event', event);
    // setHasAttended(event?.isAttended);
    // setIsRegistered(event?.isRegistered);
    setDisabled(!event?.allow_attendance);
    setStatus(event?.registration_status); 
  }, [event?.isAttended, event?.isRegistered, event?.allow_attendance,event?.registration_status]);

  const handleNavigation = (event?: Event, screen?: any) => {
    if (event) {
      navigation.navigate(screen, {event});
    }
  };

  return (
    <WrapperComponent onPress={!isIcon ? onPress : undefined} className="mb-2">
      <Card className="w-full ">
        {/* Event Image (optional) */}
        <View className="relative">
          {event?.feature_image ? (
            <Image
              source={{uri: getNormalizedImage(event.feature_image)}}
              className="w-full h-48 rounded-t-lg"
              resizeMode="cover"
            />
          ) : (
            <Image
              source={Images.demo2}
              className="w-full h-48 rounded-t-lg"
              resizeMode="cover"
            />
          )}

          {check('ATTENDED') && (
            <View className="absolute top-3 right-3 items-center px-2 py-1 flex-row gap-1  bg-green-600 rounded-full">
              <Attended width={15} className="color-white" />
              <Text className="font-semibold text-white">Attended</Text>
            </View>
          )}

          {/* QR CODE BUTTON */}
          {onRegister && (
            <TouchableOpacity
              className="absolute bottom-2 right-2 items-center border rounded-lg p-1 border-white"
              onPress={() => handleNavigation(event, 'QrGenerator')}>
              <Share className="color-white" width={40} />
            </TouchableOpacity>
          )}
        </View>

        <CardHeader>
          <Text className="text-md  text-primary font-caption">
            {event?.end_date && formatDate(event?.end_date, 'eventdate')}
          </Text>
          <Text className="text-2xl mb-2 font-bodyBold">
            {event?.title ? event.title : 'Education for All'}
          </Text>
          <View className="flex-row gap-2">
            {isIcon && <Address1 className="color-foreground" width={14} />}

            <Text className="text-lg font-body text-foreground">
              {event?.location ? event.location : 'Central Park'}
            </Text>
          </View>

          {!check('ATTENDED') && (
            <View className="flex-row gap-2">
              {isIcon && <Clock className="color-foreground" width={15} />}

              <Text
                className={cn(
                  isIcon
                    ? 'text-lg font-body text-foreground'
                    : 'text-md font-caption text-muted-foreground ',
                )}>
                {event?.start_time &&
                  formatDate(event.start_time, 'staticTime')}
                {` - `}
                {event?.end_time && formatDate(event.end_time, 'staticTime')}
              </Text>
            </View>
          )}

          {isIcon && (
            <Text className="mt-3 text-lg font-body text-foreground">
              {event?.description
                ? event.description
                : 'Join us for a day of cleaning up our local park.'}
            </Text>
          )}

          {onRegister && renderActionButton()}

        </CardHeader>
      </Card>
    </WrapperComponent>
  );
};

export default EventCard;
