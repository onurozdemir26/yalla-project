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
            <div className="mx-auto container flex flex-row">
                <div className="">
                    <Image src={blackLogo} alt="" />
                </div>
                <div className="border-2 border-gray-400 ml-10"></div>
                <div className="">
                    <div className="">
                        <ul className="flex py-2 text-white">
                            <li>
                                <Link href="/">
                                    <a className="text-base font-semibold px-7">Terms and Conditions</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-base font-semibold px-7">Privacy Policy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-base font-semibold px-7">Disclaimer</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-base font-semibold px-7">Contact Us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-base font-semibold px-7">About Us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-base font-semibold px-7">FAQ</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-2 border-gray-400 ml-10"></div>
                <div className="py-2 ml-10 ">
                    <div className="">
                        <a href="/" className="p-4  text-white"><Facebook className="" /></a>
                        <a href="/" className="p-4  text-white"><Twitter className="" /></a>
                        <a href="/" className="p-4  text-white"><YouTube className="" /></a>
                        <a href="/" className="p-4  text-white"><Instagram className="" /></a>
                        <a href="/" className="p-4  text-white"><Pinterest className="" /></a>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default index
