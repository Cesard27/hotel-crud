import { useState, } from 'react';
import '../HotelApp.css';
import { DataRoom } from '../interfaces/IDataRoom';
import { defaultData } from '../enums/RoomData';
import { defaultDataHotel } from '../enums/HotelData';
import { IDataHotel } from '../interfaces/IDataHotel';
import { DataHotel } from '../components/DataHotel';
import { DataTable, TypeRoom } from '../components';
import { useNavigate } from 'react-router';


export const FormScreen = () => {

   const [tableVisibility, setTableVisibility] = useState(false);
   const [roomInfo, setRoomInfo] = useState<DataRoom>(defaultData);
   const [tableData, setTableData] = useState<DataRoom[]>([]);
   const [hotelData, setHData] = useState<IDataHotel>(defaultDataHotel);

   const navigate = useNavigate();

   const addButtonValidator = (): boolean => {
      if (
         roomInfo.Quantity > 0 && 
         roomInfo.Room != defaultData.Room && 
         roomInfo.Accommodation != defaultData.Accommodation && 
         roomInfo.Accommodation != ''
      ) return true;

      return false
   }

   const onButtonAddClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (addButtonValidator()) {
         setTableVisibility(true)
         const newData: DataRoom = {
            Quantity       : roomInfo.Quantity,
            Room           : roomInfo.Room,
            Accommodation  : roomInfo.Accommodation,
         }
   
         // to data table
         setTableData((prevData) => [...prevData, newData]);
         
         // to TypeRoom
         setRoomInfo(defaultData)
      }
   }

   const onClickSendButton = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (hotelData != defaultDataHotel) {
         console.log('must be diff',hotelData)
         setRoomInfo(defaultData)
         navigate(
            '/resume', 
            { state:{hotelData: hotelData, tableData: tableData}}
         )
      }

   }

   return (
      <form>
         <div className='form-container'>

            <DataHotel setHData={setHData} hData={hotelData}/>

            <div>
               <div className="row d-flex justify-content-between">
                  <div className="style-col-title-form col-3 input-group-text">Quantity</div>
                  <div className="style-col-title-form col-3 input-group-text">Room Type</div>
                  <div className="style-col-title-form col-3 input-group-text">Accommodation</div>
                  <div className="w-100"></div>

                  
                  <TypeRoom setRoomInfo={setRoomInfo} roomInfo={roomInfo} />

               </div>
            </div>
            <button 
               className='style-btn-form btn'
               onClick={onButtonAddClick}
            >
               +</button>
         </div>

         <div className='style-table-form'>
            { tableVisibility && <DataTable tableData={tableData} /> }
         </div>

         <div className='sendButton'>
            <button 
               className='btn btn-primary btn-lg btn-block'
               type='submit'
               onClick={onClickSendButton}
            >Send</button>
         </div>
         
      </form>
   )
}