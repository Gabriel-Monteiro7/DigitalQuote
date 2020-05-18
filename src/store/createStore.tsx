import { createStore, compose, applyMiddleware } from "redux";

export default (reducers:any, middlewares:any) => {
  const enhancer = __DEV__
    ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
    : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
