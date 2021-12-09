import { useAppDispatch, useAppSelector } from "../store";
import { useCallback } from "react";
import cookie from "js-cookie";
import { getMe } from "../store/thunk/user";
import { IUser } from "../types";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const token = cookie.get("token") as string;

  const user: any = useAppSelector(
    (state) => Object.values(state.user.entities)[0]
  );

  const getUser = useCallback(() => {
    if (!user) {
      dispatch(getMe(token));
    }
  }, [user]);

  return { user, getUser };
};

export default useAuth;
