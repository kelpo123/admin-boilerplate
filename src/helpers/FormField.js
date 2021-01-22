// reff: https://codesandbox.io/s/030657ovvn

/* eslint-disable */
import React from "react";
import moment from "moment";
import { DatePicker, Form, Input, Radio, Upload, Button, Select } from "antd";

import { DATE_FORMAT_LONG } from "constants/Data";
import { useField } from "formik";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Dragger = Upload.Dragger;
const { Password, TextArea, Search } = Input;
const { RangePicker } = DatePicker;

const makeField = (Component) => ({
   layout,
   input,
   label,
   labelEmpty,
   required,
   children,
   defaultValue,
   defaultChecked,
   hasFeedback,
   errorFeedback,
   successFeedback,
   ...rest
}) => {
   const [field, meta] = useField(rest);
   let formItemLayout = {};
   let format = {};
   let value = input?.value || undefined || defaultValue;
   const checked =
      input?.value !== undefined && input?.value !== ""
         ? input?.value
         : defaultChecked;

   const hasError = meta.error ? meta.touched && meta.error : false;
   const hasSuccess = !meta.error ? meta.touched && !meta.error : false;

   if (rest.type === "email") {
      value = input?.value.split(" ").join("");
   }

   if (rest.type === "date") {
      format = {
         format: DATE_FORMAT_LONG
      };
      value =
         value !== undefined ? moment(new Date(value), DATE_FORMAT_LONG) : null;
   }

   let setValue = {
      value
   };

   if (rest.type === "checkbox") {
      setValue = {
         checked
      };
   }

   return (
      <FormItem
         {...formItemLayout}
         label={label}
         validateStatus={hasError ? "error" : "success"}
         hasFeedback={hasFeedback && (hasError || hasSuccess)}
         help={hasError && meta.error}
         required={required}
      >
         <Component
            {...input}
            {...setValue}
            {...format}
            {...field}
            {...rest}
            children={children}
         />
      </FormItem>
   );
};

export const FormInput = makeField(Input);
export const FormInputPassword = makeField(Password);
export const FormInputSearch = makeField(Search);
export const FormSelect = makeField(Select);
export const FormDatePicker = makeField(DatePicker);
export const FormRangePicker = makeField(RangePicker);
export const FormRadioGroup = makeField(RadioGroup);
export const FormUpload = makeField(Upload);
export const FormUploadDragger = makeField(Dragger);
export const FormButton = makeField(Button);
