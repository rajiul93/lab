import React from "react";

export default function FakeLogin() {
  return (
    <div className="h-screen bg-zinc-500 w-full items-center flex  ">
      <div className="w-[300px] bg-slate-200 mx-auto h-56 text-center pt-6 rounded-xl shadow-lg shadow-slate-600  ">
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        <input className="w-[280px] p-2 rounded-lg " type="text" /><br />
        <input className="w-[280px] p-2 rounded-lg mt-2" type="text" /><br />
        <button className="w-[280px] p-2 rounded-lg bg-cyan-600 mt-2">Submit</button>
      </div>
    </div>
  );
}
