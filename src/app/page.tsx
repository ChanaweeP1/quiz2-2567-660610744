"use client";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import Reply from "@/components/Reply";

export default function Home() {
  const commmentuser = [{username: "Lisa", userImagePath: "/profileImages/lisa.jpg",commentText: "จริงค่า",likeNum: 999,},
                        { username: "Charlie Brown",userImagePath: "/profileImages/charliebrown.jpg",commentText: "บ้าไปแล้ว",likeNum: 0,}
  ];
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner fullname = "Chanawee Pintaya" studentid = "660610744" />
        {/* Comment Example */}
        <Comment {...commmentuser[0]}/>
        <Comment {...commmentuser[1]}/>
        {/* Reply Example */}
        
        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
