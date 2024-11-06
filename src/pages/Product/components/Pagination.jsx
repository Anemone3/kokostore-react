import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  return (
    <>
      <div className="mt-4 flex items-center justify-between border-t border-gray-200 bg-white px-6 py-2">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="text-sm">Anterior</span>
        </button>

        <div className="flex items-center space-x-1">
          {generatePageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex h-7 w-7 items-center justify-center rounded-full text-sm ${
                currentPage === page
                  ? "bg-pink-500 text-white"
                  : "text-gray-600 hover:bg-pink-50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="text-sm">Siguiente</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </>
  );
};
