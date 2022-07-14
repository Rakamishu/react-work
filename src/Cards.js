import personsData from "./personsData" 
import Card from "./Card"
import ReactPaginate from 'react-paginate'
import { useState, useEffect } from "react"

personsData.sort((x, y) => x.price - y.price)

function Items({ currentItems }) {
    return (
        <>
        {currentItems &&
          currentItems.map((person) => (
            <Card
                key={person.id}
                item={person}
            />
          ))}
      </>
    )
}

function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage, setCurrentpage] = useState(0);
  
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(personsData.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(personsData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % personsData.length;
        setItemOffset(newOffset);
        let selected = event.selected;
        let offset = Math.ceil(selected * itemsPerPage);
        setCurrentpage(offset);
    };
  
    console.log(currentPage);

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="&raquo;"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="&laquo;"
                renderOnZeroPageCount={null}
                className="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                activeClassName="active"
                nextClassName="page-next"
                nextLinkClassName="page-link"
                previousLinkClassName="page-link"
                forcePage={currentPage}
            />
        </>
    );
}

function Cards() {
    return (
        <PaginatedItems itemsPerPage={1} />
    )
}

export default Cards;