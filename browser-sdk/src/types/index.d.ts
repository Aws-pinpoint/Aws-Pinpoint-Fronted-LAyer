/* eslint-disable @typescript-eslint/no-explicit-any */
export {}

declare global {
  interface Window {
    initAutomatoTracker: (appId: string, auth: string) => void
    _analytics: any
    analyticsAWSPinpoint: any
  }
}
