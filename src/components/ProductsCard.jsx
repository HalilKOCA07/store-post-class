import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/productsProvider'
import "../css/products.css"

const ProductsCard = () => {

const navigate = useNavigate()
const {products, loading} = useProductsContext()
console.log(products)

  return (
    <div>
      <ul>
            <li className='flex gap-2 justify-center mt-4'> 
                <button className='btn-card'>All Products</button>
                <button className='btn-card'>laptops</button>
                <button className='btn-card'>smartphones</button>
                <button className='btn-card'>fragrances</button>
                <button className='btn-card'>skincare</button>
                <button className='btn-card'>groceries</button>
                <button className='btn-card'>home-decoration</button>
            </li>
      </ul>
        <ul className='card-list'>
            {products.map((item) => (
                <li>
                    <img className='card-img' src={item.thumbnail} alt="" />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductsCard
