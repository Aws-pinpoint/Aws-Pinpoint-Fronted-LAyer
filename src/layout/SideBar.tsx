import {
  EuiIcon,
  EuiKeyPadMenuItem,
  EuiPageSideBar,
  useGeneratedHtmlId,
} from '@elastic/eui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CSSProperties, useEffect, useState } from 'react'

const SideBar = () => {
  const keypadButtonId_1 = useGeneratedHtmlId({
    prefix: 'keypadButton',
    suffix: 'first',
  })
  const keypadButtonId_2 = useGeneratedHtmlId({
    prefix: 'keypadButton',
    suffix: 'second',
  })
  const keypadButtonId_3 = useGeneratedHtmlId({
    prefix: 'keypadButton',
    suffix: 'third',
  })
  const keypadButtonId_4 = useGeneratedHtmlId({
    prefix: 'keypadButton',
    suffix: 'fourth',
  })
  const [selectedID, setSelectedID] = useState(keypadButtonId_1)

  const { pathname } = useRouter()
  useEffect(() => {
    if (pathname === '/') {
      setSelectedID(keypadButtonId_1)
    } else if (pathname.startsWith('/analytics')) {
      setSelectedID(keypadButtonId_2)
    } else if (pathname.startsWith('/campaigns')) {
      setSelectedID(keypadButtonId_3)
    } else if (pathname.startsWith('/settings')) {
      setSelectedID(keypadButtonId_4)
    } else {
      setSelectedID(undefined)
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
        <PageButton
          label="Analytics"
          href="/"
          keypadID={keypadButtonId_1}
          onClick={() => setSelectedID(keypadButtonId_1)}
          selectedID={selectedID}
          icontType="visualizeApp"
        />

        <PageButton
          label="Segments"
          href="/segments"
          keypadID={keypadButtonId_2}
          onClick={() => setSelectedID(keypadButtonId_2)}
          selectedID={selectedID}
          icontType="spacesApp"
        />

        <PageButton
          label="Campaigns"
          href="/campaigns"
          keypadID={keypadButtonId_3}
          onClick={() => setSelectedID(keypadButtonId_3)}
          selectedID={selectedID}
          icontType="bell"
        />

        <PageButton
          label="Settings"
          href="/settings"
          keypadID={keypadButtonId_4}
          onClick={() => setSelectedID(keypadButtonId_4)}
          selectedID={selectedID}
          icontType="managementApp"
        />
      </nav>
    </EuiPageSideBar>
  )
}

const buttonStyle: CSSProperties = {
  width: '100%',
  height: '4rem',
  marginBottom: '1rem',
}
interface PageButtonProps {
  keypadID: string
  selectedID: string
  href: string
  label: string
  onClick: () => void
  icontType: string
}
const PageButton = (props: PageButtonProps) => {
  return (
    <Link href={props.href} passHref>
      <EuiKeyPadMenuItem
        id={props.keypadID}
        label={props.label}
        isSelected={props.selectedID === props.keypadID}
        onClick={props.onClick}
        style={buttonStyle}
      >
        <EuiIcon type={props.icontType} size="l" color="inherit" />
      </EuiKeyPadMenuItem>
    </Link>
  )
}

export default SideBar
