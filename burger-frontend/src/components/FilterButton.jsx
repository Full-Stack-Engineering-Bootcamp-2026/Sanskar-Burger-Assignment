import React from 'react'
import Button from './Button'
// import { useDispatch } from 'react-redux'

const FilterButton = ({filter,onClick}) => {
    // const dispatch = useDispatch();
  return (
    <Button onClick={onClick}>
        {filter}
    </Button>
  )
}

export default FilterButton