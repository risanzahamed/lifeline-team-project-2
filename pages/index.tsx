import Companies from "@/Components/Companies/Companies";
import Testimonials from "@/Components/Testimonials/Testimonials";
import WhatWeDo from "@/Components/WhatWeDo/WhatWeDo";
import { Inter } from "next/font/google";
import News from "./news";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <WhatWeDo />
      <Companies />
      <Testimonials />
      <News />
    </main>
  );
}
