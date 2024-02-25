"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-12 shadow-md bg-gray-100 rounded-md">
        <h1 className="text-3xl text-center font-semibold mb-8 text-black"> Name Analyser</h1>



      <form onSubmit={handleSubmit} >
        <input 
          type='text'
          placeholder='Enter First name...'
          value={inputVal}
          className="appearance-none bg-transparent w-full text-lg text-gray-700 py-2 px-4 leading-tight focus:outline-none ${ isFocused ? 'border-green-500' : 'border-gray-400'}"
          onChange={(e) => {
            const value = e.target.value;
            // Regular expression to allow only letters (no spaces or numbers)
            const isValidInput = /^[A-Za-z]+$/.test(value);
          
            if (isValidInput || value === "") {
              setInputVal(value);
            }
          }}
          required
        />
        <button
          className="w-full mt-6 py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          type='submit'
        >
          {" "}
          Predict data
        </button>
      </form>
    </div>
    </div>
  );
}
