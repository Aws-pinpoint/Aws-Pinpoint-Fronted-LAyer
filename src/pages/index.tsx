import { FunctionComponent } from 'react'
import Head from 'next/head'
import { ProtectPage } from '../components/Auth/ProtectPage'
import { AppAnalytics } from '../components/Analytics/AppAnalytics'
import { Title } from '../ui-kit/Form'

const Index: FunctionComponent = () => {
  return (
    <ProtectPage>
      <>
        <Head>
          <title>Analytics</title>
        </Head>
        <Title value="Analytics" size="l" spacerSize="m" spacerPos="bot" />

        <AppAnalytics />
      </>
    </ProtectPage>
  )
}

export default Index
