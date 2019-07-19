import React from 'react';
import { Item } from 'semantic-ui-react'
const Content = (props) => {
    const { Content, Name, HomeWorld } = props;
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