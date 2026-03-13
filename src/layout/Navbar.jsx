import { GraduationCap } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow-md">
      <div className="flex items-center gap-2">
        <GraduationCap className="text-blue-600" />
        <span className="font-bold text-xl text-blue-600">SchoolMS</span>
      </div>

      <div className="space-x-6">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
