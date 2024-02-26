"use client"

import React, { type ChangeEvent } from "react"
import s from "./SearchFilterInput.module.scss"
import Search from "./_icon/search.svg"
import classNames from "classnames"

// Определение типа для функции обратного вызова
// type SearchCallback = (searchValue: string) => void

// Компонент инпута
const SearchFilterInput: React.FC<{
  // onSearchClick: SearchCallbac
  onSubmit: (searchValue: string) => void
  onChange: (changeValue: string) => void
  searchValue: string
  placeholder?: string
  error?: string
}> = ({
  onSubmit,
  onChange,
  searchValue,
  placeholder = "Поиск по ключевым словам",
  error,
}) => {
  // const [inputValue, setInputValue] = useState<string>(searchValue)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onSubmit(searchValue)
  }

  return (
    <div className={classNames(s["label"])}>
      <form>
        <input
          className={s["input"]}
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder={placeholder}
        ></input>
        <button type="submit" className={s["btn"]} onClick={handleSearchClick}>
          <Search />
        </button>
      </form>
      {error && <span className={s["error"]}>{error}</span>}
    </div>
  )
}
export default SearchFilterInput
