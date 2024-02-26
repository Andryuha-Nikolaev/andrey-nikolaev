"use client"

import React from "react"
import s from "./CategoriesFilter.module.scss"
import classNames from "classnames"
import RootText from "@/ui/texts/RootText/RootText"

interface Category {
  path: string
  name: string
}

interface CategoriesFilterProps {
  categories: Category[]
  filterTitle: string
  onCategoryChange: (path: string) => void
  activePath: string
}

const CategoriesFilter: React.FC<CategoriesFilterProps> = ({
  categories,
  filterTitle,
  onCategoryChange,
  activePath,
}) => {
  return (
    <div className={s["wrap"]}>
      <div className={s["filter"]}>
        <RootText fontWeightVariant="bold" className={s["filter-title"]}>
          {filterTitle}
        </RootText>
        <div className={s["items"]}>
          {categories.map((category, index) => {
            const isActive = category.path === activePath
            return (
              <div
                className={classNames(s["item"], isActive && s["active"])}
                onClick={() => {
                  onCategoryChange(category.path)
                }}
                key={`category-filter-${index}`}
              >
                <div
                  className={classNames(s["radio"], isActive && s["active"])}
                >
                  <div className={classNames(s["point"])}></div>
                </div>
                <RootText>{category.name}</RootText>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CategoriesFilter
