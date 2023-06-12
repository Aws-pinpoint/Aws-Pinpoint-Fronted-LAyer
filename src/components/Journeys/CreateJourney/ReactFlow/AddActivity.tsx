import { EuiButtonIcon } from '@elastic/eui'
import { useCallback } from 'react'
import { Handle, Position } from 'reactflow'

function AddActivityNode({ data }) {
  const onChange = useCallback(evt => {
    console.log(evt.target.value)
  }, [])

  return (
    <div className="border-solid border-2 border-blue-600 rounded-3xl">
      <Handle type="target" position={Position.Top} />
        <EuiButtonIcon iconType="plus" />
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

export default AddActivityNode
