import { createStore } from "redux";
import RootData from "./reducer/index";
const store = createStore(RootData);
export default store;