import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 80em;
  margin: 0 auto;
`;
export const Card = styled.div`
  border-radius: 10px;
  border: 1px solid #969696;
  width: 40em;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ff9d9d;
  margin: 1.8em;
  color: white;
  img {
    object-fit: cover;
    border-bottom: 1px solid #969696;
    width: 40em;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 300px;
  }
  ul {
    list-style-type: none;
  }
`;
export const Title = styled.h1`
  padding: 0.2em;
  color: white;
`;
export const Text = styled.p`
  padding: 0.5em;
`;
export const Button = styled.button`
  font-size: 1.4em;
  width: 5em;
  height: 1.8em;
  border-radius: 10px;
  margin: 0.6em;
`;

export const StyledForm = styled.form`
  width: 14em;
  height: auto;
  input {
    font-size: 1.4em;
    border-radius: 5px;
    margin-bottom: 1.6em;
    height: 2em;
  }
`;
