import { Ref } from 'vue';

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
  amount: number;
  image: string;
}

export interface ReservationGlobalState {
  reservation: Ref<Reservation>;
  updateReservation: (reservation: Reservation) => void;
}
