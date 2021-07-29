import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './lunbo.less'
import Codeca from '../../codeca.jsx'
let width = 300;
let height = 300;
const Lunbo = () => {
    const ref = useRef()
    useEffect(() => {
        const canvas = ReactDOM.findDOMNode(ref.current)
        let x = -300;
        let y = 50;
        // const canvas = document.getElementById('canvas');
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext('2d');
        ww(context, x, y)
    }, [])
    const render = (context, x, y) => {
        context.clearRect(0, 0, width, height)
        context.beginPath();
        context.moveTo(x, y)
        context.lineTo(x + 100, y + 100)
        context.lineTo(x, y + 200)
        context.lineWidth = 20
        context.strokeStyle = '#00cc99'
        context.stroke()
        context.beginPath();
        context.moveTo(x + 100, y)
        context.lineTo(x + 200, y + 100)
        context.lineTo(x + 100, y + 200)
        context.lineWidth = 20
        context.strokeStyle = 'yellow'
        context.stroke()
        context.beginPath();
        context.moveTo(x + 200, y)
        context.lineTo(x + 300, y + 100)
        context.lineTo(x + 200, y + 200)
        context.lineWidth = 20
        context.strokeStyle = 'pink'
        context.stroke()
        context.beginPath();
        context.moveTo(x + 300, y)
        context.lineTo(x + 400, y + 100)
        context.lineTo(x + 300, y + 200)
        context.lineWidth = 20
        context.strokeStyle = '#00cc99'
        context.stroke()
        context.beginPath();
        context.moveTo(x + 400, y)
        context.lineTo(x + 500, y + 100)
        context.lineTo(x + 400, y + 200)
        context.lineWidth = 20
        context.strokeStyle = 'yellow'
        context.stroke()
        context.beginPath();
        context.moveTo(x + 500, y)
        context.lineTo(x + 600, y + 100)
        context.lineTo(x + 500, y + 200)
        context.lineWidth = 20
        context.strokeStyle = 'pink'
        context.stroke()
    }
    const ww = (context, x, y) => {
        setInterval(() => {
            if (x > 0) {
                x = -300
            }
            x = x + 2
            render(context, x, y)
        }, 50)
    }

    return (
        <div className='lunbo'>
            <div className='can'>
                <canvas id="canvas" ref={ref} style={{ border: ' 5px solid rgb(178, 111, 229)', display: 'block' }}></canvas>
            </div>
            <div className='code_ca'>
                <Codeca>
                    {
                        `
const ref = useRef()
useEffect(() => {
    const canvas = ReactDOM.findDOMNode(ref.current)
    let x = -300;
    let y = 50;
    // const canvas = document.getElementById('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    ww(context, x, y)
}, [])
const render = (context, x, y) => {
    context.clearRect(0, 0, width, height)
    context.beginPath();
    context.moveTo(x, y)
    context.lineTo(x + 100, y + 100)
    context.lineTo(x, y + 200)
    context.lineWidth = 20
    context.strokeStyle = '#00cc99'
    context.stroke()
    context.beginPath();
    context.moveTo(x + 100, y)
    context.lineTo(x + 200, y + 100)
    context.lineTo(x + 100, y + 200)
    context.lineWidth = 20
    context.strokeStyle = 'yellow'
    context.stroke()
    context.beginPath();
    context.moveTo(x + 200, y)
    context.lineTo(x + 300, y + 100)
    context.lineTo(x + 200, y + 200)
    context.lineWidth = 20
    context.strokeStyle = 'pink'
    context.stroke()
    context.beginPath();
    context.moveTo(x + 300, y)
    context.lineTo(x + 400, y + 100)
    context.lineTo(x + 300, y + 200)
    context.lineWidth = 20
    context.strokeStyle = '#00cc99'
    context.stroke()
    context.beginPath();
    context.moveTo(x + 400, y)
    context.lineTo(x + 500, y + 100)
    context.lineTo(x + 400, y + 200)
    context.lineWidth = 20
    context.strokeStyle = 'yellow'
    context.stroke()
    context.beginPath();
    context.moveTo(x + 500, y)
    context.lineTo(x + 600, y + 100)
    context.lineTo(x + 500, y + 200)
    context.lineWidth = 20
    context.strokeStyle = 'pink'
    context.stroke()
}
const ww = (context, x, y) => {
    setInterval(() => {
        if (x > 0) {
            x = -300
        }
        x = x + 2
        render(context, x, y)
    }, 50)
}
`
                    }

                </Codeca>
            </div>
        </div>

    )
}
export default Lunbo;