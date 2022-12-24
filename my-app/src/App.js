import React, { useState } from 'react';
import { Navbar, Button, Link } from "@nextui-org/react";
import { Layout } from "./Navbar/Layout.js";
import { AcmeLogo } from "./Navbar/AcmeLogo.js";
import { useTheme, Text } from '@nextui-org/react';
import { Card, Grid, Row } from "@nextui-org/react";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { Modal, Input, Checkbox} from "@nextui-org/react";
import { Radio } from "@nextui-org/react";
import axios from 'axios';
//import paypal requirements for checkout
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js";

  export default function App() {

  const [variant] = React.useState("sticky");

  const [visible, setVisible] = React.useState(false);
  const handler = () => {
    setVisible(true);
    console.log("opened");
  };
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  var globalval = 60;
  const setValue = (value) => {
    globalval = Number(value);
    console.log(globalval);
  };

  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Layout>
      <Navbar variant={variant} style = {{fontFamily: "Inter"}}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs" style={{userSelect: 'none'}}>
            osiris
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link isActive href="#" style={{userSelect: 'none'}}>Home</Navbar.Link>
          <Navbar.Link href="#" onClick={handler} style={{userSelect: 'none'}}>Purchase</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <a href ="https://discord.gg/osiriscc">
            <svg width="34" height="18" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#ffffff"/>
              </g>
              <defs>
              <clipPath id="clip0">
                <rect width="71" height="55" fill="white"/>
              </clipPath>
            </defs>
            </svg>
          </a>
        </Navbar.Content>
      </Navbar>
    <div style = {{marginLeft: "13vw"}}>
    <>
      <div style = {{userSelect: 'none', marginTop: "20vh", fontFamily: "Inter", fontWeight: "bold", fontSize: "56px"}}>Greatest Streamable</div>
      <div className="wrapperz">
       <div className="wordsz">
           <span className = "a" style = {{userSelect: 'none', backgroundImage: "linear-gradient(180deg, #b04c6a 25%, #911328 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Exclusive features</span>
           <span className = "a" style = {{userSelect: 'none', backgroundImage: "linear-gradient(180deg, #f36534 25%, #F69F27 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Bypassed every Anti-Cheat</span>
           <span className = "a" style = {{userSelect: 'none', backgroundImage: "linear-gradient(180deg, #491fd1 25%, #9c1794 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Auto-Resolver</span>
           <span className = "a" style = {{userSelect: 'none', backgroundImage: "linear-gradient(180deg, #5EA2EF 25%, #0072F5 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>External Client</span>
           <span className = "a" style = {{userSelect: 'none', backgroundImage: "linear-gradient(180deg, #b04c6a 25%, #911328 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Exclusive features</span>
       </div>
      </div>
      <Text size="20px" color="#AAAAAA" style = {{userSelect: 'none', fontFamily: "Inter", fontWeight: "semibold"}} >Prioritizing your security and legitness, we're indisputably the greatest streamable.</Text>
    </>
    </div>
    
    <div>
      <Button shadow color="gradient" onClick={handler} style = {{userSelect: 'none', marginLeft: "13vw ", marginTop: "8px", fontFamily: "Inter"}}>Purchase</Button>
      <Modal animated closeButton blur aria-labelledby="modal-title" open={visible} width="450px" onClose={closeHandler} >
        <Modal.Header>
          <Text id="modal-title" color="secondary" labelColor="secondary" size={24} style = {{fontFamily: "Inter", fontWeight: "bold", backgroundImage: "linear-gradient(180deg, #5EA2EF 25%, #0072F5 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Purchase&nbsp;</Text>
          <Text b size={24} style = {{userSelect: 'none', fontFamily: "Inter", fontWeight: "bold", backgroundImage: "linear-gradient(180deg, #5EA2EF 25%, #0072F5 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Osiris</Text>
        </Modal.Header> 
        <Modal.Body>
          <Radio.Group orientation="horizontal" onChange = {setValue} style={{display: "flex", justifyContent: "center"}} defaultValue="1">
            <Radio value="25" style = {{userSelect: 'none', fontFamily: "Inter",}} isSquared>2 Month Key ($25)</Radio>
            <Radio value="60" style = {{userSelect: 'none', fontFamily: "Inter",}} isSquared>Lifetime Key ($60)</Radio>
          </Radio.Group>
          <PayPalScriptProvider options={{"client-id": "ASh8OdSQN5M087rMpYEUcwUpn31ifBCwaUz-i8s4OGniDNjPweCNIFRgBaaLpXI0xvyPS1cyw4CmwYRH", components: "buttons", currency: "USD"}} style = {{opacity: 0}}>
          <div style={{backgroundColor:"white", padding:"5px", borderRadius:"5px"}}>
            <PayPalButtons createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: globalval
                  }
                }]
              });
            }} style = {{color: "blue"}} onApprove={(data, actions) => {
              return actions.order.capture().then(function(details) {
                alert('Transaction completed, open a ticket on discord');
              });
            }} />
            </div>
          </PayPalScriptProvider>
          </Modal.Body>
        <Modal.Footer>
          <text color="#2B2D2F" style = {{userSelect: 'none', fontFamily: "Inter", opacity: "0.5"}}>*the external client is only available for lifetime keys</text>
        </Modal.Footer>
      </Modal>
    </div>

    <div style = {{marginTop: "25vh", fontFamily: "Inter"}}>
      <Grid.Container gap={2} justify="center">
        <Grid sm={12} md={2}>
          <Card isHoverable variant="flat" css={{ mw: "330px", background: "rgba(0, 0, 0, 0.28)", backdropFilter: "blur(6.9px)", borderRadius: "16px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"}}>
            <Card.Header>
            <svg className="w-6 h-6" height="24px" width="24px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <Text b style={{userSelect: 'none'}}>&nbsp;&nbsp;200+ Buyers</Text>
            </Card.Header>
           <Card.Body css={{ py: "$10" }}>
              <Text style = {{userSelect: 'none', fontFamily: "Inter"}}>We are a global community, welcoming people of all backgrounds.</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid sm={12} md={2}>
          <Card isHoverable variant="flat" css={{ mw: "330px", background: "rgba(0, 0, 0, 0.28)", backdropFilter: "blur(6.9px)", borderRadius: "16px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"}}>
            <Card.Header>
            <svg className="w-6 h-6" height="24px" width="24px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <Text b style={{userSelect: 'none'}}>&nbsp;&nbsp;Safe</Text>
            </Card.Header>
            <Card.Body css={{ py: "$10" }}>
              <Text style = {{userSelect: 'none', fontFamily: "Inter"}}>We've bypassed every Anti-Cheat we've encountered and will continue doing so.</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid sm={12} md={2}>
          <Card isHoverable variant="flat" css={{ mw: "330px", background: "rgba(0, 0, 0, 0.28)", backdropFilter: "blur(6.9px)", borderRadius: "16px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"}}>
            <Card.Header>
            <svg className="w-6 h-6" height="24px" width="24px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <Text b style={{userSelect: 'none'}}>&nbsp;&nbsp;Longevity</Text>
            </Card.Header>
            <Card.Body css={{ py: "$10" }}>
              <Text style = {{userSelect: 'none', fontFamily: "Inter"}}>Our services have been up for 3 months, always with daily updates and 24/7 support. </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
    </Layout>
  );
}