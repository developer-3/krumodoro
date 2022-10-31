import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../src/components/Nav';
import ProfileStat from '../src/components/ProfileStat';

const TITLE = 'krumodoro | profile'

export default function Profile() {
    return (
        <div className="App">
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
            <div className="w-full h-screen flex flex-col gap-4 items-center bg-slate-100">
                <Navbar />
                <div className="grid grid-cols-3 grid-rows-2 gap-4 w-2/3">
                    <div className="row-span-1 flex flex-col items-center gap-2">
                        <img src="/adam.jpg" className="w-[18vw] h-[18vw] rounded-full cursor-pointer" />
                        <p className='font-bold text-3xl'>Adam Anderson</p>
                    </div>
                    <div className="col-start-2 col-span-2 row-span-1">
                        <div className="h-full flex flex-row justify-around items-center">
                            <ProfileStat name={"total minutes studied"} number={25000000} />
                            <ProfileStat name={"light years traveled"} number={0.008} />
                        </div>
                    </div>
                    <div className="col-span-3 row-start-2 row-span-1 bg-purple-100">cool grid thing</div>
                </div>
            </div>
        </div>
    )
}