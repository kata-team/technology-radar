import _ from 'lodash';
import rest from 'rest';
import mime from 'rest/interceptor/mime';

const client = rest.wrap(mime);

export default {
    load: (url, Obj, decorator) => {
        switch (true) {
            case (url.indexOf('https://spreadsheets.google.com/feeds/list/') === 0):
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
        const random = () => {
            return Math.round(Math.random() * 100);
        };
        const script = document.createElement('script');
        script.id = `spreadsheets_${random()}_${random()}_${random()}`;
        script.src = url.replace('{1}', script.id);
        script.onerror = e => reject(e);

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
                    items.push(item);
                });

                resolve(items);
            });

            document.head.appendChild(script);
        }
    });
}
