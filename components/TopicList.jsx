import React from "react";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

export default function TopicList() {
  return (
    <>
      <div
        className="p-4 bg-white border border-gray-300 
         flex justify-between gap-5 my-3 items-start"
      >
        <div>
          <h2 className="text-2xl font-bold">Topic Title</h2>
          <div>Topic Desciptions</div>
        </div>
        <div className="flex gap-2">
          <RemoveBtn />
          <Link href="/editTopic/123">
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}
