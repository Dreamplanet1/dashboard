import {
  updateAllPerformanceCreator,
  updateAllPerformanceFan,
  updateAllPerformanceInvestor,
  updateCreatorPerformance,
  updateFanInvestorPerformance,
  updateStats,
} from "@/redux/slices/performanceslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const usePerformance = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const users = useSelector((state: RootState) => state.usersOnboarded);
  const dispatch = useDispatch<AppDispatch>();

  // Single loading state
  const [performanceLoading, setPerformanceLoading] = useState(false);

  const getAllPerformanceCreator = async () => {
    setPerformanceLoading(true);
    try {
      const response = await axios.post(`${base_url}/user/get-all-user-performance`, {
        user_type: "creator",
        page: 1,
        perPage: 20,
      });
      dispatch(updateAllPerformanceCreator(response?.data?.data?.users?.docs));
      dispatch(updateStats(response?.data?.data?.stats));
    } catch (error) {
      console.error(error);
    } finally {
      setPerformanceLoading(false);
    }
  };

  const getAllPerformanceFan = async () => {
    setPerformanceLoading(true);
    try {
      const response = await axios.post(`${base_url}/user/get-all-user-performance`, {
        user_type: "fan",
        page: 1,
        perPage: 20,
      });
      dispatch(updateAllPerformanceFan(response?.data?.data?.users?.docs));
      dispatch(updateStats(response?.data?.data?.stats));
    } catch (error) {
      console.error(error);
    } finally {
      setPerformanceLoading(false);
    }
  };

  const getAllPerformanceInvestor = async () => {
    setPerformanceLoading(true);
    try {
      const response = await axios.post(`${base_url}/user/get-all-user-performance`, {
        user_type: "investor",
        page: 1,
        perPage: 20,
      });
      dispatch(updateAllPerformanceInvestor(response?.data?.data?.users?.docs));
      dispatch(updateStats(response?.data?.data?.stats));
    } catch (error) {
      console.error(error);
    } finally {
      setPerformanceLoading(false);
    }
  };

  const getCreatorPerformance = async (id: number) => {
    setPerformanceLoading(true);
    try {
      const response = await axios.post(`${base_url}/user/get-creator-performance`, {
        creatorId: id,
      });
      dispatch(updateCreatorPerformance(response?.data?.data));
    } catch (error) {
      console.error(error);
    } finally {
      setPerformanceLoading(false);
    }
  };

  const getFanInvestorPerformance = async (id: number) => {
    setPerformanceLoading(true);
    try {
      const response = await axios.post(`${base_url}/user/get-fans-or-investors-performance`, {
        userId: id,
      });
      dispatch(updateFanInvestorPerformance(response?.data?.data));
    } catch (error) {
      console.error(error);
    } finally {
      setPerformanceLoading(false);
    }
  };

  return {
    getAllPerformanceCreator,
    getAllPerformanceFan,
    getAllPerformanceInvestor,
    getCreatorPerformance,
    getFanInvestorPerformance,
    performanceLoading, // Expose the loading state
  };
};

export default usePerformance;
