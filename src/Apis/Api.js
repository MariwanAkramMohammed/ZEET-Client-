import {
  LoginStart,
  LoginSucceed,
  LoginError,
  RegisterStart,
  RegisterSucceed,
  RegisterError,
} from "../Redux/userSlice";
const URL = process.env.REACT_APP_API_URL;
export const Loginuser = async (dispatch, user) => {
  dispatch(LoginStart());
  await fetch(`${URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(async (response) => {
      if (response.ok) {
        return response.json();
      } else if (!response.ok) {
        const error = await response.json();
        // console.log(error, "    our error");
        dispatch(LoginError(error));
        throw new Error(error);
      }
    })
    .then((response) => {
      console.log(response, "       our data  ");
      dispatch(LoginSucceed(response));
    })
    .catch(async (error) => {
      console.log(error, "  error >");
    });
};

export const Register = async (dispatch, user) => {
  dispatch(RegisterStart());
  try {
    const res = await fetch(`${URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const userData = await res.json();
    dispatch(RegisterSucceed(userData));
  } catch (er) {
    dispatch(RegisterError());
  }
};

export const SendOrder = async (products, allPrice, user) => {
  const order = {
    userId: user._id,
    userEmail: user.email,
    products,
    allPrice,
  };

  try {
    const res = await fetch(`${URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${user.token}`,
      },
      body: JSON.stringify(order),
    });
    const data = await res.json();
    console.log(data, "             <done");
  } catch (er) {
    console.log(er);
  }
};
