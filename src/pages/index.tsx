import { FunctionComponent } from 'react'
import Head from 'next/head'
import { ProtectPage } from '../components/Auth/ProtectPage'
import {
  EuiBasicTable,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPageSection,
  EuiStat,
  EuiTitle,
} from '@elastic/eui'
import { AppAnalytics } from '../components/Analytics/AppAnalytics'
import moment from 'moment'
import { analyticsOptions } from '../components/Analytics/models/models'
import useSegmentsList from '../hooks/Segments/useSegmentsList'
import useCampaignsList from '../hooks/Campaigns/useCampaignsList'

const Index: FunctionComponent = () => {
  const DAU = Math.round(Math.random() * 10000)
  const OM = Math.round(Math.random() * 1000)

  const [segmentsList] = useSegmentsList()
  const [campaignsList] = useCampaignsList()

  return (
    <ProtectPage>
      <>
        <Head>
          <title>Automoato - Dashboard</title>
        </Head>
        <EuiPageSection>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiStat title={`${DAU}`} description="DAU" />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiStat
                title={`${DAU * 5}`}
                description="WAU"
                titleColor="subdued"
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiStat
                title={`${DAU * 20}`}
                description="MAU"
                titleColor="primary"
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiStat
                title={`${OM * 17}`}
                description="Delivered messages"
                titleColor="success"
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiStat
                title={`${OM}`}
                description="Opened messages"
                titleColor="accent"
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPageSection>
        <EuiPageSection>
          <AppAnalytics
            kpi={analyticsOptions.find(
              o => o.text === 'unique-deliveries-grouped-by-date'
            )}
            from={moment().subtract(1, 'month').toDate()}
            to={moment().toDate()}
          />
        </EuiPageSection>
        <EuiPageSection>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiTitle size="s">
                <h3>Segments</h3>
              </EuiTitle>
              <EuiBasicTable
                tableCaption="Segments"
                items={segmentsList}
                rowHeader="firstName"
                columns={[
                  {
                    field: 'name',
                    name: 'Name',
                  },
                  {
                    field: 'type',
                    name: 'Type',
                  },
                  {
                    field: 'lastModified',
                    name: 'Last modified',
                    dataType: 'date',
                  },
                ]}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiTitle size="s">
                <h3>Campaigns</h3>
              </EuiTitle>
              <EuiBasicTable
                tableCaption="Campaigns"
                items={campaignsList}
                rowHeader="firstName"
                columns={[
                  {
                    field: 'name',
                    name: 'Name',
                  },
                  {
                    field: 'channel',
                    name: 'Channel',
                  },
                  {
                    field: 'type',
                    name: 'Type',
                  },
                  {
                    field: 'status',
                    name: 'Status',
                  },
                ]}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPageSection>
      </>
    </ProtectPage>
  )
}

export default Index
