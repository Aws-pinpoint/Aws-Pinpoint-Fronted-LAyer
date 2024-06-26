import { ReactElement } from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { defaultTheme, Theme, themeConfig } from '../eui/lib/theme'
import 'regenerator-runtime/runtime'

const pathPrefix = process.env.PATH_PREFIX

function themeLink(theme: Theme): ReactElement {
  let disabledProps = {}

  if (theme.id !== defaultTheme) {
    disabledProps = {
      disabled: true,
      'aria-disabled': true,
    }
  }

  return (
    <link
      rel="stylesheet"
      href={`${pathPrefix}/${theme.publicPath}`}
      data-name="eui-theme"
      data-theme-name={theme.name}
      data-theme={theme.id}
      key={theme.id}
      {...disabledProps}
    />
  )
}

/**
 * A custom `Document` is commonly used to augment your application's
 * `<html>` and `<body>` tags. This is necessary because Next.js pages skip
 * the definition of the surrounding document's markup.
 *
 * In this case, we customize the default `Document` implementation to
 * inject the available EUI theme files.  Only the `light` theme is
 * initially enabled.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-document
 */
export default class MyDocument extends Document {
  render(): ReactElement {
    const isLocalDev = process.env.NODE_ENV === 'development'

    const favicon16Prod = `${pathPrefix}/images/favicon/prod/favicon-16x16.png`
    const favicon32Prod = `${pathPrefix}/images/favicon/prod/favicon-32x32.png`
    const favicon48Prod = `${pathPrefix}/images/favicon/prod/favicon-48x48.png`
    const favicon16Dev = `${pathPrefix}/images/favicon/dev/favicon-16x16.png`
    const favicon32Dev = `${pathPrefix}/images/favicon/dev/favicon-32x32.png`
    const favicon48Dev = `${pathPrefix}/images/favicon/dev/favicon-48x48.png`

    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="the dashboard of automato, the market automation tool of 21th century"
          />
          <meta property="og:title" content="Automato" />
          <meta
            property="og:description"
            content="The dashboard of Automato, the market automation tool of 21th century"
          />
          <meta
            property="og:image"
            content="https://repository-images.githubusercontent.com/233832487/cddf0ff5-a35f-4380-8912-1c9f365366a8"
          />
          <meta
            property="og:url"
            content="https://elastic.github.io/next-eui-starter/"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="eui-styles-global" />

          {themeConfig.availableThemes.map(each => themeLink(each))}

          <link
            rel="icon"
            type="image/png"
            href={isLocalDev ? favicon16Dev : favicon16Prod}
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href={isLocalDev ? favicon32Dev : favicon32Prod}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={isLocalDev ? favicon48Dev : favicon48Prod}
            sizes="48x48"
          />
        </Head>
        <body className="guideBody">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
