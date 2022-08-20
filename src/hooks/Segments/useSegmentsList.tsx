import { SetStateAction, useAtom } from 'jotai'
import { useEffect } from 'react'
import automatoApi from '../../api/automato/client'
import { SegmentsList } from '../../components/Segments/models'
import { useToasts } from '../../components/Toasts/Toasts'
import { SegmentsListAtom } from '../../store/store'

const useSegmentsList = (): [
  SegmentsList[],
  (update?: SetStateAction<SegmentsList[]>) => void
] => {
  const { setError } = useToasts()
  const [segmentsList, setSegmentsList] = useAtom(SegmentsListAtom)

  useEffect(() => {
    ;(async () => {
      if (segmentsList.length === 0)
        try {
          const newSegmentsList = await automatoApi.getSegments()
          setSegmentsList(newSegmentsList)
        } catch (error) {
          setError('Error getting segments', error.message)
        }
    })()
  }, [])

  return [segmentsList, setSegmentsList]
}

export default useSegmentsList
