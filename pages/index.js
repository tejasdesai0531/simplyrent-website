import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import Main from "@/Components/Shared/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header className="hidden"></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
