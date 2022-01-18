import React from 'react'
import SideBar from '../SideBar/SideBar'

export default function DashBoard(id :any) {
    return (
        <div className='d-flex' style={{height : '100vh'}}>
            <SideBar id={id.id}/>
        </div>
    )
}
