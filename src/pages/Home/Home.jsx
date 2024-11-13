import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import { ExploreMenu } from '../../components/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/foodDisplay'
import Footer from '../../components/Footer/Footer'
export const Home = () => {
    const [category,setCategory] =useState("All")
  return (
    <div className='home'>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} />
        <Footer />
    </div>
  )
}
