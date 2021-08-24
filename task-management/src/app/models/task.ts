export class Task {
    constructor(
        public taskId: number,
        public taskName: string,
        public taskDescription: string,
        public taskAuthor: string,
        public taskStatus: string
    ){}
}