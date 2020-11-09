import { combineReducers } from "redux";
import deviceTypeReducer from "./deviceType/deviceType.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  deviceType: deviceTypeReducer,
  user: userReducer,
});

export default rootReducer;
