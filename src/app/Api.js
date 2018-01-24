import _ from 'lodash';
import ItemsLoader from './class/ItemsLoader';
import SearchActions from './actions/SearchActions';

import Item from './class/Item';
import Category from './class/Category';

class Api {
    constructor() {
        this.spreadsheetId = '112MlfyXSlIQ8nae85Te_xWDBP136GRaYeHlDdKgYyPo';
        this.urls = {
            // items: 'mock/items.json',
            // categories: 'mock/categories.json',
            items: `https://spreadsheets.google.com/feeds/list/${this.spreadsheetId}/1/public/values?alt=json-in-script&callback={1}`,
            categories: `https://spreadsheets.google.com/feeds/list/${this.spreadsheetId}/2/public/values?alt=json-in-script&callback={1}`,
        };
    }

    load() {
        (new ItemsLoader()).load(this.urls.categories, Category, (categories) => {
            const getCategoryByName = (name) => {
                return _.find(categories, (o) => { return o.name === name });
            };

            (new ItemsLoader()).load(this.urls.items, Item, (items) => {
                SearchActions.changeItems(items);
            }, (item) => {
                const result = item;
                // decorator
                result.category = getCategoryByName(item.category);
                return result;
            });
        });
    }
}

export default new Api();
