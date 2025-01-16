import { FC } from "react";
import { DataRoom } from "../interfaces/IDataRoom";

type ComponentProps = {
   tableData: DataRoom[]
}

export const DataTable: FC<ComponentProps> = ({tableData}) => {
   return (
      <div>
         <table className='table table-hover table-dark'>
            <thead>
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Room Type</th>
                  <th scope="col">Accommodation</th>
               </tr>
            </thead>
            <tbody>
                  {tableData.map((row, index) => (
                     <tr key={index}>
                        <th scope="col">{index+1}</th>
                        <td>{row.Quantity}</td>
                        <td>{row.Room}</td>
                        <td>{row.Accommodation}</td>
                     </tr>
                  ))}
               
            </tbody>
         </table>
      </div>
   )
}
