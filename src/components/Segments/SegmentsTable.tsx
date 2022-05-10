import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useMemo,
} from 'react'
import { EuiDataGrid, EuiCheckbox, EuiButtonEmpty } from '@elastic/eui'
import faker from '@faker-js/faker'

/**
 * Data
 */
const columns = [
  { id: 'Segment Name' },
  { id: 'Type' },
  { id: 'Segment ID' },
  { id: 'Last modified date' },
]

const DEMO_ROW = 2

const dataStore = []
for (let i = 1; i <= 3; i++) {
  dataStore.push({
    ['Segment Name']: faker.fake(
      '{{name.lastName}}, {{name.firstName}} {{name.suffix}}'
    ),
    ['Type']: faker.fake('{{internet.email}}'),
    ['Segment ID']: faker.fake('{{address.city}}'),
    ['Last modified date']: faker.fake('{{address.country}}'),
  })
}
dataStore[DEMO_ROW].account = 'OVERDUE'

/**
 * Selection
 */
const SelectionContext = createContext([])

const SelectionButton = () => {
  const [selectedRows] = useContext(SelectionContext)
  const hasSelection = selectedRows.size > 0
  return hasSelection ? (
    <EuiButtonEmpty
      size="xs"
      iconType="arrowDown"
      iconSide="right"
      onClick={() => window.alert('This is not a real control.')}
    >
      {selectedRows.size} {selectedRows.size > 1 ? 'items' : 'item'} selected
    </EuiButtonEmpty>
  ) : null
}

const SelectionHeaderCell = () => {
  const [selectedRows, updateSelectedRows] = useContext(SelectionContext)
  const isIndeterminate =
    selectedRows.size > 0 && selectedRows.size < dataStore.length
  return (
    <EuiCheckbox
      id="selection-toggle"
      aria-label="Select all rows"
      indeterminate={isIndeterminate}
      checked={selectedRows.size > 0}
      onChange={e => {
        if (isIndeterminate) {
          // clear selection
          updateSelectedRows({ action: 'clear' })
        } else {
          if (e.target.checked) {
            // select everything
            updateSelectedRows({ action: 'selectAll' })
          } else {
            // clear selection
            updateSelectedRows({ action: 'clear' })
          }
        }
      }}
    />
  )
}

const SelectionRowCell = ({ rowIndex }) => {
  const [selectedRows, updateSelectedRows] = useContext(SelectionContext)
  const isChecked = selectedRows.has(rowIndex)
  return (
    <div>
      <EuiCheckbox
        id={`${rowIndex}`}
        aria-label={`Select row ${rowIndex}, ${dataStore[rowIndex].name}`}
        checked={isChecked}
        onChange={e => {
          if (e.target.checked) {
            updateSelectedRows({ action: 'add', rowIndex })
          } else {
            updateSelectedRows({ action: 'delete', rowIndex })
          }
        }}
      />
    </div>
  )
}

const leadingControlColumns = [
  {
    id: 'selection',
    width: 32,
    headerCellRender: SelectionHeaderCell,
    rowCellRender: SelectionRowCell,
  },
]

interface SortingColumns {
  id: string
  direction: 'asc' | 'desc'
}

/**
 * Data grid
 */
const SegmentsTable = () => {
  const [visibleColumns, setVisibleColumns] = useState(
    columns.map(({ id }) => id)
  )

  const [data, setData] = useState(dataStore)
  const [sortingColumns, setSortingColumns] = useState<SortingColumns[]>([
    { id: 'custom', direction: 'asc' },
  ])

  const setSorting = sortingColumns => {
    const sortedData = [...data].sort((a, b) => {
      for (let i = 0; i < sortingColumns.length; i++) {
        const column = sortingColumns[i]
        const aValue = a[column.id]
        const bValue = b[column.id]

        if (aValue < bValue) return column.direction === 'asc' ? -1 : 1
        if (aValue > bValue) return column.direction === 'asc' ? 1 : -1
      }

      return 0
    })

    setData(sortedData)
    setSortingColumns(sortingColumns)
  }

  const rowSelection = useReducer((rowSelection, { action, rowIndex }) => {
    if (action === 'add') {
      const nextRowSelection = new Set(rowSelection)
      nextRowSelection.add(rowIndex)
      return nextRowSelection
    } else if (action === 'delete') {
      const nextRowSelection = new Set(rowSelection)
      nextRowSelection.delete(rowIndex)
      return nextRowSelection
    } else if (action === 'clear') {
      return new Set()
    } else if (action === 'selectAll') {
      return new Set(data.map((_, index) => index))
    }
    return rowSelection
  }, new Set())

  const rowClasses = useMemo(() => {
    const rowClasses = {
      [DEMO_ROW]: 'euiDataGridRow--rowClassesDemo',
    }
    rowSelection[0].forEach(rowIndex => {
      rowClasses[rowIndex] = 'euiDataGridRow--rowClassesDemoSelected'
    })
    return rowClasses
  }, [rowSelection])

  return (
    <SelectionContext.Provider value={rowSelection}>
      <div>
        <EuiDataGrid
          aria-label="Top EUI contributors"
          columns={columns}
          columnVisibility={{ visibleColumns, setVisibleColumns }}
          rowCount={data.length}
          renderCellValue={({ rowIndex, columnId }) => data[rowIndex][columnId]}
          sorting={{ columns: sortingColumns, onSort: setSorting }}
          leadingControlColumns={leadingControlColumns}
          toolbarVisibility={{
            additionalControls: <SelectionButton />,
          }}
          gridStyle={{ rowClasses, rowHover: 'none' }}
        />
      </div>
    </SelectionContext.Provider>
  )
}

export default SegmentsTable
