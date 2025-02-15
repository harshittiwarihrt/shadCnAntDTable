import React from "react"
import { Flex, Spin, SpinProps } from "antd"

// Note: Define interface ELoaderProps that extends SpinProps and includes width and height props
export interface ELoaderProps extends SpinProps {
  width?: string
  height?: string
}

// Note: Define ELoader functional component that takes ELoaderProps as props and renders a loading spinner and text message
export const ELoader: React.FC<ELoaderProps> = ({
  width = "100%",
  height = "100%",
  ...rest
}) => {
  // Note: Use useAppTheme hook to get the theme token

  return (
    // Note: Render a Flex container with centered content and specified width and height
    <Flex
      justify="center"
      align="center"
      vertical
      flex={1}
      style={{ width, height }}
    >
      {/* Note: Render a large Spin component with spinning set to true and additional props passed down */}
      <Spin
        size="large"
        tip={null}
        spinning={true}
        {...rest}
        style={{ zIndex: 2000, ...rest?.style }}
      />
    </Flex>
  )
}

export const MainLoader = () => {
  return (
    <Flex justify="center" align="center" flex={1} style={{ height: "100vh" }}>
      <Spin size="large" tip={null} spinning={true} style={{ zIndex: 2000 }} />
    </Flex>
  )
}

export const PageLoader = () => {
  return (
    <Flex
      style={{
        height: "60vh",
      }}
      justify="center"
      align="center"
      flex={1}
    >
      <Spin />
    </Flex>
  )
}
