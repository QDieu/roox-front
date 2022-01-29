import React from "react";
import { fetchUser } from "../../../features/redux/users-reducer";
import { UsersPage } from "../../../shared/ui/core/pages";
import { useDispatch, useSelector } from "react-redux";
import { TAppState } from "../../../features/redux/store";
import { TUser } from "../../../shared/types/User";
import { useNavigate } from "react-router";
import { SpinnerCircular } from "spinners-react";

export const UserPageConnector = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: TAppState) => state.usersPage);
  const { isFetching } = useSelector((state: TAppState) => state.usersPage);
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const onClickInfo = (user: TUser) => {
    navigate("/user", { state: { currentUser: user } });
  };

  return isFetching ? (
    <SpinnerCircular
      color={"#4b51ef"}
      style={{ marginLeft: "50%", marginTop: "15%" }}
      size={200}
    />
  ) : (
    <UsersPage users={users} onClickInfo={onClickInfo} />
  );
};
