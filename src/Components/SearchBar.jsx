import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar mb-4">
      <input
        type="text"
        placeholder="찾으시는 스포츠강좌가 있으신가요?"
        className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
