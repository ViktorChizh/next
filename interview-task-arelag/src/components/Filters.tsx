import type { ChangeEvent } from "react";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;

  emailDomain: string;
  domains: string[];
  onDomainChange: (value: string) => void;
  status: "active" | "inactive" | "all" | undefined;
  onStatusChange: (value: "active" | "inactive" | "all" | undefined) => void;
};

export const Filters = ({
  search,
  onSearchChange,
  emailDomain,
  domains,
  onDomainChange,
  status,
  onStatusChange,
}: Props) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div>
        <p>Поиск</p>
        <input
          className="w-full border-2 border-gray-500 rounded-md p-1.5 text-base mb-2"
          placeholder="Введите имя, email или компанию..."
          type="text"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onSearchChange(e.target.value)
          }
          autoFocus
        />
      </div>
      <div className="w-full flex justify-between">
        <div className="w-1/4 flex flex-col gap-1.5">
          <p>Email домен</p>
          <select
            className="border border-gray-500 rounded-md text-base p-1.5"
            title="Email домен"
            value={emailDomain}
            onChange={(e) => onDomainChange(e.target.value)}
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
              <input
                type="radio"
                name="status"
                value="all"
                checked={status === "all"}
                onChange={() => onStatusChange("all")}
              />
              <span>Все</span>
            </label>

            <label>
              <input
                type="radio"
                name="status"
                value="active"
                checked={status === "active"}
                onChange={() => onStatusChange("active")}
              />
              <span>Активные</span>
            </label>

            <label>
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={status === "inactive"}
                onChange={() => onStatusChange("inactive")}
              />
              <span>Неактивные</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
