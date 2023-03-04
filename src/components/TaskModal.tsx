import Image from 'next/image'

import CloseIcon from '../icons/close.svg'

interface TaskModalProps {
    handleCloseModal: () => void
}

export default function TaskModal(props: TaskModalProps) {
    return (
        <div className="
            fixed
            h-screen w-screen bg-gray-900/75
            flex items-center justify-center">
            <div className="
                relative
                bg-gray-200 p-10 w-11/12 md:w-2/3 lg:w-1/3 
                flex flex-col gap-6 
                rounded-md">
                <button 
                onClick={props.handleCloseModal}
                className="
                    absolute top-4 right-4 p-1
                    rounded-md
                    transition-colors
                    hover:bg-gray-50">
                    <Image src={CloseIcon} alt="Close Icon" width={30} />
                </button>

                <h2 className="text-stone-800 text-3xl font-bold">
                    Cadastrar uma <span className="text-sky-500">Task</span>
                </h2>

                <input 
                type="text"
                placeholder="Digite sua tarefa aqui.."
                className="
                    bg-gray-50 p-4
                    text-stone-700 text-xl font-medium
                    border-2 border-gray-50
                    rounded-md
                    focus:outline-none
                    focus:bg-gray-100
                    focus:border-sky-500" />
                
                <button className="
                    bg-sky-500 p-4
                    text-stone-50 text-lg font-medium
                    border-2 border-sky-500
                    rounded-md
                    transition-all
                    hover:bg-sky-500/75
                    hover:scale-x-95
                    focus:outline-none
                    focus:scale-x-95
                    focus:bg-sky-500/75
                    focus:border-gray-700">
                    Cadastrar
                </button>
            </div>
        </div>
    )
}