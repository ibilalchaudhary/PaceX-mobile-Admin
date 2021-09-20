import React, {Component} from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {height, width} from '../Constants/Dimensions';
import Header from '../Components/Header';
import CardDetails from '../Components/CardDetails';

export default class WarehousesScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        style={{height: height, flex: 1}}
        source={require('../Assets/Signup__bg.png')}>
        <Header
          heading="Warehouses"
          onPress={() => {
            navigation.navigate('BottomTabDashboard');
          }}
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 18}}>
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
