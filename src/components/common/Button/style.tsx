import { createStyles } from "antd-style"
import { useAppTheme } from "~/theme"
import { EIconButtonVariant } from "."

export interface Type {
  buttonVariant: EIconButtonVariant
  size: "small" | "middle" | "large" | "extraLarge"
  wantHoverEffect?: boolean
  blue?: "#2341D8"
}

export const useStyles = ({ buttonVariant, size }: Type) => {
  const token = useAppTheme()

  const backgroundColor = {
    default: token.neutral3,
    transparent: "transparent",
    primary: token.primary1,
    success: token.success1,
    error: token.error1,
    warning: token.warning1,
    info: token.info1,
    blue: "#2341D8",
  }
  const backgroundHoverColor = {
    blue: "#2341D8",
    default: token.neutral4,
    transparent: "transparent",
    primary: token.primary2,
    success: token.success2,
    error: token.error2,
    warning: token.warning2,
    info: token.info2,
  }

  const color = {
    default: token.neutral7,
    transparent: token.neutral7,
    primary: token.primary8,
    success: token.success7,
    error: token.error7,
    warning: token.warning7,
    blue: "#FEFE",
    info: token.info7,
  }

  const colorHover = {
    default: token.neutral6,
    transparent: token.neutral6,
    primary: token.primary4,
    success: token.success4,
    error: token.error4,
    warning: token.warning4,
    info: token.info4,
    blue: "#FEFE",
  }
  const fontSize = {
    small: "22px !important",
    middle: "36px !important",
    large: "46px !important",
    extraLarge: "54px !important",
  }

  return createStyles((_, { buttonVariant, size }: Type) => ({
    button: {
      backgroundColor: `${backgroundColor[buttonVariant]} !important`,
      color: `${color[buttonVariant]} !important`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: fontSize[size || "small"],
      minWidth: fontSize[size || "small"],
      height: fontSize[size || "small"],
      ":hover": {
        border: `1px solid ${colorHover[buttonVariant]} !important`,
        backgroundColor: `${backgroundHoverColor[buttonVariant]} !important`,
      },
    },
  }))({ buttonVariant, size })
}

export const useENoobButtonStyles = ({
  buttonVariant,
  size,
  wantHoverEffect,
}: Type) => {
  const token = useAppTheme()

  const backgroundColor = {
    default: token.neutral3,
    transparent: "transparent",
    primary: token.primary2,
    success: token.success2,
    error: token.error2,
    warning: token.warning2,
    info: token.info2,
    blue: "#2341D8",
  }
  const backgroundHoverColor = {
    default: token.neutral4,
    transparent: "transparent",
    primary: token.primary2,
    success: token.success2,
    error: token.error2,
    warning: token.warning2,
    info: token.info2,
    blue: "#2341D8",
  }

  const color = {
    default: token.neutral8,
    transparent: token.neutral8,
    primary: token.primary8,
    success: token.success8,
    error: token.error8,
    warning: token.warning8,
    info: token.info8,
    blue: "#FEFE",
  }

  const colorHover = {
    default: token.neutral6,
    transparent: token.neutral6,
    primary: token.primary4,
    success: token.success4,
    error: token.error4,
    warning: token.warning4,
    info: token.info6,
    blue: "#FEFE",
  }

  return createStyles((_, { buttonVariant }: Type) => ({
    button: {
      backgroundColor: `${backgroundColor[buttonVariant]} !important`,
      color: `${color[buttonVariant]} !important`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ":hover": {
        border: wantHoverEffect
          ? `1px solid ${colorHover[buttonVariant]} !important`
          : "none !important",
        backgroundColor: wantHoverEffect
          ? `${backgroundHoverColor[buttonVariant]} !important`
          : "none !important",
      },
    },
  }))({ buttonVariant, size })
}

export const useButtonGroupStyles = () => {
  const token = useAppTheme()

  return createStyles(() => ({
    button: {
      fontWeight: "500",
      "&.ant-btn-default": {
        color: token.neutral7,
        backgroundColor: token.colorWhite,
      },
    },
  }))()
}
