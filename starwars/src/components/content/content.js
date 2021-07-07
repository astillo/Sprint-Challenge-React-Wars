import React, { useState } from 'react';
import { Item } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const Content = (props) => {
    const { Content, Name, HomeWorld } = props
    return (
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header>
                        {Name}
                    </Item.Header>
                    <Item.Meta>
                        {HomeWorld}
                    </Item.Meta>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}
export default Content