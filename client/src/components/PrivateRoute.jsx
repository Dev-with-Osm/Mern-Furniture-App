import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SignIn from "../Pages/SignIn";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <SignIn />;
}
