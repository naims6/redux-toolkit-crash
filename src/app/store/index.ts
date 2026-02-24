import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../lws/features/counter/counterSlice";
import postReducer from "../../lws/features/posts/postSlice";
import taskReducer from "../../crud/taskSlice";
import { jsonPlaceholderApi } from "../../pedro/services/jsonPlaceholderApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postReducer,
    task: taskReducer,
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(jsonPlaceholderApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
