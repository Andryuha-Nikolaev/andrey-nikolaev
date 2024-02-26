"use client"

import React, { useState, type ChangeEvent, useEffect } from "react"
import s from "./SearchInput.module.scss"
import Search from "./_icon/search.svg"
import classNames from "classnames"

// Определение типа для функции обратного вызова
type SearchCallback = (searchValue: string) => void

// Компонент инпута
const SearchInput: React.FC<{
  onSearchClick: SearchCallback
  searchValue: string
  placeholder?: string
  containerClassName?: string
}> = ({
  onSearchClick,
  searchValue,
  placeholder = "Поиск по ключевым словам",
  containerClassName,
}) => {
  const [inputValue, setInputValue] = useState<string>(searchValue)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (onSearchClick) {
      onSearchClick(inputValue)
    }
  }

  useEffect(() => {
    setInputValue(searchValue)
  }, [searchValue])

  return (
    <div
      className={classNames(
        s["label"],
        containerClassName && containerClassName
      )}
    >
      <form>
        <input
          className={s["input"]}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
        ></input>
        <button type="submit" className={s["btn"]} onClick={handleSearchClick}>
          <Search />
        </button>
      </form>
    </div>
  )
}
export default SearchInput
