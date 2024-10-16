import {
  updateCampaignActive,
  updateCampaignCompleted,
  updateCampaignMostPerformed,
  updateCampaignStopped,
  updategroupCampaigns,
  updateDonations,
} from "@/redux/slices/campaignslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const useCampaign = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const campaign = useSelector((state: RootState) => state.campaign);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const getActiveCampaigns = async () => {
    try {
      const response = await axios.post(
        `${base_url}/campaign/get/all-for-admin`,
        {
          page: 1,
          perPage: 30,
          status: "active", //u send in the status either active, or stopped, or completed, or most-performed
        }
      );

      dispatch(updateCampaignActive(response?.data?.response?.campaigns?.docs));
      dispatch(
        updategroupCampaigns(response?.data?.response?.groupedCampaigns)
      );
    } catch (error) {
      console.log(error);
    }
  };
  const getAllDonations = async (id: number) => {
    try {
      const response = await axios.post(
        `${base_url}/campaign/get/all-donations`,
        {
          campaignId: id,
          page: 1,
          perPage: 10,
        }
      );

      dispatch(updateDonations(response?.data?.data?.docs));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const stopCampaign = async (id: number) => {
    try {
      const response = await axios.post(`${base_url}/campaign/update-status`, {
        campaignId: id,
        status: "stopped",
      });

      // dispatch(updateCampaignActive(response?.data?.response?.campaigns?.docs));

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const getStoppedCampaigns = async () => {
    try {
      const response = await axios.post(
        `${base_url}/campaign/get/all-for-admin`,
        {
          page: 1,
          perPage: 30,
          status: "stopped", //u send in the status either active, or stopped, or completed, or most-performed
        }
      );

      dispatch(
        updateCampaignStopped(response?.data?.response?.campaigns?.docs)
      );
      dispatch(
        updategroupCampaigns(response?.data?.response?.groupedCampaigns)
      );
    } catch (error) {
      console.log(error);
    }
  };
  const getCompletedCampaigns = async () => {
    try {
      const response = await axios.post(
        `${base_url}/campaign/get/all-for-admin`,
        {
          page: 1,
          perPage: 30,
          status: "completed", //u send in the status either active, or stopped, or completed, or most-performed
        }
      );

      dispatch(
        updateCampaignCompleted(response?.data?.response?.campaigns?.docs)
      );
      dispatch(
        updategroupCampaigns(response?.data?.response?.groupedCampaigns)
      );
    } catch (error) {
      console.log(error);
    }
  };
  const getMostPerformedCampaigns = async () => {
    try {
      const response = await axios.post(
        `${base_url}/campaign/get/all-for-admin`,
        {
          page: 1,
          perPage: 30,
          status: "most-performed", //u send in the status either active, or stopped, or completed, or most-performed
        }
      );

      dispatch(
        updateCampaignMostPerformed(response?.data?.response?.campaigns?.docs)
      );
      dispatch(
        updategroupCampaigns(response?.data?.response?.groupedCampaigns)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getActiveCampaigns,
    getStoppedCampaigns,
    getCompletedCampaigns,
    getMostPerformedCampaigns,
    getAllDonations,
    stopCampaign,
  };
};

export default useCampaign;
