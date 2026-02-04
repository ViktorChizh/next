import { usePagination } from "../hooks/usePagination";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = usePagination(page, totalPages);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center gap-2 mt-5 select-none">
      <button
        className="px-2 py-1 border rounded disabled:opacity-40"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        {"<"}
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`dots-${i}`} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`px-3 py-1 border rounded ${
              p === page ? "bg-gray-300 font-bold" : ""
            }`}
          >
            {p}
          </button>
        ),
      )}
      <button
        className="px-2 py-1 border rounded disabled:opacity-40"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        {">"}
      </button>
    </div>
  );
};
