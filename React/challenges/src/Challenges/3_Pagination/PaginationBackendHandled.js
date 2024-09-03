import { useEffect, useState } from 'react';
import "./Pagination.css";
function PaginationFrotendHandled() {

    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);
    //new
    const [totalPages, setTotalPages] = useState(0)

    async function FetchDataAPI() {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`)
        const data = await response.json();


        if (data && data.products) {
            setProduct(data.products)
            //new
            console.log("dataaaaaaaa", data)
            setTotalPages(Math.floor(data.total / 10));
        }
    }

    console.log("product", product);

    //page
    useEffect(() => {
        FetchDataAPI()
    }, [page])

    const handleSelectedPageData = (pagenumber) => {
        setPage(pagenumber)
    }

    const onPageHandler = (pagenum) => {
        // added totalPages
        if (page >= 1 && page <= totalPages && page !== page) {
            setPage(pagenum)
        }
    }

    return (
        <>
            {product.length > 0 && (
                <div className="product-container">
                    {/* removed slice */}
                    {product.map((item) => {
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
                product.length > 0 && <div className='pagination'>
                    <span onClick={() => onPageHandler(page - 1)} className={page > 1 ? '' : 'buttonDisplay'}>◀</span>
                    {
                        // added totalPages
                        [...Array(totalPages)].map((_, i) => {
                            return (
                                <span className={page === i + 1 ? "selectedPage" : ""} onClick={() => handleSelectedPageData(i + 1)} key={i}>{i + 1}</span>
                            )
                        })
                    }
                    {/* added totalPages */}
                    <span onClick={() => onPageHandler(page + 1)} className={page < totalPages ? "" : "buttonDisplay"}>▶</span>
                </div>
            }
        </>
    );

}
export default PaginationFrotendHandled;