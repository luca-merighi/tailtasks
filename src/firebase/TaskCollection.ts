import firebase from './config'
import firestore, { doc, getFirestore, DocumentReference } from 'firebase/firestore'
import TasksRepo from '@/model/TasksRepo'
import Task from '@/model/Task'

export default class TaskCollection implements TasksRepo {
    #conversor = {
        toFirestore(task: Task) {
            return {
                text: task.text
            }
        },
        fromFirestore(
            snapshot: firestore.QueryDocumentSnapshot,
            options: firestore.SnapshotOptions
        ): Task {
            const data = snapshot.data(options)
            return new Task(data.text, snapshot.id)
        }
    }

    async save(task: Task): Promise<Task> {
        if(task?.id) {
            await this.#collection().get
            return task
        } else {
            

        }
    }

    async delete(task: Task): Promise<void> {

    }

    async getAllTasks(): Promise<Task[]> {

    }

    #collection() {
        const path = getFirestore()
        return firestore.collection(path, 'tasks').withConverter(this.#conversor)
    }
}