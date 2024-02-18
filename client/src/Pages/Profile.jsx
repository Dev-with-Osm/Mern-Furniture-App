import { useEffect, useRef, useState } from "react";
import { CiAt } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineContactPage, MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import {
  deleteUserFailed,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserFailed,
  signOutUserStart,
  signOutUserSuccess,
  updateUserFailed,
  updateUserStart,
  updateUserSuccess,
} from "../redux/user/userSlice";

export default function Profile() {
  const fileRef = useRef(null);
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  console.log(formData);
  console.log(fileUploadError);
  console.log(filePerc);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        const progress =
          (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(updateUserFailed("You can only  update your own profile"));
        // console.log(data);
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailed("Something went wrong!"));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailed("Error deleting user"));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailed("Server error, please try again later"));
    }
  };

  const handleSignOutUser = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFailed("Error signing out"));
        return;
      }
      dispatch(signOutUserSuccess(data));
    } catch (error) {
      dispatch(signOutUserFailed(error.message));
    }
  };
  return (
    <div className="flex flex-col my-10 justify-center items-center p-2">
      <h1 className="flex items-center justify-center text-2xl gap-2 mb-4 font-medium">
        Edit your profile
        <MdOutlineEdit />
      </h1>
      <input
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        ref={fileRef}
        hidden
        accept="image/*"
      />

      <img
        onClick={() => fileRef.current.click()}
        src={formData?.avatar || currentUser.avatar}
        alt="avatar"
        className="w-24 h-24 object-cover cursor-pointer mb-4 rounded-full "
      />
      <p className="text-sm self-center mb-3">
        {fileUploadError ? (
          <span className="text-red-700">
            Error Image upload (image must be less than 2 mb)
          </span>
        ) : filePerc > 0 && filePerc < 100 ? (
          <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
        ) : filePerc === 100 ? (
          <span className="text-green-700">Image successfully uploaded!</span>
        ) : (
          ""
        )}
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-transparent border-2 border-black p-8 md:w-[450px] rounded-lg"
      >
        <div className="flex flex-col gap-4">
          <label className="text-black font-semibold">Username</label>
          <div className="inputForm border bg-transparent border-gray-300 rounded-xl flex items-center pl-4 h-[50px] transition duration-200 ease-in-out">
            <MdOutlineContactPage className="" />
            <input
              placeholder="Enter your name"
              className="input ml-4 bg-transparent outline-none border-none w-full h-full"
              type="text"
              id="username"
              defaultValue={currentUser.username}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-black font-semibold">Email</label>
          <div className="inputForm border bg-transparent border-gray-300 rounded-xl flex items-center pl-4 h-[50px] transition duration-200 ease-in-out">
            <CiAt className="" />
            <input
              placeholder="Enter your Email"
              className="input ml-4 bg-transparent outline-none border-none w-full h-full"
              type="email"
              id="email"
              defaultValue={currentUser.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-black font-semibold">Password</label>
          <div className="inputForm border border-gray-300 rounded-xl flex items-center pl-4 h-[50px] transition duration-200 ease-in-out">
            <IoLockClosedOutline />
            <input
              placeholder="Enter your Password"
              className="input ml-4 bg-transparent outline-none border-none w-full h-full"
              type="password"
              id="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          disabled={loading}
          className="bg-[#151717] w-full h-[50px] rounded-xl text-white disabled:cursor-not-allowed "
        >
          {loading ? "Loading..." : "Save Changes"}
        </button>

        <p className="text-center text-green-700 text-sm">
          {updateSuccess ? "Your profile successfuly updated " : ""}
        </p>
        <p className="text-center text-red-700 text-sm">{error ? error : ""}</p>
        <div className="flex justify-between items-center text-sm text-red-600">
          <button onClick={handleDeleteUser}>Delete Account</button>
          <button onClick={handleSignOutUser}>Logout</button>
        </div>
      </form>
    </div>
  );
}
