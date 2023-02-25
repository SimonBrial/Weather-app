import React from 'react'

const Today = () => {

    const date = new Date().toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"});

    return (
        <>
            {date}
        </>
    )
}

export { Today }