import React from 'react'

const Layout = (props) => {
    return (
        <div
            id={ props.id ? props.id : null}
            className=" w-full xl:px-32 md:px-20 px-4 py-16 grid md:grid-cols-3 grid-cols-1 gap-4" style={{ backgroundColor: props.color }}>
            {props.children}
        </div>
    )
}

export default Layout
