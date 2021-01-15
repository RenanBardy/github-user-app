import { FC, memo } from 'react'
import style from './style.module.css'

type TError = {
  error?: string
}

const Error: FC<TError> = ({ error }) => 
  error ? (
    <div className={style.Error}>{error}</div>
  ) : null

export default memo(Error)
