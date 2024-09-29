import React, { useEffect, useState, useCallback } from 'react'
import { Products } from './Products'
import { Sidebar } from './Sidebar'

export const ProductSection = ({ handleAddToCart, cart }) => {
    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState({
        Type: {},
        Colour: {},
        Price: {},
        Gender: {}
    })
    const [SearchTerm, setSearchTerm] = useState("")

    const apiUrl = process.env.REACT_APP_PRODUCT_DETAILS_URL

    useEffect(() => {
        fetchproducts()
    }, [filters, SearchTerm])

    const fetchproducts = useCallback(async () => {
        try {
            if (!apiUrl) {
                throw new Error('API URL is undefined. Check your .env file.');
            }
            const response = await fetch(apiUrl)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const responseData = await response.json()
            const filteredData = responseData.filter(product => {
                if (SearchTerm.length >= 3) {
                    const searchFields = [product.color, product.type, product.name, product.gender];
                    const searchMatch = searchFields.some(field =>
                        field.toLowerCase().includes(SearchTerm.toLowerCase())
                    );
                    if (!searchMatch) return false;
                }
                if (Object.keys(filters.Colour).length > 0) {
                    const activeColors = Object.keys(filters.Colour).filter(color => filters.Colour[color]);
                    if (activeColors.length > 0 && !activeColors.includes(product.color)) {
                        return false;
                    }
                }
                if (Object.keys(filters.Gender).length > 0) {
                    const activeGenders = Object.keys(filters.Gender).filter(gender => filters.Gender[gender]);
                    if (activeGenders.length > 0 && !activeGenders.includes(product.gender)) {
                        return false;
                    }
                }
                if (Object.keys(filters.Type).length > 0) {
                    const activeTypes = Object.keys(filters.Type).filter(type => filters.Type[type]);
                    if (activeTypes.length > 0 && !activeTypes.includes(product.type)) {
                        return false;
                    }
                }
                if (Object.keys(filters.Price).length > 0) {
                    const activePriceRanges = Object.keys(filters.Price).filter(range => filters.Price[range]);
                    if (activePriceRanges.length > 0) {
                        const priceMatch = activePriceRanges.some(range => {
                            if (range === "Rs 450+") {
                                return product.price >= 450;
                            } else {
                                const [min, max] = range.replace("Rs ", "").split("-").map(Number);
                                return product.price >= min && product.price <= max;
                            }
                        });
                        if (!priceMatch) return false;
                    }
                }
                return true;
            })
            setProducts(() => [...filteredData])
        } catch (e) {
            console.error(e)
        }
    }, [filters, SearchTerm, apiUrl])

    const updateFilters = (category, filter) => {
        setFilters(prevState => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [filter]: !prevState[category]?.[filter],
            },
        }))
    }

    return (
        <div className='flex w-full gap-10 h-full'>
            <div className='w-1/2 lg:w-2/5 xl:w-1/4 hidden md:block'>
                <Sidebar filters={filters} updateFilters={updateFilters} setFilters={setFilters} />
            </div>
            <div className='w-full md:w-1/2 lg:w-3/5 xl:w-3/4 h-full flex'>
                <Products products={products} SearchTerm={SearchTerm} setSearchTerm={setSearchTerm} handleAddToCart={handleAddToCart} cart={cart} />
            </div>
        </div>
    )
}
