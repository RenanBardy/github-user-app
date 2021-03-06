import { FC, memo, useMemo } from 'react'
import { TUserResponse, TResponseStatus } from 'types/User'
import User from 'components/Search/User'
import style from './style.module.css'

export type TResults = {
  isTypying: boolean
} & Pick<TUserResponse, 'list' | 'status'>

const ResultsComponent: FC<TResults> = ({ status, list, isTypying }) => {
  const $component = useMemo(() => {
    if (status === TResponseStatus.searching) {
      return <span className={style.ResultInfo} data-cy={'result-search-message'}>
        Searching user...
      </span>
    }

    if (status === TResponseStatus.notFound) {
      return <span className={style.ResultInfo} data-cy={'result-not_found-message'}>
        Sorry, no user found
      </span>
    }

    if (list.length) {
      return list.map(user => (
        <User
          key={user.login}
          name={user.login}
          avatar={user.avatar_url}
          url={`https://github.com/${user.login}`}
        />
      ))
    }
    if (status === TResponseStatus.done) {
      return <span className={style.ResultInfo} data-cy={'result-small_word-message'}>
        Pls, inform at least 3 letters
      </span>
    }
  }, [status, list, isTypying])

  return (
    <div className={style.Result} style={{ visibility: isTypying ? 'visible' : 'hidden' }}>
      { $component }
    </div>
  )
}


export default memo(ResultsComponent)
