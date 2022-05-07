import Image from 'next/image'
import { css, keyframes } from '@emotion/react'
import Link from 'next/link'
import {
  EuiHeader,
  EuiThemeComputed,
  EuiTitle,
  useEuiTheme,
} from '@elastic/eui'
import { imageLoader } from '../lib/loader'
import Logo from '../../public/images/automato-logo.png'

import { FunctionComponent } from 'react'
import { EuiHeaderSectionItemButton, EuiIcon, EuiToolTip } from '@elastic/eui'
import { useTheme } from '../components/theme'

const navbarStyles = (euiTheme: EuiThemeComputed<unknown>) => ({
  logo: css`
    display: inline-flex;
    flex-wrap: wrap;
    gap: ${euiTheme.size.m};
  `,
})
const Navbar = () => {
  const { euiTheme } = useEuiTheme()
  const styles = navbarStyles(euiTheme)

  return (
    <EuiHeader
      position="fixed"
      sections={[
        {
          items: [
            <Link key="logo-eui" href="/" passHref>
              <a css={styles.logo}>
                <Image
                  width={24}
                  height={24}
                  src={Logo}
                  alt=""
                  loader={imageLoader}
                />
                <EuiTitle size="xxs">
                  <span>Automato Dashboard</span>
                </EuiTitle>
              </a>
            </Link>,
          ],
          borders: 'none',
        },
        {
          items: [<ThemeSwitcher key="theme-switcher" />],
          borders: 'none',
        },
      ]}
    />
  )
}

const rotate = keyframes`
   0% {
     transform: rotate(0);
   }
   100% {
     transform: rotate(360deg);
   }
 `
const themeSwitcherStyles = (euiTheme: EuiThemeComputed<unknown>) => ({
  animation: css`
    animation: ${rotate} 0.5s ease;
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
          type={isDarkTheme ? 'sun' : 'moon'}
          aria-hidden="true"
          css={styles.animation}
        />
      </EuiHeaderSectionItemButton>
    </EuiToolTip>
  )
}

export default Navbar
