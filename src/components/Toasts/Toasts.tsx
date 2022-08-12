import { EuiGlobalToastList } from '@elastic/eui'
import { Toast } from '@elastic/eui/src/components/toast/global_toast_list'
import { useAtom } from 'jotai'
import { ToastsAtom } from '../../store/store'

export const Toasts = () => {
  const [toasts, setToasts] = useAtom(ToastsAtom)

  const removeToast = (removedToast: Toast) => {
    setToasts({ type: 'remove', toastId: removedToast.id })
  }

  return (
    <EuiGlobalToastList
      toasts={toasts}
      dismissToast={removeToast}
      toastLifeTimeMs={6000}
    />
  )
}

export const useToasts = (): {
  setError: (title: string, message: string) => void
  setSuccess: (title: string, message: string) => void
} => {
  const [, setToasts] = useAtom(ToastsAtom)

  const setError = (title: string, message: string) => {
    setToasts({
      type: 'add',
      toast: {
        id: Math.random().toString(),
        title,
        color: 'danger',
        iconType: 'help',
        text: message,
      },
    })
  }

  const setSuccess = (title: string, message: string) => {
    setToasts({
      type: 'add',
      toast: {
        id: Math.random().toString(),
        title,
        color: 'success',
        iconType: 'user',
        text: message,
      },
    })
  }

  return { setError, setSuccess }
}
