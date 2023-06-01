import { ProtectPage } from '../../components/Auth/ProtectPage'
import Head from 'next/head'
import { EuiTitle } from '@elastic/eui'
import { useCallback } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow'
import 'reactflow/dist/style.css'

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
]

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

const CreateJourneyPage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    params => setEdges(eds => addEdge(params, eds)),
    [setEdges]
  )
  return (
    <ProtectPage>
      <Head>
        <title>Automoato - Create a Journey</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Create a Journey</h2>
        </EuiTitle>
        <div className='w-full h-screen mt-5'>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          >
            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
    </ProtectPage>
  )
}

export default CreateJourneyPage
