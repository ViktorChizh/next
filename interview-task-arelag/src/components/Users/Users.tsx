import { useEffect, useState, type ChangeEvent } from "react";
import { searchUsers, getEmailDomains, type User } from "../../backend";
import { UserCard } from "../userCard/UserCard";
import "./users.css";

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
    <div className="main">
      <p>Поиск</p>

      <input
        className="inputSearch"
        placeholder="Введите имя, email или компанию..."
        type="text"
        value={searchText}
        onChange={onChangeHandler}
        autoFocus
      />

      <div className="filters">
        <div className="filtersDomain">
          <p>Email домен</p>
          <select className="domain" title="Email домен">
            {domains.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className="filtersStatus">
          <p>Статус</p>
          <div>
            <label>
              <input type="radio" name="status" value="all" />
              Все
            </label>

            <label>
              <input type="radio" name="status" value="active" />
              Активные
            </label>

            <label>
              <input type="radio" name="status" value="inactive" />
              Неактивные
            </label>
          </div>
        </div>
      </div>

      <div className="usersBlock">
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
