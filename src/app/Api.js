import _ from 'lodash';

import ItemsLoader from './class/ItemsLoader';
import SearchActions from './actions/SearchActions';
import AppActions from './actions/AppActions';

import Item from './class/Item';
import Category from './class/Category';
import Comment from './class/Comment';
import Settings from './class/Settings';

class Api {
    setup(spreadsheetId) {
        this.spreadsheetId = spreadsheetId || process.env.REACT_APP_SPREADSHEET_ID;
        this.urls = {
            // items: 'mock/items.json',
            // categories: 'mock/categories.json',
            // comments: 'mock/comments.json',
            // settings: 'mock/settings.json',
            items: `https://docs.google.com/spreadsheets/d/${this.spreadsheetId}/gviz/tq?tqx=out:json&tq&gid=35309925`,
            categories: `https://docs.google.com/spreadsheets/d/${this.spreadsheetId}/gviz/tq?tqx=out:json&tq&gid=894256758`,
            comments: `https://docs.google.com/spreadsheets/d/${this.spreadsheetId}/gviz/tq?tqx=out:json&tq&gid=1315180169`,
            settings: `https://docs.google.com/spreadsheets/d/${this.spreadsheetId}/gviz/tq?tqx=out:json&tq&gid=434185216`,
        };
    }

    load(spreadsheetId) {
        this.setup(spreadsheetId);

        SearchActions.startSearching();

        if (this.spreadsheetId === undefined) {
            SearchActions.changeItems([]);
            return;
        }

        Promise.all([
            ItemsLoader.load(this.urls.categories, Category),
            ItemsLoader.load(this.urls.comments, Comment),
            ItemsLoader.load(this.urls.settings, Settings),
        ]).then(([categories, comments, settings]) => {
            console.log(categories)
            console.log(comments)
            console.log(settings)
            AppActions.updateSettings(settings[0]);

            const filterByName = (list, name) => {
                return _.filter(list, (o) => { return o.name === name });
            };

            ItemsLoader.load(this.urls.items, Item, (item) => {
                const result = item;

                // decorator

                result.category = filterByName(categories, item.category)[0] || {
                    name: 'uncategorized', color: '#e0e0e0'
                };

                result.comments = filterByName(comments, item.name).sort(function compare(a, b) {
                    return (new Date(b.date)) - (new Date(a.date)); // most recent on top
                });

                return result;
            }).then((items) => {
                SearchActions.changeItems(items);
                window.items = items;
            }).catch(() => {
                SearchActions.changeItems([]);
            });
        }).catch(() => {
            SearchActions.changeItems([]);
        });
    }
}

export default new Api();
