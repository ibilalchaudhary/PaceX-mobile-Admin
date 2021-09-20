import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from '../Screens/SignupScreen';
import SignInformationScreen from '../Screens/SignInformationScreen';
import SigninScreen from '../Screens/SigninScreen';
import UploadPicScreen from '../Screens/UploadPicScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import OTPScreen from '../Screens/OTPScreen';
import BottomTabDashboard from './BottomTabDashboard';
import FilterScreen from '../Screens/FilterScreen';
import WarehouseCardDetailsScreen from '../Screens/WarehouseCardDetailsScreen';
import RepresentativeProfileScreen from '../Screens/RepresentativeProfileScreen';
import EditProfileScreen from '../Screens/EditProfileScreen';
import OnboardingNavigation from '../Screens/OnboardingScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ChangePasswordScreen from '../Screens/ChangePasswordScreen';
import WarehousesScreen from '../Screens/WarehousesScreen';
import RepresentativesScreen from '../Screens/RepresentativesScreen';
import ManageRepresentativeScreen from '../Screens/ManageRepresentativeScreen';
import AddRepresentativeScreen from '../Screens/AddRepresentativeScreen';
import AddWarehouseScreen from '../Screens/AddWarehouseScreen';
import AddWarehouseMoreInfo from '../Screens/AddWarehouseMoreInfo';
import MessageScreen from '../Screens/MessageScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={OnboardingNavigation} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Information" component={SignInformationScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="UploadPic" component={UploadPicScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="BottomTabDashboard" component={BottomTabDashboard} />
      <Stack.Screen name="Filters" component={FilterScreen} />
      <Stack.Screen
        name="WarehouseCardDetails"
        component={WarehouseCardDetailsScreen}
      />
      <Stack.Screen
        name="RepresentativeProfile"
        component={RepresentativeProfileScreen}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="Warehouses" component={WarehousesScreen} />
      <Stack.Screen name="Representatives" component={RepresentativesScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen
        name="AddRepresentative"
        component={AddRepresentativeScreen}
      />
      <Stack.Screen
        name="ManageRepresentative"
        component={ManageRepresentativeScreen}
      />
      <Stack.Screen name="AddWarehouse" component={AddWarehouseScreen} />
      <Stack.Screen
        name="AddWarehouseMoreInfo"
        component={AddWarehouseMoreInfo}
      />
    </Stack.Navigator>
  );
}
