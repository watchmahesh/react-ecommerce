import React from 'react'
import Banner from './Banner'
import Layout from '../components/Layout'
import Product from '././Product'

const HomePage = () => {
  return (
    <>
    <Layout>
        <Banner/>
        <Product/>
    </Layout>
    </>
  )
}

export default HomePage