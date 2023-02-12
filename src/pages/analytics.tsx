import { FunctionComponent } from 'react'
import Head from 'next/head'
import { ProtectPage } from '../components/Auth/ProtectPage'
import { AppAnalytics } from '../components/Analytics/AppAnalytics'
import { EuiPageHeader } from '@elastic/eui'

const Analytics: FunctionComponent = () => {
  return (
    <ProtectPage>
      <>
        <Head>
          <title>Automoato - Analytics</title>
        </Head>
        <EuiPageHeader bottomBorder pageTitle="Analytics" iconType="visLine" />

        <AppAnalytics />
      </>
    </ProtectPage>
  )
}

export default Analytics
