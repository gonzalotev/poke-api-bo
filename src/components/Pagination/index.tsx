import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { PaginationProps } from "@/lib/types";

const Pagination: React.FC<PaginationProps> = ({ currentPage, handlePageChange, isLoading }) => {
  return (
    <div className="flex justify-center mt-6 mb-6">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
        className="flex items-center gap-2 m-2 p-2 rounded-full bg-white"
      >
        <FaArrowLeft size={20} color="black" />
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLoading}
        className="flex items-center gap-2 m-2 p-2 rounded-full bg-white"
      >
        <FaArrowRight size={20} color="black" />
      </button>
    </div>
  );
};

export default Pagination;
