import { FC, memo, useState, useCallback } from 'react'
import { TResponseStatus } from 'types/User'
import style from './style.module.css'

type TSearchInput = {
  inputChanged: (t: string) => void
  status: TResponseStatus
}

const SearchInput: FC<TSearchInput> = ({ inputChanged, status }) => {
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
    </div>
  )
}

export default memo(SearchInput)
