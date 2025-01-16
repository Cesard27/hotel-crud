import React, { useEffect, useState, Dispatch, SetStateAction, FC } from "react";
import { DataRoom } from "../interfaces/IDataRoom";
import { defaultData, roomType } from "../enums/RoomData";





type ComponentProps = {
   roomInfo: DataRoom
   setRoomInfo: Dispatch<SetStateAction<DataRoom>>;
};

export const TypeRoom: FC<ComponentProps> = ({setRoomInfo, roomInfo}) => {

   const [roomSelection, setRoomSelection] = useState<string>(defaultData.Room);
   const [accomRoom, setAccomRoom] = useState<string>(defaultData.Accommodation);
   const [Quantity, setQuantity] = useState(defaultData.Quantity);

   useEffect(() => {
      setRoomInfo(dataObject)
   }, [Quantity, roomSelection, accomRoom]);

   const onSelectedRoomOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setRoomSelection(event.target.value)
      setAccomRoom(defaultData.Accommodation)
   }

   const onSelectedAccomOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setAccomRoom(event.target.value)
   }

   const onQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuantity(Number(event.target.value))
   }

   const dataObject: DataRoom = {
      Quantity,
      Room : roomSelection, 
      Accommodation : accomRoom, 
   }

   return (
      <>
         <div className='col-3 spec-margin'>
            <input 
               type="number" 
               className="style-col-selection-form form-control" 
               id='inlineFormInputGroupUsername' 
               placeholder="0"
               
               onChange={onQuantityChange}
               value={roomInfo.Quantity}
            />
         </div>
         <div className='col-3 spec-margin'>
            <select 
               className="form-select style-col-selection-form" 
               onChange={onSelectedRoomOption}
               value={roomInfo.Room}
            >
               {Object.keys(roomType).map(option => (
                  <option key={option} value={option}>
                     {option}
                  </option>
               ))}
            </select>
         </div>
         <div className='col-3 spec-margin'>
            <select 
               className="form-select style-col-selection-form"
               onChange={onSelectedAccomOption}
               value={roomInfo.Accommodation}
            >
               {roomType[roomSelection].map((accomRoom, index) => (
                  <option key={index} value={accomRoom}>
                     {accomRoom}
                  </option>
               ))}
            </select>
         </div>
      </>
   )
}