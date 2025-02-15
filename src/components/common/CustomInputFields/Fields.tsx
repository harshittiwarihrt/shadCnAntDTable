/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  IconMail,
  IconWorldLongitude,
  IconMapPinCode,
  IconWorldLatitude,
  IconCurrencyRupee,
} from "@tabler/icons-react";
import { useAppTheme } from "~/theme";
import { useStyles } from "./styles";
import {
  ProFormDigit,
  ProFormDigitProps,
  ProFormFieldProps,
  ProFormText,
} from "@ant-design/pro-components";
import {
  INVALID_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
  emailRegex,
  gstRegex,
  panRegex,
} from "../../../constants";
import { EText } from "../Typography";

// ===================================================================================================

export const EAmount: React.FC<ProFormDigitProps> = ({
  fieldProps,
  ...rest
}) => {
  const token = useAppTheme();
  const amountFormatter = (value: string | number | undefined) => {
    if (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };

  return (
    <ProFormDigit
      fieldProps={{
        prefix: <IconCurrencyRupee color={token.neutral6} size={18} />,
        controls: false,
        formatter: amountFormatter,
        ...fieldProps,
      }}
      {...rest}
      style={{ width: "100%", ...rest?.style }}
    />
  );
};

// ===================================================================================================

export const EEmail: React.FC<ProFormFieldProps> = ({
  fieldProps,
  required = false,
  ...rest
}) => {
  const token = useAppTheme();
  return (
    <ProFormText
      placeholder="Enter Email address"
      fieldProps={{
        prefix: <IconMail color={token.neutral6} size={19} />,
        ...fieldProps,
      }}
      required
      {...rest}
      style={{ ...rest?.style }}
      rules={[
        {
          validator(_, value, callback) {
            if (!value) {
              if (required) {
                callback(REQUIRED_ERROR_MESSAGE);
                return;
              }
              return callback();
            }
            if (!emailRegex.test(value)) {
              callback(INVALID_ERROR_MESSAGE);
            } else {
              callback();
            }
          },
        },
      ]}
    />
  );
};

// ===================================================================================================

export const EPan: React.FC<ProFormFieldProps> = ({
  fieldProps,
  required = true,
  rules,
  ...rest
}) => {
  const handlePanInput = (e: any) => {
    e.target.value = e?.target?.value?.toUpperCase();
  };
  return (
    <ProFormText
      placeholder="Enter Pan Number"
      required
      fieldProps={{
        onInput: handlePanInput,
        maxLength: 10,
        ...fieldProps,
      }}
      {...rest}
      style={{ ...rest?.style }}
      rules={[
        {
          validator(_, value, callback) {
            if (!value) {
              if (required) {
                callback(REQUIRED_ERROR_MESSAGE);
                return;
              }
              return callback();
            }
            if (!panRegex.test(value)) {
              callback(INVALID_ERROR_MESSAGE);
            } else {
              callback();
            }
          },
        },
      ]}
    />
  );
};

// ===================================================================================================

export const EGstNo: React.FC<ProFormFieldProps> = ({
  fieldProps,
  required = true,
  ...rest
}) => {
  const handlePanInput = (e: any) => {
    e.target.value = e?.target?.value?.toUpperCase();
  };
  return (
    <ProFormText
      placeholder="Enter GST Number"
      fieldProps={{
        onInput: handlePanInput,
        maxLength: 15,
        ...fieldProps,
      }}
      required
      {...rest}
      style={{ ...rest?.style }}
      rules={[
        {
          validator(_, value, callback) {
            if (!value) {
              if (required) {
                callback(REQUIRED_ERROR_MESSAGE);
                return;
              }
              return callback();
            }
            if (!gstRegex.test(value)) {
              callback(INVALID_ERROR_MESSAGE);
            } else {
              callback();
            }
          },
        },
      ]}
    />
  );
};

// ===================================================================================================

export const EPinCode: React.FC<ProFormFieldProps> = ({
  fieldProps,
  ...rest
}) => {
  const token = useAppTheme();
  return (
    <ProFormDigit
      fieldProps={{
        prefix: <IconMapPinCode color={token.neutral6} size={17} />,
        maxLength: 6,
        controls: false,
        formatter(value) {
          if (value) {
            return value.toString().replace(",", "");
          }
          return "";
        },
        ...fieldProps,
      }}
      {...rest}
      style={{ width: "100%", ...rest?.style }}
    />
  );
};

// ===================================================================================================
interface EProLongitudeLatitudeProps extends ProFormDigitProps {
  type?: "latitude" | "longitude";
}

export const ELatitude: React.FC<EProLongitudeLatitudeProps> = ({
  fieldProps,
  type = "latitude",
  ...rest
}) => {
  const token = useAppTheme();
  return (
    <ProFormDigit
      fieldProps={{
        precision: 6,
        maxLength: 11,
        controls: false,
        prefix:
          type === "latitude" ? (
            <IconWorldLatitude color={token.neutral6} size={16} />
          ) : (
            <IconWorldLongitude color={token.neutral6} size={16} />
          ),
        ...fieldProps,
      }}
      placeholder={type}
      {...rest}
      style={{ width: "100%", ...rest?.style }}
    />
  );
};
