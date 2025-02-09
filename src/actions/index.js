import { auth,provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { SET_USER } from "./actionType";

export const setUser=(payload)=>({
  type:SET_USER,
  user:payload
})
export function signInAPI() {
    return (dispatch) => {
      signInWithPopup(auth, provider)
        .then((result) => {
          dispatch(setUser(result.user))
        })
        .catch((error) => {
          alert(error.message);
        });
    };
}