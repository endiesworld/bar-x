import { combineReducers } from "redux";
import {persistReducer} from "redux-persist" ;
import storage from "redux-persist/lib/storage" ;

import deviceTypeReducer from "./deviceType/deviceType.reducer";
import userReducer from "./user/user.reducer";
import addItemToLPOReducer from "./lpo/addItemToLPO.reducer" ;

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
    whitelist: [], // add reducers you want to persist.
}

const rootReducer = combineReducers({
  deviceType: deviceTypeReducer,
  user: userReducer,
  addItemToLPO: addItemToLPOReducer,
});

export default persistReducer( persistConfig, rootReducer);
