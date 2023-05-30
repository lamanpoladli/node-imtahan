import React,{useState,useEffect} from "react"
import {useParams,useNavigate} from "react-router-dom"
import{useFormik} from "formik"
import {editUser,getUserById} from "../api/requests"
const EditUser = () => {
  const [users,setUsers] = useState()
  const [user,setUser] = useState({})
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    getUserById(id).then((res)=>{
      setUser(res)
      formik.values.name = res.name
      formik.values.imageUrl = res.imageUrl
      formik.values.price = res.price
    })
  },[id])
  const handleEdit = async(values,actions)=>{
    setUsers(values)
    await editUser(id,values)
    actions.resetForm()
    navigate('/')
  }
  const formik =useFormik({
    initialValues:{
      name: user.name,
      imageUrl: user.imageUrl,
      price: user.price
    },
    onSubmit: handleEdit
  })
  return (
    <>
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
    </>
  )
}

export default EditUser