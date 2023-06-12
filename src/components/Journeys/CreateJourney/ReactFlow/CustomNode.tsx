import { EuiIcon, EuiText, EuiButtonEmpty } from '@elastic/eui'
import { useCallback } from 'react'
import { Handle, Position } from 'reactflow'

function CustomNode({ data }) {
  const onChange = useCallback(evt => {
    console.log(evt.target.value)
  }, [])

  return (
    <div className="w-52 border-solid border-2 p-2 rounded-sm bg-white border-slate-500">
      <Handle type="target" position={Position.Top} />
      <div className="flex flex-col">
        <div className='flex px-4 py-2'>
          <EuiIcon type="annotation" />
          <div className='text-xs mt-0.5 ml-2'>Journey Entry</div>
        </div>
        <div className='w-full bg-slate-500' style={{height: "0.5px"}}></div>
        <div className='text-xs text-center p-2 '>What causes members to enter this journey?</div>
        <EuiButtonEmpty color='primary' size='xs' >Set entry condition</EuiButtonEmpty>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

export default CustomNode
