export interface HotelData {
    name: string;
    amount: number;
}

export interface ReservationData {
    startDate: Date;
    endDate: Date;
    adults: number;
}

export interface Room {
    name: string;
    description: string;
    size: string;
    beds: number;
    people: number;
    amount: string;
    image: string;
  }