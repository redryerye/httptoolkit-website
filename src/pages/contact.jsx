import React from 'react';

import { styled, media } from '../styles';

import { Layout } from '../components/layout';
import { TextInput, TextArea, SubmitInput } from '../components/form';

import { FullWidthSection }from '../components/full-width-section';

const SplashContainer = styled(FullWidthSection)`
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: ${p => p.theme.mainColor};
    background-color: ${p => p.theme.mainBackground};
`;

const SplashHeader = styled.h1`
    ${p => p.theme.fontSizeUltraHeading};
    font-weight: bolder;

    margin-bottom: 60px;

    ${media.mobileOrTablet`
        margin-top: 60px;
    `}
`;

const ContactForm = styled(({ id, ...props }) =>
    <form action={`https://formspree.io/f/${ id }`} method="POST" {...props}>
        <TextInput required type="text" name="name" placeholder="Your name" />
        <TextInput required type="email" name="_replyto" placeholder="your@email.com" />
        <TextArea required name="message" placeholder="Your message..." />
        <input type="text" name="_gotcha" style={{display: "none"}} />
        <SubmitInput value="Send" />
    </form>
)`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 10px;

    input, textarea {
        margin: 10px 0;
    }
`;

export default (props) => (<Layout location={props.location}>
    <SplashContainer>
        <SplashHeader>
            Get in touch
        </SplashHeader>
        <ContactForm id="xvoyrlba" />
    </SplashContainer>
</Layout>);