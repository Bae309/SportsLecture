import React from 'react';
import ProgramCard from './ProgramCard';

const ProgramList = ({ programs, searchQuery, filters }) => {
  const filteredPrograms = programs?.filter((program) => {
    if (searchQuery && !program.name.includes(searchQuery)) return false;
    if (filters.region && program.region !== filters.region) return false;
    if (filters.ageGroup && program.ageGroup !== filters.ageGroup) return false;
    return true;
  });

  return (
    <div className="program-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredPrograms && filteredPrograms.length > 0 ? (
        filteredPrograms.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">검색된 프로그램이 없습니다.</p>
      )}
    </div>
  );
};

export default ProgramList;
