import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditPage = () => {
  const paremData = useLoaderData();
  const {_id} = paremData
  const editDataForm = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const Status = form.Status.value;
    const newUser = {
      name,
      email,
      gender,
      Status,
    };
    console.log(newUser);
    fetch(`http://localhost:3000/users/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

  }
  return (
    <div>
      <div>
        <Link className="btn btn-primary" to="/">
          Back Home
        </Link>
      </div>
     <h1 className="text-center text-9xl my-8">Edit page</h1>
     {_id}
      <form
        onSubmit={editDataForm}
        className="grid h-full card bg-base-300 rounded-box place-items-center"
      >
        <div className="form-control w-full max-w-xs text-center">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={paremData.name}
            placeholder="Type name"
            className="input input-bordered input-error w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs text-center">
          <label className="label">
            <span className="label-text">What is your Email?</span>
          </label>
          <input
            type="text"
            name="email"
            defaultValue={paremData.email}
            placeholder="Type email"
            className="input input-bordered input-error w-full max-w-xs"
          />
        </div>
        <div>
          <b>Gender : </b>
          <input
            type="radio"
            name="gender"
            className="radio radio-accent mx-2 my-3"
            value="male"
          />
          Male
          <input
            type="radio"
            name="gender"
            className="radio radio-accent my-3"
            value="female"
          />
          female
        </div>
        <br />
        <br />
        <div>
          <b>Status: </b>
          <input
            type="radio"
            name="Status"
            className="radio radio-accent mx-2 my-3"
            value="Active"
          />{" "}
          Active
          <input
            type="radio"
            name="Status"
            className="radio radio-accent my-3"
            value="Inactive"
          />{" "}
          Inactive
        </div>
        <br />
        <br />
        <input className="btn btn-outline" type="submit" value="Edit Now" />
      </form>
    </div>
  );
};

export default EditPage;
