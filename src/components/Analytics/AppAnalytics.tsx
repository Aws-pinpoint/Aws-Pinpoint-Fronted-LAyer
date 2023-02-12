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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  CTitle,
  Tooltip,
  Legend
)

export const AppAnalytics = () => {
  return (
    <>
      <Line
        datasetIdKey="id"
        data={{
          labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Application Analytics',
              backgroundColor: 'red',
              borderColor: 'red',
              data: [5, 6, 7, 4, 8, 5.6, 9],
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
