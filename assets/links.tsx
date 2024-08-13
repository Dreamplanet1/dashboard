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
} from "@/components/icons";

export const NavLinks = [
  {
    name: "Broadcast",
    icon: <BroadCastIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/",
    accordion: false,
  },
  {
    name: "Members",
    icon: <MemberIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/members",
    accordion: false,
  },
  {
    name: "Challenge",
    icon: <MemberIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
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
    name: "User Settings",
    icon: <AccountSetupIcon className="mr-2 h-7 w-4" pathColor="#808080" />,
    href: "/usersettings",
    accordion: true,
    sublink: [
      {
        title: "Admin Setting",
        href: "/usersettings/admin",
      },
      {
        title: "Creator Setting",
        href: "/usersettings/creator",
      },
    ],
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
];
