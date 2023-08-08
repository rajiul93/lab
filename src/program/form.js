import React, { useState } from 'react';

export default function Form() {
  const [filterProduct, setFilterProduct] = useState("");

  return (
    <div className="bg-slate-700 w-[720px] mx-auto p-10" action="">
    <h1 className="text-center mb-3 font-semibold text-2xl ">
      Chemical Store
    </h1>
    <div className="">
      <div className="mb-3 flex gap-8">
        <label htmlFor="" className="text-white text-2xl">
          Chemical Name
        </label>
        <input
          onChange={(event) => {
            setFilterProduct(event.target.value);
          }}
          type="text"
          className=" ps-3 py-1 text-xl"
        />
        <div className="flex gap-4">
          <button className="bg-white px-3 border hover:bg-slate-400 rounded-lg">
            Search
          </button>
          <button className="bg-white px-3 border hover:bg-slate-400 rounded-lg">
            All
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
