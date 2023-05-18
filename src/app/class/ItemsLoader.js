import _ from 'lodash';
import rest from 'rest';
import mime from 'rest/interceptor/mime';

const client = rest.wrap(mime);

export default {
    load: (url, Obj, decorator) => {
        switch (true) {
            case (url.indexOf('https://docs.google.com/spreadsheets/') === 0):
                return googleSpreadsheets(url, Obj, decorator);
            default:
                return json(url, Obj, decorator);
        }
    }
}


function json(url, Obj, decorator) {
    return new Promise((resolve, reject) => {
        let items = [];
        const decorate = decorator || ((item) => { return item });
        client(url).then((response) => {
            _.map(response.entity, (elm) => {
                const item = decorate(elm);
                items.push(new Obj(item));
            });
            resolve(items);
        }).catch(e => reject(e));
    });
}

function googleSpreadsheets(url, Obj, decorator) {
    return new Promise((resolve, reject) => {
        let items = [];
        const decorate = decorator || ((item) => { return item });
        client(url).then((response) => {

            const entityExtracted = response.entity.substring(47).slice(0, -2);
            const jsonData = JSON.parse(entityExtracted);

            const convertEntryToItem = (entry, columnsKeys) => {
                let item = {};

                console.log(entry)

                _.map(entry.c, (value, key) => {
                    item[columnsKeys[key]['v']] = value != null ? value['v'] : null;
                });

                item = decorate(item);
                return new Obj(item);
            };

            _.map(jsonData.table.rows.slice(1), (entry) => {
                const columnsKeys = jsonData.table.rows[0].c
                const item = convertEntryToItem(entry, columnsKeys);
                items.push(item)
            });
            resolve(items);
        });

    });
}
