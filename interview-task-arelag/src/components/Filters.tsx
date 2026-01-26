import type { ChangeEvent } from "react";
import { SearchIcon } from "../assets/SearchIcon";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  emailDomain: string;
  domains: string[];
  onDomainChange: (value: string) => void;
  status: "active" | "inactive" | "all";
  onStatusChange: (value: "active" | "inactive" | "all") => void;
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
  const statuses = {
    all: "Все",
    active: "Активные",
    inactive: "Неактивные",
  } as const;
  return (
    <div className="w-full flex flex-col gap-5 pb-5 border-b border-gray-500">
      <div className="relative w-full flex flex-col gap-1.5">
        <b>Поиск</b>
        <input
          className="w-full border-2 border-gray-500 rounded-md p-1.5 text-base mb-2 pl-8"
          placeholder="Введите имя, email или компанию..."
          type="text"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onSearchChange(e.target.value)
          }
          autoFocus
        />
        <SearchIcon className="absolute translate-y-8 и translate-x-2 flex items-center pointer-events-none" />
      </div>
      <div className="w-full flex justify-between mb-1.5">
        <div className="w-1/4 flex flex-col gap-1.5">
          <b>Email домен</b>
          <select
            className="border border-gray-500 rounded-md text-base p-1.5"
            title="Email домен"
            value={emailDomain}
            onChange={(e) => onDomainChange(e.target.value)}
          >
            {domains.map((d) => (
              <option key={d} value={d}>
                {d === "all" ? "все" : d}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/2 flex flex-col gap-2.5 [&>div>label:not(:first-child)]:ml-5 [&>div>label>span]:ml-1.5">
          <b>Статус</b>
          <div>
            {(Object.keys(statuses) as (keyof typeof statuses)[]).map((s) => (
              <label key={s}>
                <input
                  type="radio"
                  name="status"
                  value={s}
                  checked={status === s}
                  onChange={() => onStatusChange(s)}
                />
                <span>{statuses[s]}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
