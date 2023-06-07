import { FunctionComponent } from "react"
import Link from "next/link"
import { ProtectPage } from "../../components/Auth/ProtectPage"
import Head from "next/head"
import { EuiPageHeader, EuiButton , EuiSpacer } from "@elastic/eui"
import SegmentsTable from "../../ui-kit/Table"
import useJourneysTable from "../../hooks/Journeys/useJourneysTable"
import useJourneysList from "../../hooks/Journeys/useJourneysList"

const Journeys: FunctionComponent = () => {
  const [journeysList] = useJourneysList()
  const [columns, dataStore] = useJourneysTable(journeysList)

  return (
    <ProtectPage>
        <Head>
            <title>Automoato - Journeys</title>
        </Head>

        <EuiPageHeader
            bottomBorder
            pageTitle="Journeys"
            iconType="visMapRegion"
            rightSideItems={[
                <Link
                    key="create-journey-action"
                    href="/journeys/create-journey"
                    passHref
                >
                    <EuiButton fill>Create a journey</EuiButton>
                </Link>
            ]}
        />
        <EuiSpacer size="m" />
        <SegmentsTable columns={columns} dataStore={dataStore} />
    </ProtectPage>
  )
}

export default Journeys