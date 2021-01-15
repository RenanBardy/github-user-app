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
  const [value, setValue] = useState<string>('')
  const deboucedValue = useDebounce(value, 500)
  const [results, setResults] = useState<TUserResponse>({
    status: TResponseStatus.done, list: [], error_message: '', total: null
  })

  const inputChanged = useCallback((value) => {
    setValue(value)
  }, [])

  useEffect(() => {
    if (deboucedValue !== '' && deboucedValue.length >= 3) {
      setResults({...results, total: null, status: TResponseStatus.searching})
      api.searchUserByName(deboucedValue)
        .then((data: { items: TUser[], total_count: number }) => {
          setResults({
            total: data.total_count,
            list: data.items,
            status: data.items.length ? TResponseStatus.done : TResponseStatus.notFound,
            error_message: '',
          })
        })
        .catch((err) => {
          setResults({
            total: null,
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
      <SearchInput
        inputChanged={inputChanged}
        status={results.status}
        total={!value ? null : results.total}
      />
      <SearchResults
        list={results.list}
        status={results.status}
        isTypying={!!value}
      />
      <SearchError error={results.error_message} />
    </div>
  )
}

export default SearchContainer
