/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import styles from "./editProduct.module.css";
import {
  getDetailProduct,
  updateProduct,
} from "./../Redux/actions/productAction";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const editProduct = () => {
  const navigate = useNavigate();

  const [formUpdate, setFormUpdate] = useState({
    id: 0,
    productID: "",
    productName: "",
    amount: "",
    customerName: "",
    status: 0,
    transactionDate: "",
    createBy: "",
  });

  const dispatch = useDispatch();
  const params = useParams();

  const handleGetDetail = async () => {
    const result = await dispatch(getDetailProduct(params.id));
    console.log(result);
    setFormUpdate({
      ...formUpdate,
      id: result.id,
      productName: result.productname,
      productID: result.productid,
      amount: result.amount,
      customerName: result.customername,
      transactionDate: result.transactiondate,
      createBy: result.createby,
    });
  };
  useEffect(() => {
    handleGetDetail();
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
    dispatch(updateProduct(formUpdate.id, data))
      .then(() => {
        swal("Good Job!", "Update Success", "success");
        navigate("/product");
      })
      .catch((error) => {
        console.log(error);
        swal("Update Failed", "", "error");
      });
  };
  return (
    <div className="d-flex flex-row" style={{ backgroundColor: "#F0F1F9" }}>
      <div className="col-4">
        <aside>
          <div className={styles.btnRoute}>
            <Link to="/product">
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
                  name="productName"
                  id="productName"
                  value={formUpdate.productName}
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
                  name="productID"
                  id="productID"
                  value={formUpdate.productID}
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
                  name="customerName"
                  id="customerName"
                  value={formUpdate.customerName}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder=" "
                />
                <h4 className={styles.detail}>Transaction Date</h4>
                <input
                  type="text"
                  name="transactionDate"
                  id="transactionDate"
                  value={formUpdate.transactionDate}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder=" "
                />
                <h4 className={styles.detail}>Create By</h4>
                <input
                  type="text"
                  name="createBy"
                  id="createBy"
                  value={formUpdate.createBy}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder=" "
                />
                <h4 className={styles.detail}>Create On</h4>
                <input
                  type="text"
                  name="createOn"
                  id="createOn"
                  value={formUpdate.createOn}
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
          <button
            type="submit"
            className="btn mt-4"
            style={{ backgroundColor: "green", color: "white", width: "150px" }}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default editProduct;
