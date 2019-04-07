import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import NavBar from '../components/auth-tab'
import InputForm from './validation.register';
import Login from './login';

const Home = () => (
  <div>
    <NavBar/>
    {/* <Login /> */}
    <InputForm/>
  </div>
)
export default Home
