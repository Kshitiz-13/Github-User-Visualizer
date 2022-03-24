import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import img from ".././images/error.jpg"; // with import

const Error = () => {
  return (
    <Wrapper>
      <Link to="/">
        <h3>GO TO HOME</h3>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-image: url(${img});
  background-size: cover;

  h3 {
    color: var(--clr-grey-1);
    background-color: var(--clr-red-light);
    padding: 1rem;
    position: fixed;
    margin: 2rem;
    top: 0;
    left: 45;
  }
`;
export default Error;
