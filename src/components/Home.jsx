import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ShowTable from "./ShowTable";

const Home = () => {
  const loaderData = useLoaderData();
  const [show, setshow] = useState(loaderData);
  
  return (
    <div>
      <div>
        <Link className="btn btn-secondary" to="/adduser">
          ADD User
        </Link>
      </div>
      Users : {show.length}
      <table className="border">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>@gmail</td>
          <td>Gender</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
        {show.map((ld) => (
          <ShowTable
            key={ld._id}
            data={ld}
            show={show}
            setshow={setshow}
          ></ShowTable>
        ))}
      </table>
    </div>
  );
};

export default Home;
