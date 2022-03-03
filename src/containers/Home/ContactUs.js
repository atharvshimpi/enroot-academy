import React from "react";

import { HomeContainer, HomeHeading, HomeContent, Row, LinksWrapper, Links, Form, FormHeading, Input, Textarea, Button } from "./Elements";
import "./style.css";

/**
* @author
* @function ContactUs
**/

const ContactUs = ({ id, BgColor, headingColor, minHeight90vh }) => {
    return(
        <HomeContainer BgColor={BgColor} id={id}>
            <HomeHeading minHeight90vh={minHeight90vh} headingColor={headingColor}>Contact Us</HomeHeading>
            <HomeContent>
                <LinksWrapper>
                    <i className="fa fa-envelope icon" aria-hidden="true"></i>
                    <Links href="mailto:reenashimpi@gmail.com" class="mail_link"> reenashimpi@gmail.com</Links>
                    <br /><br />
                    <i className="fa fa-map-marker icon" aria-hidden="true"></i>
                    <span><Links href="https://goo.gl/maps/XNSqWmvazsCAbjqbA" target="_blank"> Aundh, Pune</Links></span>
                    <br /><br />
                    <i className="fa fa-phone icon" aria-hidden="true"></i>
                    <span><Links href="tel:+91-8788906663" > +91-8788906663</Links></span>
                </LinksWrapper>
                <br />
                <Form action="https://formspree.io/f/mrgowojv" method="POST">
                    <FormHeading>Post Your Query Here :- </FormHeading>
                    <Row>
                        <Input 
                            required
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                        />
                        <Input 
                            required
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                        />
                    </Row>
                    <Row>
                        <Input 
                            required
                            type="email"
                            name="email"
                            placeholder="E-Mail"
                        />
                        <Input 
                            required
                            type="number"
                            name="mobile"
                            placeholder="Mobile Number"
                        />
                    </Row>
                    <Row>
                        <Textarea 
                            required
                            placeholder="Please Write Your Query Here"
                        >
                        </Textarea>
                    </Row>
                    <Row>
                        <Button type="submit" >Submit</Button>
                        <Button type="reset" >Clear</Button>
                    </Row>
                </Form>
            </HomeContent>
        </HomeContainer>
    );
}

export default ContactUs;