import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  DISABLE,
  INPUT_BG,
  PRIMARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';

export default function Selector({text}) {
  const [select, setSelect] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setSelect(true);
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 65,
          height: 42,
          borderRadius: 6,
          borderWidth: 1,
          borderColor: PRIMARY,
          backgroundColor: select ? PRIMARY : WHITE,
          marginRight: 16,
          marginVertical: 6,
        }}>
        <Text style={{fontSize: 12, color: select ? WHITE : TEXT_COLOR}}>
          {text}
        </Text>
      </TouchableOpacity>
    </>
  );
}
