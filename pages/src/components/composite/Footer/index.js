import React from 'react'
import blackLogo from '../../../../../public/blackLogo.svg'
import Image from 'next/image'
import Link from 'next/link'
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Youtube from '@material-ui/icons/YouTube';
import Instagram from '@material-ui/icons/Instagram';
import Pinterest from '@material-ui/icons/Pinterest';
import YouTube from '@material-ui/icons/YouTube';


function index() {
    return (
        <footer className="bg-gray-800 py-10">
            <div className="mx-auto container flex flex-row xl:justify-between">
                <div className="ml-24 flex xl:ml-0">
                    <Image src={blackLogo} alt="" />
                </div>
                <div className="border-2 border-gray-400 ml-10 xl:flex hidden "></div>
                <div className="">
                    <div className="xl:flex hidden ">
                        <ul className="flex py-2 text-white lg:ml-4">
                            <li>
                                <Link href="/">
                                    <a className="text-base font-semibold px-7 md:px-2 md:text-sm ">Terms and Conditions</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-base font-semibold px-7 md:px-2 md:text-sm">Privacy Policy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-base font-semibold px-7 md:px-2 md:text-sm">Disclaimer</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-base font-semibold px-7 md:px-2 md:text-sm">Contact Us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-base font-semibold px-7 md:px-2 md:text-sm">About Us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-base font-semibold px-7 md:px-2 md:text-sm">FAQ</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-2 border-gray-400 ml-10"></div>
                <div className="py-2 ml-10 ">
                    <div className="flex flex-row md:mr-4">
                        <a href="/" className="p-4 md:p-2  text-white"><Facebook className="" /></a>
                        <a href="/" className="p-4 md:p-2 text-white"><Twitter className="" /></a>
                        <a href="/" className="p-4 md:p-2 text-white"><YouTube className="" /></a>
                        <a href="/" className="p-4 md:p-2 text-white"><Instagram className="" /></a>
                        <a href="/" className="p-4 md:p-2 text-white"><Pinterest className="" /></a>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default index
