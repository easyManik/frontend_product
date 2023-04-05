import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailProduct } from "./../Redux/actions/productAction";
import styles from "./detailProduct.module.css";

const DetailProduct = () => {
  const dispatch = useDispatch();
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
  useEffect(
    () => async () => {
      const result = await dispatch(getDetailProduct(params.id));
      console.log(result);
      setDetailProduct({
        ...detailProduct,
        id: result.id,
        productname: result.productname,
        productid: result.productid,
        amount: result.amount,
        customername: result.customername,
        transactiondate: result.transactiondate,
        createby: result.createby,
        createon: result.createon,
      });
    },
    [detailProduct, dispatch, params.id]
  );

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
