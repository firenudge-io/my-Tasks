import { TaskItems } from "../components/TaskItems"


export const Home = () => {
    return (
        <div className="flex flex-col mx-auto w-4/5 lg:w-2/5">
            <div className="container">

                <TaskItems />

            </div>
        </div>
    )
}