import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
    return (
        <>
            <Header />

            <div className="flex justify-center items-center h-screen">
                <h1 className="text-7xl font-thin">Posts Page</h1>
                <div className="mt-10">
                    <PostCard
                        id="1"
                        title="Sample Post Title"
                        content="This is a sample post content. It can be a brief description or an excerpt from the post."
                        author="John Doe"
                        date="2023-10-01T12:00:00Z" />
                    <PostCard
                        id="2"
                        title="Sample Post Title"
                        content="This is a another post content. It can be a brief description or an excerpt from the post."
                        author="John Doe"
                        date="2023-10-01T12:00:00Z" />
                </div>

            </div>
        </>)
}

export default Posts;