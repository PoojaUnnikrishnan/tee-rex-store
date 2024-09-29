export const ProductListing = ({ products, handleAddToCart, cart }) => {
    return (
        < div className='grid grid-cols-1 xl:grid-cols-3 gap-20' >
            {
                products.map((item, index) => (
                    <div key={index} className='p-2 shadow-xl flex flex-col items-center' >
                        <div>
                            <div>
                                <p className='font-bold text-sm absolute p-1'>{item.name}</p>
                                <img src={item.imageURL} alt={item.name} className='h-[150px] w-[250px]' />
                            </div>
                            <div className='flex py-2 justify-between'>
                                <p className='items-start xl:pl-2 font-extrabold text-sm'>Rs {item.price}</p>
                                <button className='bg-black text-white py-1 px-3' onClick={() => handleAddToCart(item)}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
