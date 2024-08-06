import React from "react";
import { Image } from "antd";
import Link from "next/link";
import Layout from "./component/layout.jsx";

function info() {
  return (
    <Layout>
      <div>
        <Image width="100%" height="500px" src="assets/banner/Frame 15.png" />
      </div>
      <div className="grid grid-cols-8 p-4">
        <div className="col-start-2 col-end-8">
          <p className="mx-4 text-[40px]">เกียวกับ SRU</p>
          <div className="p-2">
            <p>
              ก่อตั้งขึ้นในเดือนตุลาคม พ.ศ. 2565
              โดยมีสำนักงานใหญ่ประจำอยู่ที่มหาวิทยาลัยเกษตรศาสตร์ กรุงเทพมหานคร
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
    </Layout>
  );
}

export default info;
