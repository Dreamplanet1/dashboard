import {
    updateBroadcastAll,
    updateBroadcastEdit,
  } from "@/redux/slices/broadcastslice";
  import { AppDispatch, RootState } from "@/redux/store";
  import axios from "axios";
  import { useRouter } from "next/navigation";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
import { toast } from "./use-toast";
import { updateUser } from "@/redux/slices/adminslice";
  
  const useLogin = () => {
    const base_url = process.env.NEXT_PUBLIC_BASE_URL;
    const broadcast = useSelector((state: RootState) => state.broadcast);
      const {id} = useSelector((state: RootState) => state.admin.loggedInUser);
  
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
  
    const [loading, setLoading] = useState(false);
    const [isOpen, setisOpen] = useState(false);
    
    const login = async (email?:string, password?:string ) => {
      setLoading(true);
      try {
        const response = await axios.post(`${base_url}/admin-settings/login-admin`, {
          "email": email,
          "password": password
      });
      
      dispatch(updateUser(response?.data?.response?.admin));
      router.push('/broadcast')      
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || 'An unexpected error occurred.', 
        })
       
      } finally {
        setLoading(false);
      }
    };
   
    const changePassword = async (oldPassword?:string, newPassword?:string ) => {
      setLoading(true);
      try {
        const response = await axios.post(`${base_url}/admin-settings/change-admin-password`, {
          "admin_id": id,
          "oldPassword": oldPassword,
          "newPassword": newPassword,
      });
      setisOpen(true);
      } catch (error: any) {
        
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || 'An unexpected error occurred.', 
        })
       
      } finally {
        setLoading(false);
      }
    };
  

    return {
     login,
     loading, 
     changePassword,
     isOpen,
     setisOpen
    };
  };
  
  export default useLogin;
  