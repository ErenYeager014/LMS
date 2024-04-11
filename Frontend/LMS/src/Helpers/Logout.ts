import { useDispatch } from "react-redux";
import { logout as Setlogot } from "../Global/Slice";
export const logout = () => {
  const dispatch = useDispatch();
  return dispatch(Setlogot());
};
