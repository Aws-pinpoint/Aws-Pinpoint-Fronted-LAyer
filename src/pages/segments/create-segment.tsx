import { FunctionComponent, useState } from 'react'
import Head from 'next/head'
import { EuiFieldText, EuiTitle } from '@elastic/eui'

const CreateSegment: FunctionComponent = () => {
  const [segmentName, setSegmentName] = useState('')
  const handleSegmentName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSegmentName(e.target.value)
  }

  return (
    <>
      <Head>
        <title>Create a Segment</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Create a Segment</h2>
        </EuiTitle>

        <EuiTitle size="s" className="mb-2">
          <h4>Segment Name</h4>
        </EuiTitle>
        <EuiFieldText
          placeholder="Segment Name"
          value={segmentName}
          onChange={handleSegmentName}
        />
      </div>
    </>
  )
}

export default CreateSegment
