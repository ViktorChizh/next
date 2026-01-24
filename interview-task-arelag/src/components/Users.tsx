import { useEffect, useState } from "react";
import { searchUsers, getEmailDomains, type User } from "../backend";
import { UserCard } from "./UserCard";
import { useDebounce } from "../hooks/useDebounce";
import { Filters } from "./Filters";

export const Users = () => {
  const [usersArr, setUsersArr] = useState<User[]>([]);
  const [error, setError] = useState("");

  const [searchText, setSearchText] = useState("");
  const [domain, setDomain] = useState("");
  const [status, setStatus] = useState("all");

  const debouncedSearch = useDebounce(searchText);

  useEffect(() => {
    searchUsers({
      query: debouncedSearch || undefined,
    })
      .then((res) => {
        setUsersArr(res.users);
        setError("");
      })
      .catch((err) => setError(err));
  }, [debouncedSearch, domain, status]);

  const domains = ["все", ...getEmailDomains()];

  return (
    <div className="flex flex-col w-[50vw] p-2.5">
      <Filters
        search={searchText}
        onSearchChange={setSearchText}
        domain={domain}
        domains={domains}
        onDomainChange={setDomain}
        status={status}
        onStatusChange={setStatus}
      />

      <div className="w-full flex flex-wrap justify-between mt-5">
        {error ? (
          <p>Получена ошибка: {error}</p>
        ) : usersArr.length ? (
          usersArr.map((user) => <UserCard user={user} key={user.id} />)
        ) : (
          <p>Нет пользователей</p>
        )}
      </div>
    </div>
  );
};
