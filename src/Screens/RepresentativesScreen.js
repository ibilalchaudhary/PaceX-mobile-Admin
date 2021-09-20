import React, {Component} from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import {height, width} from '../Constants/Dimensions';
import Header from '../Components/Header';
import RepresentativeCard from '../Components/RepresentativeCard';
import Buttons from '../Components/Buttons';

export default class RepresentativesScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        style={{height: height, flex: 1}}
        source={require('../Assets/Signup__bg.png')}>
        <Header
          heading="Representative"
          onPress={() => {
            navigation.navigate('BottomTabDashboard');
          }}
        />

        <ScrollView style={{flex: 1, paddingHorizontal: 18}}>
          <RepresentativeCard
            onPress={() => {
              navigation.navigate('ManageRepresentative');
            }}
          />

          <RepresentativeCard
            onPress={() => {
              navigation.navigate('ManageRepresentative');
            }}
          />

          <RepresentativeCard
            onPress={() => {
              navigation.navigate('ManageRepresentative');
            }}
          />
          <RepresentativeCard
            onPress={() => {
              navigation.navigate('ManageRepresentative');
            }}
          />
        </ScrollView>
        <View style={{paddingHorizontal: 18}}>
          <Buttons
            placeholder="Add New"
            onPress={() => {
              navigation.navigate('AddRepresentative');
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}
