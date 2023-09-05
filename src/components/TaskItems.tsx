import { useState } from "react";
import { ReadURL } from "../constants/URLS";
import { CheckBox } from "../hooks/Checkbox";

export function TaskItems() {
    // SHEET
    const [task, setTask] = useState([])
    const [loading, setLoading] = useState(true)


    // SHEET FUNCTIONS
    const url = ReadURL;
    const fetchData = async () => {
        const response = await fetch(url);
        const values = await response.json();

        const taskalues = values.Tasks.name;
        // split val  by ,
        const yVal = taskalues.map((item: any) => {
            return {
                item: item.split(',')
            }
        })
        // return item vise allotment
        const yVAL = yVal.map((item: any) => {
            return {
                name: item.item[0],
                val: item.item[1]
            }
        })
        // dont return empty values
        const finalyVal = yVAL.filter((item: any) => {
            return item.val !== ''
        })
        setTask(finalyVal)

        setLoading(false)
    }
    fetchData();


    return (
        <div className="mb-10">
            {
                loading ?
                    <></>
                    :
                    <div className="flex flex-wrap flex-row mx-auto justify-center items-center">
                        {task.map((item) => (
                            item.name.split(' ')[0] === 'sep' ?
                                <a
                                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white m-3 uppercase"
                                    href={"#" + item.name.split(' ')[1]}
                                >
                                    <b>{item.name.split(' ')[1]}</b>
                                </a>
                                :
                                null
                        ))}
                    </div>
            }
            {
                loading ?
                    <h4 className="flex flex-row justify-center mt-4 mb-5">Loading...</h4>
                    :
                    task.map((item) => (
                        item.name.split(' ')[0] === 'sep' ?
                            <>
                                <div className="mb-20" id={item.name.split(' ')[1]}></div>
                                <h1 className="text-3xl my-3">{item.name.split(' ')[1]}</h1>
                            </>
                            :
                            <CheckBox id={item.name} key={item.name} />
                    ))

            }
        </div>
    )
}