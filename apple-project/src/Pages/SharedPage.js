import React, { Component } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'


export default class SharedPage extends Component {
  render() {
    return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
    )
  }
}
