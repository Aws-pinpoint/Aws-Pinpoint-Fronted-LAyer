// ==========================================================================
// ==                              Step 2                                 ==
// ==========================================================================

export interface Step2 {
  segmentName: string
  holdoutPercent: number
}

export const defaultStep2: Step2 = {
  segmentName: '',
  holdoutPercent: 0,
}
