import React from "react"
import { Tabs, TabsProps } from "antd"
import { useStyles } from "./style"

// Note: Defining the interface for ETabProps, extending TabsProps
export interface ETabProps extends TabsProps { }

// Note: Functional component ETab that accepts ETabProps as its props
export const ETab: React.FC<ETabProps> = ({ ...rest }) => {
  const { styles } = useStyles()
  return (
    <>
      <Tabs className={styles.tabWrapper} {...rest} />
    </>
  )
}
