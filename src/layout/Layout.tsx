import Navbar from './Navbar'
import SideBar from './SideBar'
import { EuiPage, EuiPageBody, EuiPageSidebar, EuiShowFor } from '@elastic/eui'
import { css } from '@emotion/react'
import { useAtom } from 'jotai'
import { UserDetailsAtom } from '../store/store'

const Layout = ({ children }) => {
  const [userDetails] = useAtom(UserDetailsAtom)

  return (
    <>
      <Navbar />
      <EuiPage
        css={css`
          margin-top: 48px;
        `}
        paddingSize="none"
      >
        {userDetails && (
          <EuiShowFor sizes={['m', 'l', 'xl']}>
            <EuiPageSidebar paddingSize="l">
              <SideBar />
            </EuiPageSidebar>
          </EuiShowFor>
        )}

        <EuiPageBody panelled paddingSize="l">
          {children}
        </EuiPageBody>
      </EuiPage>
    </>
  )
}

export default Layout
