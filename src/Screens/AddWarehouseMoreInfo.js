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
import Svg, {G, Path, Text as TextSvg} from 'react-native-svg';
import Header from '../Components/Header';
import CardDetails from '../Components/CardDetails';
import RepresentativeCard from '../Components/RepresentativeCard';
import Buttons from '../Components/Buttons';
import InputBox from '../Components/InputBox';

export default class AddWarehouseMoreInfo extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        style={{height: height, flex: 1}}
        source={require('../Assets/Signup__bg.png')}>
        <Header
          heading="More Info"
          onPress={() => {
            navigation.navigate('AddWarehouseMoreInfo');
          }}
        />

        <ScrollView style={{flex: 1, paddingHorizontal: 18}}>
          
        </ScrollView>
      </ImageBackground>
    );
  }
}
