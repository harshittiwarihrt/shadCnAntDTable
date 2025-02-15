/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { IconCurrencyRupee } from "@tabler/icons-react";
import { DatePickerProps, Flex, InputNumberProps, PopoverProps } from "antd";
import { useAppTheme } from "~/theme";
import { InputProps } from "antd/lib";
import {
  ProFormDatePicker,
  ProFormDigit,
  ProFormDigitProps,
  ProFormFieldProps,
} from "@ant-design/pro-components";
import { EPopover, EText, TextTypographyProps } from "..";
import { InfoCircleOutlined } from "@ant-design/icons";
import { amountFormatter, formatDateTime, parseDateTime } from "lib";
import { useSafeState } from "ahooks";
import dayjs from "dayjs";
import {
  DEFAULT_BACKEND_DATE_FORMAT,
  DEFAULT_DATE_FORMAT,
  FullColumnWIdth,
} from "constants";

interface ENumberProps extends ProFormFieldProps<any, InputNumberProps> {}

interface EInputProps extends ProFormFieldProps<any, InputProps> {}

// ===================================================================================================

interface ProDigitNumberProps
  extends ProFormFieldProps<any, InputNumberProps> {}

export const ProDigitNumber: React.FC<ProFormDigitProps> = ({
  fieldProps,
  ...rest
}) => {
  return (
    <ProFormDigit
      fieldProps={{
        precision: 2,
        formatter: (value) => `${value}`.replace(/,/g, ""),
        ...fieldProps,
      }}
      {...rest}
    />
  );
};
// ===================================================================================================

// ===================================================================================================

interface ProDigitNumberProps
  extends ProFormFieldProps<any, InputNumberProps> {}

export const ProWeightNumber: React.FC<ProDigitNumberProps> = ({
  fieldProps,
  ...rest
}) => {
  return (
    <ProFormDigit
      fieldProps={{
        precision: 3,
        ...fieldProps,
      }}
      {...rest}
    />
  );
};

// ===================================================================================================

export const ProAmount: React.FC<ProFormDigitProps> = ({
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
        precision: 2,
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

interface ProAmountFieldProps {
  amount?: number | string;
  iconColor?: string;
  textProps?: TextTypographyProps;
  popoverProps?: PopoverProps;
  info?: React.ReactNode;
  infoTitle?: string;
  suffix?: React.ReactNode | string;
}

export const ProAmountField: React.FC<ProAmountFieldProps> = ({
  amount,
  iconColor,
  textProps,
  info,
  suffix,
  infoTitle,
  popoverProps,
}) => {
  const token = useAppTheme();
  iconColor = iconColor || token.neutral7;
  return (
    <Flex align="center" gap={4}>
      <Flex flex={1} align="center">
        <IconCurrencyRupee size={16} color={iconColor} />
        <EText {...textProps}>{amountFormatter(amount)}</EText>
        {typeof suffix === "string" ? (
          <EText {...textProps} color={token.neutral7}>
            &nbsp;
            {suffix}
          </EText>
        ) : (
          suffix
        )}
      </Flex>
      {info && (
        <EPopover
          title={infoTitle}
          showArrow
          content={info}
          trigger={["hover"]}
          {...popoverProps}
        >
          <InfoCircleOutlined color={token.neutral8} />
        </EPopover>
      )}
    </Flex>
  );
};

interface ProDatePickerProps extends ProFormFieldProps<any, DatePickerProps> {
  name?: string | number;
}

export const ProDatePicker: React.FC<ProDatePickerProps> = ({
  name,
  width = FullColumnWIdth,
  fieldProps,
  ...rest
}) => {
  const [date, setDate] = useSafeState<string | undefined>(undefined);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e?.target?.value;
    setDate(input);
  };

  return (
    <ProFormDatePicker
      name={name}
      width={width}
      fieldProps={{
        ...fieldProps,
        format: DEFAULT_DATE_FORMAT,
        picker: "date",
        value: date,
        onChange: handleInputChange,
        onBlur: (e: any) => {
          // note parse the date string when the input field loses focus
          if (e.target.value.length > 0) {
            const parsedDateTime = parseDateTime(e.target.value);
            if (parsedDateTime) {
              e.target.value = formatDateTime(parsedDateTime);
              setDate(formatDateTime(parsedDateTime));
            }
          }
        },
      }}
      transform={() => {
        if (date) {
          const isDateValid = dayjs(date, DEFAULT_DATE_FORMAT, true).isValid();
          const formatValue = isDateValid
            ? date
            : dayjs(date).format(DEFAULT_DATE_FORMAT);
          return {
            [name as string]: dayjs(formatValue, DEFAULT_DATE_FORMAT).format(
              DEFAULT_BACKEND_DATE_FORMAT
            ),
          };
        } else {
          return "";
        }
      }}
      {...rest}
    />
  );
};
