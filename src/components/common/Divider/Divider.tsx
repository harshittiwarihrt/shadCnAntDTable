import React from "react";
import { Divider, DividerProps } from "antd";
import { EText } from "~/components/common/Typography";
import { useAppTheme } from "~/theme";
import { TextProps } from "antd/es/typography/Text";

export interface EDividerProps extends DividerProps {
  children?: React.ReactNode;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
}

export const EDivider: React.FC<EDividerProps> = ({
  marginTop = 24,
  marginBottom = 24,
  children,
  ...rest
}) => {
  return (
    <Divider style={{ marginTop, marginBottom, ...rest?.style }} {...rest}>
      {children}
    </Divider>
  );
};

export const EFullDivider: React.FC<EDividerProps> = ({
  children,
  ...rest
}) => {
  return (
    <div>
      <Divider
        {...rest}
        style={{
          marginInline: "-24px",
          marginTop: "0",
          width: "calc(100% + 48px)",
        }}
      >
        {children}
      </Divider>
    </div>
  );
};

export const EDividerWithNoStyle: React.FC<EDividerProps> = ({
  marginTop = 6,
  marginBottom = 6,
  children,
  ...rest
}) => {
  return (
    <Divider style={{ marginTop, marginBottom, ...rest?.style }} {...rest}>
      {children}
    </Divider>
  );
};

interface DividerWithTextStyle {
  dividerStyles?: React.CSSProperties;
  textStyles?: React.CSSProperties;
}
interface DividerWithTextProps {
  dividerProps?: EDividerProps;
  ghost?: boolean;
  textProps?: TextProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  styles?: DividerWithTextStyle;
}

export const EDividerWithText: React.FC<DividerWithTextProps> = ({
  dividerProps,
  textProps,
  styles,
  ghost = false,
  children,
}) => {
  const token = useAppTheme();
  return (
    <EDivider
      orientation="left"
      style={{
        borderColor: token.neutral5,
        fontWeight: "500",
        margin: ghost ? 0 : styles?.dividerStyles?.margin,
        ...styles?.dividerStyles,
      }}
      {...dividerProps}
    >
      {children && (
        <EText
          fontWeight="500"
          color={token.neutral6}
          style={{
            ...styles?.textStyles,
          }}
          {...textProps}
        >
          {children}
        </EText>
      )}
    </EDivider>
  );
};
