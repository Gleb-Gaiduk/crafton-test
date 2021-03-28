import React from 'react';
import './ProfileData.css';

const ProfileData = ({title, contentObject}) => {
    const contentRows = contentObject
        ? contentObject.map((row, index) =>
            <React.Fragment key={`${row}_${index}`}>
                <p className='ProfileData-rowData ProfileData-rowData--title'>{row.title}</p>
                <p className='ProfileData-rowData'>{row.subTitle}</p>
            </React.Fragment>
        )
        : null;

    return (
        <div className='ProfileData'>
            <h2 className='ProfileData-title'>{title}</h2>
            <div className='ProfileData-body'>
                {contentRows}
            </div>
        </div>
    );
};

export default ProfileData;