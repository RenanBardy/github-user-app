import { FC, memo } from 'react'
import style from './style.module.css'

const Title: FC = () => {
  return (
    <h1 className={style.title}>Welcome</h1>
  )
}

export default memo(Title)
