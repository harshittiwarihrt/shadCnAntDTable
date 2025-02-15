import { createStyles } from "antd-style"
import { useAppTheme } from "~/theme"

export const useStyles = () => {
  const token = useAppTheme()

  return createStyles(() => ({
    kmInput: {
      ".ant-input-number-suffix": {
        color: `${token.neutral6} !important`,
        paddingLeft: "8px !Important",
      },
      ".ant-input-number-input-wrap": {
        paddingRight: "35px !Important",
      },
    },
    mobileNumberInput: {
      ".ant-input-number-group-addon": {
        color: `${token.neutral6} !important`,
        paddingLeft: "8px !Important",
      },
    },
    mobileNumberInputReadOnly: {
      ".ant-input-group-addon": {
        display: `none !important`,
      },
      input: {
        background: `none !important`,
        border: "none !Important",
        color: `rgba(0, 0, 0, 0.88) !important`,
      },
    },
  }))()
}
