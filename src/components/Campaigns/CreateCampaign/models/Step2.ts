// ==========================================================================
// ==                              Step 2                                 ==
// ==========================================================================

export interface Step2 {
  segmentId: string
  holdoutPercent: number
}

export const defaultStep2: Step2 = {
  segmentId: '',
  holdoutPercent: 0,
}
