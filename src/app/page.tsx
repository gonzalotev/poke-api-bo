import Image from "next/image"; 
import logo from "/public/logo.png";

const HomePage =  () =>{

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative h-64 md:h-80 lg:h-96">
        <Image  
          src={logo}
          alt="Logo"
          className="rounded-md"
        />
      </div>
    </div>
  );
}

export default HomePage;