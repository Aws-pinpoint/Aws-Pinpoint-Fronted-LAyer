import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiSpacer } from '@elastic/eui'
import HomeHero from '../eui/starter/home_hero'
import HomeWhy from '../eui/starter/home_why'

const Index: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Analytics</title>
      </Head>

      <HomeHero />
      <EuiSpacer size="xxl" />
      <HomeWhy />
    </>
  )
}

export default Index
