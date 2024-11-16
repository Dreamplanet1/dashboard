import {
  updateBroadcastAll,
  updateBroadcastEdit,
} from "@/redux/slices/broadcastslice";
import {
  updateHistory,
  updateStats,
  updateSubscriptioncreator,
  updateSubscriptionfan,
  updateSubscriptioninvestor,
} from "@/redux/slices/paymentslice";

import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const usePayment = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const challenge = useSelector((state: RootState) => state.challenge);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const getSubscriptionCreator = async () => {
    const response = await axios.post(
      `${base_url}/payment/get-admin-subscription-and-campaign-prices`,
      {
        user_type: "creator",
      }
    );
    dispatch(updateSubscriptioncreator(response.data.result));
  };
  const getSubscriptionFan = async () => {
    console.log("running");

    const response = await axios.post(
      `${base_url}/payment/get-admin-subscription-and-campaign-prices`,
      {
        user_type: "fan",
      }
    );
    dispatch(updateSubscriptionfan(response.data.result));
  };
  const getSubscriptionInvestor = async () => {
    const response = await axios.post(
      `${base_url}/payment/get-admin-subscription-and-campaign-prices`,
      {
        user_type: "investor",
      }
    );
    dispatch(updateSubscriptioninvestor(response.data.result));
  };
  const getPaymentHistory = async (
    user_type: string[] | null = null,
    payment_type: string[] | null = null,
    searchString: string = ""
  ) => {

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
  };

  return {
    getSubscriptionCreator,
    getSubscriptionFan,
    getSubscriptionInvestor,
    getPaymentHistory,
  };
};

export default usePayment;
