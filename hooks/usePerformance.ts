import { updateAllPerformanceCreator, updateAllPerformanceFan, updateAllPerformanceInvestor, updateCreatorPerformance, updateFanInvestorPerformance, updateStats } from "@/redux/slices/performanceslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";


const usePerformance = () => {
    const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const users = useSelector((state: RootState) => state.usersOnboarded);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  
  const getAllPerformanceCreator = async() => {
   
    const response = await axios.post(`${base_url}/user/get-all-user-performance`, {
        "user_type": "creator", //this can either be creator or fan or investor
        "page": 1,
        "perPage": 20
    })
    dispatch(updateAllPerformanceCreator(response?.data?.data?.users?.docs));
    dispatch(updateStats(response?.data?.data?.stats))
    
  } 

  const getAllPerformanceFan = async() => {
    const response = await axios.post(`${base_url}/user/get-all-user-performance`, {
        "user_type": "fan", //this can either be creator or fan or investor
        "page": 1,
        "perPage": 20
    })
    dispatch(updateAllPerformanceFan(response?.data?.data?.users?.docs));
    dispatch(updateStats(response?.data?.data?.stats))
    
    
  } 
  const getAllPerformanceInvestor = async() => {
    const response = await axios.post(`${base_url}/user/get-all-user-performance`, {
        "user_type": "investor", //this can either be creator or fan or investor
        "page": 1,
        "perPage": 20
    })
    dispatch(updateAllPerformanceInvestor(response?.data?.data?.users?.docs));
    dispatch(updateStats(response?.data?.data?.stats))
    
  } 
  const getCreatorPerformance = async(id: number) => {
    const response = await axios.post(`${base_url}/user/get-creator-performance`, {
        "creatorId": id
    })
    console.log(response);
    dispatch(updateCreatorPerformance(response?.data?.data))
    
  }
  const getFanInvestorPerformance = async(id: number) => {
    const response = await axios.post(`${base_url}/user/get-fans-or-investors-performance`, {
       "userId": id,
    })
    dispatch(updateFanInvestorPerformance(response?.data?.data))
    
  }
  return {
   getAllPerformanceCreator,
   getAllPerformanceFan,
   getAllPerformanceInvestor,
   getCreatorPerformance,
   getFanInvestorPerformance
  }
}

export default usePerformance;