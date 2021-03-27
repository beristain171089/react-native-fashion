import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Routes } from '../components/Navigation';

import Onboarding, { assets as onboardingAssets } from './Onboarding';
import Welcome, { assets as welcomeAssets } from './Welcome';
import Login from './Login';

export const assets = [...onboardingAssets, ...welcomeAssets]

const AuthenticatonStack = createStackNavigator<Routes>();

export const AuthenticatonNavigator = () => {
    return (
        <AuthenticatonStack.Navigator headerMode="none">
            <AuthenticatonStack.Screen
                name="OnBoarding"
                component={Onboarding}
            />
            <AuthenticatonStack.Screen
                name="Welcome"
                component={Welcome}
            />
            <AuthenticatonStack.Screen
                name="Login"
                component={Login}
            />
        </AuthenticatonStack.Navigator>
    );
};