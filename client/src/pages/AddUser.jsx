import React from "react";
import { postUser } from "../api/requests";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup"
import Swal from "sweetalert2"

const AddUser = () => {
  const userValidation = yup.object().shape({
    name: yup.string().required('name yoxdur'),
    imageUrl: yup.string().required('ImageUrl yoxdur'),
    price: yup.number().required('price yoxdur')

  })
  const navigate = useNavigate()
  const handleSubmit = async(values,actions)=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    await postUser(values)
    actions.resetForm()
    navigate('/')
  }
  const formik =useFormik({
    initialValues:{
      name: "",
      imageUrl: "",
      price: ""
    },
    validationSchema: userValidation,
    onSubmit: handleSubmit
  })
  return (
    <form 
    onSubmit={formik.handleSubmit}
    >
      <input
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name}
      placeholder="enter name"
      type="text"
      name="name" />
      {formik.errors.name && formik.touched.name &&(
        <span>{formik.errors.name}</span>
      )}
      <input
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.imageUrl}
      placeholder="enter imageUrl"
      type="text"
      name="imageUrl" />
      {formik.errors.imageUrl && formik.touched.imageUrl &&(
        <span>{formik.errors.imageUrl}</span>
      )}
      <input
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.price}
      placeholder="enter price"
      type="text"
      name="price" />
      {formik.errors.price && formik.touched.price &&(
        <span>{formik.errors.price}</span>
      )}
      <button type="submit" disabled={Object.keys(formik.errors).length !==0 ? true:false}>Add New user</button>
    </form>
  )
}

export default AddUser
