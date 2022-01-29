import React from "react";
import styled from "styled-components";
import { TUser } from "../../../../types/User";
import { UserTable } from "../../molecules";

const Wrapper = styled.div`
  width: 60%;
`;

const Header = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
`;

const Footer = styled.div`
  text-align: right;
`;

type TProps = {
  users: Array<TUser>;
  onClickInfo: (user: TUser) => void;
};

export const Users: React.FC<TProps> = ({ users, onClickInfo }) => {
  return (
    <Wrapper>
      <Header>Список пользователей</Header>
      <UserTable users={users} onClickInfo={onClickInfo} />
      <Footer>{`Найдено ${users.length} пользователей`}</Footer>
    </Wrapper>
  );
};
