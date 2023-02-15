import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";


const Navbar = ({toggleSidebar}) => {
  return (
    <div className="bg-slate-200  fixed top-0 w-[100%] z-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-[24px] mx-[4px] hover:bg-[#ff4d41] hover:text-white tansition duration-200 px-[10px] py-[2px]  rounded-[5px]">Mohammad Adnan</div>
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-[#ff4D41]">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#ff4D41]">
            About
          </Link>
          <Link href="/skills" className="hover:text-[#ff4D41]">
            Skills
          </Link>
          <Link href="/contact" className="hover:text-[#ff4D41]">
            Contact
          </Link>
          <Link href="/project" className="hover:text-[#ff4D41]">
            Project
          </Link>
        </div>
        <a
          href="Resume-Mohammad Adnan.pdf"
          download="Resume-Mohammad Adnan.pdf"
          className="hidden md:flex border border-[#ff4d41] px-4 py-1 text-[#ff4d41] rounded-[5px] items-center gap-2 hover:bg-[#ff4d41] hover:text-white tansition duration-200"
        >
           Resume
          <HiDownload />
        </a>
        <div className="md:hidden text-[24px]" onClick={toggleSidebar}>
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
