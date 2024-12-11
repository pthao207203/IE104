import * as React from "react";

function FormField({ label, value, id, hasDropdown, dropdownIcon }) {
  return (
    <div className="flex flex-col justify-center mt-10 w-full max-md:max-w-full">
      <label htmlFor={id} className="text-neutral-900 text-opacity-50 max-md:max-w-full">
        {label}
      </label>
      <div className="flex relative gap-2.5 items-start px-2.5 py-6 mt-2 w-full rounded-lg border border-solid border-slate-500 border-opacity-80 min-h-[63px] text-neutral-900 max-md:max-w-full">
        <input
          type="text"
          id={id}
          value={value}
          className="z-0 flex-1 shrink my-auto basis-0 max-md:max-w-full bg-transparent border-none outline-none"
        />
        {hasDropdown && (
          <img
            loading="lazy"
            src={dropdownIcon}
            alt=""
            className="object-contain absolute right-4 z-0 shrink-0 self-start w-6 h-6 aspect-square top-[19px]"
          />
        )}
      </div>
    </div>
  );
}

export default FormField;