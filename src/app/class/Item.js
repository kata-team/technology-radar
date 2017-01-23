export default class Item {
    constructor({ name = '', description = '', status = '', url = '', tags = [] }) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.tags = tags;
        this.url = url;
    }
}
