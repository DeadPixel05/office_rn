import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('userid');
  dispatch({ type: 'signout' });
  // navigate("loginFlow")
};

export const { Provider, Context } = createDataContext(authReducer, {
  clearErrorMessage,
});
