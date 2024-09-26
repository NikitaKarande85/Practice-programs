import { useState } from "react"
import "./Undoable_Counter.css"
function Undoable_Counter() {

    const [value, setValue] = useState(0);
    const [history, setHistory] = useState([]);
    const [redoList, setRedoList] = useState([]);
    const [undoCount, setUndoCount] = useState(0);

    console.log(history)

    const maintainHistoryFunction = (key, prev, curr) => {
        const obj = {
            action: key,
            prev,
            curr
        }
        const copyFirstReacord = [...history];
        copyFirstReacord.unshift(obj); //first position disaply
        setHistory(copyFirstReacord)
    }

    const handleButton = (key) => {

        const val = parseInt(key);
        maintainHistoryFunction(key, value, val + value)
        setValue((preValue) => preValue + key);
    }

    const handleUndo = () => {
        if (history.length) {
            if (undoCount + 1 > 5) {
                alert('You cant undo beyond limit=5');
                return;
            }
            const copyfirstRecord = [...history];
            const firstItem = copyfirstRecord.shift();
            setHistory(copyfirstRecord)


            const copyRedoList = [...redoList]
            copyRedoList.push(firstItem);
            setRedoList(copyRedoList);
        }
    }

    const handleRedo = () => {
        if (redoList.length) {
            const copyRedoList = [...redoList]
            const lastItem = copyRedoList.pop();
            setRedoList(copyRedoList);

            const { action, prev, curr } = lastItem;
            setValue(curr);
            maintainHistoryFunction(action, prev, curr);
        }
    }
    return (
        <>
            <h1 className="Buttons-Undo-Redo">Undoable Counter</h1>

            <div className="main-container">
                <div className="Buttons-Undo-Redo">
                    <button className="AllButtonsCss" onClick={handleUndo}>Undo</button>
                    <button className="AllButtonsCss" onClick={handleRedo}>Redo</button>
                </div>
                <div className="all-buttons">
                    {
                        [-100, -10, -1].map((btn) => {
                            return (
                                <button className="AllButtonsCss" onClick={() => handleButton(btn)}>{btn}</button>
                            )
                        })
                    }
                    <span className="count">{value}</span>
                    {
                        [100, 10, 1].map((btn) => {
                            return (
                                <button className="AllButtonsCss" onClick={() => handleButton(btn)}>{btn}</button>
                            )
                        })
                    }
                </div>
                <div className="main-history">
                    <div className="history">
                        <span style={{ color: "red" }}>Your History -</span>
                        {
                            history.map((item) => {
                                return (
                                    <><div>
                                        {`[ ${item.prev} + ${item.action} = ${item.curr}]`}
                                    </div></>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Undoable_Counter;