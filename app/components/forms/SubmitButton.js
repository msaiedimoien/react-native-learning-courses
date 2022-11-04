import React from 'react';
import { useFormikContext } from "formik";
import { CustomButton } from "../CustomButton";

const SubmitButton = ({ title, color }) => {
    const { handleSubmit } = useFormikContext();
  return (<CustomButton title={title} color={color} onPress={handleSubmit}/> )
};

export default SubmitButton;
