import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, []);

    // filter SELECTED categorie
    const filterProduct = (cat) => {
        const updateList = data.filter(x => x.category === cat);
        setFilter(updateList);
    }


    // LOADING FUNCTION
    const Loading = () => {
        return (
            <div className='mt-5 d-flex justify-content-center'>
                <div className="col-6 col-md-3 me-2">
                    <Skeleton height={300} />
                </div>
                <div className="col-6 col-md-3 me-2">
                    <Skeleton height={300} />
                </div>
                <div className="col-6 col-md-3 me-2">
                    <Skeleton height={300} />
                </div>
                <div className="col-6 col-md-3 me-2">
                    <Skeleton height={300} />
                </div>
            </div>
        )

    }

    // SHOW-PRODUCTS FUNCTION
    const ShowProducts = () => {
        return (
            <>

                <div className='buttons my-4 d-flex justify-content-center'>
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>

                {/* PRODUCT CARD LAYOUT */}
                {
                    filter.map((product) => {
                        return (
                            <div className="col-6 col-md-3 my-2 mt-4" key={product.id}>
                                <div className="card text-start px-2 py-4">
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                    <hr />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title.substring(0, 11)}...</h5>
                                        <p className="card-text lead fw-bolder">$ {product.price}</p>
                                        {/* navigating to PARTICULAR PRODUCT on clicking buy now button */}
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </>

        )
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className='fw-bold'>Latest Products</h1>
                    <hr />
                </div>
            </div>

            <div className="row">
                {/* calling APPROPRIATE FUNCTION (LOADING || SHOW-PRODUCTS) depending on LOADING STATE  */}
                {
                    loading ? <Loading /> : <ShowProducts />
                }
            </div>
        </div>
    )
}

export default Products