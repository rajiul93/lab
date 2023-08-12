import React, { useState } from "react";
import data2 from "./program/data.json";
export default function Table() {
  const [filterProduct, setFilterProduct] = useState("");

  return (
    <div className="overflow-scroll  bg-slate-400 max-h-screen relative">
      <div className="w-[720px] min-h-screen max-h-screen overflow-auto shadow-2xl shadow-gray-400  mx-auto">
        <div className="bg-slate-700 rounded-t-lg mt-7  p-2" action="">
          <div className=" sticky top-2">

         
            
              <input
              placeholder="English Name"
                onChange={(event) => {
                  setFilterProduct(event.target.value);
                }}
                type="text"
                className=" ps-3 py-1  rounded-lg "
              />
               <input
              placeholder="China Name"
                onChange={(event) => {
                  setFilterProduct(event.target.value);
                }}
                type="text"
                className="ms-4 ps-3 py-1  rounded-lg "
              />
           
          </div>
        </div>
        <table className="rounded-lg">
          <tr className="bg-black text-yellow-50">
            <th className="py-2">ID</th>
            <th className="py-2">China Name</th>
            <th className="py-2">English Name</th>
            <th className="py-2">specification</th>
            <th className="py-2">Quantity</th>
          </tr>
          {data2
            .filter((val) => {
              if (filterProduct === "") {
                return val;
              } else if (
                val.name2.toLowerCase().includes(filterProduct.toLowerCase())
              ) {
                return val;
              }else if (
                val.name1.toLowerCase().includes(filterProduct.toLowerCase())
              ) {
                return val;
              }
              else {
                return null;
              }
            })
            .map((val, ind) => {
              return (
                <tr
                  key={ind}
                  className="bg-slate-50 hover:rounded-lg hover:bg-black hover:text-white border-2  bores "
                >
                  <td className=" ps-3 w-8 border-r-1 ">{val.id}</td>
                  <td className="w-48  text-center">{val.name1}</td>
                  <td className="w-48 text-left">{val.name2}</td>
                  <td className="w-48  text-center">{val.specification}</td>
                  <td className="w-48 text-center flex justify-around">
                    {val.quantity}
                    {/* <button className="w-12 p-2 rounded-lg bg-lime-900">
                    Edit
                  </button> */}
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}
