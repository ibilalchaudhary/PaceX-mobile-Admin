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

export default class AddWarehouseScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        style={{height: height, flex: 1}}
        source={require('../Assets/Signup__bg.png')}>
        <Header
          heading="Warehouse Info"
          onPress={() => {
            navigation.navigate('BottomTabDashboard');
          }}
        />

        <ScrollView style={{flex: 1, paddingHorizontal: 18}}>
          <View style={{marginVertical: 20}}>
            <InputBox
              variant="primary"
              placeholder="Warehouse Name"
              secureTextEntry={true}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12.292}
                  height={12.717}>
                  <G data-name="Group 3018">
                    <G data-name="Group 3017">
                      <Path
                        data-name="Path 9259"
                        d="M12.205 4.069L6.258.034a.2.2 0 00-.224 0L.087 4.069A.2.2 0 000 4.234v8.283a.2.2 0 00.2.2h11.893a.2.2 0 00.2-.2V4.234a.2.2 0 00-.088-.165zm-7.532 8.249h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.075h.451v2.15zM2.097 5.1v-.454h8.1V5.1zm1.274 5.947v-.876h.451v.876zm1.3-1.274H2.522V7.619h.451v1.076a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2V7.619h.451zM3.372 8.5v-.881h.451V8.5zm3.85 3.823h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.08h.451v2.15zm-1.3-1.274v-.876h.451v.876zm5.974 1.274h-1.728V8.057a.2.2 0 00-.4 0v4.261h-2.15V9.969a.2.2 0 00-.2-.2h-2.35V7.42a.2.2 0 00-.2-.2h-2.35V5.5h7.248v1.708a.2.2 0 10.4 0V5.5h.226a.2.2 0 00.2-.2v-.85a.2.2 0 00-.2-.2h-8.5a.2.2 0 00-.2.2v.85a.2.2 0 00.2.2h.226v6.823H.398V4.34L6.149.439l5.748 3.9v7.979z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3020">
                    <G data-name="Group 3019">
                      <Path
                        data-name="Path 9260"
                        d="M6.995 1.699h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3022">
                    <G data-name="Group 3021">
                      <Path
                        data-name="Path 9261"
                        d="M6.995 2.548h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3024">
                    <G data-name="Group 3023">
                      <Path
                        data-name="Path 9262"
                        d="M6.995 3.398h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3026">
                    <G data-name="Group 3025">
                      <Path
                        data-name="Path 9263"
                        d="M4.023 9.133h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3028">
                    <G data-name="Group 3027">
                      <Path
                        data-name="Path 9264"
                        d="M4.023 11.681h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3030">
                    <G data-name="Group 3029">
                      <Path
                        data-name="Path 9265"
                        d="M6.571 11.681h-.85a.2.2 0 100 .4h.85a.2.2 0 000-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                </Svg>
              }
            />
            <InputBox
              variant="primary"
              placeholder="Area"
              secureTextEntry={true}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12.292}
                  height={12.717}>
                  <G data-name="Group 3018">
                    <G data-name="Group 3017">
                      <Path
                        data-name="Path 9259"
                        d="M12.205 4.069L6.258.034a.2.2 0 00-.224 0L.087 4.069A.2.2 0 000 4.234v8.283a.2.2 0 00.2.2h11.893a.2.2 0 00.2-.2V4.234a.2.2 0 00-.088-.165zm-7.532 8.249h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.075h.451v2.15zM2.097 5.1v-.454h8.1V5.1zm1.274 5.947v-.876h.451v.876zm1.3-1.274H2.522V7.619h.451v1.076a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2V7.619h.451zM3.372 8.5v-.881h.451V8.5zm3.85 3.823h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.08h.451v2.15zm-1.3-1.274v-.876h.451v.876zm5.974 1.274h-1.728V8.057a.2.2 0 00-.4 0v4.261h-2.15V9.969a.2.2 0 00-.2-.2h-2.35V7.42a.2.2 0 00-.2-.2h-2.35V5.5h7.248v1.708a.2.2 0 10.4 0V5.5h.226a.2.2 0 00.2-.2v-.85a.2.2 0 00-.2-.2h-8.5a.2.2 0 00-.2.2v.85a.2.2 0 00.2.2h.226v6.823H.398V4.34L6.149.439l5.748 3.9v7.979z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3020">
                    <G data-name="Group 3019">
                      <Path
                        data-name="Path 9260"
                        d="M6.995 1.699h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3022">
                    <G data-name="Group 3021">
                      <Path
                        data-name="Path 9261"
                        d="M6.995 2.548h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3024">
                    <G data-name="Group 3023">
                      <Path
                        data-name="Path 9262"
                        d="M6.995 3.398h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3026">
                    <G data-name="Group 3025">
                      <Path
                        data-name="Path 9263"
                        d="M4.023 9.133h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3028">
                    <G data-name="Group 3027">
                      <Path
                        data-name="Path 9264"
                        d="M4.023 11.681h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3030">
                    <G data-name="Group 3029">
                      <Path
                        data-name="Path 9265"
                        d="M6.571 11.681h-.85a.2.2 0 100 .4h.85a.2.2 0 000-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                </Svg>
              }
            />
            <InputBox
              variant="primary"
              placeholder="Volume"
              secureTextEntry={true}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12.292}
                  height={12.717}>
                  <G data-name="Group 3018">
                    <G data-name="Group 3017">
                      <Path
                        data-name="Path 9259"
                        d="M12.205 4.069L6.258.034a.2.2 0 00-.224 0L.087 4.069A.2.2 0 000 4.234v8.283a.2.2 0 00.2.2h11.893a.2.2 0 00.2-.2V4.234a.2.2 0 00-.088-.165zm-7.532 8.249h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.075h.451v2.15zM2.097 5.1v-.454h8.1V5.1zm1.274 5.947v-.876h.451v.876zm1.3-1.274H2.522V7.619h.451v1.076a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2V7.619h.451zM3.372 8.5v-.881h.451V8.5zm3.85 3.823h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.08h.451v2.15zm-1.3-1.274v-.876h.451v.876zm5.974 1.274h-1.728V8.057a.2.2 0 00-.4 0v4.261h-2.15V9.969a.2.2 0 00-.2-.2h-2.35V7.42a.2.2 0 00-.2-.2h-2.35V5.5h7.248v1.708a.2.2 0 10.4 0V5.5h.226a.2.2 0 00.2-.2v-.85a.2.2 0 00-.2-.2h-8.5a.2.2 0 00-.2.2v.85a.2.2 0 00.2.2h.226v6.823H.398V4.34L6.149.439l5.748 3.9v7.979z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3020">
                    <G data-name="Group 3019">
                      <Path
                        data-name="Path 9260"
                        d="M6.995 1.699h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3022">
                    <G data-name="Group 3021">
                      <Path
                        data-name="Path 9261"
                        d="M6.995 2.548h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3024">
                    <G data-name="Group 3023">
                      <Path
                        data-name="Path 9262"
                        d="M6.995 3.398h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3026">
                    <G data-name="Group 3025">
                      <Path
                        data-name="Path 9263"
                        d="M4.023 9.133h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3028">
                    <G data-name="Group 3027">
                      <Path
                        data-name="Path 9264"
                        d="M4.023 11.681h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3030">
                    <G data-name="Group 3029">
                      <Path
                        data-name="Path 9265"
                        d="M6.571 11.681h-.85a.2.2 0 100 .4h.85a.2.2 0 000-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                </Svg>
              }
            />
            <InputBox
              variant="primary"
              placeholder="Length"
              secureTextEntry={true}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12.292}
                  height={12.717}>
                  <G data-name="Group 3018">
                    <G data-name="Group 3017">
                      <Path
                        data-name="Path 9259"
                        d="M12.205 4.069L6.258.034a.2.2 0 00-.224 0L.087 4.069A.2.2 0 000 4.234v8.283a.2.2 0 00.2.2h11.893a.2.2 0 00.2-.2V4.234a.2.2 0 00-.088-.165zm-7.532 8.249h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.075h.451v2.15zM2.097 5.1v-.454h8.1V5.1zm1.274 5.947v-.876h.451v.876zm1.3-1.274H2.522V7.619h.451v1.076a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2V7.619h.451zM3.372 8.5v-.881h.451V8.5zm3.85 3.823h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.08h.451v2.15zm-1.3-1.274v-.876h.451v.876zm5.974 1.274h-1.728V8.057a.2.2 0 00-.4 0v4.261h-2.15V9.969a.2.2 0 00-.2-.2h-2.35V7.42a.2.2 0 00-.2-.2h-2.35V5.5h7.248v1.708a.2.2 0 10.4 0V5.5h.226a.2.2 0 00.2-.2v-.85a.2.2 0 00-.2-.2h-8.5a.2.2 0 00-.2.2v.85a.2.2 0 00.2.2h.226v6.823H.398V4.34L6.149.439l5.748 3.9v7.979z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3020">
                    <G data-name="Group 3019">
                      <Path
                        data-name="Path 9260"
                        d="M6.995 1.699h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3022">
                    <G data-name="Group 3021">
                      <Path
                        data-name="Path 9261"
                        d="M6.995 2.548h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3024">
                    <G data-name="Group 3023">
                      <Path
                        data-name="Path 9262"
                        d="M6.995 3.398h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3026">
                    <G data-name="Group 3025">
                      <Path
                        data-name="Path 9263"
                        d="M4.023 9.133h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3028">
                    <G data-name="Group 3027">
                      <Path
                        data-name="Path 9264"
                        d="M4.023 11.681h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3030">
                    <G data-name="Group 3029">
                      <Path
                        data-name="Path 9265"
                        d="M6.571 11.681h-.85a.2.2 0 100 .4h.85a.2.2 0 000-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                </Svg>
              }
            />
            <InputBox
              variant="primary"
              placeholder="Price Per Day"
              secureTextEntry={true}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12.292}
                  height={12.717}>
                  <G data-name="Group 3018">
                    <G data-name="Group 3017">
                      <Path
                        data-name="Path 9259"
                        d="M12.205 4.069L6.258.034a.2.2 0 00-.224 0L.087 4.069A.2.2 0 000 4.234v8.283a.2.2 0 00.2.2h11.893a.2.2 0 00.2-.2V4.234a.2.2 0 00-.088-.165zm-7.532 8.249h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.075h.451v2.15zM2.097 5.1v-.454h8.1V5.1zm1.274 5.947v-.876h.451v.876zm1.3-1.274H2.522V7.619h.451v1.076a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2V7.619h.451zM3.372 8.5v-.881h.451V8.5zm3.85 3.823h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.08h.451v2.15zm-1.3-1.274v-.876h.451v.876zm5.974 1.274h-1.728V8.057a.2.2 0 00-.4 0v4.261h-2.15V9.969a.2.2 0 00-.2-.2h-2.35V7.42a.2.2 0 00-.2-.2h-2.35V5.5h7.248v1.708a.2.2 0 10.4 0V5.5h.226a.2.2 0 00.2-.2v-.85a.2.2 0 00-.2-.2h-8.5a.2.2 0 00-.2.2v.85a.2.2 0 00.2.2h.226v6.823H.398V4.34L6.149.439l5.748 3.9v7.979z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3020">
                    <G data-name="Group 3019">
                      <Path
                        data-name="Path 9260"
                        d="M6.995 1.699h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3022">
                    <G data-name="Group 3021">
                      <Path
                        data-name="Path 9261"
                        d="M6.995 2.548h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3024">
                    <G data-name="Group 3023">
                      <Path
                        data-name="Path 9262"
                        d="M6.995 3.398h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3026">
                    <G data-name="Group 3025">
                      <Path
                        data-name="Path 9263"
                        d="M4.023 9.133h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3028">
                    <G data-name="Group 3027">
                      <Path
                        data-name="Path 9264"
                        d="M4.023 11.681h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3030">
                    <G data-name="Group 3029">
                      <Path
                        data-name="Path 9265"
                        d="M6.571 11.681h-.85a.2.2 0 100 .4h.85a.2.2 0 000-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                </Svg>
              }
            />
            <InputBox
              variant="primary"
              placeholder="Price Per Unit"
              secureTextEntry={true}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12.292}
                  height={12.717}>
                  <G data-name="Group 3018">
                    <G data-name="Group 3017">
                      <Path
                        data-name="Path 9259"
                        d="M12.205 4.069L6.258.034a.2.2 0 00-.224 0L.087 4.069A.2.2 0 000 4.234v8.283a.2.2 0 00.2.2h11.893a.2.2 0 00.2-.2V4.234a.2.2 0 00-.088-.165zm-7.532 8.249h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.075h.451v2.15zM2.097 5.1v-.454h8.1V5.1zm1.274 5.947v-.876h.451v.876zm1.3-1.274H2.522V7.619h.451v1.076a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2V7.619h.451zM3.372 8.5v-.881h.451V8.5zm3.85 3.823h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.08h.451v2.15zm-1.3-1.274v-.876h.451v.876zm5.974 1.274h-1.728V8.057a.2.2 0 00-.4 0v4.261h-2.15V9.969a.2.2 0 00-.2-.2h-2.35V7.42a.2.2 0 00-.2-.2h-2.35V5.5h7.248v1.708a.2.2 0 10.4 0V5.5h.226a.2.2 0 00.2-.2v-.85a.2.2 0 00-.2-.2h-8.5a.2.2 0 00-.2.2v.85a.2.2 0 00.2.2h.226v6.823H.398V4.34L6.149.439l5.748 3.9v7.979z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3020">
                    <G data-name="Group 3019">
                      <Path
                        data-name="Path 9260"
                        d="M6.995 1.699h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3022">
                    <G data-name="Group 3021">
                      <Path
                        data-name="Path 9261"
                        d="M6.995 2.548h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3024">
                    <G data-name="Group 3023">
                      <Path
                        data-name="Path 9262"
                        d="M6.995 3.398h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3026">
                    <G data-name="Group 3025">
                      <Path
                        data-name="Path 9263"
                        d="M4.023 9.133h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3028">
                    <G data-name="Group 3027">
                      <Path
                        data-name="Path 9264"
                        d="M4.023 11.681h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3030">
                    <G data-name="Group 3029">
                      <Path
                        data-name="Path 9265"
                        d="M6.571 11.681h-.85a.2.2 0 100 .4h.85a.2.2 0 000-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                </Svg>
              }
            />
            <InputBox
              variant="primary"
              placeholder="Address"
              secureTextEntry={true}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12.292}
                  height={12.717}>
                  <G data-name="Group 3018">
                    <G data-name="Group 3017">
                      <Path
                        data-name="Path 9259"
                        d="M12.205 4.069L6.258.034a.2.2 0 00-.224 0L.087 4.069A.2.2 0 000 4.234v8.283a.2.2 0 00.2.2h11.893a.2.2 0 00.2-.2V4.234a.2.2 0 00-.088-.165zm-7.532 8.249h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.075h.451v2.15zM2.097 5.1v-.454h8.1V5.1zm1.274 5.947v-.876h.451v.876zm1.3-1.274H2.522V7.619h.451v1.076a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2V7.619h.451zM3.372 8.5v-.881h.451V8.5zm3.85 3.823h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.08h.451v2.15zm-1.3-1.274v-.876h.451v.876zm5.974 1.274h-1.728V8.057a.2.2 0 00-.4 0v4.261h-2.15V9.969a.2.2 0 00-.2-.2h-2.35V7.42a.2.2 0 00-.2-.2h-2.35V5.5h7.248v1.708a.2.2 0 10.4 0V5.5h.226a.2.2 0 00.2-.2v-.85a.2.2 0 00-.2-.2h-8.5a.2.2 0 00-.2.2v.85a.2.2 0 00.2.2h.226v6.823H.398V4.34L6.149.439l5.748 3.9v7.979z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3020">
                    <G data-name="Group 3019">
                      <Path
                        data-name="Path 9260"
                        d="M6.995 1.699h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3022">
                    <G data-name="Group 3021">
                      <Path
                        data-name="Path 9261"
                        d="M6.995 2.548h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3024">
                    <G data-name="Group 3023">
                      <Path
                        data-name="Path 9262"
                        d="M6.995 3.398h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3026">
                    <G data-name="Group 3025">
                      <Path
                        data-name="Path 9263"
                        d="M4.023 9.133h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3028">
                    <G data-name="Group 3027">
                      <Path
                        data-name="Path 9264"
                        d="M4.023 11.681h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3030">
                    <G data-name="Group 3029">
                      <Path
                        data-name="Path 9265"
                        d="M6.571 11.681h-.85a.2.2 0 100 .4h.85a.2.2 0 000-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                </Svg>
              }
            />
            <InputBox
              variant="primary"
              placeholder="Description"
              secureTextEntry={true}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12.292}
                  height={12.717}>
                  <G data-name="Group 3018">
                    <G data-name="Group 3017">
                      <Path
                        data-name="Path 9259"
                        d="M12.205 4.069L6.258.034a.2.2 0 00-.224 0L.087 4.069A.2.2 0 000 4.234v8.283a.2.2 0 00.2.2h11.893a.2.2 0 00.2-.2V4.234a.2.2 0 00-.088-.165zm-7.532 8.249h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.075h.451v2.15zM2.097 5.1v-.454h8.1V5.1zm1.274 5.947v-.876h.451v.876zm1.3-1.274H2.522V7.619h.451v1.076a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2V7.619h.451zM3.372 8.5v-.881h.451V8.5zm3.85 3.823h-2.15v-2.15h.451v1.075a.2.2 0 00.2.2h.85a.2.2 0 00.2-.2v-1.08h.451v2.15zm-1.3-1.274v-.876h.451v.876zm5.974 1.274h-1.728V8.057a.2.2 0 00-.4 0v4.261h-2.15V9.969a.2.2 0 00-.2-.2h-2.35V7.42a.2.2 0 00-.2-.2h-2.35V5.5h7.248v1.708a.2.2 0 10.4 0V5.5h.226a.2.2 0 00.2-.2v-.85a.2.2 0 00-.2-.2h-8.5a.2.2 0 00-.2.2v.85a.2.2 0 00.2.2h.226v6.823H.398V4.34L6.149.439l5.748 3.9v7.979z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3020">
                    <G data-name="Group 3019">
                      <Path
                        data-name="Path 9260"
                        d="M6.995 1.699h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3022">
                    <G data-name="Group 3021">
                      <Path
                        data-name="Path 9261"
                        d="M6.995 2.548h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3024">
                    <G data-name="Group 3023">
                      <Path
                        data-name="Path 9262"
                        d="M6.995 3.398h-1.7a.2.2 0 100 .4h1.7a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3026">
                    <G data-name="Group 3025">
                      <Path
                        data-name="Path 9263"
                        d="M4.023 9.133h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3028">
                    <G data-name="Group 3027">
                      <Path
                        data-name="Path 9264"
                        d="M4.023 11.681h-.85a.2.2 0 000 .4h.85a.2.2 0 100-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                  <G data-name="Group 3030">
                    <G data-name="Group 3029">
                      <Path
                        data-name="Path 9265"
                        d="M6.571 11.681h-.85a.2.2 0 100 .4h.85a.2.2 0 000-.4z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                </Svg>
              }
            />
          </View>
        </ScrollView>
         <View style={{paddingHorizontal:18}}><Buttons
            placeholder="Next"
            onPress={() => {
              navigation.navigate('AddWarehouseMoreInfo');
            }}
          /></View>
      </ImageBackground>
    );
  }
}
