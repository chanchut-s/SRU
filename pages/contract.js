import React from "react";
import Layout from "../component/layout.js";
import { Image } from "antd";
import {
  FacebookFilled,
  ChromeFilled,
  YoutubeFilled,
  XOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

function Contract() {
  return (
    <Layout>
      <div>
        <Image width="100%" height="500px" src="assets/banner/Frame 15.png" />
      </div>
      <div className="grid grid-cols-8 p-4 gap-4 space-y-2">
        <div className="col-start-2 col-end-5 border p-4 space-y-2">
          <div>
            <p>
              ที่อยู่ : 50 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร
              10900
            </p>
            <p>โทรศัพท์ : 0-2xxx-xxxx, 0-2xxx-xxxx </p>
            <p>อีเมล : Sru@ku.ac.th</p>
          </div>
          <br />
          <div className="grid space-y-2">
            <div className="flex space-x-2">
              <FacebookFilled style={{ color: "blue", fontSize: "30px" }} />
              <p>SRU</p>
            </div>
            <div className="flex space-x-2">
              <XOutlined style={{ fontSize: "30px" }} />
              <p>SRU</p>
            </div>
            <div className="flex space-x-2">
              <YoutubeFilled style={{ color: "red", fontSize: "30px" }} />
              <p>SRU Chanel</p>
            </div>
            <div className="flex space-x-2">
              <ChromeFilled style={{ fontSize: "30px" }} />
              <p>SRU Google form</p>
            </div>
          </div>
          <br />
          <div>
            <div className="flex space-x-2">
              <FieldTimeOutlined style={{ fontSize: "30px" }} />
              <div className="grid space-y-2">
                <p>เวลาทำการ</p>
                <p>ปิดทำการวันจันทร์ - วันศุกร์ เวลา 10:00 - 17:00 น.  </p>
                <p>
                  วันหยุดให้บริการ - ทุกวันเสาร์ - วันอาทิตย์ -
                  วันหยุดนักขัตฤกษ์
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-5 col-end-8 border">
          <Image
            width="100%"
            height="350px"
            src="assets/contractus/S__16072785 1.png"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Contract;
