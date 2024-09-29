import { data } from '../Data/data'
export const Sidebar = ({ filters, updateFilters, setFilters }) => {
    return (
        <div className='mx-4 p-8 shadow-lg mt-28'>
            {data.clothingOptions.map((clothingItem) => (
                <div className='py-3' key={clothingItem.value}>
                    <div className='font-bold'>{clothingItem.value}</div>
                    <ul className='py-2'>
                        {clothingItem.options.map((item, i) => (
                            <li className='flex items-center gap-4' key={i} onClick={() => updateFilters(clothingItem.value, item)}>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill={filters[clothingItem.value]?.[item] ? "#000" : "#C4C4C4"}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="12" height="12" />
                                    {filters[clothingItem.value]?.[item] && (
                                        <path d="M2 6 L5 9 L10 2" stroke="white" strokeWidth="1" fill="none" />
                                    )}
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
