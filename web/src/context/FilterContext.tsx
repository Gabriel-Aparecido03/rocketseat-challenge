'use client'

import { ReactNode, createContext, useState } from "react";

type Section = 'all' | 't-shirts' | 'mugs'
type Category = 'newest' | 'price-low' | 'price-high' | 'best-seller'
type SortOrder = 'asc' | 'desc'
type SortField = 'price_in_cents' | 'created_at' | 'sales'

interface CreateContextType {
  section: Section
  changeSection: (section: Section) => void
  changeSearch: (text: string) => void
  search: string
  category: Category
  changeCategory: (category: Category) => void
  page: number
  changePage: (page: number) => void
  sortOrder: SortOrder
  sortField: SortField
}

export const FilterContext = createContext({} as CreateContextType)

export function FilterContextProvider({ children }: { children: ReactNode }) {

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<Category>('newest')
  const [section, setSection] = useState<Section>('all')

  const [ page, setPage ] = useState(1)
  const [ sortOrder, setSortOrder ] = useState<SortOrder>('desc')
  const [ sortField, setSortField ] = useState<SortField>('created_at')

  const mappingCategory = {
    'newest' : { order : 'desc' , field : 'created_at'} as const,
    'price-low' : { order : 'asc' , field : 'price_in_cents'} as const,
    'price-high' : { order : 'desc' , field : 'price_in_cents'} as const,
    'best-seller' : { order : 'desc' , field : 'sales'} as const,
  }

  function changeSection(newSection: Section) {
    setSection(newSection)
  }

  function changeCategory(newCategory: Category) {
    setSortField(mappingCategory[newCategory].field)
    setSortOrder(mappingCategory[newCategory].order)
    setCategory(newCategory)
  }

  function changeSearch(text: string) {
    setSearch(text)
  }

  function changePage(newPage: number) {
    setPage(newPage)
  }

  return (
    <FilterContext.Provider value={{
      category,
      changeCategory,
      changeSection,
      search,
      section,
      changeSearch,
      changePage,
      page,
      sortField,
      sortOrder
    }}>
      {children}
    </FilterContext.Provider>
  )
}