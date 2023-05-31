import { FunctionComponent } from "react"
import Link from "next/link"
import { ProtectPage } from "../../components/Auth/ProtectPage"
import Head from "next/head"
import { EuiPageHeader, EuiButton , EuiSpacer } from "@elastic/eui"
import SegmentsTable from "../../ui-kit/Table"

const Journeys: FunctionComponent = () => {
  const columns = [
    { id: 'Journey Name' },
    { id: 'Last Modified' },
    { id: 'Creation Date' },
    { id: 'Status' },
    { id: 'ID' },
  ]

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
        {/*<SegmentsTable columns={columns} />*/}
    </ProtectPage>
  )
}

export default Journeys