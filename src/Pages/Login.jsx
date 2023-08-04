import React, { useState } from 'react'
import {
  Box, CardMedia, Typography, TextField, Button, CardContent,
  FormControl, InputLabel, OutlinedInput, InputAdornment, Divider, Link
}
  from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { API } from '../API';

const Login = ({ setCurrentUser }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate();

  const [userObj, setUserObj] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserObj({
      ...userObj,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userObj);
    try {
      const response = await axios.post(`${API}/addAdminLogin`, userObj);
      console.log('Login successful!', response.data);
      setCurrentUser(userObj);
      toast.success('Login Succesfully', {
        position: toast.POSITION.TOP_CENTER
      })
      navigate("/dashboard");
    } catch (error) {
      console.log("Error logging in:", error.response ? error.response.data : error);
      toast.error('Invalid Email or Password', {
        position: toast.POSITION.TOP_CENTER
      })
    }
  };

  return (
    <Box>
      <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
        <CardMedia
          sx={{ width: 350, height: 600, borderRadius: 3, }}
          image="https://dashtar-admin.vercel.app/static/media/login-office.c7786a89.jpeg"
          alt="Live from space album cover"
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', mx: 3 }} mt={4} autoComplete="off">
          <Typography variant="h4" component="h6"> Login </Typography>

          <Box my={2} mt={4}>
            <TextField label="Email-Id" type={'email'} name="email"
              variant="outlined" placeholder='Enter Your Email-Id' value={userObj.email}
              fullWidth onChange={handleChange} />
          </Box>

          <Box my={2}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel type={'password'} name="password" > Password </InputLabel>
              <OutlinedInput type={showPassword ? 'text' : 'password'} endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              } label="Password" name="password" value={userObj.password}
                onChange={handleChange} />
            </FormControl>
          </Box>

          <Box mt={1} mb={'18px'}>
            <Button sx={{
              padding: 1, bgcolor: '#0e9f6e', '&:hover': {
                backgroundColor: '#09875d'
              },
            }} variant='contained'
              type='submit' fullWidth onClick={handleSubmit} > Login
            </Button>
          </Box>

          <Divider sx={{ my: '18px', bgcolor: 'black' }} />
          <Box my={2}>
            <Button sx={{
              padding: 1, bgcolor: '#f0f0f0', color: 'black', '&:hover': {
                backgroundColor: '#646cf5', color: 'white'
              }
            }} startIcon={<FacebookIcon />}
              variant='contained' fullWidth > Login With Facebook
            </Button>
          </Box>

          <Box my={1} mb={'18px'}>
            <Button sx={{
              padding: 1, bgcolor: '#f0f0f0', color: 'black', '&:hover': {
                backgroundColor: '#f74554', color: 'white'
              }
            }} startIcon={<GoogleIcon />}
              variant='contained' fullWidth > Login With Google
            </Button>
          </Box>

          <Typography>
            <Link sx={{ color: '#0e9f6e', textDecoration: 'none' }}> Forgot your password </Link>
          </Typography>

          <Typography mt={1}>
            <Link sx={{ color: '#0e9f6e', textDecoration: 'none' }}> Create Account </Link>
          </Typography>
        </Box>
      </CardContent>
    </Box >
  );
}

export default Login

