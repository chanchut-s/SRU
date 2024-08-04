import React from "react";
import { Layout, Image } from "antd";
import Link from "next/link";

const { Header, Footer, Sider, Content } = Layout;

function info() {
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
  return (
    <Layout style={layoutStyle}>
      <Header
        style={headerStyle}
        className="grid grid-cols-2 gap-4 sticky top-0"
      >
        <div className="text-left cursor-pointer">
          <p>SRU</p>
        </div>
        <div className="grid grid-cols-7 gap-4 items-center">
          <Link
            href="/"
            className="text-base leading-6 hover:text-gray-900"
          >
            หน้าหลัก
          </Link>
          <p className="cursor-pointer">เกี่ยวกับเรา</p>
          <p className="cursor-pointer">บุคคลากร</p>
          <p className="cursor-pointer">ข่าว</p>
          <p className="cursor-pointer">ติดต่อ</p>
          <p className="cursor-pointer">เข้าสู่ระบบ</p>
        </div>
      </Header>
      <Content>
        <div>
          <Image width="100%" height="500px" src="assets/banner/Frame 15.png" />
        </div>
        <div className="grid grid-cols-8 p-4">
          <div className="col-start-2 col-end-8">
            <p className="mx-4 text-[40px]">เกียวกับ SRU</p>
            <div className="p-2">
              <p>
                ก่อตั้งขึ้นในเดือนตุลาคม พ.ศ. 2565
                โดยมีสำนักงานใหญ่ประจำอยู่ที่มหาวิทยาลัยเกษตรศาสตร์
                กรุงเทพมหานคร
                ดำเนินธุรกิจด้วยปรัชญาองค์กรในการมุ่งให้ผู้ใช้บริการได้รับประสบการณ์ที่ตรงตามความต้องการ
                เป็นไปตามมาตรฐานการดำเนินงาน และมาตรฐานความปลอดภัยระดับสากล
                ด้วยบุคลากรมืออาชีพที่มีประสบการณ์ ผ่านการฝึกอบรมอย่างสม่ำเสมอ
                เพื่อพร้อมปฎิบัติงานด้วยความชำนาญ
                ด้วยอุปกรณ์และสิ่งอำนวยความสะดวกต่าง ๆ
                ที่มีการบำรุงรักษาตามมาตรในระดับสูงสุด
                บนระบบการรักษาความปลอดภัยอย่างเข้มงวด และเทคโนโลยีที่ทันสมัย
              </p>
            </div>
            <p className="mx-4 text-[40px]">วิสัยทัศน์ SRU</p>
            <div className="p-2">
              <p>
                ผู้นำการสร้างสรรค์องค์ความรู้และนวัตกรรมเพื่อสร้างเสริมสังคมสู่การพัฒนาอย่างยั่งยืน
              </p>
            </div>
          </div>
        </div>
      </Content>
      <Footer className="bg-black">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <Link
                href="/"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                href="/about"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                href="/news"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                News
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                href="/contact"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a10 10 0 00-3.156 19.496c.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.775.603-3.362-1.34-3.362-1.34-.454-1.153-1.11-1.46-1.11-1.46-.907-.62.068-.608.068-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.528 2.341 1.087 2.91.832.092-.647.349-1.086.635-1.337-2.215-.252-4.548-1.108-4.548-4.93 0-1.087.39-1.979 1.03-2.676-.103-.253-.446-1.27.098-2.648 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0112 6.845a9.56 9.56 0 012.507.336c1.91-1.293 2.75-1.025 2.75-1.025.544 1.378.202 2.395.099 2.648.64.697 1.03 1.59 1.03 2.676 0 3.828-2.337 4.675-4.556 4.922.359.309.678.919.678 1.854 0 1.338-.012 2.419-.012 2.748 0 .269.18.58.688.482A10 10 0 0012 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            &copy; 2023 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </Footer>
    </Layout>
  );
}

export default info;
