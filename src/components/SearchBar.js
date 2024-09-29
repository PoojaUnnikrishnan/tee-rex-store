export const SearchBar = ({ SearchTerm, setSearchTerm }) => {
    return (
        <div className='flex justify-between xxs:justify-center pt-10 w-full gap-4'>
            <input placeholder='Search for products...' value={SearchTerm} onChange={e => setSearchTerm(e.target.value)} className='border-b border-black text-xs md:text-sm xs:pr-32 outline-0' />
            <div className='flex gap-1 md:gap-4'>
                <div className='bg-black md:bg-[#979292] px-3 py-1 rounded-lg flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <div className='bg-black px-3 py-1 rounded-lg md:hidden'>
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                        <path d="M26 5H6V6L14 16H18L26 6V5Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M14 23L18 26V16H14V23Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                    </svg>
                </div >
            </div>
        </div >
    )
}
