import React, { useState, useEffect } from "react";
import { getTokens, deleteToken } from "../api/token.api";
const Alltoken = ({ token, render }) => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    loadTokens();
  }, [render]);

  const loadTokens = async () => {
    const response = await getTokens(token);
    setTokens(response.data);
  };

  const tokenDelete = async (id) => {
    const response = await deleteToken(id, token);
    loadTokens();
  };

  return (
    <div class="card">
      <div class="card-content">
        <span class="card-title">All Tokens</span>
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
                <tr>
                  <td>{token.fullname}</td>
                  <td>{token.phone}</td>
                  <td>{token.price}</td>
                  <td>
                    <a
                      class="waves-effect waves-light btn red"
                      onClick={() => tokenDelete(token._id)}
                    >
                      <i class="material-icons left" style={{ margin: "0" }}>
                        delete
                      </i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  );
};

export default Alltoken;