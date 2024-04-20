export interface Driver {
    id: number;
    name: string;
    document: string;
    vehicleId: number | null; 
}


export interface Vehicle {
    id: number;
    model: string;
    plate: string;
}