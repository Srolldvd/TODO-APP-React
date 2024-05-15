const Header = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-4xl font-medium tracking-widest">TODO</h1>
      <span className="inline-block w-6">
        <img
          src="/src/assets/img/icon-sun.svg"
          alt="Sun icon"
          className="block cursor-pointer"
        />
      </span>
    </div>
  );
};

export default Header;
