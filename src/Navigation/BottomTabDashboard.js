import React, {useState} from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../Screens/DashboardScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Svg, {Path, G} from 'react-native-svg';
import {SECONDARY, PRIMARY, WHITE} from '../Constants/Colors';
import WarehousesScreen from '../Screens/WarehousesScreen';
import RepresentativesScreen from '../Screens/RepresentativesScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabDashboard() {
  return (
    <Tab.Navigator
      screenOptions={{header: () => null}}
      tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 35,
                height: 30,
                backgroundColor: focused ? PRIMARY : WHITE,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20.865}
                height={20.359}
                viewBox="0 0 26.295 24.081">
                <Path
                  data-name="Icon metro-home"
                  d="M25.794 14.453L13.147 4.636.5 14.453v-4L13.147.633l12.647 9.817zm-3.165-.357v9.486h-6.32v-6.324H9.985v6.324H3.662v-9.486l9.485-7.114z"
                  fill={focused ? WHITE : PRIMARY}
                  stroke="#fff"
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Warehouses Screen"
        component={WarehousesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 35,
                height: 30,
                backgroundColor: focused ? PRIMARY : WHITE,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20.5}
                height={20.5}>
                <G data-name="warehouse (1)" fill={focused ? WHITE : PRIMARY}>
                  <Path
                    data-name="Path 9252"
                    d="M22.2 7.63L11.658.13a.7.7 0 00-.815 0L.3 7.63a.7.7 0 00-.3.57v3.281a.7.7 0 001.11.574l.765-.545v10.052a.938.938 0 00.937.937h1.875V11.25h13.125V22.5h1.875a.938.938 0 00.937-.937v-10.05l.764.544a.705.705 0 00.408.13.714.714 0 00.322-.078.7.7 0 00.381-.625V8.2a.7.7 0 00-.299-.57z"
                  />
                  <Path
                    data-name="Path 9253"
                    d="M6.094 20.156h10.312V22.5H6.094z"
                  />
                  <Path
                    data-name="Path 9254"
                    d="M6.094 16.406h10.312v2.344H6.094z"
                  />
                  <Path
                    data-name="Path 9255"
                    d="M6.094 12.656h10.312V15H6.094z"
                  />
                </G>
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Representatives Screen"
        component={RepresentativesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 35,
                height: 30,
                backgroundColor: focused ? PRIMARY : WHITE,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20.05}
                height={20.403}>
                <G data-name="Group 3010">
                  <G data-name="Group 3009" fill={focused ? WHITE : PRIMARY}>
                    <Path
                      data-name="Path 9250"
                      d="M15.566 13.83a4.655 4.655 0 01-3.768 1.922H9.626a1.734 1.734 0 01-1.63-1.142 5.506 5.506 0 01-.877-.347 5.9 5.9 0 01-1.638-1.212 6.992 6.992 0 00-5.483 6.826v.437a1.088 1.088 0 001.088 1.088h16.876a1.088 1.088 0 001.088-1.088v-.437a6.987 6.987 0 00-3.484-6.047z"
                    />
                    <Path
                      data-name="Path 9251"
                      d="M4.327 10.811a1.238 1.238 0 001.085-.641l.017.045.005.014a4.833 4.833 0 002.725 2.87 1.732 1.732 0 011.468-.812h2.171a1.215 1.215 0 00.595-.16 2.453 2.453 0 00.7-.81 6.259 6.259 0 00.543-1.147 1.245 1.245 0 00.342.394v.536a2.184 2.184 0 01-2.181 2.181H9.628a.743.743 0 000 1.486h2.171a3.671 3.671 0 003.667-3.667v-.532a1.237 1.237 0 00.5-.991v-3.1a1.236 1.236 0 00-.514-1 5.941 5.941 0 00-11.844 0 1.236 1.236 0 00-.514 1v3.1a1.239 1.239 0 001.233 1.234zm5.2-9.325A4.461 4.461 0 0113.958 5.5a1.243 1.243 0 00-.348.43 4.24 4.24 0 00-8.167-.007v.007a1.243 1.243 0 00-.348-.43 4.461 4.461 0 014.43-4.014z"
                    />
                  </G>
                </G>
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 35,
                height: 30,
                backgroundColor: focused ? PRIMARY : WHITE,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20.865}
                height={20.359}
                viewBox="0 0 31.5 36">
                <G data-name="Group 2979" fill={focused ? WHITE : PRIMARY}>
                  <Path
                    data-name="Icon awesome-user"
                    d="M15.75 18a9 9 0 10-9-9 9 9 0 009 9zm6.3 2.25h-1.174a12.24 12.24 0 01-10.252 0H9.45A9.452 9.452 0 000 29.7v2.925A3.376 3.376 0 003.375 36h24.75a3.376 3.376 0 003.375-3.375V29.7a9.452 9.452 0 00-9.45-9.45z"
                  />
                </G>
              </Svg>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
