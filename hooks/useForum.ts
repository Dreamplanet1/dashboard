
  import { updateAllForums, updateForumMembers } from "@/redux/slices/forumslice";
import { AppDispatch, RootState } from "@/redux/store";
  import axios from "axios";
  import { useRouter } from "next/navigation";
  import { useDispatch, useSelector } from "react-redux";
  
  const useForum = () => {
    const base_url = process.env.NEXT_PUBLIC_BASE_URL;
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    
  
    const getAllForums = async () => {
      try {
        const response = await axios.post(
          `${base_url}/forum/get/all`,
          {
            page: 1,
            perPage: 10,
          }
        );
        
        dispatch(updateAllForums(response?.data?.response?.docs));
        
      } catch (error:any) {
        alert(error);
      }
    };
    const getForumMembers = async (forumId:number, searchString: string) => {
        
        try {
          const response = await axios.post(
            `${base_url}/forum/get/members`,
            {
            "forumId": forumId,
            "page": 1,
            "perPage": 30,
            "searchString": searchString,
            }
          );
          dispatch(updateForumMembers(response?.data?.response?.docs[0]?.users));
          
          
        } catch (error) {
          console.log(error);
        }
      };
      const deleteForumMember = async (forumId:number, userId: number) => {
        
        try {
          const response = await axios.post(
            `${base_url}/forum/remove`,
            {
           "forumId": forumId,
    "userId": userId
            }
          );
        //   dispatch(updateForumMembers(response?.data?.response?.docs[0]?.users));
          console.log(response?.data);
          
          
        } catch (error: any) {
          alert(error.message);
        }
      };
    
  
    return {
      getAllForums,
      getForumMembers,
      deleteForumMember
    };
  };
  
  export default useForum;
  