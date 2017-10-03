import _ from 'lodash';
import rest from 'rest';
import mime from 'rest/interceptor/mime';

const client = rest.wrap(mime);

export default class ItemsLoader {

    constructor() {
        this.items = [];
    }

    load(endpoint, Obj, callback, decorator) {
        if (_.isEmpty(this.items)) {
            switch (endpoint.type) {
            case 'SPREADSHEETS':
                this.googleSpreadsheets(endpoint.url, Obj, callback, decorator);
                break;
            case 'JSON':
                this.json(endpoint.url, Obj, callback, decorator);
                break;
            default:
                break;
            }
        } else {
            callback(this.items);
        }
    }

    json(url, Obj, callback, decorator) {
        const decorate = decorator || ((item) => { return item });
        client(url).then((response) => {
            _.map(response.entity, (elm) => {
                const item = decorate(elm);
                this.items.push(new Obj(item));
            });
            callback(this.items);
        });
    }

    googleSpreadsheets(url, Obj, callback, decorator) {
        const decorate = decorator || ((item) => { return item });
        const random = () => {
            return Math.round(Math.random() * 100);
        };
        const script = document.createElement('script');
        script.id = `spreadsheets_${random()}_${random()}_${random()}`;
        script.src = url.replace('{1}', script.id);

        if (document.getElementById(script.id) === null) {
            window[script.id] = ((jsonData) => {
                delete window[script.id];

                const convertEntryToItem = (entry) => {
                    let item = {};
                    const rx = /^gsx\$(.*)$/;
                    _.map(entry, (value, key) => {
                        if (rx.test(key)) {
                            item[rx.exec(key)[1]] = value.$t;
                        }
                    });

                    item = decorate(item);

                    return new Obj(item);
                };

                _.map(jsonData.feed.entry, (entry) => {
                    const item = convertEntryToItem(entry);
                    this.items.push(item);
                });

                callback(this.items);
            });

            document.head.appendChild(script);
        }
    }
}
