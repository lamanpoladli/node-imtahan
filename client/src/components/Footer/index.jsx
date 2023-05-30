import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Input from '@mui/material/Input';
import footerstyle from "./index.module.css"
import { Col, Row } from 'antd';

const Footer = () => {
  return (
    <footer>
        <div className={footerstyle.footer}>
          <div className={footerstyle.footerdiv}>
            <Row>
              <Col className={footerstyle.footerDisplay} span={18}>
                <Col className={footerstyle.footerleft} span={12}>
                  <h1>About Us</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br></br> incididunt ut labore dolore magna aliqua.</p>
                </Col>
                <Col className={footerstyle.footerleft} span={12}>
                  <h1>Newsletter</h1>
                  <p>Stay update with our latest</p>
                  <Input style={{ backgroundColor: "white", color: "black", borderRadius: "15px" }} placeolder="input search" />
                </Col>
              </Col>
              <Col span={6}>
                <div>

                  <h2>
                    Follow Us</h2>
                  <p className={footerstyle.footerp}>Let us be social</p>
                  <div className={footerstyle.footericon}>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
  )
}

export default Footer