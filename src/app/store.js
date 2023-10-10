import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./reducer";

const showcartstore = configureStore({reducer:cartreducer});

export default showcartstore;

