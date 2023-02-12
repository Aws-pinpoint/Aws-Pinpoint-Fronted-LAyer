import { FunctionComponent } from 'react'
import Head from 'next/head'
import { ProtectPage } from '../components/Auth/ProtectPage'
import { EuiPageHeader } from '@elastic/eui'

const Index: FunctionComponent = () => {
  return (
    <ProtectPage>
      <>
        <Head>
          <title>Automoato - Dashboard</title>
        </Head>
        <EuiPageHeader pageTitle="Dashboard" iconType="home" description="" />

        <p></p>
      </>
    </ProtectPage>
  )
}

export default Index
