import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById, BaseApi } from "../app/token";
import Navbar from "./navbar";
import Footer from "../components/footer";
import Swipper from "../components/swipper";

const getByIdComponent = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function loadProduct() {
            const data = await getById(id);
            setProduct(data);
        }
        loadProduct();
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <>
            <Navbar />
            <div style={{ padding: "20px" }}>
                <h1>{product.productName}</h1>

                {product.images && product.images.length > 0 ? (
                    <img
                        src={`${BaseApi}/images/${product.images[0].images}`}
                        alt={product.productName}
                        style={{ width: "300px" }}
                    />
                ) : (
                    <p>Нет изображения</p>
                )}

                <p>Цена: ${product.price}</p>~
                {product.hasDiscount && (
                    <p style={{ color: "red" }}>Скидка: ${product.discountPrice}</p>
                )}
                <p>{product.description}</p>
            </div>
            <Swipper/>
            
            <Footer/>
        </>
    );
};

export default getByIdComponent;
