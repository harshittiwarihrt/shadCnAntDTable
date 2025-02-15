import React, { ReactNode } from "react";
import { Col, Flex, Image, ImageProps, Row, Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";
import { useAppTheme } from "~/theme";
import { EDividerWithNoStyle, EParagraph, ETooltip } from "~/components/common";
import { jsx } from "react/jsx-runtime";

export interface TextTypographyProps extends TextProps {
  children: ReactNode;
  color?: string;
  fontWeight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  textAlign?: "center" | "left" | "right";
  fontSize?: string;
}

export const EText: React.FC<TextTypographyProps> = ({
  children,
  fontWeight = "400",
  textAlign = "left",
  fontSize = "14px",
  color,
  ...rest
}) => {
  const renderTypography = () => {
    return (
      <Typography.Text
        {...rest}
        style={{
          color,
          fontWeight,
          textAlign,
          fontSize,
          ...rest?.style,
        }}
      >
        {children}
      </Typography.Text>
    );
  };

  return <>{renderTypography()}</>;
};

export const ETextForSearchFilterDropDown: React.FC<TextTypographyProps> = ({
  children,
  fontWeight = "500",
  textAlign,
  fontSize = "12px",
  color,
  ...rest
}) => {
  const token = useAppTheme();
  const renderTypography = () => {
    return (
      <Typography.Text
        style={{
          color: token.neutral6,
          fontWeight,
          textAlign,
          fontSize,
          ...rest?.style,
        }}
        {...rest}
      >
        {children}
      </Typography.Text>
    );
  };

  return <>{renderTypography()}</>;
};

interface SearchFilterTypographyProps extends TextProps {
  children: React.ReactNode;
  color?: string;
  fontWeight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  textAlign?: "center" | "left" | "right";
  fontSize?: string;
  marginLeft?: string;
}

export const ETextForSearchFilterLabel: React.FC<
  SearchFilterTypographyProps
> = ({
  children,
  fontWeight = "500",
  fontSize = "13px",
  color,
  marginLeft = "2px",
  ...rest
}) => {
  const token = useAppTheme();
  const renderTypography = () => {
    return (
      <Typography.Text
        style={{
          color: token.neutral7,
          fontWeight,
          fontSize,
          marginLeft,
          ...rest?.style,
        }}
        {...rest}
      >
        {children}
      </Typography.Text>
    );
  };

  return <>{renderTypography()}</>;
};

interface VerticalTextStyles {
  heading?: React.CSSProperties;
  desc?: React.CSSProperties;
  divider?: React.CSSProperties;
}
export const VerticalText: React.FC<{
  heading: string;
  align?: "center" | "left" | "right";
  desc?: string;
  divider?: boolean;
  colon?: boolean;
  vertical?: boolean;
  headingProps?: TextTypographyProps;
  styles?: VerticalTextStyles;
}> = ({
  heading,
  desc,
  vertical = true,
  divider = true,
  colon = false,
  align = "center",
  styles,
  headingProps,
}) => {
  const token = useAppTheme();
  const colonMark = colon ? ":" : undefined;
  return (
    <Flex>
      <Flex
        vertical={vertical}
        gap={vertical ? 0 : 14}
        justify={vertical ? "center" : "flex-start"}
        align="center"
        flex={1}
        style={{
          textAlign: align,
        }}
      >
        <EText
          color={token.neutral7}
          fontSize="12px"
          style={styles?.heading}
          {...headingProps}
        >
          {heading} {colonMark}
        </EText>
        {typeof desc === "string" ? (
          <EParagraph
            ellipsis={{
              rows: 2,
              tooltip: desc,
            }}
            style={{
              fontSize: "14px",
              fontWeight: "500",
              ...styles?.desc,
            }}
            color={token.neutral9}
          >
            {desc}
          </EParagraph>
        ) : (
          desc
        )}
      </Flex>
      {divider && (
        <EDividerWithNoStyle
          type="vertical"
          orientation="right"
          style={{
            height: "36px",
            fontWeight: 800,
            ...styles?.divider,
          }}
        />
      )}
    </Flex>
  );
};
interface Styles {
  img: React.CSSProperties;
}

export const TextWithIcon: React.FC<{
  img?: string | React.ReactNode;
  text: string | React.ReactNode;
  infoText?: string;
  ellipsisRows?: number;
  textMaxWidth?: number;
  styles?: Styles;
  imgProps?: ImageProps;
}> = ({
  img,
  text,
  infoText,
  ellipsisRows = 1,
  textMaxWidth = 120,
  styles,
  imgProps,
}) => {
  const token = useAppTheme();
  return (
    <Flex gap={4} align="center" justify="flex-start">
      <ETooltip title={infoText}>
        {typeof img === "string" ? (
          <Image
            preview={false}
            src={img}
            wrapperStyle={{
              ...imgProps?.wrapperStyle,

              display: "inline-flex",
            }}
            style={styles?.img}
            height={16}
            {...imgProps}
            loading="lazy"
          />
        ) : (
          img
        )}
      </ETooltip>
      {typeof text === "string" ? (
        <EParagraph
          style={{
            height: "100%",
            marginBottom: 0,
            maxWidth: textMaxWidth,
            fontSize: 14,
            color: token.neutral9,
            fontWeight: "500",
          }}
          ellipsis={{
            rows: ellipsisRows,
            tooltip: text,
          }}
        >
          {text}
        </EParagraph>
      ) : (
        text
      )}
    </Flex>
  );
};

export interface BaseHeaderProps {
  heading: string;
  subHeading: string;
  extra?: React.ReactNode;
}
export const Header: React.FC<BaseHeaderProps> = ({
  heading,
  subHeading,
  extra,
}) => {
  const token = useAppTheme();
  return (
    <Flex justify="space-between">
      <Flex vertical gap={4}>
        <EText fontWeight="600">{heading}</EText>
        <EParagraph
          style={{
            maxWidth: 900,
          }}
          ellipsis={{
            rows: 2,
          }}
          fontWeight="500"
          color={token.neutral7}
        >
          {subHeading}
        </EParagraph>
      </Flex>

      {extra && extra}
    </Flex>
  );
};
