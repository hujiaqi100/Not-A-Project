import InputCa from './fontcontent/components/inputCa.jsx'
import SelectCa from './fontcontent/components/selectCa.jsx'
import Koa from './backcontent/components/koa.jsx'
import Lunbo from './fontcontent/canvas/lunboCa.jsx'
import UseReducer from './fontcontent/useMeasure/usereducer.jsx'
import TableCa from './fontcontent/components/tableCa.jsx'
import React from 'react'
export default [
    {
        treeNode: 'inputca',
        component: <InputCa />
    },
    {
        treeNode: 'selectca',
        component: <SelectCa />
    },
    {
        treeNode: 'koaca',
        component: <Koa />
    },
    {
        treeNode: 'lunbo',
        component: <Lunbo />
    },
    {
        treeNode: 'usereducer',
        component: <UseReducer />
    },
    {
        treeNode: 'tableca',
        component: <TableCa />
    }
]