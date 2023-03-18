import Link from "next/link";
import { FiGithub, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <div className=" text-center font-semibold py-4 bg-gray-700 text-white flex flex-col mt-auto dark:bg-slate-700">
      <h1> &copy; Deadulus 2023 </h1>

      <div className="flex content-center justify-center mt-2 gap-4">
        <Link href="">
          <FiGithub title="sam on github" className="text-center " />
        </Link>
        <Link href="">
          <FiTwitter title="sam on twitter" className="text-center " />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
