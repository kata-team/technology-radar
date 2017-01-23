export default class Item {
    constructor({ name = '', description = '', status = '', tags = [] }) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.tags = tags;
    }
}
