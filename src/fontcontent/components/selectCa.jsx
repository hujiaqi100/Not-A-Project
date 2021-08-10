// import React, { useState, useEffect, useRef } from 'react';
// import ReactDOM from 'react-dom';
// import { Timeline } from 'antd'
// import '../../../node_modules/antd/dist/antd.css'
// import G6 from '@antv/g6'
// import './selectca.less'
// const data = {
//     nodes: [
//         {
//             id: "node1",
//             type: 'rect',
//             name: 'rect-shape'
//         },
//         {
//             id: "node2",
//             // label: "Circle2",
//             component: <div style={{ width: '100px', height: '100px', background: 'red', }}>bb</div>
//         }
//     ],
//     edges: [
//         {
//             source: "node1",
//             target: "node2"
//         }
//     ]
// };
// const SelectCa = () => {
//     const ref = React.useRef(null);
//     let graph = null;
//     useEffect(() => {

//         const minimap = new G6.Minimap({
//             size: [150, 100],
//         });
//         const width = ReactDOM.findDOMNode(ref.current).scrollWidth;
//         const height = (ReactDOM.findDOMNode(ref.current).scrollHeight || 500) - 110;
//         if (!graph) {
//             graph = new G6.Graph({
//                 container: ReactDOM.findDOMNode(ref.current),
//                 width: width,
//                 height: height,
//                 modes: {
//                     default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
//                 },
//                 defaultEdge: {
//                     style: {
//                         stroke: '#b5b5b5',
//                         lineAppendWidth: 3,
//                     },
//                 },
//                 plugins: [minimap],
//             });
//         }
//         graph.on('node:click', (e) => {
//             const { item } = e
//             const group = item.getContainer();
//             console.log(group);
//             group.addShape('rect', {
//                 attrs: {
//                     fill: 'red',
//                     shadowOffsetX: 10,
//                     shadowOffsetY: 10,
//                     shadowColor: 'blue',
//                     shadowBlur: 10,
//                     opacity: 0.8,
//                 },
//                 // must be assigned in G6 3.3 and later versions. it can be any value you want
//                 name: 'rect-shape',
//             });
//         })
//         // group.addShape('rect', {
//         //     attrs: {
//         //         x: 150,
//         //         y: 150,
//         //         width: 150,
//         //         height: 150,
//         //         stroke: 'black',
//         //         radius: [2, 4],
//         //     },
//         //     // must be assigned in G6 3.3 and later versions. it can be any value you want
//         //     name: 'rect-shape',
//         // });
//         graph.data(data);
//         graph.render();
//     }, []);

//     return <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
//         <div style={{
//             width: '800px', height: '500px'
//         }} ref={ref} >
//         </div >
//     </div>

// }
// export default SelectCa;

const Select = () => {
    const [showContent, setShowContent] = useState(false)
    useEffect(() => {
        document.addEventListener('click', () => {
            setShowContent(false)
        }, true)
    }, [])
    console.log(showContent);
    return (
        <div style={{ width: '200px' }}>
            <div className='blank'>
                <div className='content'>
                </div>
                <div onClick={() => {
                    setShowContent(true)
                }} className='arrow'>
                    {'>'}
                </div>
            </div>
            {
                showContent && <div className='xx'>

                </div>
            }
        </div>
    )
}
import React, { useState, useEffect } from 'react';
require('./selectca.less')
const SelectCa = () => {
    return (
        <div className='select-ca'>
            {/* <div className='com'>
                <Select />
            </div>
            <div className='code'>

            </div> */}
            a
        </div>
    )
}
export default SelectCa;