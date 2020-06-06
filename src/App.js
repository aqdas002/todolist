import React, { Component } from 'react'
import ListAdd from "./ListAdd/ListAdd";
import Todo from "./Todo/Todo";
import Nav from "./Nav/Nav";
import "./styles/main.css";

const listnew=[];

class App extends Component{
  constructor(){
    super();
    this.state={
      list:listnew,
      currentitem:{
        key:"",
        value:""
      }


    }
  }
  resetList=()=>{
    this.setState({
      list:listnew
    })
  }
  deleteitem=(key)=>{
    const filtereItems= this.state.list.filter(it=>{
     return it.key!==key;
    });
    this.setState({
      list:filtereItems
    })
  }
  updateList=(e,key)=>{
    const items=this.state.list;
    items.map(it=>{
      if(it.key===key){
        return it.value=e;
      }
    })
    this.setState({
      list:items
    })
  }

  adList=(e)=>{
    e.preventDefault();
    const newItem = this.state.currentitem;
    if(newItem.value !== ""){
      const items =[...this.state.list,newItem];
      this.setState({
        list:items,
        currentitem:{
          key:"",
          value:""
        }
      })
    }
  }
  onSearchChange = (event) => {
		this.setState({currentitem:{
      key:Date.now(),
      value:event.target.value
    }
  })
  
    console.log(this.state.currentitem)
	}
  render(){
    return(
      <div className="shadow-2xl">
        <Nav reset={this.resetList} />
        <h1 className="text-6xl font-extrabold font-serif text-center mt-10" >TodoList</h1>
        <ListAdd searchChange={this.onSearchChange} addList={this.adList} />
        <Todo itemLists={this.state.list} update={
          this.updateList} deleteItem={this.deleteitem} value={this.state.currentitem.value}/>
      </div>
    );
}
}

export default App;