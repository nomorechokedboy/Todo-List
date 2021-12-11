import Header from "../shards/Header";
import GetStarted from "../shards/GetStarted";
import Features from "../shards/Features";
import Demo from "../shards/Demo";
import Emphasize from "../shards/Emphasize";
import Footer from "../shards/Footer";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { selectLoginUser } from "../../redux/loginUser/action";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface User {
  _id: any;
  fullname: string;
  email: string;
}

export default function HomePage() {
  const router = useRouter();
  const payload = useSelector(selectLoginUser);

  // check if token is not null
  if (payload.token) {
    const authUser: User = jwtDecode(payload.token);

    authUser._id &&
      useEffect(() => {
        router.replace("/todomain");
      }, []);
  }

  return (
    <>
      <Header />
      <GetStarted />
      <Features />
      <Demo />
      <Emphasize />
      <Footer />
    </>
  );
}
