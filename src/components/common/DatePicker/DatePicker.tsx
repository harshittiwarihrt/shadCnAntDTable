import React from "react"

// Note: Import DatePicker and PickerDateProps from 'antd' module
import { DatePicker, DatePickerProps } from "antd"

// Note: Import Dayjs type from 'dayjs' module
import type { Dayjs } from "dayjs"

// Note: Define interface EDatePickerProps that extends PickerDateProps with Dayjs type
export interface EDatePickerProps extends DatePickerProps<Dayjs> { }

// Note: Define EDatePicker functional component that takes EDatePickerProps as props and renders a DatePicker component
export const EDatePicker: React.FC<EDatePickerProps> = ({ ...rest }) => {
  return (
    <div>
      {/* Note: Render DatePicker component with additional props passed down */}
      <DatePicker {...rest} />
    </div>
  )
}
