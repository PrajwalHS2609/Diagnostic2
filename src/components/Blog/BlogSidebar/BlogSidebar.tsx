"use client"
import React from 'react'
import "@/components/Blog/Blog.css"
import BlogPost from './BlogPost'
import BlogCategories from './BlogCategories'
import BlogAd from './BlogAd'
const BlogSidebar = () => {
  return (
    <div className="blogSideBar-container">
      <BlogPost />
      <BlogCategories />
      <BlogAd/>
    </div>
  )
}

export default BlogSidebar
