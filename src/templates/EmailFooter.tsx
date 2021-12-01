import React from "react";
// @ts-ignore
import { Item, Span } from "react-html-email";
import { EmailLink } from "./EmailLink";

const TextDivider = () => <>&nbsp;·&nbsp;</>;

const EmailFooter = () => {
    return (
        <>
            <Item style={{ height: 20 }} />
            <Item align="center">
                <Span
                    color="rgb(117, 128, 140)"
                    fontSize={14}
                    style={{ lineHeight: 1.4}}
                >
                    145 Talmadge Rd, Edison, NJ 08817, United States
                </Span>
            </Item>
            <Item >
                  <Span
                    color="rgb(117, 128, 140)"
                    fontSize={14}
                    style={{ lineHeight: 1.4}}
                >
                  © OneShip, 2021  
                </Span>
            </Item>
            <Item align="center">
                <Span
                    color="rgb(117, 128, 140)"
                    fontSize={14}
                    style={{ lineHeight: 1.4}}
                >
                    <EmailLink href="">
                        Unsubscribe
                    </EmailLink>
                </Span>
            </Item>
            <Item style={{ height: 45 }} />
        </>
    );
};

export { EmailFooter };
