import React from "react";
import Layout from "./component/layout"
import { Image } from "antd";

export default function Home() {
  return (
    <Layout>
      <div>
        <Image
          width="100%"
          height="500px"
          src="assets/banner/maxresdefault 1.png"
        />
      </div>
      <div className="p-4">
        <p className="mx-4 text-[40px]">รางวัลและการรับรอง</p>
        <div className="p-2 grid grid-cols-4 gap-4">
          <div className="grid justify-center col-span-2 my-4">
            <Image
              width="auto"
              height="500px"
              src="assets/cetificate/Screen Shot 2567-07-23 at 15.50.54 1.png"
            />
          </div>
          <div className="grid justify-center col-span-2">
            <Image
              width="auto"
              height="500px"
              src="assets/cetificate/Screen Shot 2567-07-23 at 15.50.54 1.png"
            />
          </div>
        </div>
      </div>
      <div className="p-4 bg-[#DADAE3] ">
        <p className="mx-4 text-[40px]">ข่าวสาร</p>
        <div className="p-4 mx-8 grid justfy-center grid-cols-4 gap-4">
          <div className="w-[250px] h-[350px] bg-[#ffff] rounded-md">
            <img
              src="assets/news/microscope-5732847_1280 1.png"
              alt=""
              className="w-full rounded-md"
            />
            <div className="p-2">
              <p className="text-bold text-[24px]">title</p>
              <p className="text-[18px]">desciption</p>
            </div>
          </div>
          <div className="w-[250px] h-[350px] bg-[#ffff] rounded-md">
            <img
              src="assets/news/microscope-5732847_1280 1.png"
              alt=""
              className="w-full rounded-md"
            />
            <div className="p-2">
              <p className="text-bold text-[24px]">title</p>
              <p className="text-[18px]">desciption</p>
            </div>
          </div>
          <div className="w-[250px] h-[350px] bg-[#ffff] rounded-md">
            <img
              src="assets/news/microscope-5732847_1280 1.png"
              alt=""
              className="w-full rounded-md"
            />
            <div className="p-2">
              <p className="text-bold text-[24px]">title</p>
              <p className="text-[18px]">desciption</p>
            </div>
          </div>
          <div className="w-[250px] h-[350px] bg-[#ffff] rounded-md">
            <img
              src="assets/news/microscope-5732847_1280 1.png"
              alt=""
              className="w-full rounded-md"
            />
            <div className="p-2">
              <p className="text-bold text-[24px]">title</p>
              <p className="text-[18px]">desciption</p>
            </div>
          </div>
          <div className="grid justify-center col-span-2"></div>
        </div>
      </div>
    </Layout>
  );
}
