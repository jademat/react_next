'use client';

import { useState } from 'react';
import '@/app/(main)/admins/admin.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                    <Form.Select className="selectbox me-2">
                        <option>강의명</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Form.Control
                        type="text"
                        placeholder="검색..."
                        className="w-25 me-2"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="primary">
                        검색
                    </Button>
                </div>
                <div style={{ width: '120px', textAlign: 'center' }}>
                    <Button variant="success">
                        등록
                    </Button>
                </div>
            </div>
            <div className="Admins-table ">
                <table>
                    <thead>
                    <tr>
                        <th style={{ width: '10%' }}>No</th>
                        <th style={{ width: '20%' }}>사용자명</th>
                        <th style={{ width: '25%' }}>수강</th>
                        <th style={{ width: '15%' }}>연락처</th>
                        <th style={{ width: '15%' }}>가입일</th>
                        <th style={{ width: '15%' }}>기타</th>
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