import { CheckBox } from "../hooks/Checkbox"
import { w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11 } from "../data/Data"


export const Home = () => {
    return (
        <div className="flex flex-col mx-auto w-4/5">

            <div className="container">

                <h1 className="text-3xl my-3">Week 1</h1>
                {w1.map((item) => (
                    <CheckBox id={item} key={item} />
                ))}

                <h1 className="text-3xl my-3">Week 2</h1>
                {w2.map((item) => (
                    <CheckBox id={item} key={item} />
                ))}

                <h1 className="text-3xl my-3">Week 3</h1>
                {w3.map((item) => (
                    <CheckBox id={item} key={item} />
                ))}

                <h1 className="text-3xl my-3">Week 4</h1>
                {w4.map((item) => (
                    <CheckBox id={item} key={item} />
                ))}

                <h1 className="text-3xl my-3">Week 5</h1>
                {w5.map((item) => (
                    <CheckBox id={item} key={item} />
                ))}

                <h1 className="text-3xl my-3">Week 6</h1>
                {w6.map((item) => (
                    <CheckBox id={item} key={item} />
                ))}

                <h1 className="text-3xl my-3">Week 7</h1>
                {w7.map((item) => (
                    <CheckBox id={item} key={item} />
                ))}

                <h1 className="text-3xl my-3">Week 8</h1>
                {w8.map((item) => (
                    <CheckBox id={item} key={item} />
                ))}

                <h1 className="text-3xl my-3">Week 9</h1>
                {w9.map((item) => (
                    <CheckBox id={item} key={item} />
                ))}

                <h1 className="text-3xl my-3">Week 10</h1>
                {w10.map((item) => (
                    <CheckBox id={item} key={item} />
                ))}

                <h1 className="text-3xl my-3">Week 11</h1>
                {w11.map((item) => (
                    <CheckBox id={item} key={item} />
                ))}


            </div>
        </div>
    )
}