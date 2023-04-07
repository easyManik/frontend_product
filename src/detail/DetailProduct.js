/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./detailProduct.module.css";
import axios from "axios";

const DetailProduct = () => {
  const params = useParams();
  const Navigate = useNavigate();
  const [detailProduct, setDetailProduct] = useState({
    productid: "",
    productname: "",
    amount: "",
    customername: "",
    status: "",
    transactiondate: "",
    createby: "",
    createon: "",
  });
  useEffect(() => {
    axios
      .get(`https://backendproduct-production.up.railway.app/${params.id}`)
      .then((res) => {
        console.log("Get detail user success");
        console.log(res.data);
        res.data && setDetailProduct(res.data.data);
      })
      .catch((err) => {
        console.log("Get detail user fail");
        console.log(err);
      });
  }, []);

  return (
    <div
      className="px-5 pb-5"
      style={{ backgroundColor: "#F0F1F9", minHeight: "100vh" }}
    >
      <div className="container">
        <div className="d-flex flex-row ">
          <div className="col-1"></div>
          <div className={`col-5  ${styles.box}`}>
            <h1>
              {detailProduct.productname
                ? detailProduct.productname
                : "Product Name"}
            </h1>
            <button
              className={`mt-2 ${styles.btnedit}`}
              onClick={() => Navigate(`/edit/${detailProduct.id}`)}
            >
              Edit
            </button>
          </div>
        </div>

        <div className="d-flex flex-column align-items-start pt-5">
          <div>
            <h2 style={{ color: "red" }}>Informasi Produk</h2>
          </div>
          <div>
            <div>
              <h5>Product ID</h5>
              <p>
                <b>
                  {detailProduct.productid ? detailProduct.productid : "----"}
                </b>
              </p>
            </div>
            <div>
              <h5>Amount</h5>
              <p>
                <b>{detailProduct.amount ? detailProduct.amount : "----"}</b>
              </p>
            </div>
            <div>
              <h5>Customer Name </h5>
              <p>
                <b>
                  {detailProduct.customername
                    ? detailProduct.customername
                    : "----"}
                </b>
              </p>
            </div>
            <div>
              <h5>Transaction Date</h5>
              <p>
                <b>
                  {detailProduct.transactiondate
                    ? detailProduct.transactiondate
                    : "----"}
                </b>
              </p>
            </div>
            <div>
              <h5>Create By</h5>
              <p>
                <b>
                  {detailProduct.createby ? detailProduct.createby : "----"}
                </b>
              </p>
            </div>
            <div>
              <h5>Create On</h5>
              <p>
                <b>
                  {detailProduct.createon ? detailProduct.createon : "----"}
                </b>
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default DetailProduct;
