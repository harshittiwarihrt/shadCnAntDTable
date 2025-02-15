import React from "react"
import { Popover, PopoverProps } from "antd"

export interface EPopoverProps extends PopoverProps {}

export const EPopover: React.FC<EPopoverProps> = ({ ...rest }) => {
  return (
    <div>
      <Popover {...rest} />
    </div>
  )
}
