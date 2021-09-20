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
  AppRegistry,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';
import Header from '../Components/Header';
import WarehouseMainCard from '../Components/WarehouseMainCard';
import ImageZoom from 'react-native-image-pan-zoom';
import Reviews from '../Components/Reviews';

function AreaCard({area, text, borderWidth}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '22%',
        borderRightWidth: borderWidth,
        paddingRight: 22,
        borderColor: SECONDARY,
      }}>
      <Text style={{color: TEXT_COLOR}}>{area}</Text>
      <Text style={{color: SECONDARY}}>{text}</Text>
    </View>
  );
}
function CategoriesShowCase({text}) {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: PRIMARY,
        width: 80,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 8,
        marginRight: 8,
      }}>
      <Text style={{color: PRIMARY}}>{text}</Text>
    </View>
  );
}

function EditAbleLine({heading}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          fontSize: 14,
          color: PRIMARY,
          marginTop: 8,
        }}>
        {heading}
      </Text>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Svg xmlns="http://www.w3.org/2000/svg" width={18.447} height={18.354}>
          <Path
            data-name="Path 1393"
            d="M17.026 11.516a.459.459 0 00-.459.459v4.079a1.38 1.38 0 01-1.378 1.378H2.3a1.38 1.38 0 01-1.381-1.375V4.085A1.38 1.38 0 012.3 2.707h4.076a.46.46 0 100-.919H2.3a2.3 2.3 0 00-2.3 2.3v11.969a2.3 2.3 0 002.3 2.3h12.888a2.3 2.3 0 002.3-2.3v-4.079a.459.459 0 00-.462-.462zm0 0"
            fill="#4571b0"
          />
          <Path
            data-name="Path 1394"
            d="M17.303.605a2.067 2.067 0 00-2.924 0l-8.2 8.2a.459.459 0 00-.118.2l-1.078 3.891a.459.459 0 00.565.565l3.891-1.078a.459.459 0 00.2-.118l8.2-8.2a2.07 2.07 0 000-2.924zM7.18 9.1l6.708-6.708 2.163 2.163-6.708 6.708zm-.432.867l1.728 1.729-2.391.662zm10.444-6.548l-.487.487-2.164-2.167.487-.487a1.148 1.148 0 011.624 0l.539.539a1.15 1.15 0 01.001 1.628zm0 0"
            fill="#4571b0"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}

function EditAbleLineBold({heading}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 6,
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{heading}</Text>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Svg xmlns="http://www.w3.org/2000/svg" width={18.447} height={18.354}>
          <Path
            data-name="Path 1393"
            d="M17.026 11.516a.459.459 0 00-.459.459v4.079a1.38 1.38 0 01-1.378 1.378H2.3a1.38 1.38 0 01-1.381-1.375V4.085A1.38 1.38 0 012.3 2.707h4.076a.46.46 0 100-.919H2.3a2.3 2.3 0 00-2.3 2.3v11.969a2.3 2.3 0 002.3 2.3h12.888a2.3 2.3 0 002.3-2.3v-4.079a.459.459 0 00-.462-.462zm0 0"
            fill="#4571b0"
          />
          <Path
            data-name="Path 1394"
            d="M17.303.605a2.067 2.067 0 00-2.924 0l-8.2 8.2a.459.459 0 00-.118.2l-1.078 3.891a.459.459 0 00.565.565l3.891-1.078a.459.459 0 00.2-.118l8.2-8.2a2.07 2.07 0 000-2.924zM7.18 9.1l6.708-6.708 2.163 2.163-6.708 6.708zm-.432.867l1.728 1.729-2.391.662zm10.444-6.548l-.487.487-2.164-2.167.487-.487a1.148 1.148 0 011.624 0l.539.539a1.15 1.15 0 01.001 1.628zm0 0"
            fill="#4571b0"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}
export default class WarehouseCardDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      galleryImage: require('../Assets/galleryPic.png'),
    };
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <View
        style={{
          backgroundColor: '#F8F8F8',
          flex: 1,
        }}>
        <Header
          heading="Creatv Hub"
          onPress={() => {
            navigation.navigate('Filters');
          }}
        />

        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <View style={{flex: 1, paddingBottom: 50}}>
            <WarehouseMainCard />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: WHITE,
                width: 30,
                height: 30,
                borderBottomLeftRadius: 18,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={18.447}
                height={18.354}>
                <Path
                  data-name="Path 1393"
                  d="M17.026 11.516a.459.459 0 00-.459.459v4.079a1.38 1.38 0 01-1.378 1.378H2.3a1.38 1.38 0 01-1.381-1.375V4.085A1.38 1.38 0 012.3 2.707h4.076a.46.46 0 100-.919H2.3a2.3 2.3 0 00-2.3 2.3v11.969a2.3 2.3 0 002.3 2.3h12.888a2.3 2.3 0 002.3-2.3v-4.079a.459.459 0 00-.462-.462zm0 0"
                  fill="#4571b0"
                />
                <Path
                  data-name="Path 1394"
                  d="M17.303.605a2.067 2.067 0 00-2.924 0l-8.2 8.2a.459.459 0 00-.118.2l-1.078 3.891a.459.459 0 00.565.565l3.891-1.078a.459.459 0 00.2-.118l8.2-8.2a2.07 2.07 0 000-2.924zM7.18 9.1l6.708-6.708 2.163 2.163-6.708 6.708zm-.432.867l1.728 1.729-2.391.662zm10.444-6.548l-.487.487-2.164-2.167.487-.487a1.148 1.148 0 011.624 0l.539.539a1.15 1.15 0 01.001 1.628zm0 0"
                  fill="#4571b0"
                />
              </Svg>
            </TouchableOpacity>
            <EditAbleLineBold heading="Discription" />
            <Text style={{fontSize: 12, color: SECONDARY}}>
              Lorem ipsum, in graphical and textual context, refers to filler
              text that is placed.Lorem ipsum, in graphical and textual context.
            </Text>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: -16,
                marginRight: 26,
              }}>
              <Text></Text>
              <Text style={{color: PRIMARY, fontSize: 12}}>See more</Text>
            </TouchableOpacity>

            <EditAbleLine heading="Owner" />
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 70,
                borderRadius: 8,
                backgroundColor: WHITE,
                marginVertical: 8,
                padding: 12,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../Assets/userPic.png')}
                  style={{width: 50, height: 50, marginRight: 12}}
                />
                <View style={{display: 'flex', flexDirection: 'column'}}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: TEXT_COLOR,
                      fontWeight: 'bold',
                    }}>
                    Asim Rasheed
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        color: SECONDARY,
                        fontSize: 12,
                        marginRight: 30,
                      }}>
                      adam@gmail.com
                    </Text>
                    <Text style={{color: SECONDARY, fontSize: 12}}>
                      +92303-7687302
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <EditAbleLine heading="Representative" />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RepresentativeProfile');
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 70,
                borderRadius: 8,
                backgroundColor: WHITE,
                marginVertical: 8,
                padding: 12,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../Assets/userPic.png')}
                  style={{width: 50, height: 50, marginRight: 12}}
                />
                <View style={{display: 'flex', flexDirection: 'column'}}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: TEXT_COLOR,
                      fontWeight: 'bold',
                    }}>
                    Asim Rasheed
                  </Text>
                  <Text style={{color: SECONDARY}}>Lahore</Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Message');
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: PRIMARY,
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16.5}
                  height={16.5}
                  viewBox="0 0 16.5 16.5">
                  <Path
                    data-name="Icon material-message"
                    d="M14.85 0H1.65A1.648 1.648 0 00.008 1.65L0 16.5l3.3-3.3h11.55a1.655 1.655 0 001.65-1.65v-9.9A1.655 1.655 0 0014.85 0zM13.2 9.9H3.3V8.25h9.9zm0-2.475H3.3v-1.65h9.9zm0-2.475H3.3V3.3h9.9z"
                    fill="#fff"
                  />
                </Svg>
              </TouchableOpacity>
            </TouchableOpacity>
            <EditAbleLineBold heading="Gallery" />
            <View>
              <ImageZoom
                cropWidth="100%"
                cropHeight={300}
                imageWidth={300}
                imageHeight={270}>
                <Image
                  source={this.state.galleryImage}
                  style={{width: '100%', height: '100%', borderRadius: 10}}
                />
              </ImageZoom>
              <ScrollView horizontal={true}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      galleryImage: require('../Assets/galleryPic.png'),
                    });
                  }}
                  style={{width: 80, height: 80, marginRight: 15}}>
                  <Image
                    source={require('../Assets/galleryPic.png')}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      galleryImage: require('../Assets/warehouse__bg.png'),
                    });
                  }}
                  style={{width: 80, height: 80, marginRight: 15}}>
                  <Image
                    source={require('../Assets/warehouse__bg.png')}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{width: 80, height: 80, marginRight: 15}}>
                  <Image
                    source={require('../Assets/galleryPic.png')}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{width: 80, height: 80, marginRight: 15}}>
                  <Image
                    source={require('../Assets/galleryPic.png')}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{width: 80, height: 80, marginRight: 15}}>
                  <Image
                    source={require('../Assets/galleryPic.png')}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                  />
                </TouchableOpacity>
              </ScrollView>
              <EditAbleLineBold heading="Area" />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 12,
                }}>
                <AreaCard area="5ft" text="length" borderWidth={1} />
                <AreaCard area="2ft" text="Volume" borderWidth={1} />
                <AreaCard area="7ft" text="Area" borderWidth={1} />
                <AreaCard area="5ft" text="Available" />
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 12,
                }}>
                <AreaCard area="2ft" text="Rating" borderWidth={1} />
              </View>
              <View
                style={{
                  width: '100%',
                  height: 50,
                  backgroundColor: WHITE,
                  paddingHorizontal: 16,
                  borderRadius: 8,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight: 'bold'}}>Minimum Space Required</Text>
                <Text style={{color: PRIMARY}}>9ft</Text>
              </View>
              <EditAbleLineBold heading="Categories" />
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <CategoriesShowCase text="Food" />
                <CategoriesShowCase text="Food" />
                <CategoriesShowCase text="Food" />
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <CategoriesShowCase text="Food" />
                <CategoriesShowCase text="Food" />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: TEXT_COLOR,
                  marginTop: 8,
                  fontWeight: 'bold',
                  marginVertical: 12,
                }}>
                Reviews
              </Text>
              <Reviews />
              <Reviews />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginVertical: 20,
                }}>
                <Text
                  style={{fontSize: 22, fontWeight: 'bold', color: TEXT_COLOR}}>
                  Availablity
                </Text>
                <Text style={{fontSize: 12, color: DISABLE}}>
                  Aug 7- Aug 12
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AdvanceBooked');
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
                  marginVertical: 24,
                }}>
                <Text style={{color: '#777777'}}>Advance Bookings</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: PRIMARY,
            width: '100%',
            height: 60,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 26,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: WHITE}}>
              $50/
            </Text>
            <Text style={{fontSize: 12, color: WHITE}}>per day</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Warehouses');
            }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              justifyContent: 'center',
              width: 95,
              height: 35,
              borderRadius: 8,
              backgroundColor: WHITE,
            }}>
            <Text style={{color: '#777777', fontSize: 12}}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
