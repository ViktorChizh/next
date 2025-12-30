import { useEffect, useState } from "react";
import { searchUsers, type User } from "./backend";
import { UserCart } from "./UserCart";

export const Users = () => {
  const [usersArr, setUsersArr] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    searchUsers({})
      .then((res) => setUsersArr(res.users))
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <input type="text" />
      <div>
        <select> </select>
      </div>
      {error ? (
        <p>Получена ошибка: {error}</p>
      ) : usersArr.length ? (
        usersArr.map((user) => <UserCart user={user} key={user.id} />)
      ) : (
        <p>Нет пользователей</p>
      )}
    </>
  );
};
