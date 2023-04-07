/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import styles from "./editProduct.module.css";
import { updateProduct } from "./../Redux/actions/productAction";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const editProduct = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const params = useParams();

  const [formUpdate, setFormUpdate] = useState({
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
        res.data && setFormUpdate(res.data.data);
      })
      .catch((err) => {
        console.log("Get detail user fail");
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setFormUpdate({
      ...formUpdate,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    let data = {
      ...formUpdate,
    };
    dispatch(updateProduct(formUpdate.id, data, navigate));
  };
  return (
    <div className="d-flex flex-row" style={{ backgroundColor: "#F0F1F9" }}>
      <div className="col-4">
        <aside>
          <div className={styles.btnRoute}>
            <Link to="/">
              <button className="btn" style={{ color: "white" }}>
                {" "}
                Gp To List Product
              </button>
            </Link>
          </div>
        </aside>
      </div>
      <div className="col-8">
        <form
          onSubmit={handleUpdate}
          className="mx-5 p-5 d-flex justify-content-center row"
        >
          <div>
            <div className={styles.inventory}>
              <div className="row">
                <div className="col">
                  <h4 className={styles.inventory1}>Add Product</h4>
                  <hr />
                  <h4 className={styles.nameOfGoods}>ID</h4>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    value={formUpdate.id}
                    onChange={handleChange}
                    className={styles.inputName}
                  />

                  <h4 className={styles.nameOfGoods}>Product Name</h4>
                  <input
                    type="text"
                    name="productname"
                    id="productname"
                    value={formUpdate.productname}
                    onChange={handleChange}
                    className={styles.inputName}
                  />
                </div>
              </div>
            </div>
            <div className={styles.itemDetails}>
              <div className="row">
                <div className="col">
                  <h4 className={styles.itemDetails1}>
                    Details Properti of Product
                  </h4>
                  <hr />
                  <h4 className={styles.detail}>Product ID</h4>
                  <input
                    type="text"
                    name="productid"
                    id="productid"
                    value={formUpdate.productid}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                  <h4 className={styles.detail}>Amount</h4>
                  <input
                    type="text"
                    name="amount"
                    id="amount"
                    value={formUpdate.amount}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                  <h4 className={styles.detail}>Customer Name</h4>
                  <input
                    type="text"
                    name="customername"
                    id="customername"
                    value={formUpdate.customername}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                  <h4 className={styles.detail}>Transaction Date</h4>
                  <input
                    type="text"
                    name="transactiondate"
                    id="transactiondate"
                    value={formUpdate.transactiondate}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                  <h4 className={styles.detail}>Create By</h4>
                  <input
                    type="text"
                    name="createby"
                    id="createby"
                    value={formUpdate.createby}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                  <h4 className={styles.detail}>Create On</h4>
                  <input
                    type="text"
                    name="createon"
                    id="createon"
                    value={formUpdate.createon}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                  <h4 className={styles.detail}>Status</h4>
                  <input
                    type="text"
                    name="status"
                    id="status"
                    value={formUpdate.status}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn mt-4"
            style={{ backgroundColor: "green", color: "white", width: "150px" }}
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default editProduct;
