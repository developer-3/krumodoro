import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../src/components/Nav';

const TITLE = 'krumodoro | profile'

export default function Profile() {
    return (
        <div className="App">
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
            <div className="p-4 w-full h-screen flex flex-col items-center bg-slate-100">
                <Navbar />
            </div>
        </div>
    )
}