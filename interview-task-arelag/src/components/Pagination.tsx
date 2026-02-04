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
  if (totalPages <= 1) return null;

  const createRange = (start: number, end: number) => {
    const arr = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
  };

  const getPages = () => {
    const pages: (number | "...")[] = [];
    // Всегда показываем первую страницу
    pages.push(1);
    // Левая "дырка"
    if (page > 4) {
      pages.push("...");
    }
    // Центральные страницы
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);
    pages.push(...createRange(start, end));
    // Правая "дырка"
    if (page < totalPages - 3) {
      pages.push("...");
    }
    // Всегда показываем последнюю страницу
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPages();

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
