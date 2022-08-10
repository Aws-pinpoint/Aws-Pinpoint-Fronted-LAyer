import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiSpacer } from '@elastic/eui'
import HomeHero from '../eui/starter/home_hero'
import HomeWhy from '../eui/starter/home_why'
import { ProtectPage } from '../components/Auth/ProtectPage'

const Index: FunctionComponent = () => {
  return (
    <ProtectPage>
      <>
        <Head>
          <title>Analytics</title>
        </Head>

        <HomeHero />
        <EuiSpacer size="xxl" />
        <HomeWhy />
      </>
    </ProtectPage>
  )
}

export default Index
