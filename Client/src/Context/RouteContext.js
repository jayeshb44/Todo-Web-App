import React, { createContext, useContext, useEffect } from 'react'
import { useState} from 'react'
import axios from 'axios'
import ToastContext from './ToastContext'
const PORT = 'https://todo-web-app-4j59.onrender.com'
const RouteContext = createContext()

export const  RouteContextProvider =({children})=> {
    
  const [itemText, setItemText]= useState('')
  const [listItems, setListItems]= useState([])
  const [isUpdating, setIsUpdating] = useState('')
  const [UpdateItemText, setIsUpdateItemText] = useState('')

  const {additemtoast, deleteitemtoast, updateitemtoast} = useContext(ToastContext)
    
  const addItem = async (event)=>{
    event.preventDefault()
    
    try {
        const res = await axios.post(PORT+'/api/item', {item:itemText})
        setListItems(prev => [...prev, res.data])

        setItemText('')
        additemtoast()
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    const getItemList = async ()=>{
      try {
          const res = await axios.get(PORT+'/api/items');
      
          setListItems(res.data)
      
      } catch (error) {
        console.log(error);
      }
    }
    getItemList()
  },[])

  /// Delete item when click delete
  const deleteItem = async (id)=>{
    try {
      const res = await axios.delete(`${PORT}/api/item/${id}`)
      const newListItems = listItems.filter(item => item._id !== id)

      deleteitemtoast()
      setListItems(newListItems)
    } catch (error) {
      console.log(error);
    }
  }

  const updateItem = async (event)=>{
    event.preventDefault();
    
    try {
      const res = await axios.put(`${PORT}/api/item/${isUpdating}`, {item: UpdateItemText});
    
      const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating)
      const updatedItem = listItems[updatedItemIndex].item = UpdateItemText
      setIsUpdateItemText('');
      setIsUpdating(''); // to render updated item on click of updated btn
      updateitemtoast();  
  
    } catch (error) {
      console.log(error);
    }
  }


  return (
        <RouteContext.Provider value={{addItem,deleteItem,updateItem, itemText,setItemText,listItems,isUpdating, setIsUpdating, UpdateItemText, setIsUpdateItemText}}>
            {children}
        </RouteContext.Provider>
  )
}

export default RouteContext
