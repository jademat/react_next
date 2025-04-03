'use client';

import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

function Header({ toggleNavbar, isNavbarOpen }) {
    return (
        <header className="header">
            <div className="header-left">
                <button className="menu-toggle" onClick={toggleNavbar}>
                    <FaBars />
                </button>
                <Link href="/dashboard" className="dashboard-link">
                    <h1>HLB academy</h1>
                </Link>
            </div>
            <div className="user-info">
                <span>Welcome, Admin</span>
                <button>Logout</button>
            </div>
        </header>
    );
}

export default Header;