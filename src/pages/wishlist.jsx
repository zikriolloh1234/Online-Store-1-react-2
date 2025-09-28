import React, { useEffect, useState } from "react";
import { BaseApi, addToCart } from "../app/token";
import Navbar from "./navbar";
import { message } from "antd";
import Footer from "../components/footer";
import Button from "@mui/joy/Button";
import Swipper from "../components/swipper";

const Wishlist = () => {
  const [favorites, setFavorites] = useState({});
  const [products, setProducts] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  // Загружаем избранное из localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "{}");
    setFavorites(saved);
  }, []);

  // Загружаем все продукты из API
  async function fetchProducts() {
    try {
      const res = await fetch(
        `${BaseApi}/Product/get-products?pageNumber=1&pageSize=50`
      );
      const data = await res.json();
      console.log("API products:", data);

      setProducts(data?.data?.products || data?.products || []);
    } catch (error) {
      console.log("Ошибка при загрузке товаров:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const likedProducts = products.filter((p) => favorites[String(p.id)]);

  function deleteWishlist(id) {
    const updated = { ...favorites };
    delete updated[String(id)];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  // сообщение при добавлении в корзину
  const openMessage = () => {
    messageApi.open({
      type: "success",
      content: "Товар добавлен в корзину",
      duration: 2,
    });
  };

  // добавить в корзину
  const handleAddToCart = async (item) => {
    try {
      await addToCart(item.id);
      openMessage();
    } catch (err) {
      console.error("Ошибка добавления в корзину:", err);
      messageApi.open({
        type: "error",
        content: "Не удалось добавить товар",
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Navbar />
      <div style={{ padding: "20px", marginTop: "13vh" }}>
        {likedProducts.length === 0 ? (
          <p>Нет избранных товаров</p>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {likedProducts.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "200px",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src={`${BaseApi}/images/${
                    item.image || item.images?.[0]?.images || "no-image.png"
                  }`}
                  alt={item.productName}
                />
                <p style={{ fontWeight: "bold" }}>{item.productName}</p>
                <span style={{ color: "red" }}>${item.price}</span>

                <button
                  className="btnDeleteWishlist"
                  onClick={() => deleteWishlist(item.id)}
                >
                  🗑️
                </button>

                <Button
                  onClick={() => handleAddToCart(item)}
                  color="neutral"
                  className="buttonAddTocard"
                >
                  add to box
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: "flex", marginLeft: "65px", marginTop: "40px" }}>
        {/* в React путь к public пишется как /images/... */}
        <img src="/images/Rectangle 18.png" alt="" />
        <p style={{ color: "red", fontSize: "18px", marginLeft: "10px" }}>
          Just For You
        </p>
      </div>

      <Swipper />
      <Footer />
    </>
  );
};

export default Wishlist;
