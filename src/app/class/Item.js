export default class Item {
    constructor({ name = '', description = '', category = '', status = '', url = '', tags = '' }) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.status = status;
        this.tags = tags.split(',');
        this.url = url;
    }
}
