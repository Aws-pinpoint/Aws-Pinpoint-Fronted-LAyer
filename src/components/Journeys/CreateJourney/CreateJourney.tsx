import { EuiTitle, EuiButton, EuiFieldText, EuiComboBox } from '@elastic/eui'
import { useCallback, useMemo, useState } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow'
import 'reactflow/dist/style.css'
import ContextMenuButton from './MenuButton/ContextMenuButton'
import { nodeTypes } from './ReactFlow/NodeType'

const options = [
  {
    label: 'Test',
  },
  {
    label: 'Duplicate',
  },
  {
    label: 'Delete',
  },
  {
    label: 'Settings',
  },
  {
    label: 'Take a tour',
  },
]

const initialNodes = [
  { id: '1', type: 'journeyEntry', position: { x: 0, y: 0 }, data: { value: 123 } }
]

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

const CreateJourney = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [journeyTitle, setJourneyTitle] = useState('')
  const [selectedOptions, setSelected] = useState([options[2]])

  const onChange = selectedOptions => {
    // We should only get back either 0 or 1 options.
    setSelected(selectedOptions)
  }

  const onConnect = useCallback(
    params => setEdges(eds => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <>
      <div>
        <EuiTitle size="l">
          <h2>Create a Journey</h2>
        </EuiTitle>
        <div className="flex justify-between mt-5">
          <div className="flex flex-col">
            <EuiFieldText
              placeholder="Journey Title"
              value={journeyTitle}
              onChange={e => setJourneyTitle(e.target.value)}
              aria-label="Use aria labels when no actual label is in use"
            />
          </div>
          <div>
            <div className="grid grid-cols-3 gap-2">
              <ContextMenuButton />
              <EuiButton onClick={() => {}} iconType="dashboardApp">
                Schedule
              </EuiButton>
              <EuiButton color="primary" fill>
                Review
              </EuiButton>
            </div>
          </div>
        </div>
        <div className="w-full h-screen mt-5">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
    </>
  )
}

export default CreateJourney
