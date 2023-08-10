import React, { useState } from "react";
import data2 from "./program/data.json";
export default function Table() {

  const [filterProduct, setFilterProduct] = useState("");

  

  return (
    <div className="mx-auto overflow-scroll  bg-slate-400 max-h-screen relative">
            <div className="bg-slate-700   p-10" action="">
   
    <div className=" sticky top-2">
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

      </div>
    </div>
  </div>
      <table>
        <tr>
          <th>id</th>
          <th>china Name</th>
          <th>English Name</th>
          <th>specification</th>
          <th>Quantity</th>
        </tr>
        {data2.filter((val) => {
            if (filterProduct === "") {
              return val;
            } 
            else if(val.name2.toLowerCase().includes(filterProduct.toLowerCase())) {
                return val
            }
            else{
              return null
            }
          })
          .map((val) => {
            return (
              <tr
                key={val.id}
                className="border-solid hover:rounded-lg hover:bg-black hover:text-white border-2 border-sky-500 bores text-center"
              >
                <td className="w-8 border-r-1 ">{val.id}</td>
                <td className="w-48 text-left">{val.name1}</td>
                <td className="w-48 text-left">{val.name2}</td>
                <td className="w-48 text-left">{val.specification}</td>
                <td className="w-48 text-center flex justify-around">{val.quantity}<button className="w-12 p-2 rounded-lg bg-lime-900">Edit</button></td>
              </tr>
            );
          })}
       
      </table>
    </div>
  );
}
