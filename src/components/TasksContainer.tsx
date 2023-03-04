import TaskCard from './TaskCard'

export default function TasksContainer() {

    const tasks = [
        {id: 1, taskText: 'Banho Frio antes de dormir'},
        {id: 2, taskText: 'Retirar o lixo após a janta'},
        {id: 3, taskText: 'Arrumar o quarto'},
        {id: 4, taskText: 'Levar o cachorrinho para passear'},
    ]

    return (
        <div className="
            h-full w-full
            bg-gray-50 px-6 py-10
            flex flex-col gap-6
            lg:grid lg:grid-cols-2 lg:auto-rows-min">
            {tasks.map(task => {
                return (
                    <TaskCard
                        key={task.id}
                        taskText={task.taskText} />      
                )
            })}
        </div>
    )
}