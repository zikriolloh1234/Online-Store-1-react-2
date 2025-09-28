import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import Swipper from "../components/swipper";
import Footer from "../components/footer";
import { BaseApi } from "../app/token";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios
      .get(`${BaseApi}/Category/get-categories`)
      .then((res) => {
        setCategories(res.data.data);
        if (res.data.data.length > 0) {
          setSelectedCategory(res.data.data[0]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (categories.length === 0) return <p>Загрузка...</p>;

  return (
    <>
      <Navbar />

      <div className='MyAccount'>
        <span style={{ color: "gray" }}>Home /</span>
        <span>Explore Our Products</span>
      </div>

      <div className="Categoriya">
        <div>
          <h3>{categories[0].categoryName}</h3>
          {categories[0].subCategories.map((sub) => (
            <li key={sub.id}>{sub.subCategoryName}</li>
          ))}
          <div>
            <h2>Brands</h2>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="checkbox" />
              <h2>Samsung</h2>
            </div>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="checkbox" />
              <h2>Apple</h2>
            </div>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="checkbox" />
              <h2>Huawei</h2>
            </div>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="checkbox" />
              <h2>Poco</h2>
            </div>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="checkbox" />
              <h2>Lenovo</h2>
            </div>
            <p style={{ color: "red" }}>See all </p>

          </div>
          <div>
            <h2>Features</h2>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="checkbox" />
              <h2>Metalic</h2>
            </div>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="checkbox" />
              <h2>Plastic cover</h2>
            </div>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="checkbox" />
              <h2>8GB Ram</h2>
            </div>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="checkbox" />
              <h2>Super power</h2>
            </div>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="checkbox" />
              <h2>large memory</h2>
            </div>
            <p style={{ color: "red" }}>See all </p>

          </div>

          <h2>Price range</h2>
          <input type="range" />

          <div>
            <h2>Condition</h2>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="radio" />
              <h2>Any</h2>
            </div>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="radio" />
              <h2>Refurbished</h2>
            </div>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="radio" />
              <h2>Brand new</h2>
            </div>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="radio" />
              <h2>Old items</h2>
            </div>

          </div>

          <div>
            <h2>Retings</h2>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="checkbox" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
            </div>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="checkbox" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
            </div>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="checkbox" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
            </div>
            <div style={{ display: "flex", gap: "10px", fontFamily: "monospace" }}>
              <input type="checkbox" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
              <img src="/public/images/Vector (14).png" alt="" />
            </div>

          </div>



        </div>

        <div className="swipperProduct">
          <Swipper />
          <Swipper />
          <Swipper />
          <Swipper />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
