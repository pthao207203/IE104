import * as React from "react";

function SearchBar() {
  return (
    <form className="flex items-start w-full text-blue-950 max-md:max-w-full" role="search">
      <div className="flex flex-wrap gap-3 items-center px-3 py-4 bg-blue-100 min-h-[60px] min-w-[240px] rounded-[100px] w-[1293px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/d65b3dbcd183bd0bf43e39ea99d6c9cc3223e800f0d05d6efe18b8c004e9ec5b?apiKey=ce9d43b270ae41158192dec03af70a1a&"
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          alt=""
        />
        <label htmlFor="searchInput" className="sr-only">Tìm kiếm</label>
        <input 
          type="search"
          id="searchInput"
          className="gap-2.5 self-stretch my-auto bg-transparent border-none outline-none"
          placeholder="Tìm kiếm"
        />
      </div>
    </form>
  );
}

export default SearchBar;