import { useState } from "react";

function Folder({ handleInsertNode = () => { }, hereDummyData }) {

    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: false
    });

    const folder = (e, isFolder) => {
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder: isFolder
        })
    }

    const AddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNode(hereDummyData.id, e.target.value, showInput.isFolder);
            setShowInput({ ...showInput, visible: false })
        }
    }

    if (hereDummyData.isFolder) {
        return (
            <>
                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "30px", backgroundColor: "aliceblue" }}>
                        <span onClick={() => setExpand(!expand)}>📁{hereDummyData.name}</span>
                    </div>
                    <div>
                        <button onClick={(e) => folder(e, true)}>+Folder</button>
                        <button onClick={(e) => folder(e, false)}>+file</button>
                    </div>
                </div>
                <div>
                    {
                        showInput.visible && <>
                            <span>{showInput.isFolder ? "📁" : "📄"}</span>
                            <input type="text"
                                autoFocus
                                onKeyDown={AddFolder}
                                onBlur={() => setShowInput({
                                    ...showInput,
                                    visible: false
                                })}
                            >
                            </input>
                        </>
                    }
                </div>
                <div style={{ paddingLeft: "20px", display: expand ? 'block' : 'none' }}>
                    {
                        hereDummyData.items.map((item) => {
                            return (
                                // <span>{item.name}</span>
                                <Folder handleInsertNode={handleInsertNode} hereDummyData={item} key={item.id} /> //real magic
                            )
                        })
                    }
                </div>
            </>
        )
    } else {
        return (
            <>
                <div>📄{hereDummyData.name}</div>
            </>
        )
    }

}
export default Folder;