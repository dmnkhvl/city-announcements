const Menu: React.FC = () => {
  return (
    <div className="h-dvh w-1/5 border-r">
      <header className="flex items-center gap-x-2 p-6">
        <div className="rounded-lg w-9 h-9 border font-bold flex justify-center items-center">
          <img src="/sf-logo.png" width={24} height={24} />
        </div>
        <h1>San Francisco</h1>
      </header>
      <main>
        <ul className="px-4">
          <li className="bg-orange-100 p-4 rounded-lg">
            <p>Announcements</p>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Menu;
