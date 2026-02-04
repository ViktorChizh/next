import { UserCard } from "./UserCard";
import { Filters } from "./Filters";
import { Pagination } from "./Pagination";
import { useUsers } from "../hooks/useUsers";

export const Users = () => {
  const {
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
  } = useUsers();

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
      {!error && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};
