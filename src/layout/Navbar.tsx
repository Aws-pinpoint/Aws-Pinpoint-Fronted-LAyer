import { css, keyframes } from '@emotion/react'
import {
  EuiAvatar,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiPopover,
  EuiShowFor,
  EuiThemeComputed,
  useEuiTheme,
} from '@elastic/eui'

import { FunctionComponent, useState } from 'react'
import { EuiHeaderSectionItemButton, EuiIcon, EuiToolTip } from '@elastic/eui'
import { useTheme } from '../eui/theme'
import { SideNav } from './SideNav'
import { useAtom } from 'jotai'
import { UserDetailsAtom } from '../store/store'
import { useRouter } from 'next/router'
import { signOut } from 'supertokens-website'
import { userDetailsLSkey } from '../store/models'
// import { userDetailsLSkey } from '../store/models'

const Navbar = () => {
  const [userDetails] = useAtom(UserDetailsAtom)
  const [isUserMenuPopoverOpen, setUserMenuPopoverOpen] = useState(false)
  const router = useRouter()
  const logout = async () => {
    setUserMenuPopoverOpen(false)
    // signout from supertokens
    await signOut()

    //empty localStorage
    localStorage.removeItem(userDetailsLSkey)

    router.reload()
  }

  return (
    <EuiHeader position="fixed">
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem>
          <EuiShowFor sizes={['xs', 's']}>
            <SideNav />
          </EuiShowFor>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          {/* <Link href="/" passHref> */}
          <EuiHeaderLogo iconType="/images/logo.svg" className="h-full mx-10">
            Automato
          </EuiHeaderLogo>
          {/* </Link> */}
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      <EuiHeaderSection side="right" grow={false}>
        <EuiHeaderSectionItem>
          <ThemeSwitcher key="theme-switcher" />
        </EuiHeaderSectionItem>
        {userDetails && (
          <EuiHeaderSectionItem>
            <EuiPopover
              button={
                <EuiAvatar
                  size="s"
                  name={`${userDetails.id}`}
                  iconType="user"
                  color="#f22836"
                  iconColor="#fff"
                  onClick={() => setUserMenuPopoverOpen(!isUserMenuPopoverOpen)}
                  style={{ cursor: 'pointer' }}
                />
              }
              isOpen={isUserMenuPopoverOpen}
              closePopover={() => setUserMenuPopoverOpen(false)}
              panelPaddingSize="none"
              anchorPosition="downLeft"
            >
              <EuiContextMenuPanel
                size="s"
                items={[
                  <EuiContextMenuItem key="Logout" icon="exit" onClick={logout}>
                    Logout
                  </EuiContextMenuItem>,
                ]}
              />
            </EuiPopover>
          </EuiHeaderSectionItem>
        )}
      </EuiHeaderSection>
    </EuiHeader>
  )
}

const rotate = keyframes`
   0% {
     transform: rotate(0deg);
   }
   50% {
     transform: rotate(90deg);
   }
   100% {
    transform: rotate(0deg);
  }
 `
const themeSwitcherStyles = (euiTheme: EuiThemeComputed<unknown>) => ({
  animation: css`
    animation: ${rotate} 1s ease;
    transition: all ${euiTheme.animation.extraSlow} ${euiTheme.animation.bounce};
  `,
})
const ThemeSwitcher: FunctionComponent = () => {
  const { colorMode, setColorMode } = useTheme()
  const isDarkTheme = colorMode === 'dark'

  const handleChangeTheme = (newTheme: string) => {
    setColorMode(newTheme)
  }

  const lightOrDark = isDarkTheme ? 'light' : 'dark'
  const { euiTheme } = useEuiTheme()

  const styles = themeSwitcherStyles(euiTheme)

  return (
    <EuiToolTip content={`Change theme to ${lightOrDark}`} key="theme-switch">
      <EuiHeaderSectionItemButton
        aria-label="Change theme"
        onClick={() => handleChangeTheme(lightOrDark)}
      >
        <EuiIcon
          type={isDarkTheme ? 'moon' : 'sun'}
          aria-hidden="true"
          css={styles.animation}
        />
      </EuiHeaderSectionItemButton>
    </EuiToolTip>
  )
}

export default Navbar
