import {
  EuiIcon,
  EuiKeyPadMenu,
  EuiKeyPadMenuItem,
  EuiPageSideBar,
  EuiThemeComputed,
  useEuiTheme,
  useGeneratedHtmlId,
} from '@elastic/eui'
import { css } from '@emotion/react'
import Link from 'next/link'
import { CSSProperties, useState } from 'react'

const buttonStyle: CSSProperties = {
  width: '100%',
  height: '4rem',
  marginBottom: '1rem',
}

const SideBar = () => {
  const keypadButtonId__1 = useGeneratedHtmlId({
    prefix: 'keypadButton',
    suffix: 'first',
  })
  const keypadButtonId__2 = useGeneratedHtmlId({
    prefix: 'keypadButton',
    suffix: 'second',
  })
  const [selectedID, setSelectedID] = useState(keypadButtonId__1)

  return (
    <EuiPageSideBar paddingSize="s" sticky>
      <nav
        aria-label="Nav title"
        style={{
          marginTop: '3.6rem',
        }}
      >
        <Link href="/" passHref>
          <EuiKeyPadMenuItem
            id={keypadButtonId__1}
            label="Campaigns"
            isSelected={selectedID === keypadButtonId__1}
            onClick={() => setSelectedID(keypadButtonId__1)}
            style={buttonStyle}
          >
            <EuiIcon type="list" size="l" />
          </EuiKeyPadMenuItem>
        </Link>

        <Link href="/analytics" passHref>
          <EuiKeyPadMenuItem
            id={keypadButtonId__2}
            label="Analytics"
            isSelected={selectedID === keypadButtonId__2}
            onClick={() => setSelectedID(keypadButtonId__2)}
            style={buttonStyle}
          >
            <EuiIcon type="visBarVertical" size="l" />
          </EuiKeyPadMenuItem>
        </Link>
      </nav>
    </EuiPageSideBar>
  )
}

export default SideBar
