import { createStackNavigator } from 'react-navigation-stack'
import User from './User'
import Admin from './Admin'

const AppNavigator = createStackNavigator({
  User: { screen: User },
  Admin: { screen: Admin },
});