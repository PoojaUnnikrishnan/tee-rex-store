import React from 'react'
import { SearchBar } from './SearchBar'
import { ProductListing } from './ProductListing'
import { NoResults } from './NoResults'

export const Products = ({ products, searchTerm, setSearchTerm, handleAddToCart, cart }) => {
    return (
        <div className='w-full flex flex-col gap-10'>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {products.length ? <ProductListing products={products} handleAddToCart={handleAddToCart} cart={cart} /> : <NoResults />}
        </div>
    )
}
