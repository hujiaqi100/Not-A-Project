import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight, dark, cb } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './codeca.less';
const CodeCa = (props) => {
    return (
        <SyntaxHighlighter
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
            {props.children}
        </SyntaxHighlighter>
    )
}
export default CodeCa;