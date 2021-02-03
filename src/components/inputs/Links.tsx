import React from "react";
import styled from "styled-components";

interface CustomLinkProps {
  bg?: string;
  color?: string;
  size?: string;
  children: any;
  goto?: string | null | undefined;
  border?: boolean;
  disable?: boolean;
  func?: any;
}
const Link = (props: CustomLinkProps) => {
  let { bg, color, size, goto, children, border, disable, func } = props;
  return (
    <Link.Wrapper
      onClick={func ? () => func() : () => {}}
      href={goto ? goto : undefined}
      bg={bg}
      color={color}
      size={size}
      border={border}
      disable={disable}
    >
      {children}
    </Link.Wrapper>
  );
};

Link.Wrapper = styled.a<CustomLinkProps>`
  background: #ffffff;
  background: ${(props) => props.bg && props.bg};
  ${(props) => props.border && "border: 1px solid  #ffffff;"}
  box-sizing: border-box;
  border-radius: 40px;
  padding: ${(props) => (props.size === "sm" ? "10px 25px;" : "18px 40px;")}
  font-size: 15px;
  font-family: Axiforma;
  font-style: normal;
  cursor: pointer;
  font-weight: 500;
  color: #000000;
  color: ${(props) => props.color && props.color};
  ${(props) =>
    props.disable &&
    `
  display: inline-block;  
  pointer-events: none;
  text-decoration: none;`};
  margin-right: 15px;
  
  margin-top: 10px;
  margin-bottom: 10px;
  :hover {
    opcaciy: 0.8;
    text-decoration: none;
    color: #000000;
  color: ${(props) => props.color && props.color};
  
  }
  @media (max-width: 420px) {
    font-size: 10px;
    padding: ${(props) => (props.size === "sm" ? "5px 14px;" : "11px 25px;")}
  }
`;

export default Link;
