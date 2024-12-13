"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Page() {
    const pathname = usePathname();
    const url = pathname.split('/')[2]
    console.log(url);
    
    const [blog, setBlog] = useState(null);
    const fetchBlog = async () => {
      try {
        const respose = await fetch(`https://nifty.spider.ws/public/api/blogs/${url}`);
        const data = await respose.json();
        console.log(data.data);
        setBlog(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
    fetchBlog()
    }, [url])
  return (
    <div className="w-full mt-6">
        {blog ? (
            <div className="flex justify-around gap-5">
                <div>
                    <p className="text-blue-400">{blog?.category.name}</p>
                <Image width={1000} height={1000} src={blog?.featured_image.file_path} alt="image" className="w-full object-cover h-full rounded-lg"/>
                </div>
                <div>
                <h1 className="text-2xl lg:text-4xl font-semibold">{blog?.title}</h1>
                <h1 className="text-xl text-gray-600 mt-5">{blog?.short_description}</h1>
                <p>published on :{blog.published_on}</p>
                </div>
            </div>
        ):<h1>No Blog exists</h1>}
    </div>
  );
}
