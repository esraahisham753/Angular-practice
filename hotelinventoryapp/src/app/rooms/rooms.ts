export interface Rooms {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  roomNumber: number;
  roomType: string;
  amenities: string;
  price: number;
  photo: string;
  checkIn: Date;
  checkOut: Date;
  rating: number;
}
