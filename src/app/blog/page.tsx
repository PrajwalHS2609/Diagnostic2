import BlogCard from "@/components/Blog/BlogCard";
import BlogHeader from "@/components/Blog/BlogHeader";

export default function Blog(){
    return(
        <div className="page-container">
            <BlogHeader/>
            <BlogCard/>
        </div>
    )
}