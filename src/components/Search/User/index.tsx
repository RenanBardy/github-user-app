import { FC, memo } from 'react'
import style from './style.module.css'

type TUser = {
  name: string
  avatar: string
  url: string
}

const User: FC<TUser> = ({ name, avatar, url }) => {
  return (
    <a href={url} target={'_blank'} className={style.user}>
      <div className={style.userImage}>
        <img src={avatar} />
      </div>
      <div className={style.profile}>
        <h4>{name}</h4>
      </div>
    </a>
  )
}

export default memo(User)
