import React, { useEffect, useState } from "react";
import { clearCart, decQunCart, deleteProductCard, getCart, incQunCart } from "../app/token";
import Navbar from "./navbar";
import { BaseApi } from "../app/token";
import Button from "@mui/joy/Button";
import { Button as ButtonAntd } from 'antd';
import Footer from "../components/footer";
import { Link } from "react-router-dom";



const CartPage = () => {
  const [cart, setCart] = useState([]);

  async function loadCart() {
    try {
      const cartData = await getCart();
      setCart(cartData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCart();
  }, []);

  const deleteCard = async (id) => {
    try {
      await deleteProductCard(id)
      loadCart();
    } catch (error) {
      console.log(error);
    }
  }
  const clearFuncCart = async () => {
    try {
      await clearCart()
      loadCart();
    } catch (error) {
      console.log(error);
    }
  }

  const plusQuanCart = async (id) => {
    try {
      await incQunCart(id);
      loadCart();
    } catch (error) {
      console.log(error);
    }
  }
  const minusQuanCart = async (id) => {
    try {
      await decQunCart(id);
      loadCart();
    } catch (error) {
      console.log(error);
    }
  }

  const total = 0;



  return (
    <>
      <Navbar />
      <div className='MyAccount'>
        <span style={{ color: "gray" }}>Home /</span>
        <span>Cart</span>
      </div>
      <table>
        <thead>
          <tr style={{ boxShadow: "none" }}>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart?.data && cart?.data[0]?.productsInCart?.map((item, i) => (
            <tr>
              <th style={{ display: "flex", gap: "-100px" }}>
                <img
                  style={{ width: "55px", height: "55px", display: "block", margin: "0 auto 10px" }}
                  src={`${BaseApi}/images/${item.product.image}`}
                  alt={item.product.productName}
                />

              </th>
              <th>
                <p style={{ margin: "10px 0", fontWeight: "bold" }}>
                  {item.product.productName}
                </p>
              </th>
              <th>
                <span style={{ color: "red", marginRight: "10px" }}>
                  ${item.product.price}
                </span>
              </th>
              <th>
                <div className="divQuontity">
                  <button onClick={() => plusQuanCart(item.id)}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => minusQuanCart(item.id)}>+</button>
                </div>
              </th>
              <th style={{ display: "flex", justifyContent: "center" }}>
                <p>$
                  {item.quantity * item.product.price}
                </p>
                <button className="btnDeleteCart" onClick={() => deleteCard(item.id)}>❌</button>
              </th>
            </tr>
          ))}

        </tbody>
      </table>

      <Link to="/">
        <ButtonAntd className="btnCartReturnToShop">Return to shop</ButtonAntd>
      </Link>
      <ButtonAntd danger className="btnDeleteClear" onClick={() => clearFuncCart()}>Delete All</ButtonAntd>

      <Footer />

    </>
  );
};

export default CartPage;

