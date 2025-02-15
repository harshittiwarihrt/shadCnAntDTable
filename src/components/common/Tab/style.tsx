import { createStyles } from "antd-style";

export const useStyles = () => {
  return createStyles((_) => ({
    tabWrapper: {
      "& .ant-tabs-tab-btn": {
        fontWeight: 500
      }
    },
  }))();
};
