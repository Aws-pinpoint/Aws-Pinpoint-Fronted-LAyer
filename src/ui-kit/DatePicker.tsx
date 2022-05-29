import { useEffect, useState } from 'react'
import { EuiDatePicker, EuiDatePickerRange } from '@elastic/eui'
import moment from 'moment'

interface Props {
  onStartChange: (x: number) => void
  onEndChange: (x: number) => void
}
const DatePicker = (props: Props) => {
  const [startDate, setStartDate] = useState(moment())
  const [endDate, setEndDate] = useState(moment().add(11, 'd'))

  return (
    <EuiDatePickerRange
      startDateControl={
        <EuiDatePicker
          selected={startDate}
          // onChange={setStartDate}
          onChange={m => {
            setStartDate(m)
            props.onStartChange(m.unix())
          }}
          startDate={startDate}
          endDate={endDate}
          isInvalid={startDate > endDate}
          aria-label="Start date"
          showTimeSelect
        />
      }
      endDateControl={
        <EuiDatePicker
          selected={endDate}
          onChange={m => {
            setEndDate(m)
            props.onEndChange(m.unix())
          }}
          startDate={startDate}
          endDate={endDate}
          isInvalid={startDate > endDate}
          aria-label="End date"
          showTimeSelect
        />
      }
    />
  )
}

export default DatePicker
