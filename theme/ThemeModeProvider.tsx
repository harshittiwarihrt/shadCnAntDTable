import React from "react"
import { ConfigProvider, theme } from "antd"
import enUS from "antd/es/locale/en_US"

const { defaultAlgorithm, darkAlgorithm } = theme

interface ThemeModeProviderProps {
  children: React.ReactNode
}

export const ThemeModeProvider: React.FC<ThemeModeProviderProps> = ({
  children,
}) => {
  const isDarkMode = false

  return (
    <ConfigProvider
      locale={enUS}
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  )
}
