import { useEffect, useState } from "react";
import { searchUsers, getEmailDomains, type User } from "../backend";
import { useDebounce } from "../hooks/useDebounce";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  const [searchText, setSearchText] = useState("");
  const [emailDomain, setEmailDomain] = useState("all");
  const [status, setStatus] = useState<"active" | "inactive" | "all">("all");

  const debouncedSearch = useDebounce(searchText);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const domains = ["all", ...getEmailDomains()];

  useEffect(() => {
    searchUsers({
      query: debouncedSearch,
      emailDomain,
      status,
      page,
    })
      .then((res) => {
        setUsers(res.users);
        setTotalPages(res.totalPages);
        setError("");
      })
      .catch((err) => {
        const message = err instanceof Error ? err.message : String(err);
        setError(message);
      });
  }, [debouncedSearch, emailDomain, status, page]);

  return {
    users,
    error,

    searchText,
    setSearchText,

    emailDomain,
    setEmailDomain,

    status,
    setStatus,

    page,
    setPage,

    totalPages,
    domains,
  };
};
