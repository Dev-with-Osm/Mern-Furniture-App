import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/user/userSlice";

export default function FbOAuth() {
  const dispatch = useDispatch();

  const handleFaceBookClick = async () => {
    try {
      const fbAuthProvider = new FacebookAuthProvider();
      const auth = getAuth(app);
      const fbAuth = await signInWithPopup(auth, fbAuthProvider);
      console.log(fbAuth);
    } catch (error) {
      console.log("couls not sign in with faceBook", error);
    }
  };
  return (
    <button
      onClick={handleFaceBookClick}
      type="button"
      className="flex items-center border-2 px-7 md:px-10 py-2 rounded-lg shadow-md font-semibold gap-2"
    >
      <FaFacebookF className="text-lg" />
      FaceBook
    </button>
  );
}
