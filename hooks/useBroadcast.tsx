import {
  updateBroadcastAll,
  updateBroadcastEdit,
} from "@/redux/slices/broadcastslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";

const useBroadcast = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const broadcast = useSelector((state: RootState) => state.broadcast);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [allLoading, setAllLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchBroadcasts = async (searchTerm?: string) => {
    setAllLoading(true);
    try {
      const response = await axios.post(`${base_url}/broadcast/get-all`, {
        searchString: searchTerm || "",
      });
      dispatch(updateBroadcastAll(response?.data?.response?.docs));
    } catch (error) {
      console.error(error);
    } finally {
      setAllLoading(false);
    }
  };

  // Debounced search function
  const debouncedFetchBroadcasts = useCallback(
    debounce((searchTerm?: string) => {
      fetchBroadcasts(searchTerm);
    }, 500),
    []
  );

  const getAllBroadCast = (searchTerm?: string) => {
    // Use the debounced function
    debouncedFetchBroadcasts(searchTerm);
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
      await axios.post(`${base_url}/broadcast/delete`, { broadcastId: id });
      await fetchBroadcasts(); // Refresh the list after deletion
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
