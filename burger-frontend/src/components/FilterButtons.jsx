import React from 'react'
import FilterButton from './FilterButton';
import { useDispatch} from 'react-redux';
import { setFilter } from '../redux/slices/productSlice';

const FilterButtons = () => {
    const filtersList = ['ALL','VEG','NONVEG','BURGER','FRIES','DRINK','SIDES','WRAP','PIZZA','MEAL'];
    const dispatch = useDispatch();
    const handleClick = (filter)=>{
        // if(filter === 'ALL')
        //     setFilter
        dispatch(setFilter(filter))
    }
    return (
        <div className='flex justify-center'>
            <div className='flex'>
                {filtersList.map(filter=>
                    <FilterButton key={filter} onClick={()=>handleClick(filter)} filter={filter}/>
                )}
            </div>
        </div>

    )
}

export default FilterButtons