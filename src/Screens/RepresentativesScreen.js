import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import Headings from '../Components/Headings';
import {DARK, DISABLE, PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Svg, {G, Path} from 'react-native-svg';
import Header from '../Components/Header';
import CardDetails from '../Components/CardDetails';
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
