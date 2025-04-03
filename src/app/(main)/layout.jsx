'use client';

import { useState } from 'react';
import Header from '../layout/Header';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import '@/app/globals.css';

export default function MainLayout({ children }) {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <div className="app">
            <Header toggleNavbar={toggleNavbar} isNavbarOpen={isNavbarOpen} />
            <div className="main-container">
                <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
                {isNavbarOpen && (
                    <div className="backdrop" onClick={toggleNavbar}></div>
                )}
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}