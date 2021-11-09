import Header from "../shards/Header";
import GetStarted from "../shards/GetStarted";
import Features from "../shards/Features";
import Demo from "../shards/Demo";
import Emphasize from "../shards/Emphasize";
import Footer from "../shards/Footer";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { selectAuth } from "../../redux/auth/action";
import { useRouter } from "next/router";

interface User {
  _id: any;
  fullname: string;
  email: string;
}

export default function HomePage() {
  const router = useRouter();
  const token = useSelector(selectAuth);
  const authUser: User = jwtDecode(token);

  if (authUser._id) {
    router.push("/todomain");
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
