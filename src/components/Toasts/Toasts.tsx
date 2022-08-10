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
