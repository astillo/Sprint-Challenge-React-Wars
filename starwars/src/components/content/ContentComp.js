import React, { useState } from 'react';
import Content from './content'

const ContentComp = (props) => {
    const { Result } = props;
    return (
        <div>
            <Content Name={Result} />
            {/* <Content Name={Result.name} HomeWorld={Result.homeWorld} /> */}
        </div>

    )
}

export default ContentComp;
