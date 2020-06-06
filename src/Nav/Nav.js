import React from "react";


const Nav=({reset})=>{
  return(
    <div className="flex justify-end mr-8 mt-8">
    <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded " onClick={reset}>
  Reset
</button>
    </div>


  );
}
 export default Nav;