import { DataRoom } from "../interfaces/IDataRoom";

interface OptionsType {
   [options: string]: string[];
}

export const roomType: OptionsType = {
   ClickToSelect: ['choose room type'],
   Standard : ['','Simple', 'Double'],
   Junior : ['','Triple', 'Quadruple'],
   Suite : ['','Simple', 'Double', 'Triple'],
}

export const defaultData: DataRoom = {
   Quantity: 0,
   Room: 'ClickToSelect',
   Accommodation: 'choose room type',
}