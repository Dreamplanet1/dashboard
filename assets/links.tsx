import {
  ForumIcon,
  AccountSetupIcon,
  BroadCastIcon,
  GeneratorIcon,
  InvestmentIcon,
  MemberIcon,
  PaymentIcon,
  PerformanceIcon,
  ReportIcon,
  CampaignIcon,
  AccessControlIcon,
  ChangePasswordIcon,
  ChallengeIcon,
} from "@/components/icons";

const userPermission:string[] = []

export const NavLinks = [
  {
    name: "Broadcast",
    icon: <BroadCastIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/broadcast",
    accordion: false,
    show: userPermission.includes("can-view-broadcast")
  },
  {
    name: "Users",
    icon: <MemberIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/members",
    accordion: false,
  },
  {
    name: "Challenge",
    icon: <ChallengeIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/challenge",
    accordion: false,
  },
  {
    name: "Campaign",
    icon: <CampaignIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/campaign",
    accordion: false,
  },
  {
    name: "Payments",
    icon: <PaymentIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/payments",
    accordion: true,
    sublink: [
      {
        title: "Subscription fee",
        href: "/payments/subscription",
      },
      {
        title: "Payment history",
        href: "/payments/paymenthistory",
      },
    ],
  },
  {
    name: "Performance",
    icon: <PerformanceIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/performance",
    accordion: true,
    sublink: [
      {
        title: "User Analytics",
        href: "/performance/useranalytics",
      },
      {
        title: "Forum Analytics",
        href: "/performance/analytics",
      },
    ],
  },
  {
    name: "Report",
    icon: <ReportIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/report",
    accordion: true,
    sublink: [
      {
        title: "Report Overview",
        href: "/report/overview",
      },
      {
        title: "Submitted Report",
        href: "/report/submitted",
      },
    ],
  },
  {
    name: "Code Generator",
    icon: <GeneratorIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/codegenerator",
    accordion: false,
  },
  {
    name: "Admin Setting",
    icon: <AccountSetupIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/adminsetting",
    accordion: false,

  },
  {
    name: "Investments",
    icon: <InvestmentIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/investments",
    accordion: false,
  },
  {
    name: "Forum",
    icon: <ForumIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/forum",
    accordion: false,
  },
  {
    name: "Change Password",
    icon: <ChangePasswordIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/changepassword",
    accordion: false,
  },
  {
    name: "Access Control",
    icon: <AccessControlIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/accesscontrol",
    accordion: true,
    sublink: [
      {
        title: "Access Mangagement",
        href: "/accesscontrol/management",
      },
      {
        title: "Foul Words",
        href: "/accesscontrol/foulwords",
      },
      {
        title: "Foul Post",
        href: "/accesscontrol/foulpost",
      },
    ],
  },
];
