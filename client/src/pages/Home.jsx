import React, { useState } from 'react';
import { useEffect } from "react";
import { getAllUsers,deleteUserById } from "../api/requests";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import homestyle from "./home.module.css"
import { Col, Row } from 'antd';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import EuroIcon from '@mui/icons-material/Euro';
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Swal from "sweetalert2"
import { Button,TextField } from "@mui/material";





const Home = () => {
  const images = [
    "https://preview.colorlib.com/theme/invest/images/home_slider_1.jpg.webp",
    "https://preview.colorlib.com/theme/invest/images/home_slider_1.jpg.webp",
    "https://preview.colorlib.com/theme/invest/images/home_slider_1.jpg.webp",
  ];
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res);
    })
  }, [])
  const [search,setSearch] = useState('')
  return (
    <>
      <Slide>
        <div className={homestyle.eachslideeffect}>
          <div style={{ 'backgroundImage': `url(${images[0]})` }}>
            <span className={homestyle.span}>
              <h1>A New World Is Coming</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, similique<br></br><br></br> voluptate! Et voluptates qui ullam maiores optio commodi eligendi in!</p>
              <button>Read More</button>
            </span>
          </div>
        </div>
        <div className={homestyle.eachslideeffect}>
          <div style={{ 'backgroundImage': `url(${images[1]})` }}>
            <span className={homestyle.span}>
              <h1>A New World Is Coming</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, similique<br></br><br></br> voluptate! Et voluptates qui ullam maiores optio commodi eligendi in!</p>
              <button>Read More</button>
            </span>
          </div>
        </div>
        <div className={homestyle.eachslideeffect}>
          <div style={{ 'backgroundImage': `url(${images[2]})` }}>
            <span className={homestyle.span}>
              <h1>A New World Is Coming</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, similique<br></br><br></br> voluptate! Et voluptates qui ullam maiores optio commodi eligendi in!</p>
              <button>Read More</button>
            </span>
          </div>
        </div>
      </Slide>
      <section>
        <div className={homestyle.section1}>
          <div className={homestyle.container}>
            <div>
              <img src="https://preview.colorlib.com/theme/invest/images/intro.png" alt="" />
            </div>
            <div>
              <p>TAKE A LOOK AT OUR</p>
              <h1>Buy and Sell Bitcoin</h1>
              <h4>Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit.Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobo rtis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit. Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit.</h4>
              <button>READ MORE</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={homestyle.section2}>

          <Row className={homestyle.container2}>
            <Col span={8}>
              <div className={homestyle.col8}>
                <CurrencyBitcoinIcon className={homestyle.iconMoney} />
                <h1>Exchange Fiat<br></br> for Crypto</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, recusandae aperiam at quo itaque maiores, eius rerum, ipsa hic reprehenderit perspiciatis voluptate harum! Consequatur, dolorem.</p>
                <button>Read More</button>
              </div>
            </Col>
            <Col span={8}>
              <div className={homestyle.col8}>
                <CurrencyLiraIcon className={homestyle.iconMoney} />
                <h1>Exchange Fiat<br></br> for Crypto</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, recusandae aperiam at quo itaque maiores, eius rerum, ipsa hic reprehenderit perspiciatis voluptate harum! Consequatur, dolorem.</p>
                <button>Read More</button>
              </div>
            </Col>
            <Col span={8}>
              <div className={homestyle.col8}>
                <EuroIcon className={homestyle.iconMoney} />
                <h1>Exchange Fiat<br></br> for Crypto</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, recusandae aperiam at quo itaque maiores, eius rerum, ipsa hic reprehenderit perspiciatis voluptate harum! Consequatur, dolorem.</p>
                <button>Read More</button>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section>
        <div className={homestyle.section3}>
          <Row className={homestyle.container2}>
            <Col span={24}>
              <div className={homestyle.col24}>
                <p>TAKE A LOOK AT OUR</p>
                <h1>Latest News in Crypto</h1>
              </div>
            </Col>
          </Row>
          <div style={{ display: "flex", alignItems: "baseline" }}>
              <input
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: "30px" }}
                id="outlined-basic"
                label="Search User"
                variant="outlined"
              />
              <Button
                variant="contained"
                color="success"
                style={{ marginLeft: '10px' }}
                onClick={() => {
                  let sortedUsers = [...users.sort((a, b) => a.price - b.price)];
                  setUsers(sortedUsers);
                }}
              >
                Sort by Price
              </Button>
            </div>
          <Row className={homestyle.container2}>
          {users && users.filter((item)=>{
            return search.toLocaleLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
          })
          
          .map((user) => {
            return <Col xs={24} sm={24} md={12} lg={8}  key={user._id}>
              <div  className={homestyle.col8second}>
                <img src={user.imageUrl} alt="" />
                <div>
                  <h1>{user.name}</h1>
                  <p>{user.price}</p>
                  <p>Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.</p>
                  <button ><Link style={{ color: "black" }} to={`/users/edit/${user._id}`}>Edit User</Link></button>
                  <button ><Link style={{ color: "black" }} to={`/users/${user._id}`}>Detail User</Link></button>
                  <button
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result)=>{
                          if(result.isConfirmed){
                            deleteUserById(user._id).then(()=>{
                              Swal.fire(
                                `Deleted!`,
                                "Your user has been deleted.",
                                "success"
                              );
                            })
                            setUsers(
                              users.filter((x)=> x._id !== user._id)
                            )
                          }
                        })
                      }}
                      variant="outlined"
                      color="warning"


                    ><Link style={{ color: "black" }}><DeleteForeverIcon />Delete</Link></button>
                </div>
              </div>
            </Col>
            })}
          </Row>
        </div>
      </section>
    </>
  )
}

export default Home