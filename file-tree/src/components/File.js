import React from 'react'

const File = ({ name }) => {
    const fileExt = name.split('.')[1];
    const fileIcons = {
        mp4: 'headphones',
        jpeg: 'file image',
        png: 'file image outline'
    }
    return (
        <div>
            <i className={`${fileIcons[fileExt]} icon`}></i>
            {name}
        </div>
    )
}

export default File
