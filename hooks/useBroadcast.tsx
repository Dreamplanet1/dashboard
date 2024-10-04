import {
  updateBroadcastAll,
  updateBroadcastEdit,
} from "@/redux/slices/broadcastslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const useBroadcast = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const broadcast = useSelector((state: RootState) => state.broadcast);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const getAllBroadCast = async () => {
    const response = await axios.post(`${base_url}/broadcast/get-all`);
    dispatch(updateBroadcastAll(response?.data?.response?.docs));
  };
  const createBroadCast = async (
    title: string,
    admin_id: number | null,
    description: string,
    media_url: string[]
  ) => {
    const response = await axios.post(`${base_url}/broadcast/create`, {
      title: title,
      admin_id: admin_id,
      description: description,
      media_url: media_url,
    });
  };

  const updateBroadCast = async (
    id: number,
    title: string,
    admin_id: number | null,
    description: string,
    media_url: string[]
  ) => {
    const response = await axios.post(`${base_url}/broadcast/update`, {
      id: id,
      title: title,
      admin_id: admin_id,
      description: description,
      media_url: media_url,
    });
  };
  const deleteBroadcast = async (id: number) => {
    try {
      const response = await axios.post(`${base_url}/feeds/delete`, {
        feedId: id,
      });
      await getAllBroadCast();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getAllBroadCast,
    createBroadCast,
    updateBroadCast,
    deleteBroadcast,
  };
};

export default useBroadcast;
