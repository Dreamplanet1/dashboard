import localFont from "next/font/local";

export const AeonikFont = localFont({
  src: [
    {
      path: "../assets/font/Aeonik-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/Aeonik-Medium.otf",
      weight: "500",
      style: "normal",
    },

    {
      path: "../assets/font/Aeonik-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-Aeonik",
});

export const RecoletaFont = localFont({
  src: [
    {
      path: "../assets/font/Recoleta-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/Recoleta-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-Recoleta",
});
