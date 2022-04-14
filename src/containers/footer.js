import React from 'react';
import Footer from '../components/footer'
import Icon from '../components/icons'

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Clients</Footer.Link>
                        <Footer.Link href="#">Testimonials</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Services</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Clients</Footer.Link>
                        <Footer.Link href="#">Testimonials</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href="#">United States</Footer.Link>
                        <Footer.Link href="#">United Kingdom</Footer.Link>
                        <Footer.Link href="#">South America</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="https://www.facebook.com/542918629950886/posts/657930908449657/?d=n"><Icon className="fab fa-facebook-f"></Icon>Facebook</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-twitter"></Icon>Twitter</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-youtube"></Icon>Youtube</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}