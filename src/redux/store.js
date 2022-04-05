import { createStore } from "redux";
import { tokenReducer } from "./reducers";

const store = createStore(tokenReducer, { value: '' });

export default store;
