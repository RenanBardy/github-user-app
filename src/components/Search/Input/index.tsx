import { FC, memo, useState, useCallback } from 'react'
import { TUserResponse, TResponseStatus } from 'types/User'
import style from './style.module.css'

type TSearchInput = {
  inputChanged: (t: string) => void
} & Pick<TUserResponse, 'total' | 'status'>

const SearchInput: FC<TSearchInput> = ({ inputChanged, status, total }) => {
  const [isFocused, setFocus] = useState<boolean>(false)

  const onChange = useCallback((e) => {
    const value = e.target.value
    setFocus(value !== '')
    inputChanged(value)
  }, [])

  return (
    <div className={style.SearchInput}>
      <input
        id={'search-input'}
        autoComplete={'off'}
        placeholder={'Search Github users'}
        onChange={onChange}
        className={
          isFocused && status !== TResponseStatus.error ? style.SearchInputFocused : ''
        }
      />
      <label htmlFor="search-input"></label>
      <span>{total && `${total} found`}</span>
    </div>
  )
}

export default memo(SearchInput)
