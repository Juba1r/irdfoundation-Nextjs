import Link from "next/link";

export const Hero = () => {
  return (
    <div className="bg-neutral-950 ml-auto rounded-s-3xl relative" style={{ width: "95%", height: "1000px" }}>
      <div className="bg-neutral-800 absolute top-6 left-5 rounded-3xl" style={{ width: "20%", height: "800px" }}>
        
      </div>
      <div className="bg-neutral-800 absolute top-6 rounded-3xl" style={{ width: "50%", height: "200px", left: "23%" }}>
        
      </div>
      <div className="bg-neutral-800 absolute top-40 rounded-3xl" style={{ width: "50%", height: "100px", left: "23%", top: "25%" }}>
        
      </div>

      <div className="bg-neutral-800 absolute top-6 rounded-3xl" style={{ width: "20%", height: "400px", left: "75%" ,   }}>
        
      </div>
      <div className="bg-neutral-800 absolute rounded-3xl" style={{ width: "20%", height: "250px", left: "75%" , top: "45%"  }}>
        
      </div>

    </div>
  );
};
