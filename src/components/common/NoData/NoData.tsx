import React from "react";
import { Flex, Image } from "antd";
import { EHeading } from "..";
import { useAppTheme } from "~/theme";
import { assets } from "~/assets/index";

// Note: Defining the interface for NoDataProps
export interface NoDataProps {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}

// Note: Functional component NoData that accepts NoDataProps as its props
export const NoData: React.FC<NoDataProps> = ({
  width = "100%",
  height = "100%",
  style,
}) => {
  // Note: Retrieving the theme token using the useAppTheme hook
  const token = useAppTheme();

  // Note: Returning a Flex component with centered content and custom styles
  return (
    <Flex
      justify="center"
      align="center"
      gap={41}
      vertical
      style={{ minHeight: 243, width, height, ...style }}
    >
      {/* Note: Displaying the 'noDataImg' from the 'assets' module */}
      <Image
        src={assets.noDataImg}
        preview={false}
        style={{ width: 110, height: 110 }}
      />

      {/* Note: Displaying a heading indicating 'No data found' with specified styles */}
      <EHeading
        level={3}
        fontWeight="500"
        color={token.neutral7}
        style={{ marginLeft: 20 }}
      >
        No data found
      </EHeading>
    </Flex>
  );
};
