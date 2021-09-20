import React, {Component} from 'react';
import {DARK, INPUT_BG, PRIMARY, SECONDARY, WHITE} from '../Constants/Colors';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';
import Dropdown from '../Components/Dropdown';
import RangeSlider from '../Components/RangeSlider';
import Buttons from '../Components/Buttons';
import {Picker} from '@react-native-picker/picker';

export default class FilterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{width: width, height: height}}>
        <View
          style={{
            backgroundColor: '#FAFAFA',
            height: height,
            flex: 1,
          }}>
          <Header
            heading="Search Warehouses"
            onPress={() => {
              navigation.navigate('BottomTabDashboard');
            }}
          />
          <ScrollView style={{flex: 1}}>
            <View style={{marginHorizontal: 18}}>
              <InputBox
                variant="primary"
                placeholder="Search"
                svg={
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20.355}
                    height={20.355}
                    viewBox="0 0 21.355 21.355">
                    <G
                      data-name="Icon feather-search"
                      fill="none"
                      stroke={SECONDARY}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}>
                      <Path
                        data-name="Path 706"
                        d="M17.263 9.382A7.882 7.882 0 119.382 1.5a7.882 7.882 0 017.881 7.882z"
                      />
                      <Path
                        data-name="Path 707"
                        d="M19.234 19.234l-4.286-4.286"
                      />
                    </G>
                  </Svg>
                }
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 24,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Text>Product Type</Text>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginVertical: 8,
                      width: 145,
                      height: 50,
                      borderRadius: 8,
                      backgroundColor: WHITE,
                    }}>
                    <Dropdown label="Food" value="" />
                  </TouchableOpacity>
                </View>
                <View style={{display: 'flex', flexDirection: 'column'}}>
                  <Text>Area</Text>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginVertical: 8,
                      width: 145,
                      height: 50,
                      borderRadius: 8,
                      backgroundColor: WHITE,
                    }}>
                    <Dropdown label="5ft" value="" />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Text>Volume</Text>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginVertical: 8,
                      width: 145,
                      height: 50,
                      borderRadius: 8,
                      backgroundColor: WHITE,
                    }}>
                    <Dropdown label="5" value="" />
                  </TouchableOpacity>
                </View>
                <View style={{display: 'flex', flexDirection: 'column'}}>
                  <Text>Booking</Text>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginVertical: 8,
                      width: 145,
                      height: 50,
                      borderRadius: 8,
                      backgroundColor: WHITE,
                    }}>
                    <Dropdown label="Advance" value="" />
                  </TouchableOpacity>
                </View>
              </View>
              <RangeSlider />
              <RangeSlider />
              <View style={{display: 'flex', marginVertical: 50}}>
                <Buttons
                  onPress={() => {
                    navigation.navigate('Warehouses');
                  }}
                  placeholder="Search"
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
