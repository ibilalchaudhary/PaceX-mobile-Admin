import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {DISABLE, PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';
import CardDetails from '../Components/CardDetails';
export default class DashboardScreen extends Component {
  constructor() {
    super();
    this.state = {
      newNotifications: true,
    };
  }
  render() {
    const navigation = this.props.navigation;
    const catagrories = ['Size', 'Health', 'Weight', 'Area', 'Height', 'Space'];
    return (
      <ImageBackground
        source={require('../Assets/main__background.png')}
        style={{
          height: height,
          flex: 1,
          paddingVertical: 16,
        }}>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Image
                source={require('../Assets/userPic.png')}
                style={{width: 45, height: 45}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Filters');
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={22.854}
                height={22.854}
                viewBox="0 0 27.854 27.854">
                <G
                  data-name="Icon feather-search"
                  fill="none"
                  stroke="#7b7b7b"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}>
                  <Path
                    data-name="Path 706"
                    d="M23.04 12.27A10.77 10.77 0 1112.27 1.5a10.77 10.77 0 0110.77 10.77z"
                  />
                  <Path data-name="Path 707" d="M25.733 25.733l-5.856-5.856" />
                </G>
              </Svg>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <View
            style={{
              alignItems: 'flex-end',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: TEXT_COLOR}}>
              Wearhouses
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddWarehouse');
              }}
              style={{
                width: 85,
                height: 35,
                borderRadius: 6,
                backgroundColor: PRIMARY,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 12, color: WHITE}}>Add</Text>
            </TouchableOpacity>
          </View>
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}
