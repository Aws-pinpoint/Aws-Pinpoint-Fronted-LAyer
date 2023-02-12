import Head from 'next/head'
import { EuiTitle } from '@elastic/eui'
import { ProtectPage } from '../../../components/Auth/ProtectPage'
import { useEffect, useState } from 'react'
import { Segment } from '../../../components/Segments/CreateSegment/models'
import automatoApi from '../../../api/automato/client'
import { GetServerSideProps } from 'next'
import { Title } from '../../../ui-kit/Form'
import { useToasts } from '../../../components/Toasts/Toasts'

const SegmentDetails = ({ segmentId }: { segmentId: string }) => {
  const [segment, setSegment] = useState<Segment | null>(null)

  const { setError } = useToasts()
  useEffect(() => {
    ;(async () => {
      try {
        const newSegment = await automatoApi.getSegment(segmentId)
        console.log(newSegment)

        setSegment(newSegment)
      } catch (err) {
        setError('Error getting segment', err.message)
      }
    })()
  }, [])

  return (
    <ProtectPage>
      <Head>
        <title>Automoato - Segment Details - x</title>
      </Head>

      <EuiTitle size="l">
        <h2>Segment Details: </h2>
      </EuiTitle>

      {segment !== null && (
        <div className="mt-4">
          <Title disableMb value="Segment name" />
          <p>{segment.name}</p>

          <Title disableMb className="mt-4" value="Segment ID" />
          <p>{segmentId}</p>

          {segment.segmentGroups.map((segmentGroup, i) => (
            <div
              key={`segmentgroup-${i}`}
              // className="border-solid border-x-0 border-t-0 border-slate-300 "
            >
              <Title
                className="mt-8"
                size="m"
                value={`Segment group ${i + 1}`}
              />
              <div className="flex gap-6">
                <div>
                  <Title className="mt-4" value="Base segment" disableMb />
                  <p>Include {segmentGroup.includeAudiences} from:</p>
                  <p
                    style={{
                      border: '2rem',
                      borderColor: 'red',
                    }}
                  >
                    {segmentGroup.baseSegments.length === 0 ||
                    segmentGroup.baseSegments === 'all'
                      ? 'all '
                      : '? '}
                    segments
                  </p>

                  <Title className="mt-4" value="Logical operator" disableMb />
                  <p>{segmentGroup.criteriasLogic}</p>
                </div>
                {segmentGroup.criterias.map((criteria, j) => (
                  <div
                    key={`criteria-${j}`}
                    className="border-0 border-l border-solid border-slate-300 pl-2"
                  >
                    <Title
                      className="mt-4"
                      size="xs"
                      value={`Criteria ${j + 1}`}
                    />
                    {criteria.filters.map((filter, k) => (
                      <div key={`filter-${k}`} className="mb-2">
                        <Title disableMb size="xxs" value={filter.attribute} />
                        <p>
                          {filter.operator} {filter.value}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </ProtectPage>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const segmentId = query.id as string
  return { props: { segmentId } }
}

export default SegmentDetails
