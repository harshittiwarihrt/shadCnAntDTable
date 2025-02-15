import { ThemeConfig, theme } from "antd"
import type { AliasToken } from "antd/es/theme/internal"

// NOTE: Destructuring properties from the `theme` object
const { defaultAlgorithm, darkAlgorithm, useToken } = theme

// NOTE: CustomToken interface defining custom token properties
export interface CustomToken extends Partial<AliasToken> {
  colorSecondary: string
  primary1: string
  primary2: string
  primary3: string
  primary4: string
  primary5: string
  primary6: string
  primary7: string
  primary8: string
  primary9: string
  primary10: string

  secondary1: string
  secondary2: string
  secondary3: string
  secondary4: string
  secondary5: string
  secondary6: string
  secondary7: string
  secondary8: string
  secondary9: string
  secondary10: string

  info1: string
  info2: string
  info3: string
  info4: string
  info5: string
  info6: string
  info7: string
  info8: string
  info9: string
  info10: string

  warning1: string
  warning2: string
  warning3: string
  warning4: string
  warning5: string
  warning6: string
  warning7: string
  warning8: string
  warning9: string
  warning10: string

  error1: string
  error2: string
  error3: string
  error4: string
  error5: string
  error6: string
  error7: string
  error8: string
  error9: string
  error10: string

  success1: string
  success2: string
  success3: string
  success4: string
  success5: string
  success6: string
  success7: string
  success8: string
  success9: string
  success10: string

  neutral1: string
  neutral2: string
  neutral3: string
  neutral4: string
  neutral5: string
  neutral6: string
  neutral7: string
  neutral8: string
  neutral9: string
  neutral10: string
  neutral11: string
  neutral12: string
  neutral13: string

  idk1: string

  StormyNight: string
  lightBorderWinterWhisper: string
  winterWhisper: string
  winterWhisperSecondary: string
}

export type CustomTokenKey = keyof CustomToken

// NOTE: CustomTheme interface extending ThemeConfig
export interface CustomTheme extends ThemeConfig {
  token: CustomToken
}

// NOTE: Custom function to get the application theme based on isDarkMode
export const useGetAppTheme = (isDarkMode = false) => {
  const { token } = useToken()

  const customColor = {
    // NOTE: Custom Colors
    primary1: isDarkMode ? "#f1eefd" : "#f1eefd",
    primary2: isDarkMode ? "#DCD5FB" : "#DCD5FB",
    primary3: isDarkMode ? "#C1B5F7" : "#C1B5F7",
    primary4: isDarkMode ? "#A492F4" : "#A492F4",
    primary5: isDarkMode ? "#8971F0" : "#8971F0",
    primary6: isDarkMode ? "#6F52ED" : "#6F52ED",
    primary7: isDarkMode ? "#5E46C9" : "#5E46C9",
    primary8: isDarkMode ? "#4F3AA8" : "#4F3AA8",
    primary9: isDarkMode ? "#3F2F87" : "#3F2F87",
    primary10: isDarkMode ? "#32256B" : "#32256B",

    secondary1: isDarkMode ? "#E8EAED" : "#E8EAED",
    secondary2: isDarkMode ? "#C7CDD3" : "#C7CDD3",
    secondary3: isDarkMode ? "#9BA5AF" : "#9BA5AF",
    secondary4: isDarkMode ? "#6D7B8A" : "#6D7B8A",
    secondary5: isDarkMode ? "#415367" : "#415367",
    secondary6: isDarkMode ? "#172D46" : "#172D46",
    secondary7: isDarkMode ? "#14263C" : "#14263C",
    secondary8: isDarkMode ? "#102032" : "#102032",
    secondary9: isDarkMode ? "#0D1A28" : "#0D1A28",
    secondary10: isDarkMode ? "#0A141F" : "#0A141F",

    info1: isDarkMode ? "#E6F7FC" : "#E6F7FC",
    info2: isDarkMode ? "#C2EBF8" : "#C2EBF8",
    info3: isDarkMode ? "#91DAF2" : "#91DAF2",
    info4: isDarkMode ? "#5EC9EC" : "#5EC9EC",
    info5: isDarkMode ? "#2EB9E6" : "#2EB9E6",
    info6: isDarkMode ? "#00AAE1" : "#00AAE1",
    info7: isDarkMode ? "#0091BF" : "#0091BF",
    info8: isDarkMode ? "#0079A0" : "#0079A0",
    info9: isDarkMode ? "#006180" : "#006180",
    info10: isDarkMode ? "#004C65" : "#004C65",

    warning1: isDarkMode ? "#FFFAE6" : "#FFFAE6",
    warning2: isDarkMode ? "#FFF3C2" : "#FFF3C2",
    warning3: isDarkMode ? "#FFE991" : "#FFE991",
    warning4: isDarkMode ? "#FFDF5E" : "#FFDF5E",
    warning5: isDarkMode ? "#FFD52E" : "#FFD52E",
    warning6: isDarkMode ? "#FFCC00" : "#FFCC00",
    warning7: isDarkMode ? "#D9AD00" : "#D9AD00",
    warning8: isDarkMode ? "#B59100" : "#B59100",
    warning9: isDarkMode ? "#917400" : "#917400",
    warning10: isDarkMode ? "#735C00" : "#735C00",

    error1: isDarkMode ? "#FEECEB" : "#FEECEB",
    error2: isDarkMode ? "#FCD2CF" : "#FCD2CF",
    error3: isDarkMode ? "#FAAEA9" : "#FAAEA9",
    error4: isDarkMode ? "#F88980" : "#F88980",
    error5: isDarkMode ? "#F6655A" : "#F6655A",
    error6: isDarkMode ? "#F44336" : "#F44336",
    error7: isDarkMode ? "#CF392E" : "#CF392E",
    error8: isDarkMode ? "#AD3026" : "#AD3026",
    error9: isDarkMode ? "#8B261F" : "#8B261F",
    error10: isDarkMode ? "#6E1E18" : "#6E1E18",

    success1: isDarkMode ? "#E6F6EE" : "#E6F6EE",
    success2: isDarkMode ? "#C3E9D7" : "#C3E9D7",
    success3: isDarkMode ? "#93D8B7" : "#93D8B7",
    success4: isDarkMode ? "#60C695" : "#60C695",
    success5: isDarkMode ? "#30B575" : "#30B575",
    success6: isDarkMode ? "#03A557" : "#03A557",
    success7: isDarkMode ? "#038C4A" : "#038C4A",
    success8: isDarkMode ? "#02753E" : "#02753E",
    success9: isDarkMode ? "#025E32" : "#025E32",
    success10: isDarkMode ? "#014A27" : "#014A27",

    neutral1: isDarkMode ? "#FFFFFF" : "#FFFFFF",
    neutral2: isDarkMode ? "#FCFCFC" : "#FCFCFC",
    neutral3: isDarkMode ? "#F5F5F5" : "#F5F5F5",
    neutral4: isDarkMode ? "#F0F0F0" : "#F0F0F0",
    neutral5: isDarkMode ? "#D9D9D9" : "#D9D9D9",
    neutral6: isDarkMode ? "#BFBFBF" : "#BFBFBF",
    neutral7: isDarkMode ? "#8C8C8C" : "#8C8C8C",
    neutral8: isDarkMode ? "#595959" : "#595959",
    neutral9: isDarkMode ? "#454545" : "#454545",
    neutral10: isDarkMode ? "#262626" : "#262626",
    neutral11: isDarkMode ? "#1F1F1F" : "#1F1F1F",
    neutral12: isDarkMode ? "#141414" : "#141414",
    neutral13: isDarkMode ? "#000000" : "#000000",

    idk1: isDarkMode ? "#EEF1F6" : "#EEF1F6",
    StormyNight: isDarkMode ? "#475467" : "#475467",
    lightBorderWinterWhisper: isDarkMode ? "#D0D5DD" : "#D0D5DD",
    winterWhisper: isDarkMode ? "#F9FAFB" : "#F9FAFB",
    winterWhisperSecondary: isDarkMode ? "#667085" : "#667085",
  }
  // NOTE: Custom theme object with modified properties
  const customTheme: CustomTheme = {
    ...theme,
    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    token: {
      ...token,
      motion: false,
      fontFamily: "'Inter', sans-serif",
      // todo - fontSize: 13.5,
      colorPrimary: isDarkMode ? "#4F3AA8" : "#4F3AA8",
      colorSecondary: isDarkMode ? "#415367" : "#415367",
      colorSuccess: isDarkMode ? "#03A557" : "#03A557",
      colorInfo: isDarkMode ? "#00AAE1" : "#00AAE1",
      colorWarning: isDarkMode ? "#FFCC00" : "#FFCC00",
      colorError: isDarkMode ? "#F44336" : "#F44336",
      colorBgLayout: isDarkMode
        ? customColor.winterWhisper
        : customColor.winterWhisper,
      colorBgBase: customColor.winterWhisper,
      colorLink: isDarkMode ? "#4F3AA8" : "#4F3AA8",
      screenXS: 280,
      screenXSMax: 400,
      screenXSMin: 280,
      screenSM: 401,
      screenSMMax: 767,
      screenSMMin: 401,
      screenMD: 768,
      screenMDMax: 991,
      screenMDMin: 768,
      screenLG: 992,
      screenLGMax: 1199,
      screenLGMin: 992,
      screenXL: 1200,
      screenXLMax: 1599,
      screenXLMin: 1200,
      screenXXL: 1600,
      screenXXLMin: 1600,
      ...customColor,
    },
    components: {
      Button: {
        algorithm: true,
        boxShadow: "none",
        defaultShadow: "none",
        primaryShadow: "none",
        boxShadowSecondary: "none",
        dangerShadow: "none",
        boxShadowTertiary: "none",
        colorError: customColor.error8,
        fontWeight: 700,
      },
      Tabs: {
        motion: true,
        algorithm: true,
      },
      Radio: {
        algorithm: true,
      },
      Segmented: {
        algorithm: true,
        borderRadius: 10,
        itemColor: customColor.neutral11, // info - inactive tabs k text colors
        itemHoverColor: customColor.neutral13,
        itemSelectedBg: customColor.primary8, // info - seleted tab ka background color
        itemSelectedColor: customColor.neutral3, // info - selected tab ka text color
        colorBgLayout: customColor.winterWhisper, // info - selected tab container ka background color
      },
      Checkbox: {
        algorithm: true,
      },
      Switch: {
        algorithm: true,
      },
      Typography: {
        algorithm: true,
        fontSizeHeading1: 38,
        fontSizeHeading4: 20,
      },
      Input: {
        algorithm: true,
        controlHeightSM: 30,
        controlHeight: 32,
        controlHeightLG: 46,
        colorBgBase: "#fff",
      },
      Form: {
        fontWeightStrong: 800,
        labelColor: isDarkMode ? "#454545" : "#454545",
      },
      Select: {
        algorithm: true,
        controlHeightSM: 30,
        controlHeight: 32,
        controlHeightLG: 46,
        colorBgBase: "#fff",
      },
      Notification: {
        boxShadow: "none",
      },
      Table: {
        headerBg: customColor.winterWhisper,
        headerSplitColor: customColor.neutral5,
        rowExpandedBg: customColor.winterWhisper,
      },
      Upload: {
        colorBgBase: customColor.neutral4,
        colorPrimary: customColor.primary3,
      },
      // Alert: { algorithm: true, motion: true },
      // Badge: { algorithm: true },
      // Card: { algorithm: true },
      // Avatar: { algorithm: true },
      // Collapse: { algorithm: true },
      // Descriptions: { algorithm: true },
      // Divider: { algorithm: true },
      // Drawer: { algorithm: true },
      // Dropdown: { algorithm: true },
      // Empty: { algorithm: true },
      // Flex: { algorithm: true },
      // FloatButton: { algorithm: true },
      // Grid: { algorithm: true },
      // Image: { algorithm: true },
      // DatePicker: { algorithm: true },
      // Layout: { algorithm: true },
      // List: { algorithm: true },
      // Message: { algorithm: true, motion: true },
      // App: { algorithm: true },
      // Skeleton: { algorithm: true },
      // Menu: { algorithm: true },
      // Spin: { algorithm: true },
      // Pagination: { algorithm: true },
      // Popover: { algorithm: true },
      // Popconfirm: { algorithm: true },
      // TreeSelect: { algorithm: true },
      // Space: { algorithm: true },
      // Result: { algorithm: true },
      // Tooltip: { algorithm: true },
      // InputNumber: { algorithm: true },
      // Tour: { algorithm: true },
      // Statistic: { algorithm: true },
      // BackTop: { algorithm: true },
    },
  }

  return customTheme
}

// NOTE: Custom function to get the application theme token
export const useAppTheme = () => {
  const { token } = useToken()
  return token as CustomToken
}
