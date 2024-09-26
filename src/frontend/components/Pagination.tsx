import React from "react";

type PaginationProps = {
  pagesNumber: number;
  handlePagination: any;
  page: number;
};
function Pagination({ pagesNumber, handlePagination, page }: PaginationProps) {
  const pages = Array.from({ length: pagesNumber }, (_, i) => i + 1);

  return (
    <div className="flex gap-2">
      <PaginationButton
        disabled={page <= 1 ? true : false}
        onClick={() => handlePagination((prev: any) => prev - 1)}
      >
        Previous
      </PaginationButton>
      {pages.map((_page) => (
        <PaginationButton
          key={_page}
          disabled={_page === page}
          onClick={() => handlePagination(_page)}
        >
          {_page}
        </PaginationButton>
      ))}
      <PaginationButton
        disabled={page >= pagesNumber ? true : false}
        onClick={() => handlePagination((prev: any) => prev + 1)}
      >
        Next
      </PaginationButton>
    </div>
  );
}

function PaginationButton({
  onClick,
  children,
  disabled,
}: {
  onClick: () => void;
  children: React.ReactNode;
  disabled: boolean;
}) {
  return (
    <button
      className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white disabled:bg-gray-200 "
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Pagination;
