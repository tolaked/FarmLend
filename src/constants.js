import axios from "axios";

const URL = "http://localhost:8080/api/v1";
const token = localStorage.getItem("appUserToken");
export const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fields = {
  createProduct: "Create Product",
  editProduct: "Update product",
  createOrganization: "Create Organization",
  editOrganization: "Update Organization",
  createOrder: "Create Order",
  editOrder: "Update Order",
};
