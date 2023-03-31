import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <footer className="bg-gray-900 text-white py-3">
      <div className="max-w-200 mx-auto flex justify-around items-center px-4">
        <Link to="/main_feed">
          <AiFillHome size={28} />
        </Link>
        <Link to="/new_post">
          <AiFillPlusSquare size={28} />
        </Link>
        <Link to="/profile">
          <MdPerson size={28} />
        </Link>
      </div>
    </footer>
  );
}

export default Navigation;
