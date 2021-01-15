import { FC, memo } from 'react'
import style from './style.module.css'

const data = new Date()

const Footer: FC = () => {
  return (
    <footer className={style.Footer}>Powered by Renan Bardy | {data.getFullYear()}</footer>
  )
}

export default memo(Footer)
