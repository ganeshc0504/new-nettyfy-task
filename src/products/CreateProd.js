import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct } from '../app/product-slice/ProductSlice'

const CreateProd = () => {

    const dispatch = useDispatch()

    const [newProd, setNewProd] = useState({
        title:"",
        category:"",
        price:"",
        discountPercentage:"",
        rating:"",
        stock:"",
        brand:""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target
        setNewProd({...newProd,[name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("newProd :",newProd);
        dispatch(createProduct(newProd))
        setNewProd({
            title:"",
            category:"",
            price:"",
            discount:"",
            rating:"",
            stock:"",
            brand:""
        })
    }

  return (
    <div className='d-block'>
    <form onSubmit={handleSubmit} className='d-block p-5 bg-danger'>
        <div className='p-2'>
        <input type='text' placeholder='Title' name='title' style={{width:"300px"}} value={newProd.title} onChange={(e)=>handleChange(e)} />
        </div>
        <div className='p-2'>
        <input type='text' placeholder='Category' name='category' style={{width:"300px"}} value={newProd.category} onChange={(e)=>handleChange(e)} />
        </div>
        <div className='p-2'  >
        <input type='text' placeholder='Price' name='price' style={{width:"300px"}} value={newProd.price} onChange={(e)=>handleChange(e)} />
        </div>
        <div className='p-2'>
        <input type='text' placeholder='Discount' name='discountPercentage' style={{width:"300px"}} value={newProd.discountPercentage} onChange={(e)=>handleChange(e)} />
        </div>
        <div className='p-2'>
        <input type='text' placeholder='Rating' name='rating' style={{width:"300px"}} value={newProd.rating} onChange={(e)=>handleChange(e)} />
        </div>
        <div className='p-2'>
        <input type='text' placeholder='Stock' name='stock' style={{width:"300px"}} value={newProd.stock} onChange={(e)=>handleChange(e)} />
        </div>
        <div className='p-2'>
        <input type='text' placeholder='Brand' name='brand' style={{width:"300px"}} value={newProd.brand} onChange={(e)=>handleChange(e)} />
        </div>
        < br/>
        <input type='submit' />
    </form>
    </div>
  )
}

export default CreateProd