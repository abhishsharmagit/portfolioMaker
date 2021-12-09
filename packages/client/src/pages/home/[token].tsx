import { useRouter } from "next/router";
import cookie from "js-cookie";
import { useEffect } from "react";
import Link from "next/link";
import useAuth from "../../hooks";

const Home = () => {
  const { user, getUser } = useAuth();

  const router = useRouter();

  const token: string = router.query.token as string;
  cookie.set("token", token, { expires: 1 });
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  return (
    <>
      <p className="mx-auto items-center text-center text-6xl font-extrabold py-20">
        Welcome {user?.username} u are logged in!
      </p>
      <Link href="/template">
        <button className="mx-auto flex rounded-full items-center text-xl focus:outline-none outline-none border-none font-poppins border pl-8 pr-8 py-2 font-semibold bg-green-500">
          Create Portfolio
        </button>
      </Link>
    </>
  );
};

export default Home;
