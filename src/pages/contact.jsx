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
import { Link } from 'react-router-dom';
import Stack from '@mui/joy/Stack';
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/joy/Box';
import Navbar from './navbar';



const Contact = () => {
    const [variant, setVariant] = React.useState('solid');

    return (
        <>

           <Navbar/>

            <div className='divContact'>
                <div className='divCalToUs'>
                    <div>
                        <img src="/public/images/icons-phone.png" alt="" />
                        <span className='writetouse'>Call To Us</span>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                    </div>
                    <hr />
                    <div>
                        <img src="/public/images/icons-mail.png" alt="" />
                        <span className='writetouse'>Write To US</span>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </div>
                </div>

                <div className='divInputMessage'>
                    <div className='divmessageInput'>
                        <Input size="lg" type='text' placeholder="Name" /><br />
                        <Input size="lg" type='email' placeholder="Email" /><br />
                        <Input size="lg" type='phone' placeholder="Phone" /><br />
                    </div>

                    <Textarea
                        className="textarea"
                        placeholder="Your Massage"
                        minRows={6}
                        sx={{ '--Textarea-focused': 1 }}
                    />
                </div>

            </div>
            <Button className="boxButton" size="lg" color="danger">Send Massage</Button>

            <Footer></Footer>


        </>
    )
}

export default Contact