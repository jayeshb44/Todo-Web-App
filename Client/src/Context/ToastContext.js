import React, { createContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContext = createContext()

export const ToastContextProvider = ({children})=> {
    const additemtoast=()=>{
        toast.success("Item Is Added!",{
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          theme: "colored",
        })
      }
      const deleteitemtoast=()=>{
        toast.error("Item Is Deleted!",{
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          theme: "colored",
        })
      }
      const updateitemtoast=()=>{
        toast.warning("Item Is Updated!",{
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          theme: "light",
        })
      }
  return (
    <ToastContext.Provider value={{updateitemtoast,deleteitemtoast,additemtoast,toast}}>
        {children}
        <ToastContainer/>
    </ToastContext.Provider>
  )
}

export default ToastContext