import type { NextPage } from "next";

import { Layout } from "@/components/Layout";

import { About } from "@/sections/About";
import { Collections } from "@/sections/Collections";
// import { Distribution } from "@/sections/Distribution";
import { Hero } from "@/sections/Hero";
import { Roadmap } from "@/sections/Roadmap";
import { Showcase } from "@/sections/Showcase";
import { Team } from "@/sections/Team";
import { FAQ } from "@/sections/FAQ";

const Home: NextPage = () => (
  <Layout>
    <Hero />
    <About />
    <Roadmap />
    <Collections />
    <Showcase />
    {/* <Distribution /> */}
    <Team />
    <FAQ />
  </Layout>
);

export default Home;
