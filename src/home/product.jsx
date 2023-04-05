import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./myProduct.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getProduct } from "./../Redux/actions/productAction";

const MyProduct = () => {
  const Navigate = useNavigate();

  const [page, setPage] = useState({
    page: 1,
    limit: 5,
    totalData: 1,
    totalPage: 1,
  });
  const { data, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProduct({
        page: page.currentPage,
        limit: page.limit,
        totalData: page.totalData,
        totalPage: page.totalPage,
      })
    );
  }, [dispatch, page]);
  return (
    <div>
      <main>
        <h1>My Product</h1>
        <hr />
        <table className={styles.contentTable}>
          {isLoading && <h1>loading.....</h1>}
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Product ID</th>
              <th>Amount</th>
              <th>Transaction Date</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((product) => (
                <tr>
                  <td>{product.id}</td>
                  <td>{product.productname}</td>
                  <td>{product.productid}</td>
                  <td>{product.amount}</td>
                  <td>{product.transactiondate}</td>
                  <td>
                    <button
                      onClick={() => Navigate(`/edit/${product.id}`)}
                      className={`btn btn-danger ${styles.btnAction}`}
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => Navigate(`/detail/${product.id}`)}
                      className={`btn btn-danger ${styles.btnAction}`}
                    >
                      detail
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className={styles.btnPagination}>
          <button onClick={() => setPage({ ...page, currentPage: 1 })}>
            1
          </button>
          <button onClick={() => setPage({ ...page, currentPage: 2 })}>
            2
          </button>
          <button onClick={() => setPage({ ...page, currentPage: 3 })}>
            3
          </button>
        </div>
        <div className="mt-3 d-flex justify-content-end">
          <Link to="/addProduct">
            <button className={styles.btnAdd}>Add Product</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default MyProduct;
