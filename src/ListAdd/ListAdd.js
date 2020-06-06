import React from "react";


const ListAdd=(props)=>{
  return(
    <div className=" flex justify-center mt-10">
      <form onSubmit={props.addList}> <input className="transition ease-in duration-9000 p-4 rounded shadow outline-none" type="text" placeholder="Enter List Item" onChange={props.searchChange}
      value={props.value}
        />
       <button className="transition ease-in duration-500 bg-yellow-200 hover:bg-yellow-700 text-blue-700 font-semibold hover:text-white py-2 px-6 ml-4 border border-blue-500 hover:border-transparent rounded transform"
       >
  Add
</button>
</form>
    </div>


  );
}
 export default ListAdd;