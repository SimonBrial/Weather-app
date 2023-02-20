import React from 'react'

const Today = () => {

    const date = new Date();
    const now = date.toDateString();

    return (
        <p className='flex justify-center text-ColorInfoFonts'>{now}</p>
    )
}

export { Today }