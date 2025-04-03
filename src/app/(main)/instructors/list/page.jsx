'use client';

import { listInstructors } from './list';
import '@/app/(main)/instructors/instructors.css';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";



export default function Instuctors() {

    const {
        searchTerm,
        setSearchTerm,
        currentPage,
        totalPages,
        currentInstuctors,
        handlePageChange,
        showModal,
        handleShowModal,
        handleCloseModal,
        newInstructor,
        handleInputChange,
        handleAddInstructor,
    } = listInstructors();

    return (
        <main className="Instuctors">
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
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="primary">검색</Button>
                </div>
                <div style={{ width: '120px', textAlign: 'center' }}>
                    <Button variant="success"onClick={handleShowModal}>등록</Button>
                </div>
            </div>
            <div className="Instuctors-table">
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
                    {currentInstuctors.map((user, index) => (
                        <tr key={user.id}>
                            <td>{(currentPage - 1) * 15 + index + 1}</td>
                            <td>
                                <Link className="userName" href="#">
                                    {user.name}
                                </Link>
                            </td>
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

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>강사 등록</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>사용자명</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={newInstructor.name}
                                onChange={handleInputChange}
                                placeholder="이름을 입력하세요"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>이메일</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={newInstructor.email}
                                onChange={handleInputChange}
                                placeholder="이메일을 입력하세요"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>역할</Form.Label>
                            <Form.Control
                                type="text"
                                name="role"
                                value={newInstructor.role}
                                onChange={handleInputChange}
                                placeholder="역할을 입력하세요 (예: 학생)"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>상태</Form.Label>
                            <Form.Select
                                name="status"
                                value={newInstructor.status}
                                onChange={handleInputChange}
                            >
                                <option value="">상태를 선택하세요</option>
                                <option value="활성">활성</option>
                                <option value="비활성">비활성</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={handleAddInstructor}>
                        저장
                    </Button>
                </Modal.Footer>
            </Modal>

        </main>

    );
}