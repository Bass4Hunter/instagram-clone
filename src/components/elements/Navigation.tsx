import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <footer className="p-2">
      <div className="text-black max-w-200 mx-auto flex justify-around items-center px-4 border-t-2 pt-3">
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
