import React from "react"
import { Tooltip } from "antd"
import { TooltipPropsWithOverlay } from "antd/es/tooltip"

export interface ETooltipProps extends TooltipPropsWithOverlay {}

export const ETooltip: React.FC<ETooltipProps> = ({ ...rest }) => {
  return (
    <div>
      <Tooltip {...rest} />
    </div>
  )
}
