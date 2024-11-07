import React from 'react';

const CategoryFilter = ({ onFilterChange }) => {
  return (
    <div className="category-filter grid grid-cols-2 gap-4 mb-6">
      <select
        className="p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onFilterChange('region', e.target.value)}
      >
        <option value="">지역 선택</option>
        <option value="서울특별시">서울특별시</option>
        <option value="경기도">경기도</option>
        <option value="부산광역시">부산광역시</option>
        {/* 추가 지역 옵션 */}
      </select>
      {/* 추가 필터 옵션 */}
    </div>
  );
};

export default CategoryFilter;
