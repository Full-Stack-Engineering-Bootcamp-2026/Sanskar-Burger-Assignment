const FilterButtons = ({ selectedCategory, selectedType, setSelectedCategory, setSelectedType }) => {
    const categories = ['BURGER', 'FRIES', 'DRINK', 'SIDES', 'WRAP', 'PIZZA', 'MEAL'];
    const type = ['VEG', 'NONVEG'];

    const handleClick = (filter) => {
        if (categories.includes(filter)) {
            if (selectedCategory.includes(filter)) {
                setSelectedCategory(selectedCategory.filter(cat => cat !== filter));
            }
            else {
                setSelectedCategory([...selectedCategory, filter]);
            }
        }
        if (type.includes(filter)) {
            setSelectedType(prev => prev === filter ? "" : filter);
        }
    }
    return (
        <div className='flex justify-around'>
            <div className='flex'>
                {categories.map(filter =>
                    <button key={filter} className={`${!selectedCategory.includes(filter) ? "bg-[#1f1f1f]" : "bg-[#f31c0d]"} hover:bg-[#f31c0d] transition duration-200 text-white font-bold py-2 px-4 rounded-full mx-1`} onClick={() => handleClick(filter)} >
                        {filter}
                    </button>
                )}
            </div>
            <div className='flex'>
                {type.map(filter =>
                    <button key={filter} className={`${!(selectedType === filter) ? "bg-[#1f1f1f]" : "bg-[#f31c0d]"} hover:bg-[#f31c0d] transition duration-200 text-white font-bold py-2 px-4 rounded-full mx-1`} onClick={() => handleClick(filter)} >
                        {filter}
                    </button>
                )}
            </div>
        </div>

    )
}

export default FilterButtons