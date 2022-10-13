import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "./buttonBackStyle.js";
import { IoArrowUndo } from "react-icons/io5";

const ButtonBack = ( ) => {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate(-1)}> <IoArrowUndo/> </Button>
    </>
  );
}

export default ButtonBack;

