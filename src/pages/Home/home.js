import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NavbarHome from '../../components/navbar'
import Footer from '../../components/footer'
import Button from 'react-bootstrap/Button';
import './home.css';

// Define LogoSlider component outside of HomePage
const LogoSlider = () => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  });
  const logos = [
    'CASE-Logo-1.png',
    'Frame-12293.png',
    'nicat-logo-final.png',
  ];

  return (
    <div>
      <h2 className="carousellogo">Proudly Supported by</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="container">
            <img src={logo} alt="logo" className="max-h-67 max-w-224"
            style={{ height: "67px", width: "224px" }}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Define HomePage component
const HomePage = () => {
  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
      .from('#title-1', {
        opacity: 0,
        y: '+=30',
        duration: 0.5,
      })
      .from('#title-2', {
        opacity: 0,
        y: '+=30',
        duration: 0.5,
      })
      .from('#title-3', {
        opacity: 0,
        y: '+=30',
        duration: 0.5,
      }).to(["title-1","title-2","title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      }).to("#intro-slider",{
        xPercent: "-100",
        duration: 1.3,
      }).from("#Welcome", {
        opacity: 0,
        duration: 0.5,
      }).from("#Intro", {
        opacity: 0,
        duration: 0.5,
      }).from("#introimg", {
        opacity: 0,
        duration: 0.5,
      }).from("#button", {
        opacity: 0,
        duration: 0.5,
      })
    }, comp)

    return () => ctx.revert()
  }, [])
  
  return (
    <div>
      <NavbarHome/>
      <div className="relative" ref={comp}>
        <div id="intro-slider" className="h-screen2 tracking-tight w-full flex flex-col gap-10 z-10">
          <h1 className="textintro" id="title-1">Welcome to DocGuardian!</h1>
          <h1 className="textintro" id="title-2">Document Verification System</h1>
          <h1 className="textintro" id="title-3">Revolutionizing Degree Verification with Blockchain</h1>
        </div>
        <div className="h-screen">
          <CardGroup>
            <Card className="mainintro1 border-0">
              <Card.Body>
                <Card.Title id="Welcome" className="text">Document Verification System</Card.Title>
                <Card.Text id="Intro" className="description">
                  DocGuardian stands at the forefront of innovation, positioned to transform the landscape of degree verification. Leveraging the power of blockchain technology, DocGuardian offers a seamless solution for verifying university degrees, particularly those issued by Higher Education Commissions (HEC).
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button id="button" className="main" variant="dark" size="lg">Get Started!</Button>
                </div>
              </Card.Body>
            </Card>
            <Card id="introimg" className="mainintro2 border-0">
              <Card.Img variant="top" src="shutterstock_1785042593-removebg-preview.png" />
            </Card>
          </CardGroup>
        </div>
      </div>
      <LogoSlider />
      <div id="about" className="aboutus">
      <h2 className="why">Why DocGuardian?</h2>
        <CardGroup>
          <Card id="introimg" className="mainintro2 border-0">
            <Card.Img variant="top" src="pngtree-fast-service-icon-business-concept-png-image_5429528.png" />
          </Card>
          <Card className="mainintro1 border-0">
            <Card.Body>
              <Card.Title id="Welcome" className="textaboutus1">Fast</Card.Title>
              <Card.Text id="Intro" className="description">
              With DocGuardian, document verification happens in a blink, thanks to the inherent efficiency of blockchain. By harnessing the decentralized power of blockchain networks, DocGuardian accelerates the verification process to unprecedented speeds, setting a new standard for efficiency in the industry.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="mainintro1 border-0">
            <Card.Body>
              <Card.Title id="Welcome" className="textaboutus2">Secure</Card.Title>
              <Card.Text id="Intro" className="description">
              With DocGuardian, trust is not just a word – it's a guarantee. Our blockchain-based verification system ensures tamper-proof records, making it virtually impossible for unauthorized parties to alter or manipulate the information. Every verification is authenticated through consensus algorithms, providing an immutable and transparent record of each document's validity.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="introimg" className="mainintro2 border-0">
            <Card.Img variant="top" src="secure-document-storage-lightblue-removebg-preview.png" />
          </Card>
        </CardGroup>
      </div>
      <div className="endcard">
        <Card>
          <Card.Body>
            <Card.Title style={{ justifyContent:"center", alignItems:"center", textAlign:"center", paddingTop:"50px", fontWeight:"bolder", fontSize:"21px"}}>Get a chance to be verified from the most epic platform. Get Verified Now!</Card.Title>
            <div className="d-flex justify-content-center">
              <Button id="button" className="main" variant="dark" size="lg">Get Started!</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
