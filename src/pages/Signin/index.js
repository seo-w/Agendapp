import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkTo } from "../../components/LinkTo";
import { LinkWrapper } from "../../components/LinkTo/styles";
import { LogoWrapper, PageWrapper, TopLink } from "../../globalStyles";


export const Signin = () =>(
    <PageWrapper>
        
        <TopLink>
            <LinkWrapper>
                <LinkTo text="Signin up" url="/signup"/>
            </LinkWrapper>
        </TopLink>
                
        <LogoWrapper>
            <img src="./assets/logo.png" alt="logo" />
        </LogoWrapper>
        
        <Input type="email" placeholder="Enter your Email" label="Email Address"/>
        <Input type="password" placeholder="Enter your password" label="Password" />
        <Button text="Sign in"/>
    </PageWrapper>

)