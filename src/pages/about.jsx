import React from 'react'
import Navbar from './navbar'
import Footer from '../components/footer'

const About = () => {
    return (
        <>
            <Navbar />

            <div className='MyAccount'>
                <span style={{ color: "gray" }}>Home /</span>
                <span>About</span>
            </div>

            <div className='fullOutStory'>
                <div className='outStoryDiv'>
                    <h2>Our Story</h2>
                    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div>
                    <img src="/public/images/Side Image.png" alt="" />
                </div>
            </div>


            <div className='cellPhoneFull' style={{ marginTop: "30px" }}>
                <div className='cellPhones cellPhonesAbout'>
                    <img src="/public/images/Services (3).png" alt="" />
                    <h2 style={{ fontSize: "27px" }}>10.5k </h2>
                    <h2>Sallers active our site</h2>
                </div>
                <div className='cellPhones cellPhonesAbout'>
                    <img src="/public/images/Services (6).png" alt="" />
                    <h2 style={{ fontSize: "27px" }}>33k</h2>
                    <h2>Mopnthly Produduct Sale</h2>
                </div>
                <div className='cellPhones cellPhonesAbout'>
                    <img src="/public/images/Services (4).png" alt="" />
                    <h2 style={{ fontSize: "27px" }}>45.5k</h2>
                    <h2>Customer active in our site</h2>
                </div>
                <div className='cellPhones cellPhonesAbout'>
                    <img src="/public/images/Services (5).png" alt="" />
                    <h2 style={{ fontSize: "27px" }}>25k</h2>
                    <h2>Anual gross sale in our site</h2>
                </div>

            </div>

            <div className='tomCuise'>
                <div>
                    <img src="/public/images/Frame 874.png" alt="" />
                    <h2>Tom Cruise</h2>
                    <h2>Founder & Chairman</h2>
                    <div style={{ display: "flex" }}>
                        <img src="/public/images/Icon-Twitter.png" alt="" />
                        <img src="/public/images/icon-instagram (1).png" alt="" />
                        <img src="/public/images/Icon-Linkedin.png" alt="" />
                    </div>
                </div>
                <div>
                    <img src="/public/images/Frame 875.png" alt="" />
                    <h2>Tom Cruise</h2>
                    <h2>Founder & Chairman</h2>
                    <div style={{ display: "flex" }}>
                        <img src="/public/images/Icon-Twitter.png" alt="" />
                        <img src="/public/images/icon-instagram (1).png" alt="" />
                        <img src="/public/images/Icon-Linkedin.png" alt="" />
                    </div>
                </div>
                <div>
                    <img src="/public/images/Frame 876.png" alt="" />
                    <h2>Tom Cruise</h2>
                    <h2>Founder & Chairman</h2>
                    <div style={{ display: "flex",gap:"10px" }}>
                        <img src="/public/images/Icon-Twitter.png" alt="" />
                        <img src="/public/images/icon-instagram (1).png" alt="" />
                        <img src="/public/images/Icon-Linkedin.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='freeandfastfull'>
                <div className='freeandfast'>
                    <img src="/public/images/Services (2).png" alt="" />
                    <h2>FREE AND FAST DELIVERY</h2>
                    <p>Free delivery for all orders over $140</p>
                    {/* <p></p> */}
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

            <Footer/>

        </>
    )
}

export default About