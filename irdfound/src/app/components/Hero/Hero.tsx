import Link from "next/link";

export const Hero = () => {
  return (
    <div className="bg-neutral-950 ml-auto rounded-s-3xl relative" style={{ width: "95%", height: "1000px" }}>

         {/* top left section */}
         
      <div className="bg-neutral-800 absolute top-6 left-5 rounded-3xl" style={{ width: "20%", height: "800px" }}>
        
 
        <div className="text-gray-400 cursor-pointer bg-neutral-800 flex justify-center items-center font-bold hover:bg-green-500" style={{ width: "50%", height: "50px", borderRadius: "20px 0 0 0", }}	>
          <button> বই </button>
        </div>

        <div className="text-gray-400 cursor-pointer bg-neutral-800 flex justify-center items-center font-bold hover:bg-green-500 absolute top-0 right-0 outline-none" style={{ width: "50%", height: "50px", borderRadius: "0 20px 0 0" }}>
      <button> অধ্যায় </button>
    </div>


      </div>

        {/* top middle section */}

      <div className="bg-neutral-800 absolute top-6 rounded-3xl" style={{ width: "53%", height: "200px", left: "23%" }}>
        
      </div>

        {/* top middle 2nd section */}

      <div className="bg-neutral-800 absolute top-40 rounded-3xl" style={{ width: "53%", height: "100px", left: "23%", top: "25%" }}>
        
      </div>


      {/* top right section */}


      <div className="bg-neutral-800 absolute top-6 rounded-3xl" style={{ width: "20%", height: "400px", left: "78%" ,   }}>
        
      </div>


        {/* top right 2nd section */}

      <div className="bg-neutral-800 absolute rounded-3xl" style={{ width: "20%", height: "250px", left: "78%" , top: "45%"  }}>
        
      </div>

        {/* middle 3rd section */}

      <div className="bg-neutral-800 absolute top-40 rounded-3xl" style={{ width: "53%", height: "300px", left: "23%", top: "38%" }}>
        
      </div>

    </div>
  );
};
