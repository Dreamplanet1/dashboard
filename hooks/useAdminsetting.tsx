import { updateacceptedAdmin, updatependingAdmin, updateRoles } from "@/redux/slices/adminsettingslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const useAdminsetting = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const challenge = useSelector((state: RootState) => state.challenge);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [adminLoading, setadminLoading] = useState(false);

  const getAdminAccepted = async () => {
    setadminLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/admin-settings/get-all-admins`,
        {
          page: 1,
          perPage: 20,
          status: "accepted", // Can be "pending" or "active"
        }
      );
      dispatch(updateacceptedAdmin(response?.data?.response?.admin?.docs));
      dispatch(updateRoles(response?.data?.response?.roles));
    } catch (error: any) {
      alert(error?.message);
    } finally {
      setadminLoading(false);
    }
  };

  const getAdminPending = async () => {
    setadminLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/admin-settings/get-all-admins`,
        {
          page: 1,
          perPage: 20,
          status: "pending", // Can be "pending" or "active"
        }
      );
      dispatch(updatependingAdmin(response?.data?.response?.admin?.docs));
      dispatch(updateRoles(response?.data?.response?.roles));
    } catch (error: any) {
      alert(error?.message);
    } finally {
      setadminLoading(false);
    }
  };

  const createAdminRole = async (name: string, features: string[]) => {
    setadminLoading(true);
    try {
      await axios.post(`${base_url}/admin-settings/create-admin-role`, {
        name,
        features,
      });
    } catch (error: any) {
      alert(error?.message);
    } finally {
      setadminLoading(false);
    }
  };

  const createAdmin = async (firstName: string, lastName: string, country: string, phoneNumber: string, email: string) => {
    setadminLoading(true);
    try {
      await axios.post(`${base_url}/admin-settings/create-admin`, {
        first_name: firstName,
        last_name: lastName,
        country,
        phone_number: phoneNumber,
        email,
        status: "pending",
      });
    } catch (error: any) {
      alert(error?.message);
    } finally {
      setadminLoading(false);
    }
  };

  const updateAdminStatus = async (id: number) => {
    setadminLoading(true);
    try {
      await axios.post(`${base_url}/admin-settings/update-admin-status`, {
        admin_id: id,
        status: "accepted",
      });
    } catch (error: any) {
      alert(error?.message);
    } finally {
      setadminLoading(false);
    }
  };

  const deleteAdmin = async (id: number) => {
    setadminLoading(true);
    try {
      await axios.post(`${base_url}/admin-settings/delete-admin`, {
        admin_id: id,
      });
    } catch (error: any) {
      alert(error?.message);
    } finally {
      setadminLoading(false);
    }
  };

  const updateAdminRole = async (id: number, roleId: number, roleName: string) => {
    setadminLoading(true);
    try {
      await axios.post(`${base_url}/admin-settings/update-admin-role`, {
        id,
        role_id: roleId,
        role_name: roleName,
      });
      await getAdminAccepted();
    } catch (error: any) {
      alert(error?.message);
    } finally {
      setadminLoading(false);
    }
  };

  return {
    getAdminAccepted,
    getAdminPending,
    createAdminRole,
    createAdmin,
    updateAdminStatus,
    deleteAdmin,
    updateAdminRole,
    adminLoading, // Expose adminLoading state
  };
};

export default useAdminsetting;
