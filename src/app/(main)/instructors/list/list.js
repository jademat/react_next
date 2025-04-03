import React, {useState} from 'react';

const mockInstuctors = [
    { no: 1, name: '김수진', email: 'sujin.kim@example.com', role: '학생', status: '활성' }
];

export const listInstructors = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const InstuctorsPerPage = 15;
    const [instructors, setInstructors] = useState(mockInstuctors); // 동적 데이터 관리
    const [showModal, setShowModal] = useState(false); // 모달창 상태
    const [newInstructor, setNewInstructor] = useState({ name: '',id : '', passwd : '', email: '', role: '', status: '' });

    const filteredInstuctors = mockInstuctors.filter(
        (user) =>
            user.name.includes(searchTerm) ||
            user.id.includes(searchTerm) ||
            user.passwd .includes(searchTerm) ||
            user.email.includes(searchTerm) ||
            user.role.includes(searchTerm) ||
            user.status.includes(searchTerm)
    );

    const totalPages = Math.ceil(filteredInstuctors.length / InstuctorsPerPage);
    const startIndex = (currentPage - 1) * InstuctorsPerPage;
    const currentInstuctors = filteredInstuctors.slice(startIndex, startIndex + InstuctorsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setNewInstructor({ name: '',id : '', passwd : '', email: '', role: '', status: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewInstructor((prev) => ({ ...prev, [name]: value }));
    };

    // 강사 등록 처리
    const handleAddInstructor = () => {
        const newId = instructors.length + 1;
        const newInstructorData = { no: newId, ...newInstructor };
        setInstructors((prev) => [...prev, newInstructorData]); // 새로운 강사 추가
        handleCloseModal(); // 모달 닫기
    };
    return {
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
    };
};