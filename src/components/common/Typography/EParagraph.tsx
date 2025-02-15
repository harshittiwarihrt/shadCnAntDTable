import React, { ReactNode } from "react"
import { Typography } from "antd"
import { ParagraphProps } from "antd/es/typography/Paragraph"
interface ParagraphTypographyProps extends ParagraphProps {
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

export const EParagraph: React.FC<ParagraphTypographyProps> = ({
  children,
  fontWeight = "400",
  textAlign = "left",
  color,
  ...rest
}) => {
  const renderTypography = () => {
    return (
      <Typography.Paragraph
        {...rest}
        style={{ color, fontWeight, textAlign, ...rest.style }}
      >
        {children}
      </Typography.Paragraph>
    )
  }

  return <>{renderTypography()}</>
}
