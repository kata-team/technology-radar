import _ from 'underscore';

export default class Item {
    constructor({ name = '', description = '', category = '', status = '', url = '', tags = '' }) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.status = status;
        this.tags = tags.trim() !== '' ? _.map(tags.split(','), (tag) => {
            return tag.trim();
        }) : [];
        this.url = url;
    }
}
