import axios from 'axios'
import React from 'react'

class ProductService {

    static fetchProducts(){
        return axios.get("https://dummyjson.com/products?limit=10&skip=10")
    }

    static fetchOneProduct(id){
        return axios.get(`https://dummyjson.com/products/${id}`)
    }
}

export default ProductService