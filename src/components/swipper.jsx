import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { addToCart, BaseApi, getProducts } from "../app/token";
import Button from '@mui/joy/Button';
import { useNavigate } from "react-router-dom";
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import { Button as antdButton, message } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

const Swipper = () => {
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [heartStates, setHeartStates] = useState({});
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState({});


  useEffect(() => {
    async function loadProducts() {
      const result = await getProducts(1, 10);
      setProducts(result.products);
      setTotalPage(result.totalPage);
    }
    loadProducts();
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Товар успешно добавлен на карзину',
        duration: 2,
      });
    }, 1000);
  };

  const handleAddToCart = async (item) => {
    const res = await addToCart(item.id);
    openMessage();
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "{}");
    setFavorites(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);


  return (
    <>
      {contextHolder}
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={4}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="card"
              style={{
                backgroundColor: "#F5F5F5",
                height: "63vh",
                borderRadius: "10px",
                padding: "10px",
                position: "relative",
                marginBottom: '30px'
              }}
            >
              <button
                onClick={() => toggleFavorite(item.id)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "1px",
                  fontSize: "24px",
                  color: favorites[item.id] ? "red" : "gray",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={favorites[item.id] ? solidHeart : regularHeart}
                />
              </button>
              <img
                style={{ width: "80%", display: "block", margin: "0 auto 10px" }}
                src={`${BaseApi}/images/${item.image || (item.images?.[0]?.images ?? "no-image.png")}`}
                alt={item.productName}
              />
              <p style={{ margin: "10px 0", fontWeight: "bold" }}>
                {item.productName}
              </p>
              <span style={{ color: "red", marginRight: "10px" }}>${item.price}</span>
              {item.hasDiscount && (
                <span style={{ color: "gray", textDecoration: "line-through" }}>
                  ${item.discountPrice}
                </span>
              )}
              <div className="">
                <Button
                  onClick={() => handleAddToCart(item)}
                  color="neutral"
                  className="buttonAddTocard"
                >
                  add to box
                </Button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>

              </div>

              <img
                onClick={() => navigate(`/getbyid/${item.id}`)}
                className="imageEye"
                src="/public/images/Fill Eye.png"
                alt=""
              />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <span>(88)</span>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Swipper;
