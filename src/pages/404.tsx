import { FunctionComponent } from 'react'
import { EuiButton, EuiEmptyPrompt, EuiImage } from '@elastic/eui'
import { useTheme } from '../eui/theme'
import { useRouter } from 'next/router'

const NotFoundPage: FunctionComponent = () => {
  const { colorMode } = useTheme()

  const isDarkTheme = colorMode === 'dark'

  const illustration = isDarkTheme
    ? '/images/404_rainy_cloud_dark.png'
    : '/images/404_rainy_cloud_light.png'

  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    e.preventDefault()
    router.back()
  }

  return (
    <EuiEmptyPrompt
      actions={[
        <EuiButton color="primary" fill onClick={handleClick} key="404-go-back">
          Go back
        </EuiButton>,
      ]}
      body={
        <p>
          Sorry, we can&apos;t find the page you&apos;re looking for. It might
          have been removed or renamed, or maybe it never existed.
        </p>
      }
      icon={<EuiImage alt="" size="fullWidth" src={illustration} />}
      layout="vertical"
      title={<h2>Page not found</h2>}
      titleSize="m"
    />
  )
}

export default NotFoundPage
