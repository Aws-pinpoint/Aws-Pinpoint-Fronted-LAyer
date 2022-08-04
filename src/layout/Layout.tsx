import Navbar from './Navbar'
import SideBar from './SideBar'
import {
  EuiPage,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageBody,
} from '@elastic/eui'
import { useAuth } from '../hooks/Auth/useAuth'

const Layout = ({ children }) => {
  const loggedIn = useAuth()

  return (
    <>
      <EuiPage paddingSize="none">
        <Navbar />

        {loggedIn && <SideBar />}

        <EuiPageBody
          panelled
          style={{
            marginTop: '3.6rem',
          }}
        >
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
