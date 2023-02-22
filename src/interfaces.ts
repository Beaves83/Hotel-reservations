export interface Hotel {
  name: string;
  amount: number;
}

export interface Reservation {
  startDate: Date | null;
  endDate: Date | null;
  adults: number;
  children: number;
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

export interface ReservationGlobalState {
  reservation: Reservation;
  updateReservation: (reservation: Reservation) => void;
}
