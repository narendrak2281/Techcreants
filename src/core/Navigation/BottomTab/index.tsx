import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from '../../../common/components';
import {Home} from '../../Main/Home';
import {Events} from '../../Main/Events';
import {History} from '../../Main/History';
import {Profile} from '../../Main/Profile';
import {View} from 'react-native';
import {useColorScheme} from '../../../common/utils';
import {cn} from '../../../common/utils/cn'; // assuming you use a cn() utility for combining classes
import {
  HomeIcon,
  EventIcon,
  HistoryIcon,
  ProfileIcon,
} from '../../../assets/icons';
import {Pressable} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const {isDarkColorScheme} = useColorScheme();

  const TabIcon = ({focused, normalImage, focusedImage}: any) => {
    return (
      <View
        className={cn(
          'items-center justify-center rounded-full w-9 h-9 self-center',
          focused
            ? isDarkColorScheme
              ? 'bg-primary/10 px-9 py-2'
              : 'bg-primary/40 px-9 py-2'
            : '',
        )}>
        {focused ? focusedImage : normalImage}
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName='History'  // Events
      screenOptions={{
        headerShown: false,
        

        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 3,
          backgroundColor: isDarkColorScheme
            ? 'hsl(222.2 47.4% 4.9%)'
            : 'hsl(0 0% 100%)',
          paddingTop: 5,
          paddingBottom: 5,
          paddingHorizontal: 10,
          height: 100,
          borderTopColor: 'rgba(14, 92, 138, 1)',
          borderTopWidth: 1,
          
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: ({onPress, children}) => (
            <Pressable
              onPress={onPress}
              className="bg-transparent items-center justify-center mt-2">
              {children}
            </Pressable>
          ),

          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              normalImage={<HomeIcon className="stroke-muted-foreground" />}
              focusedImage={
                <HomeIcon className="stroke-primary fill-primary/40 " />
              }
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              className={cn(
                'text-base mb-2',
                focused
                  ? 'text-primary font-bodyBold'
                  : 'text-muted-foreground font-bodyBold',
              )}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarButton: ({onPress, children}) => (
            <Pressable
              onPress={onPress}
              className="bg-transparent items-center justify-center mt-2">
              {children}
            </Pressable>
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              normalImage={<EventIcon className="stroke-muted-foreground" />}
              focusedImage={
                <EventIcon className="stroke-primary fill-primary/40  " />
              }
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              className={cn(
                'text-base mb-2',
                focused
                ? 'text-primary font-bodyBold'
                : 'text-muted-foreground font-bodyBold',
              )}>
              Event
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarButton: ({onPress, children}) => (
            <Pressable
              onPress={onPress}
              className="bg-transparent items-center justify-center mt-2">
              {children}
            </Pressable>
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              normalImage={<HistoryIcon className="stroke-muted-foreground" />}
              focusedImage={
                <HistoryIcon className="stroke-primary fill-primary/40  " />
              }
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              className={cn(
                'text-base mb-2',
                focused
                ? 'text-primary font-bodyBold'
                : 'text-muted-foreground font-bodyBold',
              )}>
              History
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarButton: ({onPress, children}) => (
            <Pressable
              onPress={onPress}
              className="bg-transparent items-center justify-center mt-2">
              {children}
            </Pressable>
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              normalImage={<ProfileIcon className="stroke-muted-foreground" />}
              focusedImage={
                <ProfileIcon className="stroke-primary fill-primary/40  " />
              }
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              className={cn(
                'text-base mb-2',
                focused
                ? 'text-primary font-bodyBold'
                : 'text-muted-foreground font-bodyBold',
              )}>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
