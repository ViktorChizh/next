import { useMemo } from "react";

export const usePagination = (page: number, totalPages: number) => {
  return useMemo(() => {
    if (totalPages <= 1) return [];

    const createRange = (start: number, end: number) => {
      const arr = [];
      for (let i = start; i <= end; i++) arr.push(i);
      return arr;
    };

    const pages: (number | "...")[] = [];

    // первая страница
    pages.push(1);

    // левая дырка
    if (page > 4) {
      pages.push("...");
    }

    // центральные страницы
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);
    pages.push(...createRange(start, end));

    // правая дырка
    if (page < totalPages - 3) {
      pages.push("...");
    }

    // последняя страница
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  }, [page, totalPages]);
};
