import React, { useState } from 'react'
import Input from '@mui/joy/Input';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Button from '@mui/joy/Button';
import Footer from '../components/footer';
import axios from 'axios';
import { AxiosToken, BaseApi, SaveToken } from '../app/token';
import { Link, useNavigate } from 'react-router-dom';
import Stack from '@mui/joy/Stack';
import { registerUser } from './auth';
import Navbar from './navbar';

const Signup = () => {
    const [variant, setVariant] = useState();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        userName: "zikriolloh",
        phoneNumber: "+992887990088",
        email: "inteznet989@gmail.com",
        password: "classroom",
        confirmPassword: "classroom",
    });

    const [error, setError] = useState("");
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${BaseApi}/Account/register`, form);
            registerUser(res);
            navigate("/login")
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>

            <Navbar />

            <div className='divLogIn' style={{ marginTop: "70px" }}>
                <h2>Create an account</h2>
                <p>Enter your details below</p>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <Input type="text" name="userName" placeholder="User Name" value={form.userName} onChange={handleChange} />
                    </Stack><br />
                    <Stack spacing={2}>
                        <Input type="text" name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} />
                    </Stack><br />
                    <Stack spacing={2}>
                        <Input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                    </Stack><br />
                    <Stack spacing={2}>
                        <Input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
                    </Stack><br />
                    <Stack spacing={2}>
                        <Input size='lg' type="password" name="confirmPassword" placeholder="Password" value={form.confirmPassword} onChange={handleChange} />
                    </Stack><br />
                    <Button size="md" variant={variant} color="danger" type="submit">Create Account</Button>
                </form>
            </div>

            <Footer></Footer>


        </>
    )
}

export default Signup