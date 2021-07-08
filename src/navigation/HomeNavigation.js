import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons'

import Home from '../screens/Home'

const Stack = createStackNavigator()

const HomeNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#7659FB',
                        height: 100,
                    },
                    headerLeft: (props) =>
                    (
                        <FontAwesome name="home" size={24} color="black" />

                    )

                }}
            />
        </Stack.Navigator>
    )
}
export default HomeNavigation