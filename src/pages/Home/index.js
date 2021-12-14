import React from 'react'
import BestProduct from './components/BestProduct'
import BlogPosts from './components/BlogPosts'
import CategoryMenu from './components/CategoryMenu'
import CustomerQuotes from './components/CustomerQuotes'

export default function HomePage() {
    return (
        <div className='homepage'>
            <CategoryMenu />
            <BestProduct title="Best selling products" />
            <BestProduct title="Best from Farmers" />
            <CustomerQuotes />
            <BlogPosts />
        </div>
    )
}

