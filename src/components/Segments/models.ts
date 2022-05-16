import _uniqueId from 'lodash/uniqueId'

export interface StandardFilter {
  attribute: string
  operator: 'Is' | 'Is not'
  value: string
}
export const defaultStandardFilter: StandardFilter = {
  attribute: '',
  operator: 'Is',
  value: '',
}

export interface ActivityFilter {
  attribute: 'Active' | 'Inactive'
  operator: 'During'
  value: 'last_day' | 'last_7days' | 'last_14days' | 'last_30days'
}
export const defaultActivityFilter: ActivityFilter = {
  attribute: 'Active',
  operator: 'During',
  value: 'last_day',
}

export interface Criteria {
  filters: (StandardFilter | ActivityFilter)[]
  logic: 'AND' | 'OR' | 'NOR'
}

export const defaultCriteria: Criteria = {
  filters: [defaultStandardFilter],
  logic: 'AND',
}

export interface SegmentGroup {
  includeAudiences: 'all' | 'any'
  baseSegments: 'all' | SegmentGroup[]
  criterias: Criteria[]
}

export const defaultSegmentGroup: SegmentGroup = {
  includeAudiences: 'any',
  baseSegments: 'all',
  criterias: [],
}

export const includeAudiencesOptions = [
  { value: 'any', label: 'Include any audiences' },
  { value: 'all', label: 'Include all audiences' },
]

export const attributeOptions = [
  { value: 'Standard Attributes', text: 'Standard Attributes', disabled: true },
  { value: 'Platform', text: 'Platform' },
  { value: 'AppVersion', text: 'AppVersion' },
  { value: 'Make', text: 'Make' },
  { value: 'Model', text: 'Model' },
  { value: 'Country', text: 'Country' },
  { value: 'AppVersion', text: 'AppVersion' },
  { value: 'Locale', text: 'Locale' },
  { value: 'Activity', text: 'Activity', disabled: true },
  { value: 'Active', text: 'Active' },
  { value: 'Inactive', text: 'Inactive' },
]

export const standardOperatorOptions = [
  { value: 'Is', text: 'Is' },
  { value: 'Is not', text: 'Is not' },
]
export const activityOperatorOptions = [{ value: 'During', text: 'During' }]
