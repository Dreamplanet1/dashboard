import {
  updateHistory,
  updateStats,
  updateSubscriptioncreator,
  updateSubscriptionfan,
  updateSubscriptioninvestor,
} from "@/redux/slices/paymentslice";

import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const usePayment = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const challenge = useSelector((state: RootState) => state.challenge);
  const dispatch = useDispatch<AppDispatch>();

  // Single loading state
  const [paymentLoading, setPaymentLoading] = useState(false);

  const getSubscriptionCreator = async () => {
    setPaymentLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/payment/get-admin-subscription-and-campaign-prices`,
        {
          user_type: "creator",
        }
      );
      dispatch(updateSubscriptioncreator(response.data.result));
    } catch (error) {
      console.error(error);
    } finally {
      setPaymentLoading(false);
    }
  };

  const getSubscriptionFan = async () => {
    setPaymentLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/payment/get-admin-subscription-and-campaign-prices`,
        {
          user_type: "fan",
        }
      );
      dispatch(updateSubscriptionfan(response.data.result));
    } catch (error) {
      console.error(error);
    } finally {
      setPaymentLoading(false);
    }
  };

  const getSubscriptionInvestor = async () => {
    setPaymentLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/payment/get-admin-subscription-and-campaign-prices`,
        {
          user_type: "investor",
        }
      );
      dispatch(updateSubscriptioninvestor(response.data.result));
    } catch (error) {
      console.error(error);
    } finally {
      setPaymentLoading(false);
    }
  };

  const getPaymentHistory = async (
    user_type: string[] | null = null,
    payment_type: string[] | null = null,
    searchString: string = ""
  ) => {
    setPaymentLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/payment/get-admin-payment-history`,
        {
          page: 1,
          perPage: 20,
          searchString,
          user_type: user_type && user_type.length > 0 ? user_type : null,
          payment_type:
            payment_type && payment_type.length > 0 ? payment_type : null,
        }
      );

      dispatch(updateStats(response?.data?.result?.stats));
      dispatch(updateHistory(response?.data?.result?.history?.docs));
    } catch (error) {
      console.error(error);
    } finally {
      setPaymentLoading(false);
    }
  };

  return {
    getSubscriptionCreator,
    getSubscriptionFan,
    getSubscriptionInvestor,
    getPaymentHistory,
    paymentLoading, // Expose the loading state
  };
};

export default usePayment;
