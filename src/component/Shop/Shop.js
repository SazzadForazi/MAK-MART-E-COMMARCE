import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([])

    //cart e product rakhar jonne
    const [cart, setCart] = useState([])
    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        // console.log(newCart); 
    }

    useEffect(() => {
        fetch("/productsData.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            products.map(product => <Product
                                product={product}
                                handleAddProduct={handleAddProduct}
                            >
                            </Product>)
                        }


                    </div>

                </div>
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;