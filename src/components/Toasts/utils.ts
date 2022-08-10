import React from 'react'
import { ToastsAction } from '../../store/store'

export const setError = (
  setToasts: (update?: ToastsAction) => void,
  title: string,
  message: string
) => {
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
