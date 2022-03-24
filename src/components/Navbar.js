import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <h2>Welcome To Github user Visualizer !</h2>;
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 0.25rem;
  margin: 2rem;
  text-align: center;
`;

export default Navbar;
