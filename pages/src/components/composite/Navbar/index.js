import React from 'react'
import Image from 'next/image'
import Logo from '../../../../../public/logo.svg'
import Link from 'next/link'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';

function index() {
    return (
        <nav className="flex flex-row justify-between mx-auto container py-4">
            <div>
                <Image src={Logo} alt="" />
            </div>
            <div>
                <ul className="flex py-2">
                    <li>
                        <Link href="/">
                            <a className="text-base font-semibold px-7">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="text-base font-semibold px-7">Our Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="text-base font-semibold px-7">FAQs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="text-base font-semibold px-7">Contact Us</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex">
                <a href="/" className="p-2"><PersonOutlineIcon  /></a>
                <a href="/" className="p-2 mr-4"><SearchIcon  /></a>
                
                
                <button className="bg-blue-600 p-3 text-white text-sm font-bold  rounded-sm">MESSAGE US</button>
            </div>

        </nav>
    )
}

export default index
