import React from 'react';
import renderer from 'react-test-renderer';

import ItemComponent from '../../components/ItemComponent';
import Item from '../../class/Item';

test('ItemComponent', () => {
    const component = renderer.create(
        <ItemComponent item={new Item({
            "name":"React.js",
            "description":"React (sometimes styled React.js or ReactJS) is an open-source JavaScript library for building user interfaces.\nIt is maintained by Facebook, Instagram and a community of individual developers and corporations. According to JavaScript analytics service Libscore, React is currently being used on the websites of Netflix, Imgur, Bleacher Report, Feedly, Airbnb, SeatGeek, HelloSign, Walmart, and others.",
            "category":"language & framework",
            "status":"assess",
            "tags":"",
            "url":"https://facebook.github.io/react/"
        })} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
