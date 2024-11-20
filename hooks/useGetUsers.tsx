import {
  updatePost,
  updateUserProfile,
  updateUsersAll,
  updateUsersCreator,
  updateUsersFan,
  updateUsersInvestor,
} from "@/redux/slices/usersOnboardedslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const useGetUsers = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const users = useSelector((state: RootState) => state.usersOnboarded);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  // Single loading state
  const [userLoading, setUserLoading] = useState(false);

  const getUsersAll = async (status: string | null) => {
    setUserLoading(true);
    try {
      const response = await axios.post(`${base_url}/user/get-all`, {
        page: 1,
        perPage: 20,
        user_type: null,
        status,
      });
      dispatch(updateUsersAll(response.data.response.docs));
    } catch (error) {
      console.error(error);
    } finally {
      setUserLoading(false);
    }
  };

  const getUsersCreator = async (status: string | null) => {
    setUserLoading(true);
    try {
      const response = await axios.post(`${base_url}/user/get-all`, {
        page: 1,
        perPage: 20,
        user_type: "user",
        status,
      });
      dispatch(updateUsersCreator(response.data.response.docs));
    } catch (error) {
      console.error(error);
    } finally {
      setUserLoading(false);
    }
  };

  const getUsersInvestor = async (status: string | null) => {
    setUserLoading(true);
    try {
      const response = await axios.post(`${base_url}/user/get-all`, {
        page: 1,
        perPage: 20,
        user_type: "investor",
        status,
      });
      dispatch(updateUsersInvestor(response.data.response.docs));
    } catch (error) {
      console.error(error);
    } finally {
      setUserLoading(false);
    }
  };

  const getUsersFan = async (status: string | null) => {
    setUserLoading(true);
    try {
      const response = await axios.post(`${base_url}/user/get-all`, {
        page: 1,
        perPage: 20,
        user_type: "fan",
        status,
      });
      dispatch(updateUsersFan(response.data.response.docs));
    } catch (error) {
      console.error(error);
    } finally {
      setUserLoading(false);
    }
  };

  const updateStatus = async (id: number, status: string) => {
    setUserLoading(true);
    try {
      const response = await axios.post(`${base_url}/user/update-status`, {
        user_id: id,
        status,
      });
      return response.data.response;
    } catch (error) {
      console.error(error);
    } finally {
      setUserLoading(false);
    }
  };

  const getUserPosts = async (id: number, filter: string) => {
    setUserLoading(true);
    try {
      const response = await axios.post(`${base_url}/user/get-posts`, {
        user_id: id,
        filter,
      });
      const posts = response?.data?.response?.posts;

      if (Array.isArray(posts) && posts[0] === null) {
        dispatch(updateUserProfile(response?.data?.response?.profile));
        dispatch(updatePost(""));
      } else {
        dispatch(updateUserProfile(response?.data?.response?.profile));
        dispatch(updatePost(posts));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setUserLoading(false);
    }
  };

  const updateUserPosts = async (id: number, filter: string) => {
    setUserLoading(true);
    try {
      const response = await axios.post(`${base_url}/user/get-posts`, {
        user_id: id,
        filter,
      });
      const posts = response?.data?.response?.posts;

      if (Array.isArray(posts) && posts[0] === null) {
        dispatch(updatePost(""));
      } else {
        dispatch(updatePost(posts));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setUserLoading(false);
    }
  };

  return {
    getUsersAll,
    getUsersCreator,
    getUsersInvestor,
    getUsersFan,
    updateStatus,
    getUserPosts,
    updateUserPosts,
    userLoading, // Expose single loading state
  };
};

export default useGetUsers;
