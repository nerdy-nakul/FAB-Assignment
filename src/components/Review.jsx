import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { SlLike } from "react-icons/sl";

const Review = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const content =
    "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis commodi incidunt laborum consequatur nam quos suscipit, veritatis beatae soluta sit odio modi quisquam accusamus voluptatem molestias nesciunt cupiditate illum exercitationem. Debitis, excepturi? Architecto, a eius vero nesciunt illum repudiandae accusamus, ipsa libero qui, itaque nam recusandae veniam quod et sunt eum voluptate? Autem vel nam tenetur ab magni, dolore reprehenderit ea veniam aliquam reiciendis. Quaerat, fugiat nulla consequuntur rem praesentium tempora molestiae iure amet itaque officia. Quas debitis expedita corrupti voluptatum, aliquam in delectus magni laboriosam quam fugiat, officia vero? Architecto aliquam fugiat et nemo, non corrupti fugit voluptate autem? Perferendis distinctio enim consectetur dolore. Sed magnam, neque et est, incidunt suscipit ad ipsum inventore rem esse animi tempora consequuntur voluptatibus laudantium omnis! Tempora soluta necessitatibus, porro et maxime quam cumque dignissimos esse obcaecati sunt possimus facilis assumenda est sequi quidem quas accusamus magnam numquam labore, alias modi. Recusandae itaque beatae fugit, possimus eligendi consectetur distinctio cupiditate blanditiis! Omnis laboriosam hic adipisci iure temporibus ea nemo mollitia id dolores eius culpa nisi, voluptatum qui cupiditate minus itaque repellat magnam voluptate explicabo libero. Esse ratione repudiandae, magnam beatae at, aliquid earum eum enim provident eligendi in eveniet eos voluptatem consequuntur.";
  const truncatedContent = showMore ? content : `${content.slice(0, 200)}...`;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mx-60">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img
              src={
                "https://res.cloudinary.com/dos2esitd/image/upload/v1718054266/uoau95rs24cxwicsqmnc.png"
              }
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-gray-800">Neha Bhatt (You)</div>
            <div className="text-black text-sm">27 Jun, 2023</div>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <CiEdit />
          <span>Edit</span>
        </div>
      </div>
      <div>
        <p className="text-black text-base mb-4">
          {truncatedContent}
          <span onClick={toggleShowMore} className=" cursor-pointer">
            {showMore ? "Show Less" : "Show More"}
          </span>
        </p>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <div className="flex items-center text-black cursor-pointer gap-2">
          <SlLike />
          <p>Like</p>
        </div>
        <div className="flex items-center text-black cursor-pointer gap-2">
          <LiaCommentDotsSolid />

          <p>Comment</p>
        </div>
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Add a comment"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white border-2 px-4 py-2 rounded-md"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Review;
