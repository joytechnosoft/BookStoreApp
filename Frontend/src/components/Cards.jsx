import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <>

      <div className="mt-4 my-3 mx-4 p-3">
        <div className="card w-92 bg-base-100 shadow-xl text-black  hover:scale-110 duration-200 dark:bg-slate-900 dark:text-white  dark:border ">
          <figure>
            <img src={item.image} alt="Books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rs {item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 duration-200 hover:text-white ">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
