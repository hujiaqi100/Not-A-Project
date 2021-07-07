import * as React from 'react';
import { useState, useEffect } from 'react';
import './home.less'
import Header from './Header/index'
import Content from './Content/content'
import ContentMore from '../owns/content.jsx'
import { connect } from 'react-redux'
import reg from '../registrer.js'
const Home = (props) => {
    const [titleList, setTitleList] = useState(props.titleList || [])
    useEffect(() => {
        const getInfo = (res) => {
            if (res.data.treeNode) {
                let x = reg.find(d => d.treeNode === res.data.treeNode.treeNodeInfo)
                let data = {
                    name: res.data.treeNode.name,
                    component: x.component
                }
                if (titleList.find(d => d.name === res.data.treeNode.name)
                ) {
                    return;
                } else {
                    props.handleUpdate()
                    titleList.push(data)
                    setTitleList([...titleList])
                }
            }
        }
        window.addEventListener('message', getInfo)
        return () => {
            window.removeEventListener('message', getInfo)
        }
    }, [titleList])
    return (
        <div className='home'>
            <div className='home-header'>
                <Header titleList={titleList} />
            </div>
            {
                !props.children && <Content />
            }
            <div className='home-content'>
                <div className='home-left'>
                    {props.children}
                </div>
                <div className='home-right'>
                    <ContentMore titleList={titleList} />
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        list: state.list,
        isEmpty: state.isEmpty,
        current: state.current
    }
}
// store.dispatch ,props
const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeList(res) {
            const action = {
                type: 'SELECT_LIST',
                value: res
            }
            return dispatch(action)
        },
        handleChange(res) {
            const action = {
                type: 'SELECT_CURRENT',
                value: res
            }
            dispatch(action)
        },
        handleUpdate() {
            const action = {
                type: 'UPDATE_LIST'
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);