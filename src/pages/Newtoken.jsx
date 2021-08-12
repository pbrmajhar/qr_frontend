import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.style.css";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import { createToken } from "../api/token.api";
import Alltoken from "./Alltoken";
var QRCode = require("qrcode");

const Newtoken = () => {
  const { token } = useSelector((state) => state.auth);
  const [fullname, setFullname] = useState("");
  const [number, setNumber] = useState("");
  const [price, setPrice] = useState("");
  const [used, setUsed] = useState(false);
  const [render, setRender] = useState(false);
  const [info, setInfo] = useState({
    id: "",
    name: "",
    phone: "",
    price: "",
    qr: "",
  });

  const saveHandle = async (e) => {
    e.preventDefault();
    setInfo({
      id: "",
      name: "",
      phone: "",
      price: "",
      qr: "",
    });

    if (fullname && number && price) {
      const response = await createToken(fullname, number, price, used, token);
      QRCode.toDataURL(response.data._id, function (err, url) {
        setInfo({
          ...info,
          id: response.data._id,
          name: response.data.fullname,
          phone: response.data.phone,
          price: response.data.price,
          qr: url,
        });
        setFullname("");
        setNumber("");
        setPrice("");
        setRender(true);
      });
    } else {
      alert("Please fill the form");
    }
  };

  return (
    <div className="row">
      <div className="col s2" style={{ backgroundColor: "#4db6" }}>
        <Sidebar />
      </div>

      <div className="col s10">
        <div className="main-content">
          <h4>Create new token</h4>
          <div className="row">
            <Form
              fullname={fullname}
              setFullname={setFullname}
              number={number}
              setNumber={setNumber}
              price={price}
              setPrice={setPrice}
              saveHandle={saveHandle}
              used={used}
              setUsed={setUsed}
            />
            <div className="col s3">
              <div class="card blue-grey darken-1">
                {info.qr ? (
                  <>
                    <div class="card-content white-text">
                      <span class="card-title">Preview</span>
                      <img
                        src={info.qr}
                        style={{ height: "100px", width: "100px" }}
                      />
                      <table>
                        <tbody>
                          <tr>
                            <td>Name :</td>
                            <td>{info.name}</td>
                          </tr>
                          <tr>
                            <td>Phone :</td>
                            <td>{info.phone}</td>
                          </tr>
                          <tr>
                            <td>Price :</td>
                            <td>{info.price}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="card-action">
                      <a href="#">Print</a>
                    </div>
                  </>
                ) : (
                  <div class="card-content white-text">
                    <span class="card-title">No Preview</span>
                  </div>
                )}
              </div>
            </div>
            <div className="col s6">
              <Alltoken token={token} render={render} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newtoken;
