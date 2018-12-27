export default class Comment {
    constructor({ date = '', name = '', author = '', message = '', status = '' }) {
        this.date = date;
        this.name = name;
        this.author = author;
        this.message = message;
        this.status = status;
    }
}
