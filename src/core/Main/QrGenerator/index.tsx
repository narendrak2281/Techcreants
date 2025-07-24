import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Alert,
  Platform,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions,
  Share,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Heading, Screen, Title} from '../../../common/components';
import {MainParamList} from '..';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import ViewShot from 'react-native-view-shot';
import {cn, formatDate} from '../../../common/utils';
import Images from '../../../common/styles/images';
import { useAppSelector } from '../../../redux/store';

type Props = NativeStackScreenProps<MainParamList, 'QrGenerator'>;

const {width} = Dimensions.get('window');

export const QrGenerator = ({route, navigation}: Props) => {
  const {event} = route.params;
  const {userId:eventCoordinatorId} = useAppSelector(state => state.currentUser) 

  const [isGenerating, setIsGenerating] = useState(false);
  const [qrSize, setQrSize] = useState(300);
  const [customMessage, setCustomMessage] = useState('');
  const [showCustomization, setShowCustomization] = useState(false);

  const viewShotRef = useRef<ViewShot>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;


  useEffect(() => {
    // Entrance animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  function generateUniqueCode(): string {
    return `ATT_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  const getQRCodeStringData = (): string => {
    const qrPayload = {
      type: 'ATTENDANCE',
      version: '1.0',
      timestamp: new Date().toISOString(),
      eventId: event.id,
      eventCoordinatorId: eventCoordinatorId,
      // data: {
      //   eventId: event.id,
      //   volunteerId: null,
      //   eventCoordinatorId: eventCoordinatorId,
      // },
    };

    return JSON.stringify(qrPayload);
  };

  const requestStoragePermission = async (): Promise<boolean> => {
    if (Platform.OS === 'android') {
      try {
        if (Platform.Version >= 33) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const saveQRCodeAsImage = async () => {
    setIsGenerating(true);

    try {
      const hasPermission = await requestStoragePermission();
      if (!hasPermission) {
        Alert.alert(
          'Permission Required',
          'Storage permission is required to save the QR code',
        );
        return;
      }

      const uri = await viewShotRef.current?.capture?.();
      if (!uri) {
        throw new Error('Failed to capture QR code');
      }

      if (Platform.OS === 'android') {
        await CameraRoll.saveAsset(uri, {type: 'photo'});
      } else {
        await CameraRoll.saveAsset(uri);
      }

      Alert.alert('Success! 🎉', `QR code saved to gallery successfully`, [
        // {
        //   text: 'View Gallery',
        //   onPress: () => {
        //     // Navigate to gallery if possible
        //   },
        // },
        {
          text: 'Generate Another',
          onPress: () => {
            // Reset or stay on current screen
          },
        },
        {
          text: 'Done',
          style: 'default',
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (error) {
      console.error('Error saving QR code:', error);
      Alert.alert(
        'Error ❌',
        'Failed to save QR code. Please check permissions and try again.',
        [
          {text: 'Retry', onPress: saveQRCodeAsImage},
          {text: 'Cancel', style: 'cancel'},
        ],
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const previewQRData = () => {
    const data = getQRCodeStringData();
    const formattedData = JSON.stringify(JSON.parse(data), null, 2);
    Alert.alert('QR Code Data Preview', formattedData);
  };

  const resetCustomization = () => {
    setQrSize(200);
    setCustomMessage('');
  };

  return (
    <Screen className="justify-center" scrollable>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{scale: scaleAnim}],
        }}>
        <View className="mt-20">
          <Title className="text-center mb-2">
            Generate Attendance QR Code
          </Title>
          {/* <Text className="text-center text-muted-foreground mb-6">
            Create a scannable QR code for event attendance tracking
          </Text> */}

          {/* Event Information Card */}
          {/* <View className="bg-background rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
            <View className="flex-row items-center mb-3">
              <View className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
              <Heading className="text-lg ">Event Information</Heading>
            </View>

            <View className="bg-background rounded-lg p-3">
              <Text className="text-sm text-foreground mb-1">Event Name</Text>
              <Text className="text-lg font-semibold text-foreground">
                {event.title}
              </Text>
            </View>
          </View> */}

          {/* QR Code Preview */}
          <View className=" p-6 dark:shadow-sm ">
            <Text className="text-lg font-semibold  text-foreground text-center">
              QR Code Preview
            </Text>

            <View className="items-center">
              <ViewShot
                ref={viewShotRef}
                options={{
                  fileName: `QRCode_${(event.title ?? 'untitled').replace(
                    /\s+/g,
                    '_',
                  )}_${Date.now()}`,
                  format: 'png',
                  quality: 1.0,
                  result: 'tmpfile',
                }}
                style={styles.qrContainer}>
                <View className="items-center bg-white p-6 rounded-xl">
                  <Text className="text-lg font-bold text-gray-800 mb-2 text-center">
                    {event.title}
                  </Text>

                  {customMessage ? (
                    <Text className="text-sm text-gray-600 mb-4 text-center">
                      {customMessage}
                    </Text>
                  ) : null}

                  <QRCode
                    value={getQRCodeStringData()}
                    size={qrSize}
                    color="black"
                    backgroundColor="white"
                    logo={Images.logo}
                    logoSize={Math.max(20, qrSize * 0.15)}
                    logoBackgroundColor="transparent"
                    logoMargin={4}
                    logoBorderRadius={8}
                  />

                  <Text className="text-xs text-gray-500 mt-3 text-center">
                    Scan to mark attendance
                  </Text>
                  <Text className="text-xs text-gray-400 mt-1">
                    Generated: {formatDate(new Date(), 'datetime')}
                  </Text>
                </View>
              </ViewShot>
            </View>
          </View>

          {/* Customization Options
          <View className={cn("bg-background mb-5", showCustomization && "border border-border rounded-xl p-6")}>
            <Button
              onPress={() => setShowCustomization(!showCustomization)}
              variant="outline"
              // className="bg-gray-100 mb-3"
            >
              <Text className="text-foreground">
                {showCustomization ? '🔼 Hide' : '🔽 Show'} Customization
                Options
              </Text>
            </Button>

            {showCustomization && (
              <View>
                <Text className="text-sm font-semibold text-muted-foreground mb-2">
                  QR Code Size: {qrSize}px
                </Text>
                <View className="flex-row items-center mb-4">
                  <Button
                    onPress={() => setQrSize(Math.max(150, qrSize - 25))}
                    className="px-3 py-1 mr-2"
                    variant="outline">
                    <Text className="text-foreground">-</Text>
                  </Button>
                  <View className="flex-1 bg-gray-100 h-2 rounded-full mx-2">
                    <View
                      className="bg-blue-500 h-2 rounded-full"
                      style={{width: `${((qrSize - 150) / 150) * 100}%`}}
                    />
                  </View>
                  <Button
                    onPress={() => setQrSize(Math.min(300, qrSize + 25))}
                    className=" px-3 py-1 ml-2"
                    variant="outline">
                    <Text className="text-foreground">+</Text>
                  </Button>
                </View>
                
                <Text className="text-sm font-semibold text-gray-700 mb-2">
                  Custom Message (Optional)
                </Text>
                <TextInput
                  value={customMessage}
                  onChangeText={setCustomMessage}
                  placeholder="Add a custom message to the QR code..."
                  className="border border-gray-300 rounded-lg p-3 mb-3"
                  multiline
                  maxLength={100}
                />
                <Text className="text-xs text-gray-500 mb-3">
                  {customMessage.length}/100 characters
                </Text>

                <Button onPress={resetCustomization} variant="destructive">
                  <Text className="text-destructive-foreground">
                    Reset Customization
                  </Text>
                </Button>
              </View>
            )}
          </View> */}

          {/* Action Buttons */}
          <View className="space-y-3 mb-8">
            <Button
              onPress={previewQRData}
              className="bg-blue-100 border border-blue-200">
              <Text className="text-blue-700">👁️ Preview QR Data</Text>
            </Button>

            {/* <View className="flex-row space-x-3"> */}
              {/* <Button
                onPress={shareQRCode}
                disabled={isSharing}
                className={cn(
                  "flex-1 bg-green-500",
                  isSharing && "bg-green-300"
                )}
              >
                <Text className="text-white">
                  {isSharing ? '📤 Sharing...' : '📤 Share QR Code'}
                </Text>
              </Button> */}

              <Button
                onPress={saveQRCodeAsImage}
                disabled={isGenerating}
                className={cn(
                  'flex-1 bg-blue-500',
                  isGenerating && 'bg-blue-300',
                )}>
                <Text className="text-white">
                  {isGenerating ? '💾 Saving...' : '💾 Save to Gallery'}
                </Text>
              </Button>
            </View>

            <Button onPress={() => navigation.goBack()} className="dark:bg-muted bg-border">
              <Text className="dark:text-white font-medium"> Back to Event</Text>
            </Button>
          {/* </View> */}
        </View>
      </Animated.View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  qrContainer: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: 'white',
  },
});
