import { createStore } from "redux";
import Mainreducers from "./redux/MainReducers";
const Store=createStore(Mainreducers)
export default Store