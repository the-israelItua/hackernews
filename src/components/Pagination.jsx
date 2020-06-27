import React from "react";

const Pagination = ({ totalPosts, paging }) => {
  const pageNums = [];
  for (let i = 1; i < Math.ceil(totalPosts / 10); i++) {
    pageNums.push(i);
  }

  const pg = pageNums.map((num) => (
    <li className="page-item" key={num}>
      <a href="!#" className="page-link" onClick = {paging(num)}>
        {num}
      </a>
    </li>
  ));
  return <ul className="pagination">{pg}</ul>;
};

export default Pagination;
