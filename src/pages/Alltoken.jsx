import React, { useState, useEffect } from "react";
import { getTokens, deleteToken, totalToken } from "../api/token.api";
const Alltoken = ({ token, render }) => {
  const [tokens, setTokens] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadTokens();
  }, [page]);

  const loadTokens = async () => {
    const response = await getTokens(page, token);
    setTokens(response.data.tokens);
    setTotalPages(response.data.totalPages);
  };

  const pages = new Array(totalPages).fill(null).map((v, i) => i);
  console.log(pages.length - 0)
  const tokenDelete = async (id) => {
    const response = await deleteToken(id, token);
    loadTokens();
  };

  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">All Tokens {totalPages}</span>
        <p>Page of {page + 1}</p>
        {tokens && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token) => (
                <tr key={token._id}>
                  <td>{token.fullname}</td>
                  <td>{token.phone}</td>
                  <td>{token.price}</td>
                  <td>
                    <a
                      className="waves-effect waves-light btn red"
                      onClick={() => tokenDelete(token._id)}
                    >
                      <i
                        className="material-icons left"
                        style={{ margin: "0" }}
                      >
                        delete
                      </i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div>
          <ul className="pagination">
            <li className={page == 0 ? 'disabled' : 'waves-effect'}>
              <a href="#!"  onClick={() => setPage(page - 1)}>
                <i className="material-icons">chevron_left</i>
              </a>
            </li>
            {pages.map((pageIndex) => (
              <li className={pageIndex === page ? "active" : "waves-effect"}>
                <a href="#!" onClick={() => setPage(pageIndex)}>
                  {pageIndex + 1}
                </a>
              </li>
            ))}
            {page+1}
            {pages.length}
            <li className={page + 1 == pages.length ? 'disabled' : 'waves-effect'}>
              <a href="#!" onClick={() => setPage(page + 1)}>
                <i className="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  );
};

export default Alltoken;
