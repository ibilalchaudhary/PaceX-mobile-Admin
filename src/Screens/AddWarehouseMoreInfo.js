import React, {Component, useState} from 'react';
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
import {
  DARK,
  DISABLE,
  INPUT_BG,
  PRIMARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Header from '../Components/Header';
import Buttons from '../Components/Buttons';
import Selector from '../Components/Selector';

function AddCategoryLine({heading, onPress}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 6,
        marginTop: 22,
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 14, color: TEXT_COLOR}}>{heading}</Text>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: 70,
          height: 35,
          borderRadius: 6,
          backgroundColor: PRIMARY,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 14, color: WHITE}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

function AddImage({source}) {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: 120,
        height: 120,
        marginRight: 12,
      }}>
      <Image
        style={{width: '100%', height: '100%', borderRadius: 8}}
        source={source}
      />
    </View>
  );
}
export default class AddWarehouseMoreInfo extends Component {
  constructor() {
    super();
    this.state = {
      ModalVisibility: false,
    };
  }
  render() {
    const cetagories = ['Size', 'Height', 'Volume', 'Size'];
    const navigation = this.props.navigation;

    return (
      <ImageBackground
        style={{height: height, flex: 1}}
        source={require('../Assets/Signup__bg.png')}>
        <Header
          heading="More Info"
          onPress={() => {
            navigation.navigate('AddWarehouse');
          }}
        />

        <ScrollView style={{flex: 1, paddingHorizontal: 18}}>
          <AddCategoryLine
            heading="Amenities Available"
            onPress={() => {
              this.setState({ModalVisibility: true});
            }}
          />
          <View
            style={{display: 'flex', flexDirection: 'row', maxWidth: '100%'}}>
            {cetagories.map(item => {
              return <Selector text={item} />;
            })}
          </View>
          <View
            style={{display: 'flex', flexDirection: 'row', maxWidth: '100%'}}>
            {cetagories.map(item => {
              return <Selector text={item} />;
            })}
          </View>

          <AddCategoryLine
            heading="Categories"
            onPress={() => {
              this.setState({ModalVisibility: true});
            }}
          />
          <View
            style={{display: 'flex', flexDirection: 'row', maxWidth: '100%'}}>
            {cetagories.map(item => {
              return <Selector text={item} />;
            })}
          </View>
          <View
            style={{display: 'flex', flexDirection: 'row', maxWidth: '100%'}}>
            {cetagories.map(item => {
              return <Selector text={item} />;
            })}
          </View>
          <View style={{marginTop: 20}}></View>
          <AddCategoryLine heading="Photos" />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginVertical: 20,
            }}>
            <AddImage source={require('../Assets/warehouse__bg.png')} />
            <AddImage source={require('../Assets/warehouse__bg.png')} />
            <AddImage source={require('../Assets/warehouse__bg.png')} />
            <AddImage source={require('../Assets/warehouse__bg.png')} />
          </ScrollView>
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
                  height: 300,
                  backgroundColor: WHITE,
                  borderRadius: 14,
                  borderWidth: 1,
                  borderColor: INPUT_BG,
                  padding: 20,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: PRIMARY,
                    fontWeight: 'bold',
                    marginTop: 30,
                  }}>
                  Add
                </Text>
                <TouchableOpacity
                  style={{
                    width: '100%',
                    marginVertical: 20,
                    height: 50,
                    backgroundColor: INPUT_BG,
                    borderRadius: 8,
                  }}>
                  <TextInput
                    placeholder="Category"
                    placeholderTextColor={DISABLE}
                    style={{
                      width: '100%',
                      height: 50,
                      padding: 12,
                      fontSize: 12,
                      color: TEXT_COLOR,
                    }}
                  />
                </TouchableOpacity>

                <Buttons
                  placeholder="Save"
                  onPress={() => {
                    this.setState({ModalVisibility: false});
                  }}
                />
              </View>
            </View>
          </Modal>
          <View style={{marginVertical: 40}}>
            <Buttons
              placeholder="Save"
              onPress={() => {
                navigation.navigate('AddWarehouse');
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
