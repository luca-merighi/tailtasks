export default class Task {
    #id: string
    #text: string

    constructor(id: string, text: string) {
        this.#id = id
        this.#text = text
    }

    static emptyTask() {
        return new Task(null, '')
    }

    get id() {
        return this.#id
    }

    get text() {
        return this.#text
    }
}