import React from 'react'
import Input from '@mui/joy/Input';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Button from '@mui/joy/Button';
import Footer from '../components/footer';
import axios from 'axios';
import { BaseApi, SaveToken } from '../app/token';
import { Link, useNavigate } from 'react-router-dom';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';


const Login = () => {
    const [variant, setVariant] = React.useState('solid');
    const navigate = useNavigate();

    async function loginUser(e) {
        e.preventDefault();
        const userName = e.target[0].value;
        const password = e.target[1].value;
        // console.log(userName, password)
        try {
            const { data } = await axios.post(`${BaseApi}/store-api.softclub.tj/Account/login`, {
                userName,
                password
            });
            navigate("/");
            SaveToken(data.data);

        } catch (error) {
            console.error("error", error);
        }
    }

    return (
        <>
            <div className='navbar'>
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
                    <li>About</li>
                </ul>
                <div className='navbar1'>
                    <Input className='inputSearch' placeholder="What are you looking for?…"><SearchSharpIcon /></Input>
                    <img className='images' src="/public/images/Wishlist.png" alt="" />
                    <img className='images' src="/public/images/Cart1.png" alt="" />
                    {/* <LoginIcon></LoginIcon> */}
                </div>
            </div>

            <div className='divLogIn'>
                <h2>Log in to Exclusive</h2>
                <p>Enter your details below</p>
                <form onSubmit={loginUser}>
                    <FormControl>
                        <FormLabel>Email or phone number</FormLabel>
                        <Input name='userName' type='text' placeholder="Email or Phone Number" />
                    </FormControl>
                    <FormControl><br />
                        <FormLabel>Password</FormLabel>
                        <Input name='userName' type='password' placeholder="Password" />
                    </FormControl><br />
                    <Link style={{textDecoration:"none",marginBottom:"30px", marginLeft:"100px"}} className='signUpP' to="/Signup">Create Account</Link>
                    <Button type='submit' size="md" variant={variant} color="danger">
                        Log in
                    </Button>
                </form>

            </div>

            <Footer></Footer>

        </>
    )
}

export default Login