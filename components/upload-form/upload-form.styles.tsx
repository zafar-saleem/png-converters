import Link from "next/link";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 80dvh;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Parent = styled.div`
  width: 450px;
  margin: auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 25px;
  box-shadow: 0 0 20px rgb(210, 227, 244);
`;

export const FileUpload = styled.div`
  text-align: center;
  border: 3px dashed rgb(210, 227, 244);
  padding: 1.5rem;
  position: relative;
  cursor: pointer;
  transition: all 0.8s;

  @media (hover: hover) {
    &:hover {
      background-color: #f4f4f4;
    }
  }

  p {
    font-size: 0.87rem;
    margin-top: 10px;
    color: #bbcada;
  }

  input {
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    cursor: pointer;
  }
`;
