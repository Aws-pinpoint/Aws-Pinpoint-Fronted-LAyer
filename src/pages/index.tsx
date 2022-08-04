import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiSpacer } from '@elastic/eui'
import HomeHero from '../eui/starter/home_hero'
import HomeWhy from '../eui/starter/home_why'
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

const Index: FunctionComponent = () => {
  return (
    <ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
      <Head>
        <title>Analytics</title>
      </Head>

      <HomeHero />
      <EuiSpacer size="xxl" />
      <HomeWhy />
    </ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
  )
}

export default Index
