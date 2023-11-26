import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
function Cart() {
  const cart = useSelector((state) => state.handleCart);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const addProduct = (product) => dispatch(addCart(product));
  const delProduct = (product) => dispatch(delCart(product));

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);
    setTotal(total);
  }, [cart]);

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </h1>
                        <h6 className="mb-0 text-muted">{cart.length}</h6>
                      </div>
                      <hr className="my-4" />

                      {cart.map((item) => {
                        return (
                          <div className="row mb-4 d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={item.image}
                                className="img-fluid rounded-3"
                                alt={item.title}
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted">{item.title}</h6>
                              <h6 className="text-black mb-0">
                                {item.category}
                              </h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                className="btn btn-link px-2"
                                onClick={() => delProduct(item)}
                              >
                                <i className="fa fa-minus"></i>
                              </button>

                              <input
                                value={item.qty}
                                type="text"
                                className="form-control form-control-sm text-center"
                              />

                              <button
                                className="btn btn-link px-2"
                                onClick={() => addProduct(item)}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">
                                € {(item.price * item.qty).toFixed(2)}
                              </h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <a href="#!" className="text-muted">
                                <i className="fa fa-times"></i>
                              </a>
                            </div>
                          </div>
                        );
                      })}

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <Link to="/" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to shop
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">{cart.length}</h5>
                        <h5>€ {total.toFixed(2)}</h5>
                      </div>

                      <h5 className="text-uppercase mb-3">Shipping</h5>

                      <div className="mb-4 pb-2">
                        <select className="select">
                          <option value="1">Standard-Delivery- €5.00</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                        </select>
                      </div>

                      <h5 className="text-uppercase mb-3">Give code</h5>

                      <div className="mb-5">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Examplea2"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form3Examplea2">
                            Enter your code
                          </label>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>€ {(total + 5).toFixed(2)}</h5>
                      </div>

                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
