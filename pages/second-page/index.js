import React from 'react'
import Image from 'next/image'
import dashImg from '../../public/dashImg.svg'
import peopleImg from '../../public/peopleImg.svg'
import TimerIcon from '@material-ui/icons/Timer';
import SecurityIcon from '@material-ui/icons/Security';
import AssignmentIcon from '@material-ui/icons/AssignmentInd';
import CompareIcon from '@material-ui/icons/Compare';
import HeadsetIcon from '@material-ui/icons/HeadsetMic';
import EmojiIcon from '@material-ui/icons/EmojiEmotions';

function index() {
    return (
        <div className="xl:mx-auto xl:container">
            <div className=" flex flex-col items-center py-10 ">
                <h1 className="text-5xl py-4 md:text-3xl">How YallaCompare Works</h1>
                <p className="text-2xl px-6 md:px-0 md:text-xl py-2">Unbelievably simple process at which you can save money on your car insurance
                    in Dubai in 3 easy steps!</p>
            </div>
            <div className="transform motion-safe:hover:scale-110 py-14 flex items-center ml-4 lg:ml-24 xl:ml-60 xl:px-28">
                <Image src={dashImg} alt="" width={867} height={652} className="img-fluid " />
            </div>
            <div className="flex flex-col md:flex-row py-24">
                <div className="md:w-8/12 bg-pink-500 rounded-l-xl md:h-6/12">
                    <h3 className="text-white xl:text-4xl px-10 py-5">Six Reasons</h3>
                    <div className="flex">

                        <h1 className="text-white xl:text-4xl text-bold px-10 md:text-xl">Why You Should Choose </h1>
                        <h1 className="text-white xl:text-4xl text-bold px-10 md:text-xl ">#YallaCompare</h1>
                    </div>
                    <div className="flex flex-row justify-between px-10 lg:py-24">
                        <div className="flex flex-col ">
                            <div className="flex flex-row justify-between py-4">
                                <a className="" href="/"> <TimerIcon className="text-white" /> </a>
                                <div className="px-4 text-white">

                                    <h3 className="xl:text-xl font-bold md:text-sm">Fast Process</h3>
                                    <p className="py-4 xl:text-lg md:text-sm">The process takes minutes and you
                                        get instant quotes online.</p>
                                </div>


                            </div>
                            <div className="flex flex-row justify-between py-4">
                                <a className="" href="/"> <SecurityIcon className="text-white" /> </a>
                                <div className="px-4 text-white">
                                    <h3 className="xl:text-xl font-bold md:text-sm">Guaranteed Deal</h3>
                                    <p className="py-4 xl:text-lg md:text-sm">We guarantee the cheapest car
                                        insurance ever! We guarantee </p>
                                </div>

                            </div>
                            <div className="flex flex-row justify-between py-4">
                                <a className="" href="/"> <AssignmentIcon className="text-white" /> </a>
                                <div className="px-4 text-white">
                                    <h3 className="xl:text-xl font-bold md:text-sm">Further Assistance</h3>
                                    <p className="py-4 xl:text-lg md:text-sm">We are always here to help even
                                        after you buy your insurance.</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col px-6">
                            <div className="flex flex-row justify-between py-4">
                                <a className="" href="/"> <CompareIcon className="text-white" /> </a>
                                <div className="px-4 text-white">
                                    <h3 className="xl:text-xl font-bold md:text-sm">Compare Prices</h3>
                                    <p className="py-4 xl:text-lg md:text-sm">Compare quotes online and find the
                                        policy that’s right for you.</p>
                                </div>

                            </div>
                            <div className="flex flex-row justify-between py-4">
                                <a className="" href="/"> <HeadsetIcon className="text-white" /> </a>
                                <div className="px-4 text-white">
                                    <h3 className="xl:text-xl font-bold md:text-sm">We Got Your Back</h3>
                                    <p className="py-4 xl:text-lg md:text-sm">You can reach out for our advisers
                                        for any guidance at any time!</p>
                                </div>

                            </div>
                            <div className="flex flex-row justify-between py-4">
                                <a className="" href="/"> <EmojiIcon className="text-white" /> </a>
                                <div className="px-4 text-white">
                                    <h3 className="xl:text-xl font-bold md:text-sm">Best Experience</h3>
                                    <p className="py-4 xl:text-lg  md:text-sm">You will have an awesome experience
                                        dealing with our team</p>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
                <div className="md:w-4/12 md:py-24 md:mt-10">
                    <Image src={peopleImg} height={800} alt="" className="img-fluid " />
                </div>
            </div>
        </div>
    )
}

export default index
