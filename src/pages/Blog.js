import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <h2 className="text-center">Some Questions answer</h2>
      <h3> Differences between sql and nosql databases.</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">SQL</th>
            <th scope="col">NO SQL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Relational database management system</td>
            <td>Non-relational or distributed database system.</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Vertically Scalable</td>
            <td>Horizontally scalable</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Follows ACID property</td>
            <td>Follows CAP(consistency, availability, partition tolerance)</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>These databases have fixed or static or predefined schema</td>
            <td>They have dynamic schema</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h3>What is the purpose of jwt and how does it work?</h3>
        <p>
          JWT means JSON Web Token, which is an open standard used to share
          security information between two parties — a client and a server. Each
          JWT contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
      </div>
      <div>
        <h3>When should you use nodejs and when should you use mongodb?</h3>
        <p>
          <li>
            we use node js for creating a server-side environment. when we
            manage our data this time we use a server-side language which is
            node js
          </li>
          <li>
            we use MongoDB for database for storing data and managing our data
          </li>
        </p>
      </div>
      <div>
        <h3>Difference between javascript and nodejs?</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">javascript</th>
              <th scope="col">nodejs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                java script is a simple programming languange that run in any
                brawser javascript engine
              </td>
              <td>
                Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
                engine.
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>javascript is only be run in brawser</td>
              <td>When we go to the outside of brawser we use node js</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>it is client side language</td>
              <td>it is server side language</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blog;
