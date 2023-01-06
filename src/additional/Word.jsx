import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

export default function WordsAnimation(params) {
    const wordArray = params.words_str.split(" ")
    const words = wordArray.map((item, index) => (
        item.split("").map((item2, index2) => (item2))
    ));

    // const animation = keyframes`
    //     0% { transform: rotateX(-90deg); opacity: 1; }
    //     2% { transform: rotateX(0deg); opacity: 1; }
    //     18% { transform: rotateX(0deg); opacity: 1; }
    //     20% { transform: rotateX(90deg); opacity: 1; }
    //     20.00001% { opacity: 0; }
    //     100% { transform: rotateX(-90deg); opacity: 0; }
    // `

    const animation = keyframes`
    4% { transform: rotateX(-90deg); opacity: 1; }
    6% { transform: rotateX(0deg); opacity: 1; }
    22% { transform: rotateX(0deg); opacity: 1; }
    24% { transform: rotateX(90deg); opacity: 1; }
    24.00001% { opacity: 0; }
    100% { transform: rotateX(-90deg); opacity: 0; }
    `

    // const animation = keyframes`
    //     0% { transform: rotateX(-90deg); opacity: 0; }
    //     17.9999% { transform: rotateX(-90deg); opacity: 1; }
    //     18% { transform: rotateX(-90deg); opacity: 1; }
    //     20% { transform: rotateX(0deg); opacity: 1; }
    //     37% { transform: rotateX(0deg); opacity: 1; }
    //     39% { transform: rotateX(90deg); opacity: 1; }
    //     39.0001% { opacity: 0 }
    //     100% { transform: rotateX(-90deg); opacity: 0; }
    // `

    const spans = words.map((word, index) => (
    word.map((item, index2) => (
        `.wrapper${index} span:nth-child(${index2 + 1}) {
            animation-delay: ${index*4 + index2/10}s;
        }
        `
    ))
    ))

    const Wrapper = styled.span`
    -ms-user-select: none; 
    -moz-user-select: none; 
    -webkit-user-select: none; 
    user-select: none; 

    position: absolute;
    margin-top: 75px;
    margin-bottom: 75px;
    display: flex;
    align-items: center;
    position: absolute;
    width: min(100%, 1232px);
    justify-content: center;
    gap: 0px;

    span {
        display: inline-block;
        animation-name: ${animation};
        animation-duration: 20s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(.53,1.61,0,.98);
        // animation-timing-function: cubic-bezier(.11,1.34,0,1.05);

        font-size: 64px;
        font-family: 'Druk', sans-serif;
        color: #ffffff;
        text-decoration: none;
        font-weight: 800;
        position: relative;
        float: left;
        transform: translateZ(45px)rotateX(-90deg);
        transform-origin: 50% 50% 25px;
    }
    `

    const WrapperOut = styled.div`
    height: 200px;
    ${spans}
    `

    return (
        <WrapperOut>
            {words.map((word, index) => (
                <Wrapper className={"wrapper" + index}>
                    {word.map((item, index2) => (
                        <span className={index2} key={index2}>{item}</span>
                    ))}
                </Wrapper>
            ))}
        </WrapperOut>
    )

    // "INVEST SWAP STAKE CLAIM CHILL"
}

