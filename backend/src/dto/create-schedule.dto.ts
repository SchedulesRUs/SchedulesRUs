export class CreateScheduleDto {
  id: number;
  userId: number;
  title: string;
  allDay: boolean;
  color: string;
  start: string;
  end: string;
}
