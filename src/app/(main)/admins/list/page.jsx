'use client';

import { useState } from 'react';
import '@/app/(main)/admins/admin.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Link from "next/link";


// 모킹 데이터
const mockAdmins = [
    { id: 1, name: '김수진', email: 'sujin.kim@example.com', role: '학생', status: '활성' },
    { id: 2, name: '이민호', email: 'minho.lee@example.com', role: '학생', status: '비활성' },
    { id: 3, name: '박지영', email: 'jiyoung.park@example.com', role: '학생', status: '활성' },
    { id: 4, name: '최영수', email: 'youngsoo.choi@example.com', role: '학생', status: '활성' },
    { id: 5, name: '정다은', email: 'daeun.jung@example.com', role: '학생', status: '비활성' }
];

export default function Admins() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const AdminsPerPage = 15;

    const filteredAdmins = mockAdmins.filter(
        (user) =>
            user.name.includes(searchTerm) ||
            user.email.includes(searchTerm) ||
            user.role.includes(searchTerm) ||
            user.status.includes(searchTerm)
    );

    const totalPages = Math.ceil(filteredAdmins.length / AdminsPerPage);
    const startIndex = (currentPage - 1) * AdminsPerPage;
    const currentAdmins = filteredAdmins.slice(startIndex, startIndex + AdminsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <main className="Admins">
            <div className="d-flex align-items-center mb-3">
                <Dropdown className="me-2">
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        - 선택 -
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">이름</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">아이디</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">강의명</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">연락처</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                {/* 인풋창: 테이블 너비의 50% */}
                <Form.Control
                    type="text"
                    placeholder="검색..."
                    className="w-50"
                />
            </div>
            <div className="Admins-table ">
                <table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>사용자명</th>
                        <th>수강</th>
                        <th>연락처</th>
                        <th>가입일</th>
                        <th>기타</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentAdmins.map((user, index) => (

                        <tr key={user.id}>
                            <td>{startIndex + index + 1}</td>
                            <td><Link className="userName" href="#">{user.name}</Link></td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.status}</td>
                            <td>
                                <button className="action-button">수정</button>
                                <button className="action-button">삭제</button>
                            </td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <span>Total: {filteredAdmins.length}</span>
                <div className="page-buttons">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={currentPage === page ? 'active' : ''}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </main>
    );
}