import { combineReducers } from 'redux';
import foodReducer from './FoodReducer';
import userReducer from './SingReducer';
import panierReducer from './PanierReducer'

const allReducers = combineReducers({
  foods: foodReducer , user: userReducer , panier: panierReducer
});

export default allReducers;