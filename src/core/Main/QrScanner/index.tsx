import React, {useState, useRef, useCallback, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  Platform,
  Alert,
  AppState,
  Vibration,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
  useCameraPermission,
} from 'react-native-vision-camera';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, OrDivider, Screen, Title} from '../../../common/components';
import {MainParamList} from '..';
import {useFocusEffect} from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { markQrCodeAttendanceRequest } from '../../../redux/reducers/event';

type Props = NativeStackScreenProps<MainParamList, 'QrScanner'>;

export const QrScanner = ({route, navigation}: Props) => {
  const {width} = Dimensions.get('window');
  const {event} = route.params
  const [isActive, setIsActive] = useState(true);
  const [isScanning, setIsScanning] = useState(true);
  const scannedRef = useRef(false);
  const dispatch = useAppDispatch()

  // Camera permissions
  const {hasPermission, requestPermission} = useCameraPermission();

  // Get camera device (back camera)
  const device = useCameraDevice('back');

  // QR Code scanner configuration
  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: codes => {
      if (scannedRef.current || !isScanning) return;

      const qrCode = codes.find(code => code.type === 'qr');
      if (qrCode?.value) {
        scannedRef.current = true;
        console.log('Scanned QR Code:', qrCode.value);
        const data = JSON.parse(qrCode.value)
        console.log(data.eventId,data.eventCoordinatorId)
        try {

          dispatch(markQrCodeAttendanceRequest({event_id:data.eventId,event_coordinator_id:data.eventCoordinatorId}))
        } catch (error) {
          console.log("Error : ",error)
        }

        // Vibration feedback
        Vibration.vibrate(200);

        // Process the scanned code for attendance
        handleAttendanceScanning(qrCode.value);
        

        // Auto navigate back after successful scan
        setTimeout(() => {
          navigation.goBack();
        }, 1000);
      }
    },
  });

  const handleAttendanceScanning = (code: string) => {
    // Show brief success message
    Alert.alert(
      'Attendance Marked', 
      'QR Code scanned successfully!',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('BottomTab'),
        },
      ],
      { cancelable: false }
    );
    
    // Here you can add your attendance marking logic
    // Example: markAttendance(code);
  };

  const handleMarkAttendance = () => {
    // Empty function for manual attendance marking
    Alert.alert(
      'Mark Attendance',
      'Manual attendance marking feature',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress:() => {
            navigation.goBack();
          }
        },
        {
          text: 'Mark Present',
          onPress: () => {
            // Add your manual attendance logic here
            console.log('Manual attendance marked');
            navigation.goBack();
          },
        },
      ]
    );
  };

  // Handle app state changes
  useFocusEffect(
    useCallback(() => {
      setIsActive(true);
      return () => setIsActive(false);
    }, []),
  );

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      setIsActive(nextAppState === 'active');
    });
    return () => subscription?.remove();
  }, []);

  // Request permissions on mount
  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  // Show loading if no device
  if (!device) {
    return (
      <Screen className="justify-center items-center px-4">
        <Title>Camera Not Available</Title>
        <Text className="text-center text-neutral-500 mt-4">
          No camera device found
        </Text>
      </Screen>
    );
  }

  // Show permission request
  if (!hasPermission) {
    return (
      <Screen className="justify-center items-center px-4">
        <Title>Camera Permission Required</Title>
        <Text className="text-center text-neutral-500 mt-4 mb-6">
          Camera access is required to scan QR codes for attendance
        </Text>
        <Button onPress={requestPermission}>
          <Text>Grant Permission</Text>
        </Button>
      </Screen>
    );
  }

  return (
    <Screen className="justify-center items-center px-4" scrollable>
      <Title>Mark Attendance</Title>
      <Title>Event Name : {event.title}</Title>

      <View
        className="my-5 rounded-xl overflow-hidden"
        style={{width: width - 32, height: width - 32}}>
        <Camera
          style={{flex: 1}}
          device={device}
          isActive={isActive && isScanning}
          codeScanner={codeScanner}
          enableZoomGesture
          photo={false}
          video={false}
          audio={false}
        />

        {/* Scanning overlay */}
        <View className="absolute inset-0 justify-center items-center">
          <View className="w-72 h-72 border-2 border-white rounded-lg opacity-70" />
          <Text className="text-white font-medium mt-4 bg-black bg-opacity-50 px-3 py-1 rounded">
            {isScanning ? 'Scan QR Code for Attendance' : 'Processing...'}
          </Text>
        </View>
      </View>
{/* 
      <Text className="text-center text-sm text-neutral-500 mt-2 mb-4">
        Point your camera at the QR code to mark attendance automatically
      </Text> */}
      <OrDivider className='mb-5' />

      <Button onPress={handleMarkAttendance}  variant='outline' className="w-full">
        <Text className='color-foreground'>Notify Event Coordinator</Text>
      </Button>
    </Screen>
  );
};