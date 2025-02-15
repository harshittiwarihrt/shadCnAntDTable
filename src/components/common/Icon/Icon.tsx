import React from "react"
import { Icon, IconProps } from "@iconify/react"
import { useAppTheme } from "~/theme"

export interface EIconProps extends IconProps {}

export const EIcon: React.FC<EIconProps> = ({ ...rest }) => {
  return <Icon {...rest} />
}

export interface EPrimaryIconProps extends IconProps {
  child?: boolean
  isActive?: boolean
}

export const EPrimaryIcon: React.FC<EPrimaryIconProps> = ({
  child = false,
  isActive = false,
  ...rest
}) => {
  const token = useAppTheme()
  return (
    <Icon
      color={isActive ? token.primary7 : token.neutral7}
      fontSize={16}
      {...rest}
      style={{ ...rest?.style }}
    />
  )
}
