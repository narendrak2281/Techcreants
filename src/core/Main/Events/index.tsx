import React, { useState } from 'react';
import { Dimensions, View, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, SceneRendererProps, NavigationState } from 'react-native-tab-view';
import { Screen, Text, Title } from '../../../common/components';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Upcoming from './Upcoming';
import Past from './Past';

interface Route {
  key: string;
  title: string;
}

type TabBarProps = SceneRendererProps & {
  navigationState: NavigationState<Route>;
  jumpTo: (key: string) => void;
};

const MyTabBar: React.FC<TabBarProps> = ({ navigationState, jumpTo }) => {
  return (
    <View className="flex-row bg-background  py-3 border-y border-border">
      <View className="flex-row bg-background p-1 rounded-lg gap-4">
        {navigationState.routes.map((route, i) => {
          const isActive = navigationState.index === i;
          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => jumpTo(route.key)}
              className={`px-4 py-1.5 rounded-lg ${
                isActive ? 'bg-primary/20' : 'bg-background'
              }`}
            >
              <Text
                className={`text-lg ${
                  isActive
                    ? 'text-primary font-bodyBold'
                    : 'text-muted-foreground font-body'
                }`}
              >
                {route.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export const Events = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [index, setIndex] = useState(0);
  const [routes] = useState<Route[]>([
    { key: 'upcoming', title: 'Upcoming' },
    { key: 'past', title: 'Past' },
  ]);

  

  const renderScene = SceneMap({
    upcoming: () => <Upcoming />,
    past: () => <Past />,
  });

  return (
    <Screen className="items-start mt-5 pb-0 " scrollable>
      <Title className="mb-6">Events</Title>

      <View className="flex-1 w-full">
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: Dimensions.get('window').width }}
          renderTabBar={(props) => <MyTabBar {...props} />}
        />
      </View>
    </Screen>
  );
};
