import { FunctionComponent, useState } from 'react'
import Head from 'next/head'
import { ProtectPage } from '../components/Auth/ProtectPage'
import { AppAnalytics } from '../components/Analytics/AppAnalytics'
import {
  EuiDatePicker,
  EuiDatePickerRange,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPageHeader,
  EuiPageSection,
  EuiSelect,
} from '@elastic/eui'
import moment from 'moment'
import { analyticsOptions } from '../components/Analytics/models/models'

const Analytics: FunctionComponent = () => {
  const [kpi, setKpi] = useState<string>('successful-delivery-rate')
  const [from, setFrom] = useState<moment.Moment>(moment().subtract(1, 'month'))
  const [to, setTo] = useState<moment.Moment>(moment())

  return (
    <ProtectPage>
      <>
        <Head>
          <title>Automoato - Analytics</title>
        </Head>
        <EuiPageHeader bottomBorder pageTitle="Analytics" iconType="visLine" />
        <EuiPageSection bottomBorder="extended">
          <EuiFlexGroup>
            <EuiFlexItem grow={false}>
              <EuiSelect
                options={analyticsOptions}
                value={kpi}
                onChange={e => setKpi(e.currentTarget.value)}
                aria-label="Use aria labels when no actual label is in use"
              />
            </EuiFlexItem>
            <EuiFlexItem />
            <EuiFlexItem grow={false}>
              <EuiDatePickerRange
                isInvalid={to.diff(from, 'days') > 31}
                startDateControl={
                  <EuiDatePicker
                    selected={from}
                    onChange={setFrom}
                    startDate={from}
                    endDate={to}
                    minDate={moment().subtract(90, 'day')}
                    maxDate={to}
                    aria-label="Start date"
                    showTimeSelect
                  />
                }
                endDateControl={
                  <EuiDatePicker
                    selected={to}
                    onChange={setTo}
                    startDate={from}
                    endDate={to}
                    minDate={from}
                    maxDate={moment()}
                    aria-label="End date"
                    showTimeSelect
                  />
                }
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPageSection>
        <AppAnalytics
          kpi={analyticsOptions.find(o => o.text === kpi)}
          from={from.toDate()}
          to={to.toDate()}
        />
      </>
    </ProtectPage>
  )
}

export default Analytics
