import { Dispatch, FC, SetStateAction } from 'react'
import { IDataHotel } from '../interfaces/IDataHotel';

type ComponentProps = {
   hData: IDataHotel,
   setHData: Dispatch<SetStateAction<IDataHotel>>
}

export const DataHotel: FC<ComponentProps> = ({hData, setHData}) => {
   
   const onNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHData({...hData, name: event.target.value})
   }
   const onAddressChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHData({...hData, address: event.target.value})
   }
   const onCityChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHData({...hData, city: event.target.value})
   }
   const onNITChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHData({...hData, nit: Number(event.target.value)})
   }
   const onNRoomsChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHData({...hData, nRooms: Number(event.target.value)})
   }

   return (
      <>
         <div className="row justify-content-md-center">
            <div className="col">
               <div className="input-group">
                  <div className="input-group-prepend">
                     <div className="style-label-form input-group-text">Name</div>
                  </div>
                  <input
                     type="text"
                     className="style-label-form form-control"
                     id='inlineFormInputGroupUsername'
                     onChange={onNameChanged}
                     value={hData.name}
                  />
               </div>
            </div>
            <div className="col">
               <div className="input-group">
                  <div className="input-group-prepend">
                     <div className="style-label-form input-group-text ">Address</div>
                  </div>
                  <input
                     type="text"
                     className="style-label-form form-control"
                     id='inlineFormInputGroupUsername'
                     onChange={onAddressChanged}
                     value={hData.address}
                  />
               </div>
            </div>
         </div>
         <div className="row justify-content-md-center">
            <div className="col">
               <div className="input-group">
                  <div className="input-group-prepend">
                     <div className="style-label-form input-group-text ">City</div>
                  </div>
                  <input
                     type="text"
                     className="style-label-form form-control"
                     id='inlineFormInputGroupUsername'
                     onChange={onCityChanged}
                     value={hData.city}
                  />
               </div>
            </div>
            <div className="col">
               <div className="input-group">
                  <div className="input-group-prepend">
                     <div className="style-label-form input-group-text ">NIT</div>
                  </div>
                  <input
                     type="number"
                     className="style-label-form form-control"
                     id='inlineFormInputGroupUsername'
                     onChange={onNITChanged}
                     value={hData.nit}
                  />
               </div>
            </div>
         </div>
         <div className="row justify-content-md-center">
            <div className="col">
               <div className="input-group">
                  <div className="input-group-prepend">
                     <div className="style-label-form input-group-text ">N° Rooms</div>
                  </div>
                  <input
                     type="number"
                     className="style-label-form form-control"
                     id='inlineFormInputGroupUsername'
                     onChange={onNRoomsChanged}
                     value={hData.nRooms}
                  />
               </div>
            </div>
         </div>
      </>
   )
}

