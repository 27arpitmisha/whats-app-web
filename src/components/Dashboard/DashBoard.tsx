import React from 'react'
import SideBar from '../SideBar/SideBar'

export default function DashBoard(id :any) {
    return (
        <div>
            <SideBar id={id.id}/>
        </div>
    )
}
