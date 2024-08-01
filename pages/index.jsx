import React from "react";
import { Flex, Layout, Image } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 80,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "white",
  color: "black",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100vw",
  maxWidth: "100vw",
  // height: "100vh",
};

export default function Home() {
  return (
    <Layout style={layoutStyle}>
      <Header
        style={headerStyle}
        className="grid grid-cols-2 gap-4 sticky top-0"
      >
        <div className="text-left">
          <p>SRU</p>
        </div>
        <div className="grid grid-cols-7 gap-4">
          <p className="cursor-pointer">หน้าหลัก</p>
          <p className="cursor-pointer">เกี่ยวกับเรา</p>
          <p className="cursor-pointer">บุคคลากร</p>
          <p className="cursor-pointer">ข่าว</p>
          <p className="cursor-pointer">ติดต่อ</p>
          <p className="cursor-pointer">เข้าสู่ระบบ</p>
        </div>
      </Header>
      <Content>
        <div>
          <Image
            width="100%"
            height="350px"
            src="assets/banner/maxresdefault 1.png"
          />
        </div>
        <div className="p-4">
          <p className="text-[40px]">รางวัลและการรับรอง</p>
          <div className="p-2 grid grid-cols-4 gap-4">
            <div className="grid justify-center col-span-2">
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
        <div className="p-4 bg-[#DADAE3]">
          <p className="text-[40px]">ข่าวสาร</p>
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
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
