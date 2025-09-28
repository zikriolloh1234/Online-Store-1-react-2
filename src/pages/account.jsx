import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from '../components/footer';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { AxiosToken } from '../app/token';
import { message } from 'antd';

const Account = () => {
  const [profilModal, setProfilModal] = useState(false);
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dob: '',
    userName: '',
    passwordCurrent: '',
    passwordNew: '',
    passwordConfirm: ''
  });

  const getUserProfile = async () => {
    try {
      const res = await AxiosToken.get('/UserProfile/get-user-profile-by-id', {
        params: { id: "5e8675a9-9ddc-4ae8-95cc-32ad45151b77" }
      });
      setProfile({
        ...profile,
        firstName: res.data.data.firstName || '',
        lastName: res.data.data.lastName || '',
        email: res.data.data.email || '',
        phoneNumber: res.data.data.phoneNumber || '',
        dob: res.data.data.dob || '',
        userName: res.data.data.userName || ''
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async () => {
    if (profile.passwordNew && profile.passwordNew !== profile.passwordConfirm) {
      message.error("Новый пароль и подтверждение не совпадают!");
      return;
    }

    try {
      await AxiosToken.put('/UserProfile/update-user-profile', {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        phoneNumber: profile.phoneNumber,
        dob: profile.dob,
        userName: profile.userName,
        currentPassword: profile.passwordCurrent,
        newPassword: profile.passwordNew
      });

      setProfilModal(false);
      getUserProfile();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className='MyAccount'>
        <span style={{ color: "gray" }}>Home /</span>
        <span>My Account</span>
      </div>

      <div className=''>
        <div className='mangeMyAccount '>
          <h2>Manage My Account</h2>
          <span
            style={{ cursor: "pointer", color: profilModal ? "red" : "black" }}
            onClick={() => setProfilModal(true)}
          >
            My Profile
          </span>
          <p>Address Book</p>
          <p>My Payment Options</p>
          <h2>My Orders</h2>
          <p>My Returns</p>
          <p>My Cancellations</p>
          <h2>My WishList</h2>
        </div>
      </div>

      {profilModal && (
        <div className='divInputMessage divInputAccount'>
          <h2 style={{ color: "red" }}>Profile</h2>

          <div className=''>
            <Input
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              size="lg"
              type='text'
              placeholder="First Name"
            /> <br />
            <Input
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              size="lg"
              type='text'
              placeholder="Last Name"
            /><br /><br />
            <Input
              name="email"
              value={profile.email}
              onChange={handleChange}
              size="lg"
              type='email'
              placeholder="Email"
            /><br />
            <Input
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleChange}
              size="lg"
              type='text'
              placeholder="Phone Number"
            /><br />
            <Input
              name="dob"
              value={profile.dob}
              onChange={handleChange}
              size="lg"
              type='date'
              placeholder="Date of Birth"
            /><br />
            <Input
              name="userName"
              value={profile.userName}
              onChange={handleChange}
              size="lg"
              type='text'
              placeholder="Username"
            /><br />
          </div>

          <br />
          <label>Password Changes</label>
          <Input
            name="passwordCurrent"
            value={profile.passwordCurrent}
            onChange={handleChange}
            className='inputChangesPassword'
            size="lg"
            type='password'
            placeholder="Current password"
          /><br />
          <div className='divmessageInput divmessgaeinputforaccount'>
            <Input
              name="passwordNew"
              value={profile.passwordNew}
              onChange={handleChange}
              size="lg"
              type='password'
              placeholder="New password"
            /><br />
            <Input
              name="passwordConfirm"
              value={profile.passwordConfirm}
              onChange={handleChange}
              size="lg"
              type='password'
              placeholder="Confirm new password"
            /><br />
          </div>

          <div className='buttonsAccount'>
            <Button variant="soft" onClick={() => setProfilModal(false)}>Cancel</Button>
            <Button className='butonSaveChange' color="danger" onClick={handleSaveChanges}>Save Changes</Button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Account;
