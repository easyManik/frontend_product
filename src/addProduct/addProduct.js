import React, { useState } from "react";
import styles from "./addproduct.module.css";
import { insertProduct } from "./../Redux/actions/productAction";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const Navigate = useNavigate();

  const [formInsert, setFormInsert] = useState({
    id: 0,
    productID: "",
    productName: "",
    amount: "",
    customerName: "",
    status: 0,
    transactionDate: "",
    createBy: "",
    createOn: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormInsert({
      ...formInsert,
      [e.target.name]: e.target.value,
    });
  };
  const handleInsert = (e) => {
    e.preventDefault();

    let data = {
      ...formInsert,
    };
    dispatch(insertProduct(data))
      .then(() => {
        swal("Good Job!", "Insert product Success", "success");
        Navigate("/product");
      })
      .catch(() => swal("Insert product Failed", "", "error"));
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
          onSubmit={handleInsert}
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
                    value={formInsert.id}
                    onChange={handleChange}
                    className={styles.inputName}
                  />

                  <h4 className={styles.nameOfGoods}>Product Name</h4>
                  <input
                    type="text"
                    name="productName"
                    id="productName"
                    value={formInsert.productName}
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
                    value={formInsert.productID}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                  <h4 className={styles.detail}>Amount</h4>
                  <input
                    type="text"
                    name="amount"
                    id="amount"
                    value={formInsert.amount}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                  <h4 className={styles.detail}>Customer Name</h4>
                  <input
                    type="text"
                    name="customerName"
                    id="customerName"
                    value={formInsert.customerName}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                  <h4 className={styles.detail}>Transaction Date</h4>
                  <input
                    type="text"
                    name="transactionDate"
                    id="transactionDate"
                    value={formInsert.transactionDate}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                  <h4 className={styles.detail}>Create By</h4>
                  <input
                    type="text"
                    name="createBy"
                    id="createBy"
                    value={formInsert.createBy}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                  <h4 className={styles.detail}>Create On</h4>
                  <input
                    type="text"
                    name="createOn"
                    id="createOn"
                    value={formInsert.createOn}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                  <h4 className={styles.detail}>Status</h4>
                  <input
                    type="text"
                    name="status"
                    id="status"
                    value={formInsert.status}
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
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
