import React from 'react';

const ProgramCard = ({ program }) => {
  if (!program) {
    return <div>프로그램 정보가 없습니다.</div>;
  }

  return (
    <div className="program-card bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <h3 className="text-xl font-semibold text-blue-600">{program.name}</h3>
      <p className="text-gray-600">시설: {program.facility}</p>
      <p className="text-gray-600">위치: {program.location}</p>
      <p className="text-gray-600">연령: {program.ageGroup}</p>
      <p className="text-gray-600">가격: {program.price}원</p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        자세히 보기
      </button>
    </div>
  );
};

export default ProgramCard;
