import {
  updateCampaignActive,
  updateCampaignCompleted,
  updateCampaignMostPerformed,
  updateCampaignStopped,
  updategroupCampaigns,
  updateDonations,
  updateCampaignProcessing,
} from "@/redux/slices/campaignslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const useCampaign = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const campaign = useSelector((state: RootState) => state.campaign);
  const dispatch = useDispatch<AppDispatch>();

  // Single loading state
  const [campaignLoading, setCampaignLoading] = useState(false);
  const [campaignLoadingSheet, setCampaignLoadingSheet] = useState(false);


  const getActiveCampaigns = async () => {
    setCampaignLoading(true);
    try {
      const response = await axios.post(`${base_url}/campaign/get/all-for-admin`, {
        page: 1,
        perPage: 30,
        status: "active",
      });

      dispatch(updateCampaignActive(response?.data?.response?.campaigns?.docs));
      dispatch(updategroupCampaigns(response?.data?.response?.groupedCampaigns));
    } catch (error) {
      console.error(error);
    } finally {
      setCampaignLoading(false);
    }
  };

  const getAllDonations = async (id: number) => {
    setCampaignLoadingSheet(true);
    try {
      const response = await axios.post(`${base_url}/campaign/get/all-donations`, {
        campaignId: id,
        page: 1,
        perPage: 10,
      });

      dispatch(updateDonations(response?.data?.data?.docs));
    } catch (error) {
      console.error(error);
    } finally {
      setCampaignLoadingSheet(false);
    }
  };

  const stopCampaign = async (id: number) => {
    setCampaignLoadingSheet(true);
    try {
     const response = await axios.post(`${base_url}/campaign/update-status`, {
        campaignId: id,
        status: "stopped",
      });
      await getActiveCampaigns();
      await getStoppedCampaigns();
      
      // Add any additional logic if needed
    } catch (error) {
      console.error(error);
    } finally {
      setCampaignLoadingSheet(false);
    }
  };

  const activateCampaign = async (id: number) => {
    setCampaignLoadingSheet(true);
    try {
     const response = await axios.post(`${base_url}/campaign/update-status`, {
        campaignId: id,
        status: "active",
      });
      await getStoppedCampaigns();
      await getActiveCampaigns();
      
      // Add any additional logic if needed
    } catch (error) {
      console.error(error);
    } finally {
      setCampaignLoadingSheet(false);
    }
  };

  const getStoppedCampaigns = async () => {
    setCampaignLoading(true);
    try {
      const response = await axios.post(`${base_url}/campaign/get/all-for-admin`, {
        page: 1,
        perPage: 30,
        status: "stopped",
      });

      dispatch(updateCampaignStopped(response?.data?.response?.campaigns?.docs));
      dispatch(updategroupCampaigns(response?.data?.response?.groupedCampaigns));
    } catch (error) {
      console.error(error);
    } finally {
      setCampaignLoading(false);
    }
  };

  const getCompletedCampaigns = async () => {
    setCampaignLoading(true);
    try {
      const response = await axios.post(`${base_url}/campaign/get/all-for-admin`, {
        page: 1,
        perPage: 30,
        status: "completed",
      });

      dispatch(updateCampaignCompleted(response?.data?.response?.campaigns?.docs));
      dispatch(updategroupCampaigns(response?.data?.response?.groupedCampaigns));
    } catch (error) {
      console.error(error);
    } finally {
      setCampaignLoading(false);
    }
  };

  const getMostPerformedCampaigns = async () => {
    setCampaignLoading(true);
    try {
      const response = await axios.post(`${base_url}/campaign/get/all-for-admin`, {
        page: 1,
        perPage: 30,
        status: "most-performed",
      });

      dispatch(updateCampaignMostPerformed(response?.data?.response?.campaigns?.docs));
      dispatch(updategroupCampaigns(response?.data?.response?.groupedCampaigns));
    } catch (error) {
      console.error(error);
    } finally {
      setCampaignLoading(false);
    }
  };

  const getProcessingCampaigns = async () => {
    setCampaignLoading(true);
    try {
      const response = await axios.post(`${base_url}/campaign/get/all-for-admin`, {
        page: 1,
        perPage: 30,
        status: "processing",
      });

      dispatch(updateCampaignProcessing(response?.data?.response?.campaigns?.docs));
      dispatch(updategroupCampaigns(response?.data?.response?.groupedCampaigns));
    } catch (error) {
      console.error(error);
    } finally {
      setCampaignLoading(false);
    }
  };

  return {
    getActiveCampaigns,
    getStoppedCampaigns,
    getCompletedCampaigns,
    getMostPerformedCampaigns,
    getAllDonations,
    getProcessingCampaigns,
    stopCampaign,
    campaignLoading,
    campaignLoadingSheet,
    activateCampaign // Expose the loading state
  };
};

export default useCampaign;
