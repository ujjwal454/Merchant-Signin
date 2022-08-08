import * as types from "../constant";
import auth from "../../Firebase/firebase-config";

export const removeError = () => {
  return {
    type: types.REMOVE_ERRO,
  };
};

export const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: user,
  };
};
const registerStart = () => {
  return {
    type: types.REGISTER_START,
  };
};

const registerSuccess = (user) => {
  return {
    type: types.REGISTER_SUCCESS,
    payload: user,
  };
};

const registerFail = (err) => {
  return {
    type: types.REGISTER_FAIL,
    payload: err,
  };
};
const loginStart = () => {
  return {
    type: types.LOGIN_START,
  };
};
const loginSucess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user,
  };
};
const loginFail = (err) => {
  return {
    type: types.LOGIN_FAIL,
    payload: err,
  };
};
const logoutStart = () => {
  return {
    type: types.LOGOUT_START,
  };
};
const logoutSucess = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};
const logoutFail = (err) => {
  return {
    type: types.LOGOUT_FAIL,
    payload: err,
  };
};
export const registerInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(registerSuccess(user));
      })
      .catch((err) => {
        dispatch(registerFail(err));
      });
  };
};
export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSucess(user));
      })
      .catch((err) => {
        dispatch(loginFail(err));
      });
  };
};

export const signOutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((res) => dispatch(logoutSucess()))
      .catch((err) => {
        dispatch(logoutFail());
      });
  };
};
