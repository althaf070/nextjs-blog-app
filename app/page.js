"use client"
import { Banner } from "@/components/Banner";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([])
  const fethBlogs=async () => {
    try {
      const response = await fetch("https://nifty.spider.ws/public/api/blogs")
      const data = await response.json()
      // console.log(data.data);
      // setted blogs to state
      setBlogs(data.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
  fethBlogs()
  }, [])
  return (
    <>
    <Banner/>
   <div className="grid md:grid-cols-12 gap-5 place-items-center">
   {blogs?.length>0 ? (
    blogs.map((blog)=> (
      <div className="col-span-4 mr-8 w-full h-full" key={blog.id}>
          <Link href={`blogs/${blog.slug}`}>
          <div className="h-[200px]">
          <Image src={blog.featured_image.file_path} width={1000} height={1000} alt={blog.title} className="w-full h-full object-cover rounded-lg"/>
          </div>
          <div className="ml-6">
          <p className="text-blue-800">{blog.category.title}</p>
          <h2 className="text-wrap text-lg font-bold">{blog.title}</h2>
          </div>
          <div className="flex justify-between text-gray-400">

          </div>
        </Link>
        </div>
    ))
   ):<h1 className="text-center text-2xl">Loading...</h1>}
   </div>
   </>
  );
}
