import { updateAllForums, updateForumMembers } from "@/redux/slices/forumslice";
import { AppDispatch } from "@/redux/store";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useState, useCallback } from "react";
import { debounce } from "lodash";
import { toast } from "./use-toast";

const useForum = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();

  const [forumLoading, setForumLoading] = useState(false);
  const [forumSheetLoading, setForumSheetLoading] = useState(false);

  const fetchAllForums = async (searchTerm?: string) => {
    setForumLoading(true);
    
    try {
      const response = await axios.post(`${base_url}/forum/get/all`, {
        page: 1,
        perPage: 10,
        searchString: searchTerm || "",
      });
      
      dispatch(updateAllForums(response?.data?.response?.docs));
    } catch (error: any) {
      alert(error.message);
    } finally {
      setForumLoading(false);
    }
  };

  // Debounced search function
  const debouncedFetchAllForums = useCallback(
    debounce((searchTerm?: string) => {
      fetchAllForums(searchTerm);
    }, 500), // 500ms debounce delay
    []
  );

  const getAllForums = async(searchTerm?: string) => {
    // Trigger the debounced function
    // console.log(searchTerm);
    
    // debouncedFetchAllForums(searchTerm);
    setForumLoading(true);
    
    try {
      const response = await axios.post(`${base_url}/forum/get/all`, {
        page: 1,
        perPage: 10,
        searchString: searchTerm || "",
      });
      
      dispatch(updateAllForums(response?.data?.response?.docs));
    } catch (error: any) {
      alert(error.message);
    } finally {
      setForumLoading(false);
    }
  };

  const getForumMembers = async (forumId: number, searchString: string) => {
    setForumSheetLoading(true);
    try {
      const response = await axios.post(`${base_url}/forum/get/members`, {
        forumId,
        page: 1,
        perPage: 30,
        searchString,
      });
      dispatch(updateForumMembers(response?.data?.response?.docs[0]?.users));
    } catch (error: any) {
      alert(error.message);
    } finally {
      setForumSheetLoading(false);
    }
  };

  const deleteForumMember = async (forumId: number, userId: number) => {
    setForumSheetLoading(true);
    try {
      await axios.post(`${base_url}/forum/remove`, {
        forumId,
        userId,
      });

    } catch (error: any) {
      toast({
        variant: "destructive",
        title: 'Delete Action Failed',
        description: "Something went wrong",
      })
    } finally {
      setForumSheetLoading(false);
    }
  };

  return {
    getAllForums,
    getForumMembers,
    deleteForumMember,
    forumLoading,
    forumSheetLoading
  };
};

export default useForum;
