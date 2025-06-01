import { PostCardProps } from "@/interfaces";
import React from "react";

const PostCard: React.FC<PostCardProps> = ({ title, content, author, date }) => {
    return (
        <div className="post-card">
            <h2>{title}</h2>
            <p>{content}</p>
            <span>By {author}</span>
            <span>On {new Date(date).toLocaleDateString()}</span>
        </div>
    );
}

export default PostCard;