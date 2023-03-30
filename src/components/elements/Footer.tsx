import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { MdPerson } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-3">
      <div className="max-w-200 mx-auto flex justify-around items-center px-4">
        <AiFillHome size={28} />
        <AiFillPlusSquare size={28} />
        <MdPerson size={28} />
      </div>
    </footer>
  );
}

export default Footer;
