import { useNavigate } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import Input from "./BaseComponents/Input";

export default function GlobalSearch() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

const availablePages = ["", "nck", "hash"];

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const keyDownHandler = (event: KeyboardEvent) => {
    const commandOrControlKey = event.ctrlKey || event.metaKey;
    if (commandOrControlKey && event.key === "k") {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  });

  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleSubmitSearch = () => {
    inputRef.current?.blur();

    const searchValueLowerCase = searchValue.toLocaleLowerCase();
    if (availablePages.includes(searchValueLowerCase)) {
      navigate(`/${searchValueLowerCase}`);
    }
  };

  return (
    <Input
      ref={inputRef}
      className="w-4/5"
      type="text"
      placeholder="⌘K to search"
      value={searchValue.toLocaleUpperCase()}
      onChange={(event) => setSearchValue(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") handleSubmitSearch();
      }}
    />
  );
};
