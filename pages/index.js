import Head from 'next/head'
import Navbar from './src/components/composite/Navbar/index'
import Image from 'next/image'
import carImg from '../public/carImg.svg'
import homeFooter from '../public/homeFooter.svg'
import SecondPage from './second-page/index'
import ThirtyPage from './thirty-page/index'
import Footer from './src/components/composite/Footer/index'
import { useEffect, useState } from 'react'

export default function Home() {
  useEffect(() => {

  })
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <main>
        <div className="bg-img">
          <div className="flex flex-row mx-auto container py-10">
            <div className="w-6/12">
              <div className="py-10 mt-24">
                <div>
                  <h1 className="text-5xl ">
                    Buy New Policy
                    & Win a Brand New
                  </h1>
                </div>
                <div className="">
                  <h1 className="text-5xl font-bold">Ford Ecosport!</h1>
                </div>
              </div>
              <div className="flex flex-row">
                <p className="text-lg flex">Plus 3 More Lucky Winners to Win AED 5,000  Each!</p>
              </div>
              <div className=" py-4 ">
                <button className="py-4 px-4 bg-blue-600 text-white font-bold ">GET QUOTES</button>
                <button className="py-4 px-4 border-2 border-blue-600 ml-4  font-bold">LEARN MORE</button>
                <a href="/" className="py-4 px-4 underline ml-4 font-bold">CANCEL POLICY</a>
              </div>
              <div className="flex flex-row py-10">
                <div className="flex flex-col">
                  <h1 className="text-5xl text-pink-500 py-4">10%</h1>
                  <h1 className="text-5xl text-pink-500">Discount</h1>
                </div>
                <div className="flex flex-col py-10">
                  <p className="text-5xl px-24">01:04:18:38</p>
                  <p className="text-3xl px-24 ml-10 mt-4 text-gray-500">Count Down</p>
                </div>

              </div>
            </div>
            <div className="w-9/12 py-24">
              <Image src={carImg} alt="" width={1496} height={823} className="img-fluid" />
            </div>

          </div>
        </div>
        <div className="">
          <Image src={homeFooter} alt="" className="w-screen img-fluid" />
        </div>
      </main>
      <SecondPage />
      <ThirtyPage />
      <Footer />
    </div>
  )
}

