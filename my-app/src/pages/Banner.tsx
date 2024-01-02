import React from 'react'
import jack from '../images/it_img.jpeg';
import spiral from '../images/spiral3.png'
import { Card } from 'react-bootstrap';
import TipsAndUpdates from '@mui/icons-material/TipsAndUpdates';
import { Webhook, Draw } from '@mui/icons-material';
import design1 from '../images/design1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="banner_main_page">

      <div className="top_sec">
        <div className="coustom_container">
          <div className="row">

            <div className="col-lg-6 left_col">
              <h1>I'am jack</h1>
              <p>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
            </div>
            <div className="col-lg-6 right_col">
              <div className="ring">
                <img src={jack} alt="riya" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second_sec">
        <div className="coustom_container">
          <div className="head-section">
            <h2>Epic design and engineering</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="row">

            <div className="col-lg-4 mt-2">
              <Card>
                <Card.Body>
                  <TipsAndUpdates />
                  <Card.Title>STRATEGY</Card.Title>
                  <Card.Text>
                    <p>Our prebuilt plugins for all the major ecommerce platforms will get your store set up with CoinPayments in minutes</p>
                  </Card.Text>

                </Card.Body>
              </Card>

            </div>
            <div className="col-lg-4 mt-2">
              <Card>
                <Card.Body>
                  <Webhook />
                  <Card.Title>DEVELOPMENT</Card.Title>
                  <Card.Text>
                    <p>Our prebuilt plugins for all the major ecommerce platforms will get your store set up with CoinPayments in minutes</p>
                  </Card.Text>

                </Card.Body>
              </Card>

            </div>
            <div className="col-lg-4 mt-2">
              <Card>
                <Card.Body>
                  <Draw />
                  <Card.Title>WEB DESIGN</Card.Title>
                  <Card.Text>
                    <p>Our prebuilt plugins for all the major ecommerce platforms will get your store set up with CoinPayments in minutes</p>
                  </Card.Text>

                </Card.Body>
              </Card>

            </div>

          </div>
        </div>
      </div>
      <div className="third_sec">
        <div className="coustom_container">
          <div className="head-section">
            <h2>My Work Experience</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="work-sections">
            <div className="left-sec">
              <div className="head-1">
                <h6>Self-Employed</h6>
                <p>March 2022 - March 2023</p>
              </div>
              <div className="head-1">
                <h6>Self-Employed</h6>
                <p>March 2022 - March 2023</p>
              </div>
              <div className="head-1">
                <h6>Self-Employed</h6>
                <p>March 2022 - March 2023</p>
              </div>
            </div>
            <div className="middle-sec">
              <div className="ring-1"><div className="new"><div></div></div></div>
              <div className="ring-2"><div className="circle-2"><div></div></div></div>
              <div className="ring-3"><div className="circle-3"><div></div></div></div>

            </div>
            <div className="right-sec">
              <div className="head-1">
                <h6>Visual Designer</h6>
                <p>Visual designers use a combination of artistic and technical skills to produce visually appealing and effective materials across various media, including print, digital, and multimedia platforms.</p>
              </div>
              <div className="head-1">
                <h6>Visual Designer</h6>
                <p>Visual designers use a combination of artistic and technical skills to produce visually appealing and effective materials across various media, including print, digital, and multimedia platforms.</p>
              </div>
              <div className="head-1">
                <h6>Visual Designer</h6>
                <p>Visual designers use a combination of artistic and technical skills to produce visually appealing and effective materials across various media, including print, digital, and multimedia platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fourth-sec">
        <div className="coustom_container">
          <div className="row">
            <div className="col-lg-6 fourth-left">
              <img src={design1} alt="design1" />
            </div>
            <div className="col-lg-6">
              <h4 className='design-head'>I can design anything you want </h4>
              <p>Creating a website is a crucial step in establishing a strong online presence for individuals, businesses, or organizations. The process begins with careful planning. First, define your website's purpose and target audience. </p>
              <ul>
                <li>Understand the Client's Needs</li>
                <li>Responsive Design</li>
                <li>User-Centered Design</li>
                <li>SEO-Friendly Design</li>
                <li>Portfolio Development</li>
              </ul>
            </div>
          </div>
          <div>
            {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={design1} alt="design"/></SwiperSlide>
        <SwiperSlide><img src={design1} alt="design"/></SwiperSlide>
        <SwiperSlide><img src={design1} alt="design"/></SwiperSlide>
        <SwiperSlide><img src={design1} alt="design"/></SwiperSlide>
        <SwiperSlide><img src={design1} alt="design"/></SwiperSlide>
        <SwiperSlide><img src={design1} alt="design"/></SwiperSlide>
        <SwiperSlide><img src={design1} alt="design"/></SwiperSlide>
        <SwiperSlide><img src={design1} alt="design"/></SwiperSlide>
        <SwiperSlide><img src={design1} alt="design"/></SwiperSlide>
      </Swiper> */}


          </div>
        </div>
      </div>
      <div className="fifth-sec">
        <div className="coustom_container">
          <div className="row">
            <div className="col-lg-6">
              <div className="three-d-image">
                <img src="https://i.pinimg.com/564x/99/bf/91/99bf91a42ca1fe873dbdb2a1d29c6161.jpg" />
                <img src="https://i.pinimg.com/564x/99/bf/91/99bf91a42ca1fe873dbdb2a1d29c6161.jpg" />
                <img src="https://i.pinimg.com/564x/99/bf/91/99bf91a42ca1fe873dbdb2a1d29c6161.jpg" />
                <img src="https://i.pinimg.com/564x/99/bf/91/99bf91a42ca1fe873dbdb2a1d29c6161.jpg" />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className='design-head'>We use creativity to get clients.</h1>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Banner