import { EuiProvider, EuiThemeColorMode } from '@elastic/eui'

import { useTheme } from '../theme'

import createCache from '@emotion/cache'

import { EuiThemeAmsterdam } from '@elastic/eui'

const automatoTheme = {
  // Set the primary color here
  ...EuiThemeAmsterdam,
  root: {
    ...EuiThemeAmsterdam.root,
    colors: {
      ...EuiThemeAmsterdam.root.colors,
      LIGHT: {
        ...EuiThemeAmsterdam.root.colors.LIGHT,
        primary: '#f22836',
      },
      DARK: {
        ...EuiThemeAmsterdam.root.colors.DARK,
        primary: '#f22836',
      },
    },
  },
}

/**
 * Renders the UI that surrounds the page content.
 */
const Chrome = ({ children }) => {
  const { colorMode } = useTheme()

  /**
   * This `@emotion/cache` instance is used to insert the global styles
   * into the correct location in `<head>`. Otherwise they would be
   * inserted after the static CSS files, resulting in style clashes.
   * Only necessary until EUI has converted all components to CSS-in-JS:
   * https://github.com/elastic/eui/issues/3912
   */
  const emotionCache = createCache({
    key: 'eui-styles',
    container:
      typeof document !== 'undefined'
        ? document.querySelector('meta[name="eui-styles-global"]')
        : null,
  })

  return (
    <EuiProvider
      colorMode={colorMode as EuiThemeColorMode}
      cache={emotionCache}
      theme={automatoTheme}
    >
      {children}
    </EuiProvider>
  )
}

export default Chrome
