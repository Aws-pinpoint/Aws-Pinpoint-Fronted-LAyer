import { EuiIcon, EuiSideNav } from '@elastic/eui'
import { useRouter } from 'next/router'
import { useState } from 'react'

const SideBar = () => {
  const { push } = useRouter()

  const [selectedItemName, setSelectedItem] = useState('Time stuff')

  const createItem = (name, url: string | undefined, data = {}) => {
    return {
      id: name,
      name,
      isSelected: selectedItemName === name,
      onClick: () => {
        setSelectedItem(name)
        if (url) push(url)
      },
      ...data,
    }
  }

  const sideNav = [
    createItem('Dashboard', '/', {
      icon: <EuiIcon type="home" />,
    }),
    createItem('Analytics', '/analytics', {
      icon: <EuiIcon type="visLine" />,
    }),
    createItem('Segments', '/segments', {
      icon: <EuiIcon type="outlierDetectionJob" />,
    }),
    createItem('Campaigns', '/campaigns', {
      icon: <EuiIcon type="bell" />,
    }),
    // createItem('Settings', '/settings', {
    //   icon: <EuiIcon type="gear" />,
    // }),
  ]

  return (
    <EuiSideNav
      heading={null}
      mobileTitle={null}
      isOpenOnMobile={true}
      items={sideNav}
      style={{ width: 192 }}
    />
  )
}

export default SideBar
