import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight, dark, cb } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import './inputca.less'
const InputStyled = styled.input.attrs()
    `
border-radius : 3px;
border : 5px solid pink;
color : ${props => props.c};
background : ${props => props.bkg};
height : ${props => props.h + 'px'};
width : ${props => props.w + 'px'} ;
`
const InputCa = (props) => {
    return (
        <InputStyled
            w={props.w}
            h={props.h}
            c={props.c}
            bkg={props.bkg}
            onChange={props.onChange}
            value={props.value}
        />
    )
}
class Code extends React.Component {
    render() {
        return <SyntaxHighlighter
            language="javascript"
            showLineNumbers={true}
            startingLineNumber={0}
            // language={this.props.lang}
            // className={'11'}
            style={cb}
            lineNumberStyle={{ color: '#ddd' }}
            wrapLines={true}
        // lineProps={(num) => { console.log(num) }}
        >
            {
                `
import styled from 'styled-components';
const InputStyled = styled.input.attrs()
border-radius : 3px;
border : 5px solid pink;
color : ${props => props.c};
background : ${props => props.bkg};
height : ${props => props.h + 'px'};
width : ${props => props.w + 'px'} ;
    const InputCa = (props) => {
        return (
            <InputStyled
            w={props.w}
            h={props.h}
            c={props.c}
            bkg={props.bkg}
            onChange={props.onChange}
            value={props.value}
        />
    )
}
`}
        </SyntaxHighlighter>
    }
}

const Input = () => {
    return (
        <div className='input_ca'>
            <div className='component_ca'>
                <InputCa />
            </div>
            <div className='code_ca'>
                <Code />
            </div>
        </div>
    )
}
export default Input