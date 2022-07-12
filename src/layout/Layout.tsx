import Navbar from './Navbar'
import SideBar from './SideBar'
import {
  EuiPage,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageBody,
} from '@elastic/eui'

import SuperTokensReact from 'supertokens-auth-react'
import * as SuperTokensConfig from '../api/supertokens/config/frontendConfig'

if (typeof window !== 'undefined') {
  SuperTokensReact.init(SuperTokensConfig.frontendConfig())
}

const Layout = ({ children }) => {
  const Btn = () => <button>haha</button>
  return (
    <>
      <EuiPage paddingSize="none">
        <Navbar />
        {/*
          <SideBar />
        */}
        <EuiPageBody
          panelled
          style={{
            marginTop: '3.6rem',
          }}
        >
          {/* <EuiPageHeader
            restrictWidth
            iconType="logoElastic"
            pageTitle="Page title"
            rightSideItems={[Btn]}
            tabs={[{ label: 'Tab 1', isSelected: true }, { label: 'Tab 2' }]}
          /> */}
          <EuiPageContent
            hasBorder={false}
            hasShadow={false}
            paddingSize="none"
            color="transparent"
            borderRadius="none"
          >
            <EuiPageContentBody restrictWidth>{children}</EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </>
  )
}

export default Layout
