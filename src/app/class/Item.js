import _ from 'lodash';

export default class Item {
    constructor({ name = '', description = '', category = '', status = '', url = '', tags = '', comments = '' }) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.status = status;
        this.tags = tags.trim() !== '' ? _.map(tags.split(','), (tag) => {
            return tag.trim();
        }) : [];
        this.url = url;
        this.comments = comments || [];
    }
}
