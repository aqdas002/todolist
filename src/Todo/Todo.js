import React from "react";


const Todo=({itemLists,update,deleteItem})=>{
  const Listitems = itemLists.map(l=>
    {
      return <div className="flex relative bg-red-500 mr-20 ml-20 justify-center mt-2">
      <div className="flex-auto  bg-red-500 max-w-full rounded overflow-hidden mt-2 mb-2">
        <input className="ml-4 text-center text-2xl  w-240 bg-red-500  font-semibold outline-none focus:bg-red-500"type="text" id={l.key} value={l.value} onChange={
        (e)=>{
          update(e.target.value,l.key)
        }
      }
        />
      <p className="absolute cursor-pointer right-0 top-0 p-3 text-yellow-400" onClick={()=>{
            return deleteItem(l.key)
          }}>delete</p>
      </div>
    </div>
    })
  return(
     Listitems
  )
}
 export default Todo;