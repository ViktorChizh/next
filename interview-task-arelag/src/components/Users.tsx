import { useEffect, useState } from "react";
import { searchUsers, getEmailDomains, type User } from "../backend";
import { UserCard } from "./UserCard";
import { useDebounce } from "../hooks/useDebounce";
import { Filters } from "./Filters";

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  const [searchText, setSearchText] = useState("");
  const [emailDomain, setEmailDomain] = useState("all");
  const [status, setStatus] = useState<"active" | "inactive" | "all">("all");

  const debouncedSearch = useDebounce(searchText);

  useEffect(() => {
    searchUsers({
      query: debouncedSearch,
      emailDomain,
      status,
    })
      .then((res) => {
        setUsers(res.users);
        setError("");
      })
      .catch((err) => setError(err.message));
  }, [debouncedSearch, emailDomain, status]);

  const domains = ["all", ...getEmailDomains()];

  return (
    <div className="flex flex-col w-[50vw] p-2.5">
      <Filters
        search={searchText}
        onSearchChange={setSearchText}
        emailDomain={emailDomain}
        domains={domains}
        onDomainChange={setEmailDomain}
        status={status}
        onStatusChange={setStatus}
      />

      <div className="w-full flex flex-wrap justify-between mt-5">
        {error ? (
          <p>{error}</p>
        ) : users.length ? (
          users.map((user) => <UserCard user={user} key={user.id} />)
        ) : (
          <p>Нет пользователей</p>
        )}
      </div>
    </div>
  );
};
