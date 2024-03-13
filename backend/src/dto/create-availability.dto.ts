export class CreateAvailabilityDto {
  id: number;
  user_id: number;
  username: string;
  allDay: boolean;
  color: string;
  start: string;
  end: string;
}
