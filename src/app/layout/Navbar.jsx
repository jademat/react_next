'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUsers, FaChalkboardTeacher, FaUserShield, FaBook, FaClipboardList, FaPoll, FaFileAlt, FaClipboard, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Navbar({ isOpen, toggleNavbar }) {
    const pathname = usePathname();

    const [openMenus, setOpenMenus] = useState({
        membership: false,
        courses: false,
        surveys: false,
    });

    // 경로에 따라 아코디언 메뉴를 자동으로 열기
    useEffect(() => {
        if (['/users', '/instructors', '/admins'].includes(pathname)) {
            setOpenMenus((prev) => ({ ...prev, membership: true }));
        } else if (['/courses', '/lectures'].includes(pathname)) {
            setOpenMenus((prev) => ({ ...prev, courses: true }));
        } else if (['/survey-items', '/surveys', '/survey-responses'].includes(pathname)) {
            setOpenMenus((prev) => ({ ...prev, surveys: true }));
        }
    }, [pathname]);

    const toggleMenu = (menu) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    const isActive = (path) => pathname === path;

    const isParentActive = (paths) => paths.some((path) => pathname === path);

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <div className="navbar-header">
                <button className="navbar-close" onClick={toggleNavbar}>
                    <FaTimes />
                </button>
            </div>
            <ul>
                {/* 회원관리 */}
                <li className="menu-item">
                    <button
                        className={`menu-button ${isParentActive(['/users/list', '/instructors/list', '/admins/list']) ? 'active' : ''}`}
                        onClick={() => toggleMenu('membership')}
                    >
                        <FaUsers style={{ marginRight: '8px' }} /> 회원관리
                        {openMenus.membership ? <FaChevronUp className="chevron" /> : <FaChevronDown className="chevron" />}
                    </button>
                    {openMenus.membership && (
                        <ul className="submenu">
                            <li>
                                <Link
                                    href="/users/list"
                                    onClick={() => isOpen && toggleNavbar()}
                                    className={isActive('/users/list') ? 'active' : ''}
                                >
                                    회원목록
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/instructors/list"
                                    onClick={() => isOpen && toggleNavbar()}
                                    className={isActive('/instructors/list') ? 'active' : ''}
                                >
                                    강사목록
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admins/list"
                                    onClick={() => isOpen && toggleNavbar()}
                                    className={isActive('/admins/list') ? 'active' : ''}
                                >
                                    관리자목록
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* 과정관리 */}
                <li className="menu-item">
                    <button
                        className={`menu-button ${isParentActive(['/courses', '/lectures']) ? 'active' : ''}`}
                        onClick={() => toggleMenu('courses')}
                    >
                        <FaBook style={{ marginRight: '8px' }} /> 과정관리
                        {openMenus.courses ? <FaChevronUp className="chevron" /> : <FaChevronDown className="chevron" />}
                    </button>
                    {openMenus.courses && (
                        <ul className="submenu">
                            <li>
                                <Link
                                    href="/courses"
                                    onClick={() => isOpen && toggleNavbar()}
                                    className={isActive('/courses') ? 'active' : ''}
                                >
                                    과정관리
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/lectures"
                                    onClick={() => isOpen && toggleNavbar()}
                                    className={isActive('/lectures') ? 'active' : ''}
                                >
                                    강의관리
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* 설문관리 */}
                <li className="menu-item">
                    <button
                        className={`menu-button ${isParentActive(['/survey-items', '/surveys', '/survey-responses']) ? 'active' : ''}`}
                        onClick={() => toggleMenu('surveys')}
                    >
                        <FaPoll style={{ marginRight: '8px' }} /> 설문관리
                        {openMenus.surveys ? <FaChevronUp className="chevron" /> : <FaChevronDown className="chevron" />}
                    </button>
                    {openMenus.surveys && (
                        <ul className="submenu">
                            <li>
                                <Link
                                    href="/survey-items"
                                    onClick={() => isOpen && toggleNavbar()}
                                    className={isActive('/survey-items') ? 'active' : ''}
                                >
                                    설문문항관리
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/surveys"
                                    onClick={() => isOpen && toggleNavbar()}
                                    className={isActive('/surveys') ? 'active' : ''}
                                >
                                    설문지관리
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/survey-responses"
                                    onClick={() => isOpen && toggleNavbar()}
                                    className={isActive('/survey-responses') ? 'active' : ''}
                                >
                                    설문조사관리
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* 게시판관리 */}
                <li className="menu-item">
                    <Link
                        href="/boards"
                        onClick={() => isOpen && toggleNavbar()}
                        className={isActive('/boards') ? 'active' : ''}
                    >
                        <FaClipboard style={{ marginRight: '8px' }} /> 게시판관리
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;