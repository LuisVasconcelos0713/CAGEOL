import { Link } from "react-router"; 

const LogoNavbar = () => {
  return (
    <div className="flex flex-shrink-0 items-center gap-3">
      <Link to={"/"} className="cursor-pointer flex flex-col items-center justify-center">
        <img src="/logocageolnavbare.png" alt="Logo cageol navbar" className="h-12 w-auto" />
        <h1 className="text-xs font-bold font-merriweather">CAGEOL</h1>
      </Link>
      {/* Using #584738 (Mohogany) for a softer separator line */}
      <h1 className="text-4xl font-light text-textGeneral opacity-50 pb-2 select-none">|</h1>
    </div>
  );
};

export default LogoNavbar;