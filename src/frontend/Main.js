import React, { useEffect } from 'react'
import FrontPart from './FrontPart'
import { Route, Routes } from 'react-router-dom'
import ProductService from '../product-service/ProductService'
import { useDispatch } from 'react-redux'
import { addProducts } from '../app/product-slice/ProductSlice'

const Main = () => {


  const dispatch = useDispatch()

  useEffect(()=>{
    ProductService.fetchProducts().then((res)=>{
      console.log("res:",res.data);
      dispatch(addProducts(res.data.products))
    }).catch((err)=>{
      console.log("error : ",err);
    })
  },[])

  return (
    <div>
        <FrontPart />
    </div>
  )
}

export default Main