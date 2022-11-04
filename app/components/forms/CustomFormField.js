import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from "formik";
import CustomTextInput from "../shared/CustomTextInput";
import ErrorMessage from "./ErrorMessage";

const CustomFormField = ({ name, ...otherProps }) => {
    const {handleChange, setFieldTouched, errors, touched} = useFormikContext();
  return (
    <View>
      <>
          <CustomTextInput
              {...otherProps}
              onChangeText={handleChange(name)}
              onBlur={() => setFieldTouched(name)}
          />
          <ErrorMessage error={errors[name]} visible={touched[name]} />
      </>
    </View>
  );
};

export default CustomFormField;
