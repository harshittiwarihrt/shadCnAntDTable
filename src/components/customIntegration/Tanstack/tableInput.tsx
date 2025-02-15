import React from "react";
import { InputProps } from "antd";
import {
  ProFormDigit,
  ProFormDigitProps,
  ProFormItemProps,
  ProFormText,
  ProFormDatePicker,
} from "@ant-design/pro-components";
import { ProAmount } from "../../common";

// NOTE: Defining the combined props type for the custom input component
export type BaseInputProps = InputProps & ProFormDigitProps;

export type TableInputFieldTypes =
  | "select"
  | "digit"
  | "text"
  | "amount"
  | "quantity"
  | "date";

export interface TableInputProps extends BaseInputProps {
  type?: TableInputFieldTypes | string;
}

// NOTE: Functional component for the custom input element
export const TableInput: React.FC<TableInputProps> = ({
  type = "text",
  ...rest
}) => {
  // NOTE: Rendering different input components based on the specified type
  switch (type) {
    case "digit":
      return (
        <ProFormDigit
          {...(rest as ProFormDigitProps)}
          style={{ width: "100%" }}
        />
      );

    case "amount":
      return <ProAmount {...(rest as ProFormDigitProps)} noStyle={false} />;

    default:
      return (
        // NOTE: Default Input component with themed styles
        <ProFormText {...(rest as ProFormItemProps)} />
      );
  }
};
