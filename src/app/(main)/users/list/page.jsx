'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // useRouter 추가
import { Button, Dropdown } from 'react-bootstrap';
import '../users.css';
import Form from "react-bootstrap/Form";

// 모킹 데이터
const mockUsers = [
    { id: 1, name: '김수진', email: 'sujin.kim@example.com', role: '학생', status: '활성' },
    { id: 2, name: '이민호', email: 'minho.lee@example.com', role: '학생', status: '비활성' },
    { id: 3, name: '박지영', email: 'jiyoung.park@example.com', role: '학생', status: '활성' },
    { id: 4, name: '최영수', email: 'youngsoo.choi@example.com', role: '학생', status: '활성' },
    { id: 5, name: '정다은', email: 'daeun.jung@example.com', role: '학생', status: '비활성' },
    { id: 6, name: '홍길동', email: 'gildong.hong@example.com', role: '학생', status: '활성' },
];

export default function Users() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;
    const router = useRouter(); // useRouter 훅 사용

    const filteredUsers = mockUsers.filter(
        (user) =>
            user.name.includes(searchTerm) ||
            user.email.includes(searchTerm) ||
            user.role.includes(searchTerm) ||
            user.status.includes(searchTerm)
    );

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    const startIndex = (currentPage - 1) * usersPerPage;
    const currentUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleRegister = () => {
        router.push('/users/create'); // "등록" 버튼 클릭 시 /users/create로 이동
    };

    return (
        <main className="users">
            <div className="d-flex align-items-center mb-3">
                <Form.Select className="selectbox">
                    <option>- 선택 -</option>
                    <option value="1">이름</option>
                    <option value="2">강의명</option>
                    <option value="3">연락처</option>
                </Form.Select>
                <Form.Control
                    type="text"
                    placeholder="검색..."
                    className="w-25"
                />
                <Button className="" variant="primary" >
                    검색
                </Button>
            </div>
            <div className="users-table">
                <table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>사용자명</th>
                        <th>이메일</th>
                        <th>역할</th>
                        <th>상태</th>
                        <th>기타</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentUsers.map((user, index) => (
                        <tr key={user.id}>
                            <td>{startIndex + index + 1}</td>
                            <td>{user.name}</td>
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