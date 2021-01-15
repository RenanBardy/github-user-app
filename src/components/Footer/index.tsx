import { FC, memo } from 'react'
import style from './style.module.css'

const date = new Date()

const Footer: FC = () => (
  <footer className={style.Footer}>
    Powered by Renan Bardy | {date.getFullYear()}
  </footer>
)

export default memo(Footer)
