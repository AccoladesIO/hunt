import React from 'react'

const Loader = () => {
    return (
 <div className="w-full p-4 m-10 mx-auto shadow max-h-lg">
    <div className="flex space-x-4 animate-pulse">
        <div className="flex-1 py-1 space-y-4">
            <div className="h-4 bg-gray-500 rounded"></div>
            <div className="w-5/6 h-4 bg-gray-500 rounded"></div>
            <div className="w-full h-80 bg-gray-500 rounded"></div>
            <div className="space-y-2">
                <div className="w-5/6 h-4 bg-gray-500 rounded"></div>
                <div className="h-4 bg-gray-500 rounded"></div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Loader