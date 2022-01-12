import React from 'react'
import { ActiveFields } from './ActiveFields'
import { ListFields } from './ListFields'

export const CustomForm = () => {
    return (
        <div className='row'>
            <div className='col-6 p-5'>
                <ListFields/>
            </div>
            <div className='col-6 p-5'>
                <ActiveFields/>
            </div>
        </div>
    )
}
