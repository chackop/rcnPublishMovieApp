/* @flow */

import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import MoviesList from '../Components/MoviesList';
import MovieDetail from '../Components/MovieDetail';

const RootNavigator = createMaterialTopTabNavigator({
  MoviesList: {
    screen: MoviesList,
    navigationOptions: {
      headerTitle: 'Movies',
      headerTitleStyle: {
        fontFamily: 'Avenir Next',
      },
    },
  },
  MovieDetail: {
    screen: MovieDetail,
    navigationOptions: {
      headerTitleStyle: {
        fontFamily: 'Avenir Next',
      },
    },
  },
});

export default createAppContainer(RootNavigator);
