import {
  updateBroadcastAll,
  updateBroadcastEdit,
} from "@/redux/slices/broadcastslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useBroadcast = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const broadcast = useSelector((state: RootState) => state.broadcast);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [allLoading, setAllLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const getAllBroadCast = async () => {
    setAllLoading(true);
    try {
      const response = await axios.post(`${base_url}/broadcast/get-all`);
      dispatch(updateBroadcastAll(response?.data?.response?.docs));
    } catch (error) {
      console.error(error);
    } finally {
      setAllLoading(false);
    }
  };

  const createBroadCast = async (
    title: string,
    admin_id: number | null,
    description: string,
    media_url: string[]
  ) => {
    setCreateLoading(true);
    try {
      await axios.post(`${base_url}/broadcast/create`, {
        title,
        admin_id,
        description,
        media_url,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setCreateLoading(false);
    }
  };

  const updateBroadCast = async (
    id: number,
    title: string,
    admin_id: number | null,
    description: string,
    media_url: string[]
  ) => {
    setUpdateLoading(true);
    try {
      await axios.post(`${base_url}/broadcast/update`, {
        id,
        title,
        admin_id,
        description,
        media_url,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setUpdateLoading(false);
    }
  };

  const deleteBroadcast = async (id: number) => {
    setDeleteLoading(true);
    try {
      await axios.post(`${base_url}/feeds/delete`, { feedId: id });
      await getAllBroadCast();
    } catch (error) {
      console.error(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  return {
    getAllBroadCast,
    createBroadCast,
    updateBroadCast,
    deleteBroadcast,
    allLoading,
    createLoading,
    updateLoading,
    deleteLoading,
  };
};

export default useBroadcast;
