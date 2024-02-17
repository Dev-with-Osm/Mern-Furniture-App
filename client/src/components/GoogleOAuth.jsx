import { FcGoogle } from "react-icons/fc";
import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoodleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      // console.log(result);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(loginSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("couls not sign in with google", error);
    }
  };
  return (
    <button
      onClick={handleGoodleClick}
      type="button"
      className="flex items-center border-2 px-7 md:px-10 py-2 rounded-lg shadow-md font-semibold gap-2"
    >
      <FcGoogle className="text-xl" />
      Google
    </button>
  );
}
