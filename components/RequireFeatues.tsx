// import { RootState } from "@/redux/store";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";

// export default function RequireFeature({ feature, children }) {
//   const permissions = useSelector((state: RootState) => 
//     state.admin.loggedInUser.permissions || []
//   );
//   const router = useRouter();

//   useEffect(() => {
//     if (!permissions.includes(feature)) {
//       router.replace("/");
//     }
//   }, [permissions]);

//   if (!permissions.includes(feature)) return <div>Loading...</div>;

//   return <>{children}</>;
// }