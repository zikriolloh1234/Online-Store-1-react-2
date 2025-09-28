import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Countdown from '../components/countData';
import Button from '@mui/joy/Button';
import Swipper from '../components/swipper';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [variant, setVariant] = React.useState('solid');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("http://37.27.29.18:8002/Category/get-categories")
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

    return (
        <>
            <Navbar></Navbar>
            <div className='swipper'>
                <div className='womenstFashion'>
                    <h3 style={{fontWeight:"900",fontSize:"20px"}} >{categories[0]?.categoryName}</h3>
                    {categories[0]?.subCategories?.map((sub) => (
                        <li style={{listStyleType:"none",fontSize:"26px",fontWeight:"bold"}} key={sub.id}>{sub?.subCategoryName}</li>
                    ))}
                </div>
                <div className='swipperImage'>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <img src="https://mobidevices.com/images/2024/11/Apple-MacBook-Pro-M4_3.jpg" alt="slide 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://doctorhead.ru/upload/dev2fun.imagecompress/webp/iblock/edc/e3y8ykildcs1g6dfozg5twq2lm1g1gd2/article_earbuds_vs_earphones_01.webp" alt="slide 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://mtscdn.ru/upload/images/honorl-1.png" alt="slide 2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.dgl.ru/wp-content/uploads/2024/11/apple-macbook-pro-7.webp" alt="slide 3" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className='positionImages'>
                <div style={{ display: "flex", gap: "10px" }}>
                    <img src="/public/images/1200px-Apple_gray_logo 1.png" alt="" />
                    <p>iPhone 14 Series</p>
                </div>
                <h2 style={{ width: "130px", fontSize: "36px" }}>Up to 10% off Voucher</h2>
            </div>

            <div className='mediatodays' style={{ display: "flex", marginLeft: "65px" }}>
                <img src="/public/images/Rectangle 18.png" alt="" />
                <p style={{ color: "red", fontSize: "18px" }}>Today’s</p>
            </div>

            <div className='mediafleshSales' style={{ display: "flex", gap: "20px", marginLeft: "65px" }}>
                <h2 className='forDisplayNone' style={{ fontWeight: "bold" }}>Flash Sales</h2>
                <Countdown className="mediaconuddown" />
            </div>

            <Swipper />


            <div style={{ textAlign: 'center', marginTop: "20px" }}>
                <Link to="/categoriya">
                    <Button size="md" variant={variant} color="danger">
                        View All Products
                    </Button>
                </Link>
            </div>

            <div style={{ display: "flex", marginLeft: "65px" }}>
                <img src="/public/images/Rectangle 18.png" alt="" />
                <p style={{ color: "red", fontSize: "18px" }}>Categories</p>
            </div>
            <div style={{ display: "flex", gap: "20px", marginLeft: "65px" }}>
                <h2 style={{ fontWeight: "bold" }}>Browse By Category</h2>
                {/* <Countdown /> */}
            </div>

            <div className='cellPhoneFull'>
                <div className='cellPhones'>
                    <img src="/public/images/Category-CellPhone.png" alt="" />
                    <h2>Phones</h2>
                </div>
                <div className='cellPhones'>
                    <img src="/public/images/Category-Computer.png" alt="" />
                    <h2>Computers</h2>
                </div>
                <div className='cellPhones'>
                    <img src="/public/images/Category-SmartWatch.png" alt="" />
                    <h2>SmartWatch</h2>
                </div>
                <div className='cellPhonesCAMERA'>
                    <img src="/public/images/Category-Camera.png" alt="" />
                    <h2>Phones</h2>
                </div>
                <div className='cellPhones'>
                    <img src="/public/images/Category-Headphone.png" alt="" />
                    <h2>Phones</h2>
                </div>
                <div className='cellPhones'>
                    <img src="/public/images/Category-Gamepad.png" alt="" />
                    <h2>Phones</h2>
                </div>
            </div>

            <div style={{ marginTop: "30px", display: "flex", marginLeft: "65px" }}>
                <img src="/public/images/Rectangle 18.png" alt="" />
                <p style={{ color: "red", fontSize: "18px" }}>This Month</p>
            </div>

            <div className='bestSelling'>
                <h2 style={{ fontWeight: "bold" }}>Best Selling Products</h2>
                <Button size="md" variant={variant} color="danger">
                    View All
                </Button>
            </div>
            <Swipper />

            <div className='enhance'>
                <div>
                    <p style={{ color: "green" }}>Categories</p>
                    <h2 style={{ color: "white", fontSize: "35px", width: "270px" }}>Enhance Your Music Experience</h2>
                    <div className='music'>
                        <div className='hours'>
                            <h2>23</h2>
                            <p>Hours</p>
                        </div>
                        <div className='hours'>
                            <h2>05</h2>
                            <p>Day</p>
                        </div>
                        <div className='hours'>
                            <h2>59</h2>
                            <p>Minutes</p>
                        </div>
                        <div className='hours'>
                            <h2>35</h2>
                            <p>Seconds</p>
                        </div>
                    </div>
                    <Button style={{ marginTop: "50px", width: "130px", color: "black" }} size="md" variant={variant} color="success">
                        Buy Now!
                    </Button>
                </div>
                <img src="/public/images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png" alt="" />
            </div>

            <div style={{ display: "flex", marginLeft: "65px", marginTop: "30px" }}>
                <img src="/public/images/Rectangle 18.png" alt="" />
                <p style={{ color: "red", fontSize: "18px", marginLeft: "10px" }}>Our Products</p>
            </div>
            <h2 style={{ fontWeight: "bold", marginLeft: "65px" }}>Best Selling Products</h2>
            <Swipper />
            <Swipper /><br />
            {/* <Swipper /> */}
            <div style={{ textAlign: 'center', marginTop: "20px" }}>
                <Link to="/categoriya">
                    <Button size="md" variant={variant} color="danger">
                        View All Products
                    </Button>
                </Link>
            </div>

            <div className='newArial'>
                <div style={{ backgroundColor: "black", width: "40%", height: "85vh", marginTop: '20px' }}>
                    <img className='imagePlastation' src="/public/images/ps5-slim-goedkope-playstation_large 1.png" alt="" />
                    <div className='plastayshon5'>
                        <h2>PlayStation 5</h2>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                        <p>Shop Now</p>
                    </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <img src="/public/images/attractive-woman-wearing-hat-posing-black-background 1.png" alt="" />
                    <div>
                        <img src="/public/images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png" alt="" />
                        <img style={{ marginTop: "20px" }} src="/public/images/652e82cd70aa6522dd785109a455904c.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='freeandfastfull'>
                <div className='freeandfast'>
                    <img src="/public/images/Services (2).png" alt="" />
                    <h2>FREE AND FAST DELIVERY</h2>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className='freeandfast'>
                    <img src="/public/images/Services.png" alt="" />
                    <h2>FREE AND FAST DELIVERY</h2>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className='freeandfast'>
                    <img src="/public/images/Services (1).png" alt="" />
                    <h2>FREE AND FAST DELIVERY</h2>
                    <p>Free delivery for all orders over $140</p>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Home