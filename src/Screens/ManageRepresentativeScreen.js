import React, {Component} from 'react';
import {
  DISABLE,
  INPUT_BG,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Header from '../Components/Header';
import {height} from '../Constants/Dimensions';
function RequestTextLines({heading, subHeading}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 14,
      }}>
      <Text style={{color: PRIMARY}}>{heading}</Text>
      <Text style={{color: TEXT_COLOR}}>{subHeading}</Text>
    </View>
  );
}

export default class ManageRepresentativeScreen extends Component {
  render() {
    const navigation = this.props.navigation;

    return (
      <ImageBackground
        source={require('../Assets/main__background.png')}
        style={{flex: 1, height: height}}>
        <Header
          heading="Request"
          onPress={() => {
            navigation.navigate('Representatives');
          }}
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Image
              source={require('../Assets/userPic.png')}
              style={{width: 130, height: 130, borderRadius: 12}}
            />
            <Text style={{marginVertical: 10, fontSize: 16}}>Creatv Hub</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 220,
              backgroundColor: WHITE,
              paddingVertical: 20,
              borderRadius: 8,
            }}>
            <RequestTextLines heading="Company Name" subHeading="Creatv Hub" />
            <RequestTextLines heading="Driver Name" subHeading="Asim" />
            <RequestTextLines heading="Company Name" subHeading="Creatv Hub" />
            <RequestTextLines heading="Driver Name" subHeading="Asim" />
            <RequestTextLines
              heading="Date of Arrival"
              subHeading="20 JUN 2021"
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('');
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 50,
              backgroundColor: TEXT_COLOR,
              marginBottom: 22,
              borderRadius: 8,
              marginTop: 170,
              marginVertical: 50,
            }}>
            <Text style={{color: WHITE}}>Remove</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    );
  }
}
