import { createStore } from "redux";
import fileReducer from "./reducers/fileReducer";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(fileReducer, devTools);

export default store;