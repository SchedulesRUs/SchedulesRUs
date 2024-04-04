export interface SetAvailabilityDto {
  id: number;
  userId: number;
  durationStart: string;
  durationEnd: string;
  dailySchedule?: {
    [day in 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday']?: {
      startTime: string;
      endTime: string;
    };
  };
}