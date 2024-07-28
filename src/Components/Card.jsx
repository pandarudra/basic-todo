import React, { useState } from "react";

const Card = () => {
  const [data, setdata] = useState("");
  const [box, setbox] = useState([]);
  const prevent = (elem) => {
    elem.preventDefault();
    if(data.length()>1){
    setbox([...box, data]);
    setdata("");
    }else{
      alert("Enter Something...");
    }
  };
  return (
    <>
      <form className="over w-80 form bg-white rounded-md flex flex-col justify-start my-4  items-center">
        <input
          type="text"
          onChange={(e) => {
            setdata(e.target.value);
          }}
          value={data}
          className="w-64 h-8  border-b-2 border-blue-700  border-dashed rounded-md my-5"
        />
        <button
          onClick={prevent}
          className="border-2 border-black p-2 rounded-xl"
        >
          ADD
        </button>

        {box.map((data, i) => {
          const done = (e) => {
            e.preventDefault();
            const newbox = box.filter((e, idx) => {
              return idx !== i;
            });
            setbox(newbox);
          };
          return (
            <form className="flex gap-3 py-2">
              <h1 key={i} className="font-bold m-2 capitalize">
                - {data}
              </h1>
              <button
                key={i}
                onClick={done}
                className=" text-center rounded-md border-2 border-green-600 px-2"
              >
                Done
              </button>
            </form>
          );
        })}
      </form>
    </>
  );
};

export default Card;
