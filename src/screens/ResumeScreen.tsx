import { useLocation } from "react-router"
import { IDataHotel } from "../interfaces/IDataHotel";
import { DataRoom } from "../interfaces/IDataRoom";

export const ResumeScreen = () => {
   const location = useLocation();

   const state = location.state as {
      hotelData: IDataHotel, tableData: DataRoom[]
   }
   console.log('state',state)
   return (
      <div>
         Hotel: {Object.values(state?.hotelData)}
         Rooms: {state?.tableData.map(data => (
            Object.values(data)
         ))}
         
      </div>
   )
}

