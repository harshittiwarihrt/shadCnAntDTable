import React from "react"
import { ConfigProvider, theme } from "antd"
import { useGetAppTheme } from "."
import { ThemeProvider as StyleThemeProvider } from "antd-style"

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // TODO: const isDarkMode = useAppSelector((state) => state.appSetting.isDarkMode)
  const isDarkMode = false
  const customTheme = useGetAppTheme(isDarkMode)
  const { defaultAlgorithm, darkAlgorithm } = theme

  return (
    <ConfigProvider theme={customTheme}>
      <StyleThemeProvider
        theme={{
          token: customTheme.token,
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        {children}
      </StyleThemeProvider>
    </ConfigProvider>
  )
}
