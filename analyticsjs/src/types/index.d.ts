export {}

declare global {
  interface Window {
    automatoTracker: (appId: string, auth: string) => void
  }
}
