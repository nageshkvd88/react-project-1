import React, {useState} from 'react'
import Header from './../Header/Header';
import MainBanner from './../Banner/MainBanner';
import PopularItems from './../modules/PopularItems'
import TopRatedItems from './../modules/TopRatedItems'
import {Popular, TopRate} from '../Food'
import Userinfo from './Userinfo';

const Home = () => {

const [PopularFood, setPopularFood] = useState(Popular)

const [TopRatedFood, setTopRatedFood] = useState(TopRate)
 

  return (
    <div>
      <Header />
      <MainBanner />
      <PopularItems food={PopularFood} />
      <TopRatedItems topFood={TopRatedFood} />
      <Userinfo />
    </div>
  )
}

export default Home