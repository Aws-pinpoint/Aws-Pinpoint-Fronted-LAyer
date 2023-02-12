import { useState } from 'react'
import { EuiCollapsibleNav, EuiButtonIcon } from '@elastic/eui'
import SideBar from './SideBar'

export default () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(
    JSON.parse(
      String(localStorage.getItem('euiCollapsibleNavExample--isDocked'))
    ) || false
  )
  const [navIsDocked, setNavIsDocked] = useState<boolean>(
    JSON.parse(
      String(localStorage.getItem('euiCollapsibleNavExample--isDocked'))
    ) || false
  )

  return (
    <>
      <EuiCollapsibleNav
        isOpen={navIsOpen}
        isDocked={navIsDocked}
        size={240}
        button={
          <EuiButtonIcon
            display="empty"
            iconType="menu"
            aria-label="menu"
            onClick={() => setNavIsOpen(isOpen => !isOpen)}
          />
        }
        onClose={() => setNavIsOpen(false)}
      >
        <SideBar />
      </EuiCollapsibleNav>
    </>
  )
}
