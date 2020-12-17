import React from 'react';
import PropTypes from 'prop-types';
/**
 *
 * @param {function} reducer
 * @param {object} initialState
 * @param {function} actionCreator
 *
 * @returns {Array} [provider, useDispatch, useState]
 */
export default function createStore(reducer, initialState, actionCreator) {
  if (!reducer) {
    throw new Error('CreateStore ~ Reducer should not be empty');
  }
  if (typeof reducer !== 'function') {
    throw new Error(`CreateStore ~ Reducer should be a function. but provided ${typeof reducer}`);
  }

  if (!initialState) {
    throw new Error('CreateStore ~ InitialState should not be empty');
  }
  if (typeof initialState !== 'object') {
    throw new Error(
      `CreateStore ~ InitialState should be a Object. but provided ${typeof initialState}`
    );
  }
  if (!actionCreator) {
    throw new Error('CreateStore ~ ActionCreators should not be empty');
  }
  if (typeof actionCreator !== 'function') {
    throw new Error(
      `CreateStore ~ ActionCreators should be a function. but provided ${typeof actionCreator}`
    );
  }
  /*
    Creating Contexts for store and dispatch. So it can be used separately. 
  */
  const dispatchContext = React.createContext();
  const storeContext = React.createContext();

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = React.useReducer(reducer, initialState);
    const actions = actionCreator(store, dispatch);

    return (
      <dispatchContext.Provider
        value={{
          dispatch,
          actions,
        }}
      >
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    );
  };
  StoreProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  /**
   * Exposing custom hooks acts as wrapper around useContext Hooks
   */
  function useDispatch() {
    return React.useContext(dispatchContext);
  }
  function useStore() {
    return React.useContext(storeContext);
  }

  return [StoreProvider, useDispatch, useStore];
}
