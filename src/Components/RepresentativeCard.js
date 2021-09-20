import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {DISABLE, TEXT_COLOR, WHITE} from '../Constants/Colors';

export default function RepresentativeCard({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        height: 80,
        borderRadius: 12,
        backgroundColor: WHITE,
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 12,
      }}>
      <View style={{display: 'flex', width: '25%'}}>
        <Image
          source={require('../Assets/userPic.png')}
          style={{width: 50, height: 50}}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: TEXT_COLOR}}>
          Asim Rasheed
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: -8,
          }}>
          <Text style={{fontSize: 14, color: DISABLE, marginRight: 38}}>
            Lahore
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 14, color: DISABLE}}>Warehouse:</Text>
            <Text style={{fontSize: 14, color: TEXT_COLOR}}> Creatv hub</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
