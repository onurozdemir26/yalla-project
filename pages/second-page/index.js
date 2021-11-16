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
        <div className="mx-auto container">
            <div className=" flex flex-col items-center py-10">
                <h1 className="text-3xl py-4">How YallaCompare Works</h1>
                <p className="text-xl py-2">Unbelievably simple process at which you can save money on your car insurance
                    in Dubai in 3 easy steps!</p>
            </div>
            <div className="transform motion-safe:hover:scale-110   py-14 p-24 ml-60 ">
                <Image src={dashImg} alt="" width={867} height={652} className="img-fluid" />
            </div>
            <div className="flex flex-row py-24">
                <div className="w-8/12 bg-pink-500 rounded-l-xl">
                    <h3 className="text-white text-2xl px-10 py-5">Six Reasons</h3>
                    <div className="flex">

                        <h1 className="text-white text-4xl text-bold px-10">Why You Should Choose </h1>
                        <h1 className="text-white text-4xl text-bold px-10">#YallaCompare</h1>
                    </div>
                    <div className="flex flex-row justify-between  px-10 py-4">
                        <div className="flex flex-col ">
                            <div className="flex flex-row justify-between py-4">
                                <a className="" href="/"> <TimerIcon className="text-white" /> </a>
                                <div className="px-4 text-white">

                                    <h3 className="text-xl font-bold">Fast Process</h3>
                                    <p className="py-4 text-lg">The process takes minutes and you
                                        get instant quotes online.</p>
                                </div>


                            </div>
                            <div className="flex flex-row justify-between py-4">
                                <a className="" href="/"> <SecurityIcon className="text-white" /> </a>
                                <div className="px-4 text-white">
                                    <h3 className="text-xl font-bold">Guaranteed Deal</h3>
                                    <p className="py-4 text-lg">We guarantee the cheapest car
                                        insurance ever! We guarantee </p>
                                </div>

                            </div>
                            <div className="flex flex-row justify-between py-4">
                                <a className="" href="/"> <AssignmentIcon className="text-white" /> </a>
                                <div className="px-4 text-white">
                                    <h3 className="text-xl font-bold">Further Assistance</h3>
                                    <p className="py-4 text-lg">We are always here to help even
                                        after you buy your insurance.</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col px-6">
                            <div className="flex flex-row justify-between py-4">
                                <a className="" href="/"> <CompareIcon className="text-white" /> </a>
                                <div className="px-4 text-white">
                                    <h3 className="text-xl font-bold">Compare Prices</h3>
                                    <p className="py-4 text-lg">Compare quotes online and find the
                                        policy that’s right for you.</p>
                                </div>

                            </div>
                            <div className="flex flex-row justify-between py-4">
                                <a className="" href="/"> <HeadsetIcon className="text-white" /> </a>
                                <div className="px-4 text-white">
                                    <h3 className="text-xl font-bold">We Got Your Back</h3>
                                    <p className="py-4 text-lg">You can reach out for our advisers
                                        for any guidance at any time!</p>
                                </div>

                            </div>
                            <div className="flex flex-row justify-between py-4">
                                <a className="" href="/"> <EmojiIcon className="text-white" /> </a>
                                <div className="px-4 text-white">
                                    <h3 className="text-xl font-bold">Best Experience</h3>
                                    <p className="py-4 text-lg">You will have an awesome experience
                                        dealing with our team</p>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
                <div className="w-4/12 ">
                    <Image src={peopleImg} height={800} alt="" className="img-fluid " />
                </div>
            </div>
        </div>
    )
}

export default index
