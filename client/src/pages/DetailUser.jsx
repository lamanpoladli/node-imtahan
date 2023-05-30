
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserById} from '../api/requests';
import homestyle from "./home.module.css"
import { Col, Row } from 'antd';
const DetailUser = () => {
  const{id} = useParams();
  const[user,setUser] = useState({});
  useEffect(()=>{
    getUserById(id).then(res=>{
      setUser(res);
    })
  },[id]);
  return (
    <Row className={homestyle.container2}>
            <Col  span={8} key={user._id}>
              <div  className={homestyle.col8second}>
                <img src={user.imageUrl} alt="" />
                <div>
                  <h1>{user.name}</h1>
                  <p>{user.price}</p>
                  <p>Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.</p>
                </div>
              </div>
            </Col>
          </Row>
  )
}

export default DetailUser