export type GroupsLogic = 'AND' | 'OR' | 'NOR'
export type Inclusion = 'all' | 'any' | 'none'

export interface Segment {
  name: string
  logic: GroupsLogic
  segmentGroups: SegmentGroup[]
}

export interface SegmentGroup {
  includeAudiences: Inclusion
  baseSegments: 'all' | SegmentGroup[]
  criterias: Criteria[]
  criteriasLogic: GroupsLogic
}

export type Filter = StandardFilter | ActivityFilter
export type FilterAttribute = StandardFilterAttribute | ActivityFilterAttribute
export type FilterOperator = StandardFilterOperator | ActivityFilterOperator

export interface Criteria {
  filters: Filter[]
}

export type StandardFilterAttribute =
  | 'Platform'
  | 'AppVersion'
  | 'Make'
  | 'Model'
  | 'Country'
  | 'Locale'
export type StandardFilterOperator = 'Is' | 'Is not'
export interface StandardFilter {
  attribute: StandardFilterAttribute
  operator: StandardFilterOperator
  value: string
}

export type ActivityFilterAttribute = 'Active' | 'Inactive'
export type ActivityFilterOperator = 'During'
export type ActivityFilterValue =
  | 'last_day'
  | 'last_7days'
  | 'last_14days'
  | 'last_30days'
export interface ActivityFilter {
  attribute: ActivityFilterAttribute
  operator: ActivityFilterOperator
  value: ActivityFilterValue
}

// Defaults

export const defaultStandardFilter: StandardFilter = {
  attribute: 'Platform',
  operator: 'Is',
  value: '',
}

export const defaultActivityFilter: ActivityFilter = {
  attribute: 'Active',
  operator: 'During',
  value: 'last_day',
}

export const defaultCriteria: Criteria = {
  filters: [defaultStandardFilter],
}

export const defaultSegmentGroup: SegmentGroup = {
  includeAudiences: 'any',
  baseSegments: 'all',
  criterias: [],
  criteriasLogic: 'AND',
}

// Options

export const includeAudiencesOptions = [
  { value: 'any', label: 'Include any audiences' },
  { value: 'all', label: 'Include all audiences' },
]

export const criteriaLogicOptions = [
  { value: 'AND', text: 'AND' },
  { value: 'OR', text: 'OR' },
  { value: 'NOR', text: 'NOR' },
]

export const attributeOptions = [
  { value: 'Standard Attributes', text: 'Standard Attributes', disabled: true },

  { value: 'Platform', text: 'Platform' },
  { value: 'AppVersion', text: 'AppVersion' },
  { value: 'Make', text: 'Make' },
  { value: 'Model', text: 'Model' },
  { value: 'Country', text: 'Country' },
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
export const activityValuesOptions = [
  { value: 'last_day', text: 'the last day' },
  { value: 'last_7days', text: 'the last 7 days' },
  { value: 'last_14days', text: 'the last 14 days' },
  { value: 'last_30days', text: 'the last 30 days' },
]
