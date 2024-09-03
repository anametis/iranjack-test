import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ChartSection from "../ChartSection";




type Props = {};
const MobileHome = (props: Props) => {
  return (
    <div className="flex">
      <ChartSection />
    </div>
  );
};

export default MobileHome;