import React from 'react'

const BtnUnid = () => {
    return (
        <div>
            <>
                <button className={
                    (celcius)
                        ? colorState.tempAvailable
                        : colorState.tempHidden
                }
                    onClick={
                        handleTemp
                    }>℃</button>
            </>
            <>
                <button className={
                    (farenheit)
                        ? colorState.tempAvailable
                        : colorState.tempHidden
                }
                    onClick={handleTemp}>°F</button>
            </>
        </div>
    )
}

export { BtnUnid }