import React, { useContext } from 'react'
import RouteContext from '../Context/RouteContext'
import './Todo.css'

function Todo () {
    const {addItem,deleteItem,updateItem,itemText,setItemText,listItems,isUpdating, setIsUpdating, UpdateItemText, setIsUpdateItemText} = useContext(RouteContext)
    
    const renderUpdateForm = () => (
        <form className="update-form" onSubmit={(event)=>{updateItem(event)}} >
          <input className="update-new-input" type="text" placeholder="Update Item" onChange={event=>{setIsUpdateItemText(event.target.value)}} value={UpdateItemText} required></input>
          <button className="update-new-btn" type="submit"><img src={require('../Assects/checked.png')} alt='Delete'/></button>
        </form>
      )
    const reversedItems = [...listItems].reverse();

  
  return (
     <>
    <div className="App">
    <h1>ToDo Web App</h1>
      <form className='form' onSubmit={(event)=>addItem(event)}>
        <input type='text' placeholder='Add Todo Item' onChange={(event)=>{setItemText(event.target.value)}} required  value={itemText}></input>
        <button className='add-btn' style={{backgroundColor:'transparent', border:'none'}} type='submit'><img src={require('../Assects/add.png')} alt='Delete'/></button>
      </form>
      <div className='todo'>
      <div className='todo-list-items'>
          {
            reversedItems.map((item) =>(
            <div className='todo-item' key={item._id}>
              {
                isUpdating === item._id
                ? renderUpdateForm() 
                : <>
                <div className='Item'>
                <p className='item-content'>{item.item}</p>
                   
                    <div className='update-item' onClick={()=>{setIsUpdating(item._id)}}><img src={require('../Assects/edit.png')} alt='Update'/></div>
                    <div className='delete-item' onClick={()=>{deleteItem(item._id)}}><img src={require('../Assects/x-button.png')} alt='Delete'/></div>
                </div>
                  </>
              } 
            </div>
            ))
          }
          </div>
      </div>
    </div>
</>
  )
}

export default Todo