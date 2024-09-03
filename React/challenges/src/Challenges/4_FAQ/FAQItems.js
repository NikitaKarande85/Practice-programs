import { useState } from "react";

function FAQItems({ faq, index }) {

    const [expand, setExpand] = useState(false);

    return (
        <>
            {
                <>
                    <div style={{ backgroundColor: "gray", margin: "10px", width: "400px" }}>
                        <span style={{ height: "20px", width: "20px" }} onClick={() => setExpand(!expand)}>{expand ? "🔻" : "▶"}</span><span>{faq.question}</span>
                        {
                            expand && <div style={{ marginLeft: "20px" }}>{"->"}{faq.answer}.</div>
                        }

                    </div>
                </>
            }
        </>
    )
}
export default FAQItems;