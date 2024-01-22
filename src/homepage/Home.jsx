import ResponsiveAppBar from './components/Header';
import React from 'react';
import ImgMediaCard from './components/Card'
import Mainpage from './components/Mainpage';



function Home() {
    return (
        <><ResponsiveAppBar /><Mainpage /> <ImgMediaCard /></>
    )
  }
  
  export default Home;