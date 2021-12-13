import React from "react";
import { CenterLayout } from "./Utility";
import { SignupOrLoginBtn } from "./styled";
import { useHome } from "../custom-hooks";

const Home = () => {
  const { isLoggedIn, buttons } = useHome();

  return (
    <CenterLayout>
      <h1>Stranger Things</h1>
      {isLoggedIn ? (
        <SignupOrLoginBtn to="/posts">View All Posts</SignupOrLoginBtn>
      ) : (
        buttons.map(({ name, to }, idx) => (
          <SignupOrLoginBtn key={idx} to={to}>
            {name}
          </SignupOrLoginBtn>
        ))
      )}
    </CenterLayout>
  );
};

export default Home;
