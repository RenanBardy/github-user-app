import { FC, memo } from 'react'
import style from './style.module.css'

type TError = {
  error?: string
}

const Error: FC<TError> = ({ error }) => {
  if (!error) {
    return null
  }

  return (
    <div className={style.Error}>{error}</div>
  )
}

export default memo(Error)
