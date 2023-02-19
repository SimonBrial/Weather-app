import React from 'react'

const Details = () => {
    return (
        <div className='h-2/6 mx-3 flex flex-col justify-center items-center'>
            <h1 className='text-Temperature text-center text-4xl mt-'>Shower</h1>
            <div className='justify-between py-3'>
                <p className='flex justify-center text-ColorInfoFonts'>Today - Fri, 5 Jun</p>
                <div className='flex flex-row justify-center items-center mt-5 py-px text-ColorInfoFonts'>
                    <span className="material-symbols-outlined mr-1">location_on</span>
                    <p className='text-lg text-ColorInfoFonts'>Helsinki</p>
                </div>
            </div>
        </div>
    )
};

export { Details }