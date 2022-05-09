import {
  EuiIcon,
  EuiKeyPadMenuItem,
  EuiPageSideBar,
  useGeneratedHtmlId,
} from '@elastic/eui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CSSProperties, useEffect, useState } from 'react'

const buttonStyle: CSSProperties = {
  width: '100%',
  height: '4rem',
  marginBottom: '1rem',
}

const SideBar = () => {
  const keypadButtonId_1 = useGeneratedHtmlId({
    prefix: 'keypadButton',
    suffix: 'first',
  })
  const keypadButtonId_2 = useGeneratedHtmlId({
    prefix: 'keypadButton',
    suffix: 'second',
  })
  const [selectedID, setSelectedID] = useState(keypadButtonId_1)

  const { pathname } = useRouter()
  useEffect(() => {
    if (pathname === '/') {
      setSelectedID(keypadButtonId_1)
    } else if (pathname === '/analytics') {
      setSelectedID(keypadButtonId_2)
    }
  }, [pathname])

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
            id={keypadButtonId_1}
            label="Campaigns"
            isSelected={selectedID === keypadButtonId_1 || pathname === '/'}
            onClick={() => setSelectedID(keypadButtonId_1)}
            style={buttonStyle}
          >
            <EuiIcon type="list" size="l" />
          </EuiKeyPadMenuItem>
        </Link>

        <Link href="/analytics" passHref>
          <EuiKeyPadMenuItem
            id={keypadButtonId_2}
            label="Analytics"
            isSelected={
              selectedID === keypadButtonId_2 || pathname === '/analytics'
            }
            onClick={() => setSelectedID(keypadButtonId_2)}
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
