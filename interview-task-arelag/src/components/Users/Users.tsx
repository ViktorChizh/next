import { useEffect, useState, type ChangeEvent } from "react";
import { searchUsers, getEmailDomains, type User } from "../../backend";
import { UserCard } from "../userCard/UserCard";

export const Users = () => {
  const [usersArr, setUsersArr] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    searchUsers({})
      .then((res) => setUsersArr(res.users))
      .catch((err) => setError(err));
  }, []);

  const [searchText, setSearchText] = useState("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.currentTarget.value);
  const domains = getEmailDomains();
  return (
    <div className="flex flex-col w-[50vw] p-2.5">
      <p>Поиск</p>
      <input
        className="w-full border-2 border-gray-500 rounded-md p-1.5 text-base  mb-5"
        placeholder="Введите имя, email или компанию..."
        type="text"
        value={searchText}
        onChange={onChangeHandler}
        autoFocus
      />
      <div className="w-full flex justify-between mb-5 mt-5">
        <div className="w-1/4 flex flex-col gap-1.5">
          <p>Email домен</p>
          <select
            className="border border-gray-500 rounded-md text-base  p-1.5"
            title="Email домен"
          >
            {domains.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/2 flex flex-col gap-2.5 [&>div>label:not(:first-child)]:ml-5 [&>div>label>span]:ml-1.5">
          <p>Статус</p>
          <div>
            <label>
              <input type="radio" name="status" value="all" />
              <span>Все</span>
            </label>

            <label>
              <input type="radio" name="status" value="active" />
              <span>Активные</span>
            </label>

            <label>
              <input type="radio" name="status" value="inactive" />
              <span>Неактивные</span>
            </label>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-between">
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
