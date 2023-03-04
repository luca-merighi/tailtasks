import { useState } from 'react'
import Image from 'next/image'

import TrashIcon from '../icons/trash.svg'
import EditIcon from '../icons/edit.svg'

interface TaskCardProps {
    taskText: string,
}

export default function TaskCard(props: TaskCardProps) {
    const [checkbox, setCheckbox] = useState<'done' | 'notDone'>('notDone')

    function handleCheckbox() {
        checkbox === 'done' ? setCheckbox('notDone') : setCheckbox('done')
    }

    return (
        <div className="
            p-4 w-full h-fit
            flex gap-2 items-center
            rounded-md
            shadow-task">
            <input type="checkbox"
            className="h-4 w-4 cursor-pointer"
            onClick={handleCheckbox} />

            <p className={`
            flex-grow
            text-stone-700 text-lg font-medium truncate 
            ${checkbox === 'done'
            ? 'line-through text-stone-700/50' : ''}`}>
                {props.taskText}
            </p>

            <div className="
                flex flex-row items-center">
                <button className="
                    hover:bg-gray-200 p-2 
                    rounded-md">
                    <Image src={EditIcon} alt="Edit Icon" width={18} />
                </button>
                <button className="
                    hover:bg-gray-200 p-2 
                    rounded-md">
                    <Image src={TrashIcon} alt="Trash Icon" width={18} />
                </button>
            </div>
        </div>
    )
}