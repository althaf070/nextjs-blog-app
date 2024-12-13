import Image from "next/image";
export const Banner = () => {
  return (
    <section className="flex flex-col w-full justify-center my-10">
       <div className="relative">
       <Image src={"/banner.jpg"} width={1000} height={1000} alt="banner" className="w-full h-[300px] object-cover rounded-lg shadow-lg"/>
       <div className="absolute bottom-7 left-7">
        <h1 className="text-blue-700 font-semibold">Technology</h1>
        <h2 className="text-2xl font-bold text-white">
        The Impact of Technology on the Workplace: How Technology is Changing
        </h2>
       </div>
       </div>
    </section>
  );
};
