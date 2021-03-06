import React from "react";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";

const Table = ({ state }) => {
   return (
      <>
         {state.length
            ?
            <table className="table table-striped">
               <TableHeader state={state} />
               <TableBody state={state} />
            </table>
            :
            <p className="no-found-text">
               Ничего не найдено
            </p>
         }
      </>
   )
};

export default Table;