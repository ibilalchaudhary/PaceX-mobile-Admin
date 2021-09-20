import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {
  DARK,
  INPUT_BG,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';

export default function CardDetails({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        height: 110,
        borderRadius: 8,
        backgroundColor: WHITE,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        marginVertical: 10,
        paddingHorizontal: 15,
      }}>
      <Image
        source={require('../Assets/warehouse__bg.png')}
        style={{
          width: '25%',
          height: '100%',
          borderRadius: 12,
          marginRight: 10,
        }}
      />
      <View
        style={{
          flex: 1,
          height: '100%',
          display: 'flex',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 14,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: TEXT_COLOR,
              fontWeight: 'bold',
            }}>
            Creative hub
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={11.93}
              height={11.078}
              viewBox="0 0 11.93 11.078">
              <Path
                data-name="Icon ionic-ios-star"
                d="M11.477 3.835H7.56L6.37.282a.431.431 0 00-.81 0L4.37 3.835H.426A.427.427 0 000 4.261a.313.313 0 00.008.072.409.409 0 00.178.3l3.219 2.269-1.235 3.593a.427.427 0 00.146.479.412.412 0 00.24.1.522.522 0 00.266-.1l3.142-2.24 3.142 2.24a.5.5 0 00.266.1.383.383 0 00.237-.1.422.422 0 00.146-.479L8.519 6.903l3.193-2.29.077-.067a.407.407 0 00-.314-.711z"
                fill="#f80"
              />
            </Svg>
            <Text style={{marginLeft: 6, fontSize: 14, color: '#f80'}}>
              4.6
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={12.472}
            height={12.472}>
            <Path
              data-name="Icon awesome-location-arrow"
              d="M10.828.086L.7 4.76a1.181 1.181 0 00.468 2.26h4.285v4.28a1.181 1.181 0 002.259.467l4.675-10.123A1.215 1.215 0 0010.828.086z"
              fill="#bcb6b6"
            />
          </Svg>
          <Text style={{fontSize: 13, color: SECONDARY, marginLeft: 6}}>
            Lahore
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 13, color: SECONDARY}}>Customer:</Text>
            <Text style={{fontSize: 13, color: DARK, marginRight: 8}}> 10</Text>
          </View>

          <Text style={{color: PRIMARY, fontSize: 16, fontWeight: 'bold'}}>
            $50 / month
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
