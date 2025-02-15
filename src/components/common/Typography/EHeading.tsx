import React, { ReactNode } from "react"
import { Typography } from "antd"
import { TitleProps } from "antd/es/typography/Title"

interface TitleTypographyProps extends TitleProps {
  children: ReactNode
  color?: string
  fontWeight?:
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  textAlign?: "center" | "left" | "right"
}

export const EHeading: React.FC<TitleTypographyProps> = ({
  children,
  fontWeight = "400",
  textAlign = "left",
  color,
  ...rest
}) => {
  const renderTypography = () => {
    return (
      <Typography.Title
        {...rest}
        style={{ color, fontWeight, textAlign, ...rest.style }}
      >
        {children}
      </Typography.Title>
    )
  }

  return <>{renderTypography()}</>
}
