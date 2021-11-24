import React from 'react'
import Image from 'next/image'
import Logo from '../../../../../public/logo.svg'
import Link from 'next/link'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react'

function index() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    }
    return (

        <nav className='flex items-center xl:mx-auto xl:container flex-wrap bg-blue-500 lg:bg-white p-3 '>
            <Link href='/'>
                <a className='inline-flex items-center p-2 mr-4 '>
                    <Image src={Logo} alt="" />
                </a>
            </Link>
            <button
                className=' inline-flex p-3 active:bg-green-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                onClick={handleClick}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>

            <div
                className={`${active ? '' : 'hidden'
                    }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w- lg:items-center items-start  flex flex-col lg:h-auto lg:justify-between'>
                    <div className="flex flex-col lg:flex-row ">
                        <Link href='/'>
                            <a className=' px-3 py-2 rounded text-white lg:text-black font-bold items-center   '>
                                Home
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className=' px-3 py-2 rounded text-white lg:text-black font-bold items-center  '>
                                Our Services
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className=' px-3 py-2 rounded text-white lg:text-black font-bold items-center '>
                                FAQs
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className=' px-3 py-2 rounded text-white lg:text-black font-bold items-center '>
                                Contact Us
                            </a>
                        </Link>
                    </div>
                    <div className="flex">
                        <Link href="/">
                            <a className="p-4">
                                <PersonOutlineIcon className=" " />
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="p-4">
                                <SearchIcon />
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <button className="text-lg font-bold p-4 bg-blue-700 text-white ml-8 rounded-md mr-4">
                                    MESSAGE US
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default index
