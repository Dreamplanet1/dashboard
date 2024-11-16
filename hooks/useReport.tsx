import {
  updateAdmin,
  updateCreator,
  updateCreatorReport,
  updateReports,
} from "@/redux/slices/reportslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const useReport = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const { creatorData } = useSelector((state: RootState) => state.report);
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
    dispatch(updateAdmin(response?.data?.response));
  };
  const getCreator = async (searchString?: string) => {
    const response = await axios.post(`${base_url}/feeds/search`, {
      searchType: "users",
      searchString: searchString,
    });
    dispatch(updateCreator(response?.data?.response));
  };

  const getReports = async () => {
    const response = await axios.post(`${base_url}/report/get-all-reports`, {
      page: 1,
      perPage: 10,
      searchString: "",
    });
    dispatch(updateReports(response?.data?.response?.docs));
  };
  const createReport = async (
    subject: string,
    description: string,
    media_url: string[]
  ) => {
    const response = await axios.post(`${base_url}/report/create-report`, {
      subject: subject,
      description: description,
      media_url: media_url,
      creator_id: creatorData?.creator_id,
    });
    //  dispatch(updateCreatorReport(response?.data?.response?.docs));
  };

  return {
    getCreatorReport,
    createCreatorReport,
    getAdmin,
    getCreator,
    getReports,
    createReport,
  };
};

export default useReport;
