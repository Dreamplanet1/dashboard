  import { updateacceptedAdmin, updatependingAdmin, updateRoles } from "@/redux/slices/adminsettingslice";
import { AppDispatch, RootState } from "@/redux/store";
  import axios from "axios";
  import { useRouter } from "next/navigation";
  import { useDispatch, useSelector } from "react-redux";
  
  const useAdminsetting = () => {
    const base_url = process.env.NEXT_PUBLIC_BASE_URL;
    const challenge = useSelector((state: RootState) => state.challenge);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    
  
    const getAdminAccepted = async () => {
      const response = await axios.post(
        `${base_url}/admin-settings/get-all-admins`,
        {
            "page":1,
            "perPage":20,
            "status":"accepted" //note this can either be "pending" or "active"
        }
      );
      
      dispatch(updateacceptedAdmin(response?.data?.response?.admin?.docs));
      dispatch(updateRoles(response?.data?.response?.roles))
    };
    const getAdminPending = async () => {
        const response = await axios.post(
          `${base_url}/admin-settings/get-all-admins`,
          {
              "page":1,
              "perPage":20,
              "status":"pending" //note this can either be "pending" or "active"
          }
        );

        dispatch(updatependingAdmin(response?.data?.response?.admin?.docs));
        dispatch(updateRoles(response?.data?.response?.roles))
      };

      const createAdminRole = async (name: string, features: string[]) => {
        const response = await axios.post(`${base_url}/admin-settings/create-admin-role`, {
            name:name, 
            features:features
        })        
      }
      const createAdmin = async (firstName:string, lastName: string, country: string, phoneNumber: string, email: string) => {
        try {
          const response = await axios.post(`${base_url}/admin-settings/create-admin`, {
            first_name:firstName,
            last_name:lastName,
            country:country,
            phone_number:phoneNumber,
            email:email,
            status:"pending" 
        })
        console.log(response);   
        } catch (error: any) {
          alert(error?.message);
          
        }
       
        
      }

      const updateAdminStatus = async (id: number) => {
        const response = await axios.post(`${base_url}/admin-settings/update-admin-status`, {
          "admin_id": id,
          "status":"accepted" 
      })
        
      }
      const deleteAdmin = async (id: number) => {
        await axios.post(`${base_url}/admin-settings/delete-admin`, {
          "admin_id": id
        });
      }
      const updateAdminRole = async (id:number, roleId:number, roleName:string) => {
        try {
          await axios.post(`${base_url}/admin-settings/update-admin-role`, {
            "id": id,
            "role_id":roleId,
            "role_name":roleName
        })
        await getAdminAccepted();  
        } catch (error: any) {
          alert(error?.message)
          
        }   
      }

    
  
    return {
      getAdminAccepted,
      getAdminPending,
     createAdminRole,
     createAdmin,
     updateAdminStatus,
     deleteAdmin,
     updateAdminRole
    };
  };
  
  export default useAdminsetting;
  