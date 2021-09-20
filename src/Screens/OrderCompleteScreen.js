import React, {Component} from 'react';
import {
  DARK,
  DISABLE,
  INPUT_BG,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
import Svg, {G, Path, Rect, Circle} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';
import Buttons from '../Components/Buttons';
import {Rating} from 'react-native-ratings';
import WATER_IMAGE from '../Assets/star.png';

export default class OrderCompleteScreen extends Component {
  constructor() {
    super();
    this.state = {
      ModalVisibility: false,
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../Assets/ordercomplete.png')}
        style={{flex: 1, height: height}}>
        <Header
          heading=""
          onPress={() => {
            navigation.navigate('ChooseCard');
          }}
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <Text
            style={{
              marginHorizontal: 50,
              color: TEXT_COLOR,
              fontSize: 16,
              marginVertical: 10,
            }}>
            You have successfully booked the warehouse
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Request');
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 50,
              backgroundColor: WHITE,
              marginBottom: 22,
              borderRadius: 8,
              marginTop: 70,
            }}>
            <Text style={{color: '#777777', fontSize: 16}}>Sent Request</Text>
          </TouchableOpacity>
          <View style={{marginVertical: 10}}>
            <Buttons
              placeholder="Go Back to Dashboard"
              onPress={() => {
                this.setState({ModalVisibility: true});
              }}
            />
            <Modal
              visible={this.state.ModalVisibility}
              transparent={true}
              animationType="slide">
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginVertical: 90,
                    width: '80%',
                    height: 450,
                    backgroundColor: WHITE,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: INPUT_BG,
                    padding: 20,
                  }}>
                  <Text style={{fontSize: 16, color: PRIMARY}}>Review</Text>
                  <TouchableOpacity
                    style={{
                      width: '100%',
                      marginVertical: 20,
                      height: 140,
                      backgroundColor: INPUT_BG,
                      borderRadius: 8,
                    }}>
                    <TextInput
                      placeholder="Write review..."
                      placeholderTextColor={DISABLE}
                      style={{
                        width: '100%',
                        height: 50,
                        padding: 12,
                        fontSize: 12,
                      }}
                    />
                  </TouchableOpacity>
                  <Rating
                    type="custom"
                    ratingImage={WATER_IMAGE}
                    ratingColor={PRIMARY}
                    ratingBackgroundColor={SECONDARY}
                    tintColor={WHITE}
                    ratingCount={5}
                    imageSize={30}
                    style={{paddingVertical: 6, marginBottom: 20}}
                  />
                  <Buttons
                    placeholder="Save Review"
                    onPress={() => {
                      navigation.navigate('Review');
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('BottomTabDashboard');
                    }}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      height: 50,
                      backgroundColor: INPUT_BG,
                      marginBottom: 22,
                      borderRadius: 8,
                    }}>
                    <Text style={{color: '#777777', fontSize: 16}}>
                      Not Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
