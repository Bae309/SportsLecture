import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import CategoryFilter from '../Components/CategoryFilter';
import ProgramList from '../Components/ProgramList';

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    region: '',
    ageGroup: '',
    gender: '',
    day: '',
    timeSlot: '',
    priceRange: [0, 100000],
    startDate: '',
  });
  const [programs, setPrograms] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <div className="main-page bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">스포츠 강좌 리스트</h1>

      {/* 검색창 */}
      <SearchBar onSearch={handleSearch} />

      {/* 카테고리 필터 */}
      <CategoryFilter onFilterChange={handleFilterChange} />

      {/* 프로그램 리스트 */}
      <ProgramList programs={programs} searchQuery={searchQuery} filters={filters} />
    </div>
  );
};

export default MainPage;
