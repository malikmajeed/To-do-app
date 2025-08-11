// import { set } from "mongoose";
import { useState , useEffect} from "react";
import axios from "axios";


const GetTodosCard = ({todos}) => {
   return(
        <div>
            <div className="todo-table">
                <table>
                    {/* table haed */}
                <thead>
                    <tr>
                    <th>Sr. #</th>
                    <th>Tasks</th>
                    <th>Description</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                {/* table body */}
                <tbody>
                    {todos.map((item, index)=>(

                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>Actions</td>
                    </tr>

                    )

                    )}

                </tbody>

                


                </table>

            </div>
        </div>
    );




}




export default GetTodosCard;
