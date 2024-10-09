import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <div className="h-dvh w-80 border-r">
      <header className="p-6">
        <Link to={"/"} className="flex items-center gap-x-2">
          <div className="rounded-lg w-9 h-9 border font-bold flex justify-center items-center">
            <img src="/sf-logo.png" width={24} height={24} />
          </div>
          <h1>San Francisco</h1>
        </Link>
      </header>
      <main>
        <ul className="px-4">
          <Link to={"/announcements"}>
            <li className="bg-orange-100 p-4 rounded-lg w-full ">
              <p>Announcements</p>
            </li>
          </Link>
        </ul>
      </main>
    </div>
  );
};

export default Menu;
