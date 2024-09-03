import { useEffect, useState } from 'react';
import "./Pagination.css";
function PaginationFrotendHandled() {

    const [product, setProduct] = useState([]);
    const [page,setPage]=useState(1);

        async function FetchDataAPI() {
            const response = await fetch(`https://dummyjson.com/products?limit=100`)
            const data = await response.json();

            if (data && data.products) {
                setProduct(data.products)
            }
        }

    console.log("product", product);

    useEffect(() => {
        FetchDataAPI()
    }, [])

    const handleSelectedPageData=(pagenumber)=>{
        setPage(pagenumber)
    }

    const onPageHandler=(pagenum)=>{
        setPage(pagenum)
    }
    return (
        <>
            {product.length > 0 && (
                <div className="product-container">
                    {product.slice(page * 10 -10, page*10).map((item) => {
                        return (
                            <div className="product-item" key={item.title}>
                                <img
                                    src={item.images}
                                    className="product-image"
                                    alt={item.title}
                                />
                                <span className="product-title">{item.title}</span>
                            </div>
                        );
                    })}
                </div>
            )}

            {
                product.length>0 && <div className='pagination'>
                    <span onClick={()=>onPageHandler(page-1)} className={page>1?'':'buttonDisplay'}>◀</span>
                    {
                        [...Array(product.length/10)].map((_,i)=>{
                            return(
                                <span className={page===i+1?"selectedPage":""} onClick={()=>handleSelectedPageData(i+1)} key={i}>{i+1}</span>
                            )
                        })
                    }
                    <span onClick={()=>onPageHandler(page+1)} className={page < product.length / 10 ? "" : "buttonDisplay"}>▶</span>
                </div>
            }
        </>
    );

}
export default PaginationFrotendHandled;