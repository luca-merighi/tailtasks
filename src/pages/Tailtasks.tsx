import { useState } from 'react'

import Header from '@/components/Header'
import TasksContainer from '@/components/TasksContainer'
import TaskModal from '@/components/TaskModal'

export default function Tailtasks() {
    const [modal, setModal] = useState<'hidden' | 'show'>('hidden')

    return (
        <main className="bg-gray-100 flex h-screen">
            <section className="
                flex flex-col w-full lap:w-2/3 xl:w-3/5 h-full">
                <Header 
                    handleOpenModal={() => setModal('show')}/>

                <TasksContainer />
            </section>

            <figure className="
                hidden
                lap:block lap:bg-gray-300 lap:w-1/3 xl:w-2/5 h-full fixed top-0 right-0">
                <img 
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80" 
                alt="Calendar with Tasks" 
                className="h-full w-full object-cover" />
            </figure>

            {modal === 'show' ? (
                <TaskModal handleCloseModal={() => setModal('hidden')} />
            ) : false}
        </main>
    )
}