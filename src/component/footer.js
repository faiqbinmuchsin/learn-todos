import React from 'react'
import FilterLink from '../container/filter-link'
import {visibilityFilterType} from '../redux/visibility-filter'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={visibilityFilterType.VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={visibilityFilterType.VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={visibilityFilterType.VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)

export default Footer
