import AllCategories from "@/components/landingpage/AllCategories";
export const metadata = {
  title: "ucsotm",
  description: "...",
};

export default function Home() {
  

  return (
    <div className=" w-full bg-amber-100 relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute animate-pulse  inset-0 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to right, 
              rgba(0,0,0,0.05) 0px, 
              rgba(0,0,0,0.05) 2px, 
              transparent 1px, 
              transparent 60px
            ),
            repeating-linear-gradient(
              to bottom, 
              rgba(0,0,0,0.05) 0px, 
              rgba(0,0,0,0.05) 2px, 
              transparent 1px, 
              transparent 60px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>
      <div className="overflow-hidden h-screen absolute w-full flex items-center justify-center">

        <div className="absolute  blur-2xl bg-gradient-to-t from-amber-100 animate-pulse to-blue-400 rounded-t-full  bottom-0 w-[80vw] h-[80vh] opacity-70 ">
        </div>

      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen w-full p-4 text-center  ">
        <h1 className="text-4xl font-extrabold text-black uppercase w-1/2 tracking-wider">The Smartest, Funniest Way to Send a Wish.
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl">
          Generate funny, dark, or wholesome wishes instantly
        </p>
        <div className="mt-4 flex text-sm font-semibold text-black  gap-1 ">
          <span className="px-2 w-32 text-center rounded-full shadow py-1 bg-blue-300 ">No Login</span>
          <span className="px-2 py-1 rounded-full w-32 text-center shadow bg-red-200">Wish smarter</span>
        </div>
      </div>
<AllCategories/>
    </div>
  );
}
