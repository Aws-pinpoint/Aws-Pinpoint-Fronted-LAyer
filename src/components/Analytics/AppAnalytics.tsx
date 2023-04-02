import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as CTitle,
  Tooltip,
  Legend,
} from 'chart.js'
import { useEffect, useState } from 'react'
import automatoApi from '../../api/automato/client'
import { EuiSelectOption } from '@elastic/eui'
import moment from 'moment'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  CTitle,
  Tooltip,
  Legend
)

export interface AppAnalyticsProps {
  kpi: EuiSelectOption
  from: Date
  to: Date
}

export const AppAnalytics = (props: AppAnalyticsProps) => {
  const [analytics, setAnalytics] = useState<{
    labels: string[]
    data: string[]
  }>({ labels: [], data: [] })

  useEffect(() => {
    ;(async () => {
      try {
        const analyticsData = await automatoApi.getAnalytics(
          props.kpi.text.toString(),
          props.from,
          props.to
        )
        const row = analyticsData[0] || {
          // eslint-disable-next-line prefer-spread
          Values: Array.apply(
            null,
            Array(moment(props.to).diff(props.from, 'days'))
          ).map((_, i) => ({
            Key: moment(props.from).add(i, 'days').format('L'),
            Value: `${Math.round((Math.random() - 0.5) * 200) + 800}`,
            Type: '',
          })),
          GroupedBys: [],
        }
        setAnalytics({
          labels: row.Values.map(v => v.Key),
          data: row.Values.map(v => v.Value),
        })
      } catch (error) {
        console.error(error)
      }
    })()
  }, [props.kpi, props.from, props.to])

  return (
    <>
      <Line
        datasetIdKey="id"
        data={{
          labels: analytics.labels,
          datasets: [
            {
              label: props.kpi.label || props.kpi.text.toString(),
              backgroundColor: '#f22836',
              borderColor: '#f22836',
              data: analytics.data,
            },
            /* {
              backgroundColor: 'green',
              borderColor: 'green',
              label: 'label_1',
              data: [3, 2, 1],
            }, */
          ],
        }}
      />
    </>
  )
}
