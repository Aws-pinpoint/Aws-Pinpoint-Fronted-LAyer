import { SetStateAction, useAtom } from 'jotai'
import { useEffect } from 'react'
import automatoApi from '../../api/automato/client'
import { JourneysList } from '../../components/Journeys/model'
import { useToasts } from '../../components/Toasts/Toasts'
import { JourneysListAtom } from '../../store/store'

const useJourneysList = (): [
    JourneysList[],
  (update?: SetStateAction<JourneysList[]>) => void
] => {
  const { setError } = useToasts()
  const [journeysList, setJourneysList] = useAtom(JourneysListAtom)

  useEffect(() => {
    ;(async () => {
      if (journeysList.length === 0)
        try {
          const newJourneysList = await automatoApi.getJourneys()
          console.log(newJourneysList)
          setJourneysList(newJourneysList)
        } catch (error) {
          setError('Error getting segments', error.message)
        }
    })()
  }, [])

  return [journeysList, setJourneysList]
}

export default useJourneysList
