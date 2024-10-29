import {
  updateAdmin,
  updateCreator,
  updateCreatorReport,
} from "@/redux/slices/reportslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const useReport = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const challenge = useSelector((state: RootState) => state.challenge);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const getCreatorReport = async (searchString: string) => {
    const response = await axios.post(
      `${base_url}/report/get-all-creators-for-report`,
      {
        page: 1,
        perPage: 10,
        searchString: searchString,
      }
    );
    console.log(response?.data?.response?.docs);
    dispatch(updateCreatorReport(response?.data?.response?.docs));
  };
  const createCreatorReport = async (
    adminId: number | undefined,
    creatorId: number | undefined,
    investorNumber: number | undefined
  ) => {
    const response = await axios.post(
      `${base_url}/report/create-creators-for-report`,
      {
        admin_id: adminId,
        creator_id: creatorId,
        no_of_investors: investorNumber,
      }
    );
    console.log(response);
    getCreatorReport("");
    //  dispatch(updateCreatorReport(response?.data?.response?.docs));
  };
  const getAdmin = async (searchString?: string) => {
    const response = await axios.post(
      `${base_url}/report/search-admin-by-name`,
      {
        name: searchString,
      }
    );
    console.log(response);
    dispatch(updateAdmin(response?.data?.response));
  };
  const getCreator = async (searchString?: string) => {
    const response = await axios.post(`${base_url}/feeds/search`, {
      searchType: "users",
      searchString: searchString,
    });
    console.log(response);
    dispatch(updateCreator(response?.data?.response));
  };

  return {
    getCreatorReport,
    createCreatorReport,
    getAdmin,
    getCreator,
  };
};

export default useReport;
