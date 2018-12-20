export default class Comment {
    constructor({ date = '', name = '', author = '', message = '', prevstatus = '', nextstatus = '' }) {
        this.date = date;
        this.name = name;
        this.author = author;
        this.message = message;
        this.prevstatus = prevstatus;
        this.nextstatus = nextstatus;
    }
}
