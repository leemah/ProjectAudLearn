import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../redux/slices/userSlice";

const useUser = () => {
  const user = useSelector((state) => state.auth.user);

  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(logout());
  // };
  // console.log("Current user in hook:", user);
  // return {
  //   user,
  //   handleLogout,
  // };
};

export default useUser;
