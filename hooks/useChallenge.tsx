import {
  updateBroadcastAll,
  updateBroadcastEdit,
} from "@/redux/slices/broadcastslice";
import { updateChallengeAll } from "@/redux/slices/challengeslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const useChallenge = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const challenge = useSelector((state: RootState) => state.challenge);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const getAllChallenges = async (searchTerm?: string) => {
    const response = await axios.post(`${base_url}/challenge/get/all`, {
      page: 1,
      perPage: 5,
      searchString: searchTerm || "",
    });
    dispatch(updateChallengeAll(response?.data?.data?.docs));
  };
  const createChallenge = async (
    name: string,
    instructions: string,
    price: string,
    link: string,
    media_url: string[],
    status: string,
    duration: string,
    delete_after_duration: boolean,
    hashtag: string
  ) => {
    const response = await axios.post(`${base_url}/challenge/create`, {
      name: name,
      instructions: instructions,
      price: price,
      link: link,
      media_url: media_url,
      status: status,
      duration: duration,
      delete_after_duration: delete_after_duration,
      hashtag: hashtag,
    });
    console.log(response);
  };
  const updateChallenge = async (
    id: number,
    name: string,
    instructions: string,
    price: string,
    link: string,
    media_url: string[],
    status: string,
    duration: string,
    delete_after_duration: boolean | undefined,
    hashtag: string
  ) => {
    const response = await axios.post(`${base_url}/challenge/update`, {
      id: id,
      name: name,
      instructions: instructions,
      price: price,
      link: link,
      media_url: media_url,
      status: status,
      duration: duration,
      delete_after_duration: delete_after_duration,
      hashtag: hashtag,
    });
  };
  const deleteChallenge = async (id: number) => {
    const response = await axios.post(`${base_url}/challenge/delete`, {
      challengeId: id,
    });
  };
  return {
    getAllChallenges,
    createChallenge,
    updateChallenge,
    deleteChallenge,
  };
};

export default useChallenge;
