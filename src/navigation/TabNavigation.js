import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons'
import Home from '../screens/Home'


const Tab = createBottomTabNavigator()

const TabNavigation = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false
            }
            }>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="home" size={24} color={focused ? "black" : '#D8D8D8'} />
                    ),
                }}
            />
            <Tab.Screen
                name='Add'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name="post-add" size={24} color={focused ? "black" : '#D8D8D8'} />
                    ),
                    tabBarLabel: 'Home'

                }}
            />
            <Tab.Screen
                name='List'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name="list" size={24} color={focused ? "black" : '#D8D8D8'} />
                    ),
                    tabBarLabel: 'Home'

                }}
            />
            <Tab.Screen
                name='Notification'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name="notifications-none" size={24} color={focused ? "black" : '#D8D8D8'} />
                    ),
                    tabBarLabel: 'Home'

                }}
            />


        </Tab.Navigator>
    )
}
export default TabNavigation