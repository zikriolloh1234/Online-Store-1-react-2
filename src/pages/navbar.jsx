import React, { useEffect, useState } from 'react'
import Input from '@mui/joy/Input';
import LoginIcon from '@mui/icons-material/Login';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Link } from 'react-router-dom';
import Login from './login';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import { GetToken } from '../app/token';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { faL } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [logModal, setLogModal] = useState();
    const token = localStorage.getItem("accessToken");
    const [numberKorzin, setNumberKorzin] = useState(0);
    const [favoritesCount, setFavoritesCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    const updateCounts = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setFavoritesCount(favorites.length);
        setCartCount(cart.length);
    };

    useEffect(() => {
        updateCounts();

        // Слушаем изменения localStorage
        window.addEventListener("storage", updateCounts);
        return () => window.removeEventListener("storage", updateCounts);
    }, []);

    function logout() {
        localStorage.removeItem("accessToken");
        window.location.reload();
    }

    const [logMediaModal, setLogMediaModal] = useState(false);
    function mediaLogModal() {
        setLogMediaModal(true);
    }

    function logInFunc() {
        setLogModal(true);
    }
    const [barsModal, setBarsModal] = useState(false);

    return (
        <>
            <div className='navbar'>
                <div className='imagePntMedia'>
                    <img onClick={() => setBarsModal(true)} className='' src="/public/images/image.png" alt="" />
                    <h2>Exclusive</h2>
                </div>
                <div className='divIconMedia'>
                    <Link className='imageKorzinMedia' to="/korzina">
                        <FaShoppingCart className='images' size={22} />
                    </Link>

                    {token ? (
                        <PersonOutlineOutlinedIcon style={{ cursor: "pointer" }} onClick={() => { console.log("click"); mediaLogModal() }}></PersonOutlineOutlinedIcon>
                    ) : (
                        <Link to="/Login"><LoginTwoToneIcon></LoginTwoToneIcon></Link>
                    )}
                </div>
                <img className='logo' src="/public/images/Group 1116606595 (1).png" alt="" />
                <ul>
                    <li>
                        <Link to="/" style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>
                            About
                        </Link>
                    </li>

                </ul>
                <div className='navbar1'>
                    <Input className='inputSearch  inputSearchMedai' placeholder="What are you looking for?…"><SearchSharpIcon /></Input>
                    <Link to="/wishlist" className=''>
                        <img className='images' src="/public/images/Wishlist.png" alt="" />
                    </Link>


                    <Link className='imageKorzinMedia' to="/korzina">
                        <FaShoppingCart className='images' size={22} />
                    </Link>

                    <p className='numberKorzin'>{numberKorzin}</p>
                    {token ? (
                        <PersonOutlineOutlinedIcon style={{ cursor: "pointer" }} onClick={() => { logInFunc(); setLogMediaModal(true) }}></PersonOutlineOutlinedIcon>
                    ) : (
                        <Link to="/Login"><LoginTwoToneIcon></LoginTwoToneIcon></Link>
                    )}

                </div>
            </div>

            {barsModal && (
                <div className='barsModal'>
                    <ul>
                        <li>
                            <Link to="/" style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>
                                About
                            </Link>
                        </li>

                    </ul>
                    <button onClick={() => setBarsModal(false)}>Close</button>
                </div>
            )}

            {logModal && (
                <div onClick={onclose} className='"modal-overlay  logOutModal'>
                    <div className='diviconlogout'>
                        <img onClick={logout} src="/public/images/Icon-logout.png" alt="" />
                        <p style={{ cursor: "pointer" }} onClick={logout}>log Out</p>
                        {/* <p style={{ cursor: "pointer" }} >Account</p> */}
                    </div>
                    <div className='diviconlogout'>
                        <Link onClick={() => setLogModal(false)} className='linkAccount' to="/Account">
                            <PersonOutlineOutlinedIcon style={{ cursor: "pointer" }}></PersonOutlineOutlinedIcon>
                            <p className='textPAccount' style={{ cursor: "pointer" }} >Account</p>
                        </Link>
                    </div>
                    <button onClick={() => setLogModal(false)}>close</button>
                </div>
            )}
            {logMediaModal && (
                <div onClick={onclose} className='logModalMedia'>
                    <Link to="/wishlist" className=''>
                        <img className='images' src="/public/images/Wishlist.png" alt="" />
                    </Link>
                    <div className='diviconlogout'>
                        <img onClick={logout} src="/public/images/Icon-logout.png" alt="" />
                        <p style={{ cursor: "pointer" }} onClick={logout}>log Out</p>
                        {/* <p style={{ cursor: "pointer" }} >Account</p> */}
                    </div>
                    <div className='diviconlogout'>
                        <Link onClick={() => setLogModal(false)} className='linkAccount' to="/Account">
                            <PersonOutlineOutlinedIcon style={{ cursor: "pointer" }}></PersonOutlineOutlinedIcon>
                            <p className='textPAccount' style={{ cursor: "pointer" }} >Account</p>
                        </Link>
                    </div>
                    <button onClick={() => setLogMediaModal(false)}>close</button>
                </div>
            )}

        </>
    )
}

export default Navbar