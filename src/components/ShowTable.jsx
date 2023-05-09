/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// eslint-disable-next-line no-unused-vars
const ShowTable = ({data,show,setshow}) => {

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = show.filter(cof => cof._id !== _id);
                           setshow(remaining);
                        }
                    })

            }
        })

    }
    return (
        <div>
           <tr>
            <td>01</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.gender}</td>
            <td>{data.Status}</td>
            <td onClick={()=> handleDelete (data._id)} className='btn btn-warning'>X</td>
            <td className='btn btn-info'>  <Link to={`/edit/${data._id}`}>Edit</Link> </td>
           </tr>
        </div>
    );
};

export default ShowTable;