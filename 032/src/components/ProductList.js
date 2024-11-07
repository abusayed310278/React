import {useEffect, useState} from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:3001/products")

    const fetchProducts = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
        // console.log("1")

    }, [url]);

    return (
        <section>
            <div className="filter">
                <button onClick={() => setUrl("http://localhost:3001/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:3001/products?in_stock=true")}>In Stock</button>

            </div>

            {products.map((product) => (
                <div className="card" key={product.id}>
                    <p className="id">{product.id}</p>
                    <p className="name">{product.name}</p>
                    <p className="info">
                        <span>${product.price}</span>
                        <span
                            className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                    </p>
                </div>
            ))}
        </section>
    )
}
