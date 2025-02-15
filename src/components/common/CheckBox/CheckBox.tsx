import React from "react"
import { ProFormCheckbox } from "@ant-design/pro-components"
import { CheckboxProps } from "antd"

export interface ECheckboxProps extends CheckboxProps {
  label?: string | React.ReactNode
  helperMessage?: string
  error?: boolean
  errorMessage?: string
}

export const ECheckbox: React.FC<ECheckboxProps> = ({
  label,
  error,
  ...rest
}) => {
  return <ProFormCheckbox {...rest}>{label}</ProFormCheckbox>
}
