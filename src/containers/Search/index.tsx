import { FC, useCallback, useState, useEffect } from 'react'
import api from 'api'
import { TUserResponse, TResponseStatus, TUser } from 'types/User'
import useDebounce from 'hooks/useDebounce'
import SearchTitle from 'components/Search/Title'
import SearchInput from 'components/Search/Input'
import SearchResults from 'components/Search/Results'
import SearchError from 'components/Search/Error'
import style from 'components/Search/style.module.css'

const SearchContainer: FC = () => {
  const [results, setResults] = useState<TUserResponse>({ status: TResponseStatus.done, list: [], error_message: '' })
  const [value, setValue] = useState<string>('')
  const deboucedValue = useDebounce(value, 500)

  const inputChanged = useCallback((value) => {
    setValue(value)
  }, [])

  useEffect(() => {
    if (deboucedValue !== '' && deboucedValue.length >= 3) {
      setResults({...results, status: TResponseStatus.searching})
      api.searchUserByName(deboucedValue)
        .then((data: { items: TUser[] }) => {
          setResults({
            list: data.items,
            error_message: '',
            status: data.items.length ? TResponseStatus.done : TResponseStatus.notFound
          })
        })
        .catch((err) => {
          setResults({
            list: [],
            status: TResponseStatus.error,
            error_message: err.response && err.response.status
              ? err.response.data.message
              : 'API error: Please try again later'
          })
        })
    }
  }, [deboucedValue])

  return (
    <div className={style.SearchContainer}>
      <SearchTitle />
      <SearchInput inputChanged={inputChanged} status={results.status} />
      <SearchResults list={results.list} status={results.status} isTypying={!!value} />
      <SearchError error={results.error_message} />
    </div>
  )
}

export default SearchContainer
