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

const useGetUsers = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const users = useSelector((state: RootState) => state.usersOnboarded);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const getUsersAll = async (status: string | null) => {
    const response = await axios.post(`${base_url}/user/get-all`, {
      page: 1,
      perPage: 20,
      user_type: null,
      status: status,
    });
    dispatch(updateUsersAll(response.data.response.docs));
  };
  const getUsersCreator = async (status: string | null) => {
    const response = await axios.post(`${base_url}/user/get-all`, {
      page: 1,
      perPage: 20,
      user_type: "user",
      status: status,
    });

    dispatch(updateUsersCreator(response.data.response.docs));
  };
  const getUsersInvestor = async (status: string | null) => {
    const response = await axios.post(`${base_url}/user/get-all`, {
      page: 1,
      perPage: 20,
      user_type: "investor",
      status: status,
    });
    dispatch(updateUsersInvestor(response.data.response.docs));
  };
  const getUsersFan = async (status: string | null) => {
    const response = await axios.post(`${base_url}/user/get-all`, {
      page: 1,
      perPage: 20,
      user_type: "fan",
      status: status,
    });
    dispatch(updateUsersFan(response.data.response.docs));
  };
  const updateStatus = async (id: number, status: string) => {
    const response = await axios.post(`${base_url}/user/update-status`, {
      user_id: id,
      status: status,
    });

    return response.data.response;
  };
  const getUserPosts = async (id: number, filter: string) => {
    const response = await axios.post(`${base_url}/user/get-posts`, {
      user_id: id,
      filter: filter,
    });
    const posts = response?.data?.response?.posts;

    if (Array.isArray(posts) && posts[0] === null) {
      dispatch(updateUserProfile(response?.data?.response?.profile));
      dispatch(updatePost(""));
    } else {
      dispatch(updateUserProfile(response?.data?.response?.profile));
      dispatch(updatePost(posts));
    }
  };
  const updateUserPosts = async (id: number, filter: string) => {
    const response = await axios.post(`${base_url}/user/get-posts`, {
      user_id: id,
      filter: filter,
    });
    const posts = response?.data?.response?.posts;

    if (Array.isArray(posts) && posts[0] === null) {
      dispatch(updatePost(""));
    } else {
      dispatch(updatePost(posts));
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
  };
};

export default useGetUsers;
