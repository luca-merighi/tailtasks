import Image from 'next/image'

import CheckIcon from '../icons/check-square.svg'

interface HeaderProps {
    handleOpenModal: () => void
}

export default function Header(props: HeaderProps) {
    return (
        <header className="
            bg-gray-200 p-6
            flex gap-2 items-center justify-center">
            <nav className="flex flex-grow justify-center">
                <Image src={CheckIcon} alt="Checkbox Icon" width={40} />
                <h1 className="text-sky-500 text-4xl text-center font-bold">
                    Tail<span className="text-stone-700">tasks</span>
                </h1>
            </nav>
            <button 
                onClick={props.handleOpenModal}
                className="
                hidden md:block
                bg-sky-500 py-2 px-4
                text-stone-50 text-lg font-medium
                shadow-button
                rounded-md
                hover:bg-sky-500/75">
                Create Task
            </button>
        </header>
    )
}