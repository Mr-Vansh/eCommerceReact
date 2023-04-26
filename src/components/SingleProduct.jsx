import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function SingleProduct() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);


    // LOADING FUNCTION
    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton height={200} />
                </div>
            </>
        )
    }
    // SHOW-PRODUCT FUNCTION
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img className='mt-5' src={product.image} alt={product.title} height="350px" width="350px" />
                </div>
                <div className="col-md-6">
                    <h5 className='text-uppercase text-black-50 text-decoration-underline'>{product.category}</h5>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-normal'>Rating : {product.rating && product.rating.rate} <i className='fa fa-star'></i></p>
                    <h2 className='mt-3 fw-bold'>$ {product.price}</h2>
                    <p className="lead">{product.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2'>Buy Now</button>
                    <NavLink to="/cart" className='btn btn-dark ms-3 px-4 py-2'>Go to Cart</NavLink>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default SingleProduct