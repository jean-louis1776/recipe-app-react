import React from "react"
import styled from "styled-components"

const Footer = (props) => {
    return (
        <FooterDiv>
            <h4>
                Copyright &copy; 2022 —{" "}
                <a
                    href="https://github.com/jean-louis1776"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    by Ilya Aleksin
                </a>
                . All Right Reserved
            </h4>
        </FooterDiv>
    )
}

const FooterDiv = styled.div`
    margin: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    h4 {
        background: linear-gradient(to right, #f27121, #e94057);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

export default Footer
