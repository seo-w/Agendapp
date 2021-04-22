import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkTo } from "../../components/LinkTo";
import { LinkWrapper } from "../../components/LinkTo/styles";
import { LogoWrapper, PageWrapper, TopLink } from "../../globalStyles";


export const Signup = () =>(
    <PageWrapper>
        
        <TopLink>
            <LinkWrapper>
                <LinkTo text="Signin" url="/signin"/>
            </LinkWrapper>
        </TopLink>
        
        <LogoWrapper>
            <img src="./assets/logo.png" alt="logo" />
        </LogoWrapper>
        
        <Input type="text" placeholder="Enter your Name" label="Full Name"/>
        <Input type="email" placeholder="Enter your Email" label="Email Address"/>
        <Input type="password" placeholder="Enter your password" label="Password" />
        <Input type="password" placeholder="Confirm your password" label="Confirm Password" />
        <Button text="Sign in"/>
    </PageWrapper>

)