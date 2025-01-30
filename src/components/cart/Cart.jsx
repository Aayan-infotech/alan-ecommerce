import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogActions,
  Alert,
  DialogContent,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import banner from "../../assets/doors.png";
import card_img1 from "../../assets/window.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ModeIcon from "@mui/icons-material/Mode";
import {
  deleteProduct,
  fetchAllProducts,
  updateUserBillingAddress,
} from "../redux/slices/addToCartSlice";
import { useDispatch, useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Loader from "../../loader/Loader";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const pickupAddressOptions = [
  {
    id: "option1",
    title: "Window Pick Up",
    description: [
      "Green World Windows and Doors",
      "3810 Wabash Drive",
      "Mira Loma, CA 91752",
    ],
    price: "$340",
  },
  {
    id: "option2",
    title: "Door Pickup",
    description: ["A.A.W. Doors", "13900 S Broadway", "Los Angeles, CA 90061"],
    price: "$140",
  },
  {
    id: "option3",
    title: "Both Door and Window Pick Up",
    description: [
      "Discount Door and Window",
      "5450 Complex St.",
      "Unit 301",
      "San Diego, CA 92123",
    ],
    price: "$440",
  },
];

const Cart = () => {
  const [shippinhgMethod, setShippinhgMethod] = useState("delivery");
  const [productToDelete, setProductToDelete] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [customerDetails, setCustomerDetails] = useState(null);
  const [isEditingBilling, setIsEditingBilling] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    mobile: "",
    state: "",
    zipCode: "",
    address: "",
  });
  const [productQuantities, setProductQuantities] = useState({});
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.cart);
  console.log(products?.orders, "products");

  const userLoggedInId = Cookies.get("userLoggedInId");
  const alanAuthToken = Cookies.get("alanAuthToken");
  const navigate = useNavigate();
  const location = useLocation();

  const calculateTotalPrice = Array.isArray(products?.orders)
    ? products?.orders.reduce((acc, product) => {
        const quantity = productQuantities[product._id] || 1;
        return acc + product.totalPrice * quantity;
      }, 0)
    : 0;

  const numberOfTotalProducts = Array.isArray(products?.orders)
    ? products?.orders.length
    : 0;

  const fetchCustomerAddressDetails = async () => {
    try {
      const response = await axios.get(
        `http://44.196.64.110:7878/api/CustMng/customers/${userLoggedInId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${alanAuthToken}`,
          },
        }
      );
      setCustomerDetails(response?.data?.data);
      console.log(response.data.data, "response?.data?.data");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!userLoggedInId || !alanAuthToken) {
      if (!products?.orders || products?.orders.length === 0) {
        dispatch(fetchAllProducts());
      }
    } else {
      if (!products?.orders || products?.orders.length === 0) {
        dispatch(fetchAllProducts());
      }
      fetchCustomerAddressDetails();
    }
  }, [dispatch, products]);

  const handleQuantityChange = (productId, operation) => {
    setProductQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[productId] || 1;
      const newQuantity =
        operation === "increment"
          ? currentQuantity + 1
          : currentQuantity > 1
          ? currentQuantity - 1
          : 1;

      return { ...prevQuantities, [productId]: newQuantity };
    });
  };

  const formatPath = (path) => {
    return path
      .split("/")
      .filter(Boolean)
      .map((segment) =>
        segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())
      )
      .join(" > ");
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleEditCustomerAddress = () => {
    const customer = customerDetails;
    if (customer) {
      setBillingDetails({
        name: customer.name || "",
        mobile: customer.mobile || "",
        state: customer.state || "",
        zipCode: customer.zipCode || "",
        address: customer.address || "",
      });
      setIsEditingBilling(true);
    }
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOpenDeleteDialog = (productId) => {
    setProductToDelete(productId);
  };

  const handleDeleteConfirm = async () => {
    if (productToDelete) {
      await dispatch(deleteProduct(productToDelete)).unwrap();
      dispatch(fetchAllProducts());
      setProductToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setProductToDelete(null);
  };

  const handleUpdateBillingDetails = async (e) => {
    e.preventDefault();
    if (
      !billingDetails.name ||
      !billingDetails.mobile ||
      !billingDetails.state ||
      !billingDetails.zipCode ||
      !billingDetails.address
    ) {
      toast.error("Please fill out all fields before updating.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    dispatch(
      updateUserBillingAddress({ userId: userLoggedInId, billingDetails })
    )
      .unwrap()
      .then((response) => {
        toast.success(response.message || "Customer updated successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setBillingDetails({
          address: "",
          city: "",
          state: "",
          zip: "",
          country: "",
        });
        dispatch(fetchAllProducts())
          .unwrap()
          .then(() => {
            toast.success("Products updated successfully!", {
              position: "top-right",
              autoClose: 3000,
            });
          })
          .catch((error) => {
            toast.error(
              `Failed to fetch products: ${error || "Unknown error"}`,
              {
                position: "top-right",
                autoClose: 3000,
              }
            );
          });
      })
      .catch((error) => {
        toast.error(`Update failed: ${error || "Unknown error"}`, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  const handleCancelBillingDetails = () => {
    setBillingDetails({
      name: "",
      mobile: "",
      state: "",
      zipCode: "",
      address: "",
    });
    setIsEditingBilling(false);
  };

  const handleCheckOut = async (e) => {
    e.preventDefault();

    if (!alanAuthToken && !userLoggedInId) {
      alert("Please log in before proceeding to checkout.");
      localStorage.setItem("redirectUrl", window.location.href);
      navigate("/login");
      return;
    } else {
      if (shippinhgMethod === "pickup" && !selectedOption) {
        alert("Please select a pickup address before proceeding.");
        return;
      } else if (shippinhgMethod === "delivery" && !billingDetails.address) {
        alert("Please provide a delivery address before proceeding.");
        return;
      }

      let shippingAddress;
      if (shippinhgMethod === "pickup") {
        const selectedPickupOption = pickupAddressOptions.find(
          (option) => option.id === selectedOption
        );
        if (!selectedPickupOption) {
          alert("Invalid pickup address selected.");
          return;
        }
        shippingAddress = {
          title: selectedPickupOption.title,
          description: selectedPickupOption.description.join(", "),
          price: selectedPickupOption.price,
        };
      } else {
        shippingAddress = {
          name: billingDetails.name || "N/A",
          mobile: billingDetails.mobile || "N/A",
          address: billingDetails.address || "N/A",
          state: billingDetails.state || "N/A",
          zipCode: billingDetails.zipCode || "N/A",
        };
      }

      const checkoutData = {
        totalPrice: calculateTotalPrice.toFixed(2),
        totalProducts: numberOfTotalProducts,
        shippingMethod: shippinhgMethod,
        shippingAddress,
        productIds: products?.orders?.map((product) => product._id),
      };

      try {
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(checkoutData),
        });
        if (!response.ok) {
          throw new Error("Failed to process checkout");
        }
        const result = await response.json();
        alert("Checkout successful: " + result.message);
      } catch (error) {
        console.error("Checkout error:", error);
        alert("Checkout failed: " + error.message);
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ToastContainer />
          <div className="doors-container px-3 mb-4">
            <Box
              sx={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
              }}
            >
              <Box>
                <Typography variant="h2" className="text-black fw-bold">
                  Cart
                </Typography>
                <Typography variant="h6" className="text-black fw-bold">
                  <span>
                    Home {">"} {formatPath(location.pathname)}
                  </span>
                </Typography>
              </Box>
            </Box>

            <Container className="mt-4">
              {loading ? (
                <div className="text-center">
                  <CircularProgress color="primary" />
                  <p>Loading...</p>
                </div>
              ) : error ? (
                <p className="text-center">Error: {error}</p>
              ) : products?.orders?.length > 0 ? (
                products?.orders.map((product, index) => (
                  <div className="card mb-2" key={product._id}>
                    <div className="card-body">
                      <div className="row gx-4 align-items-center">
                        <div className="col-12 col-sm-4 col-md-4 mb-3 mb-md-0">
                          <div className="d-flex align-items-center">
                            <img
                              src={product?.images?.[0] || card_img1}
                              height="50"
                              alt="Product"
                              className="me-2"
                            />
                            <div>
                              <p className="mb-0">
                                {product?.name
                                  ? product?.name
                                      .replace(/_/g, " ")
                                      .replace(/\b\w/g, (char) =>
                                        char.toUpperCase()
                                      )
                                  : "N/A"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2 mb-2 mb-md-0">
                          <div className="text-start text-md-center">
                            Price:&nbsp;
                            <span>
                              $
                              {(
                                (product?.totalPrice || 0) *
                                (productQuantities[product._id] || 1)
                              ).toFixed(2)}
                            </span>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8 col-md d-flex justify-content-center align-items-center">
                          <div className="d-flex justify-content-between justify-content-md-start align-items-center">
                            Quantity:
                            <IconButton
                              onClick={() =>
                                handleQuantityChange(product._id, "decrement")
                              }
                            >
                              <RemoveCircleOutlineIcon
                                sx={{ color: "black" }}
                              />
                            </IconButton>
                            <Typography
                              className="p-2 border border-2 rounded-1 text-center"
                              sx={{
                                height: "30px",
                                minWidth: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {productQuantities[product._id] || 1}
                            </Typography>
                            <IconButton
                              onClick={() =>
                                handleQuantityChange(product._id, "increment")
                              }
                            >
                              <ControlPointIcon sx={{ color: "black" }} />
                            </IconButton>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-1 d-flex justify-content-center">
                          <IconButton
                            color="primary"
                            size="small"
                            onClick={() => handleOpenDeleteDialog(product._id)}
                            sx={{ border: "1px solid #fc5f03" }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center fw-bold mt-4">
                  <img
                    height="400"
                    src="https://static.vecteezy.com/system/resources/previews/016/026/442/non_2x/empty-shopping-cart-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
                    alt="Empty Cart"
                  />
                </p>
              )}
              <Dialog
                open={Boolean(productToDelete)}
                onClose={handleDeleteCancel}
                maxWidth="sm"
                fullWidth={true}
              >
                <DialogTitle>Confirm Delete</DialogTitle>

                <DialogContent>
                  <Alert variant="outlined" severity="error">
                    Are you sure you want to delete this product..?
                  </Alert>
                </DialogContent>

                <DialogActions>
                  <Button onClick={handleDeleteCancel} color="primary">
                    Cancel
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handleDeleteConfirm}
                    color="error"
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>

              <div className="row gx-3 gy-3">
                {alanAuthToken && userLoggedInId && (
                  <>
                    <div className="col-12 col-md-4">
                      <div
                        className={`p-2 border border-1 rounded ${
                          !isEditingBilling ? "bg-light" : ""
                        }`}
                      >
                        <h6 className="fw-bold">Billing</h6>
                        <form
                          className="form"
                          disabled={!isEditingBilling}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            pointerEvents: isEditingBilling ? "auto" : "none",
                          }}
                        >
                          <div className="mb-3">
                            <input
                              type="text"
                              name="name"
                              placeholder="First Name"
                              value={billingDetails.name}
                              onChange={handleBillingChange}
                              className="form-control"
                              style={{ outline: "none", boxShadow: "none" }}
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              name="mobile"
                              placeholder="Mobile Number"
                              value={billingDetails.mobile}
                              onChange={handleBillingChange}
                              className="form-control"
                              style={{ outline: "none", boxShadow: "none" }}
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              name="state"
                              placeholder="State"
                              value={billingDetails.state}
                              onChange={handleBillingChange}
                              className="form-control"
                              style={{ outline: "none", boxShadow: "none" }}
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              name="zipCode"
                              placeholder="Zip Code"
                              value={billingDetails.zipCode}
                              onChange={handleBillingChange}
                              className="form-control"
                              style={{ outline: "none", boxShadow: "none" }}
                            />
                          </div>
                          <div className="mb-3">
                            <textarea
                              name="address"
                              placeholder="Address"
                              value={billingDetails.address}
                              onChange={handleBillingChange}
                              className="form-control"
                              style={{ outline: "none", boxShadow: "none" }}
                            />
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={handleUpdateBillingDetails}
                            >
                              Update
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={handleCancelBillingDetails}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="p-2 border border-1 rounded">
                        <h6 className="fw-bold">Shipping Method</h6>
                        <div className="d-flex align-items-center mb-3">
                          <div className="form-check me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              checked={shippinhgMethod === "delivery"}
                              onChange={() => setShippinhgMethod("delivery")}
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault1"
                            >
                              Delivery
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              checked={shippinhgMethod === "pickup"}
                              onChange={() => setShippinhgMethod("pickup")}
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault2"
                            >
                              Pickup
                            </label>
                          </div>
                        </div>
                        {shippinhgMethod === "pickup" && (
                          <div>
                            {pickupAddressOptions.map((option) => (
                              <div
                                key={option.id}
                                className="p-2 border border-1 rounded mb-2 d-flex align-items-start"
                              >
                                <input
                                  type="radio"
                                  id={option.id}
                                  name="pickupOption"
                                  value={option.id}
                                  className="me-2"
                                  checked={selectedOption === option.id}
                                  onChange={handleChange}
                                />
                                <label
                                  htmlFor={option.id}
                                  className="w-100 d-flex justify-content-between"
                                >
                                  <div>
                                    <h6 className="fw-bold">{option.title}</h6>
                                    {option.description.map((line, index) => (
                                      <p key={index} className="mb-0">
                                        &nbsp;-&nbsp;{line}
                                      </p>
                                    ))}
                                  </div>
                                  <h6 className="fw-bold">{option.price}</h6>
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                        {shippinhgMethod === "delivery" && (
                          <div className="p-2 border border-1 rounded mb-2 d-flex align-items-start">
                            <input
                              type="radio"
                              id="option3"
                              name="pickupOption"
                              value="option3"
                              className="me-2"
                            />
                            <label
                              htmlFor="option3"
                              className="w-100 d-flex justify-content-between"
                            >
                              <div>
                                <h6 className="fw-bold">
                                  &nbsp;&nbsp;{customerDetails?.name || "n/a"}
                                </h6>
                                <p className="mb-0">
                                  &nbsp;-&nbsp;
                                  {customerDetails?.email || "N/A"}
                                </p>
                                <p className="mb-0">
                                  &nbsp;-&nbsp;
                                  {customerDetails?.mobile || "N/A"}
                                </p>
                                <p className="mb-0">
                                  &nbsp;-&nbsp;
                                  {customerDetails?.country_name || "N/A"}
                                </p>
                                <p className="mb-0">
                                  &nbsp;-&nbsp;
                                  {customerDetails?.state || "N/A"}
                                </p>
                                <p className="mb-0">
                                  &nbsp;-&nbsp;
                                  {customerDetails?.address || "N/A"}
                                </p>
                                <p className="mb-0">
                                  &nbsp;-&nbsp;
                                  {customerDetails?.zipCode || "N/A"}
                                </p>
                              </div>
                              <IconButton
                                onClick={handleEditCustomerAddress}
                                variant="outlined"
                                sx={{ height: "40px", width: "40px" }}
                              >
                                <ModeIcon color="primary" />
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                <div className="col-12 col-md-4 mt-3">
                  <div className="p-2 border border-1 rounded">
                    <h6 className="fw-bold">Product Details</h6>
                    {products?.orders?.length > 0 ? (
                      products?.orders.map((product, index) => (
                        <Accordion key={product._id}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                          >
                            <Typography component="span">
                              {product.name}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <div>
                              <h6 className="fw-bold">Selected Options</h6>
                              {product.selectedOptions ? (
                                Object.entries(product.selectedOptions).map(
                                  ([key, value]) => (
                                    <div
                                      key={key}
                                      className="d-flex justify-content-between align-items-center mb-2"
                                    >
                                      <h6 className="fw-bold">{key}</h6>
                                      <p className="mb-0">{value}</p>
                                    </div>
                                  )
                                )
                              ) : (
                                <p>No options selected</p>
                              )}
                            </div>
                          </AccordionDetails>
                        </Accordion>
                      ))
                    ) : (
                      <p className="text-center mt-3">No product in the cart</p>
                    )}
                    <hr />
                    <div className="summary border border-1 rounded p-3">
                      <h4>Summary</h4>
                      <div className="d-flex justify-content-between">
                        <span>Total Products:</span>
                        <span className="fw-bold">{numberOfTotalProducts}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Total Price:</span>
                        <span className="fw-bold">
                          ${calculateTotalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Box className="text-center mt-4">
                {/* <Link to="/checkout"> */}
                <Button
                  variant="contained"
                  onClick={handleCheckOut}
                  sx={{
                    p: 1,
                    backgroundColor: "#FC5F03",
                    borderColor: "#FC5F03",
                    textTransform: "none",
                    width: "150px",
                  }}
                  className="rounded-3 fw-bold"
                >
                  Check Out
                </Button>
                {/* </Link> */}
              </Box>
            </Container>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
