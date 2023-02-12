import { css, keyframes } from '@emotion/react'
import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiShowFor,
  EuiThemeComputed,
  useEuiTheme,
} from '@elastic/eui'

import { FunctionComponent } from 'react'
import { EuiHeaderSectionItemButton, EuiIcon, EuiToolTip } from '@elastic/eui'
import { useTheme } from '../eui/theme'
import SideNav from './SideNav'

const Navbar = () => {
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
