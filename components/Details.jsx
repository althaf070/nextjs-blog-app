"use client";
import { useState,useEffect } from "react";
export const Details = ({ params }) => {
 
  useEffect(() => {
    fetchBlog();
  }, []);
  return(
    <div>
    <h1>{blog?.title}</h1>
    </div>
  )
};
