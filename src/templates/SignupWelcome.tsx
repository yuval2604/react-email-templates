import React from "react";
import ReactEmail, { A, Box, Email, Item, Image, Span } from "react-html-email";
import { EmailFooter } from "./EmailFooter";
import {ReactComponent as Logo} from '../../src/assets/svg/logo.svg';
 import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

ReactEmail.configStyleValidator({
    platforms: [
        'gmail',
        'gmail-android',
        'apple-mail',
        'apple-ios',
        'yahoo-mail',
        'outlook',
        'outlook-legacy',
        'outlook-web',
    ],
});

type Props = {
    subject: string;
    confirmationUrl: string;
    userName: string;
};

const emailHeadCSS = `
  body {
    background-color: #F5F8FA;
  }
`.trim();

const backgroundStyle = {
    WebkitBoxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
    backgroundColor: "#FFF",
    borderRadius: 7,
    boxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
    margin: "0 auto",
    width: "100%",
    padding: "0 32px",
};

const containerStyle = {
    backgroundColor: "#F5F8FA",
    width: "100%",
};

const linkStyle = {
    color: "white",
    display: "block",
    paddingBottom: "13px",
    paddingTop: "13px",
    textDecoration: "none",
    width: "100%",
};

const fluidItemStyle = {
    backgroundColor: "rgb(0, 96, 255)",
    borderRadius: 4,
    cursor: "pointer",
    height: 48,
    textAlign: "center",
    textDecoration: "none",
};

const SignupWelcome = ({
    userName,
    subject,
    confirmationUrl,
}: Props) => (
    <Box align="center" style={containerStyle}>
        <Email align="center" headCSS={emailHeadCSS} title={subject}>
            <Item style={{ height: 45 }} />
            <Item align="center" >
                
                 <Logo/>
              
            </Item>
            <Item style={{ height: 30 }} />
            <Item align="center">
                <Box style={backgroundStyle}>
                    <Item style={{ height: 40 }} />
                    <Item align="center">
                        <Span fontSize={22} fontWeight="bold">Welcome to ONESHIP&nbsp;</Span>
                    </Item>
                    <Item style={{ height: 25 }} />
                    <Item align="center">
                        A user account has been created for you at OneShip.
                    </Item>
                    <Item style={{ height: 25 }} />
                    <Item align="center">
                        Login <Span  fontWeight="bold">Username@domain.com&nbsp;</Span>
                       
                    </Item>
                    <Item style={{ height: 20 }} />
                    <Item align="center">
                        <Button variant="contained" startIcon={<AccountCircleIcon />}>
  Sign In
</Button>
                    </Item>
                    <Item style={{ height: 35 }} />
                </Box>
                <EmailFooter />
            </Item>
        </Email>
    </Box>
);

export { SignupWelcome };
