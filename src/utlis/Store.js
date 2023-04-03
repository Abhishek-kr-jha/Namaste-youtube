import {configureStore} from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import SearchSlice from "./SearchSlice";

const Store = configureStore({
    reducer:{
        App:AppSlice,
        search:SearchSlice,
    },

});
export default Store;