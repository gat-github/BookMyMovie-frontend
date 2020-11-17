/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { useNavigate } from "@reach/router";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
function ThankYou() {
  const navigate = useNavigate();
  return (
    <div>
      Thank you for booking the movie with us! Hope you enjoy the movie!!
      <Button
        type="button"
        onClick={() => {
          navigate("./");
        }}
      >
        Book My Movie{" "}
      </Button>
    </div>
  );
}
export default ThankYou;