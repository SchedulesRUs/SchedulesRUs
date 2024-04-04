export interface SetAvailabilityDto {
  userId: number;
  durationStart: string;
  durationEnd: string;
  dailySchedule?: {
    [day in
      | 'Monday'
      | 'Tuesday'
      | 'Wednesday'
      | 'Thursday'
      | 'Friday'
      | 'Saturday'
      | 'Sunday']?: {
      startTime: string;
      endTime: string;
      isEnabled: boolean;
    };
  };
}
