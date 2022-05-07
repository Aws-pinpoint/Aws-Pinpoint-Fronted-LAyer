import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiSpacer } from '@elastic/eui'
import HomeHero from '../components/starter/home_hero'
import HomeWhy from '../components/starter/home_why'

const Index: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Campaigns</title>
      </Head>

      <HomeHero />
      <EuiSpacer size="xxl" />
      <HomeWhy />
    </>
  )
}

export default Index
