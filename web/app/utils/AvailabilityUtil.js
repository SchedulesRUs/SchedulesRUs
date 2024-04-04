export function generateCalendarEvents(
  username,
  userColor,
  durationStart,
  durationEnd,
  dailySchedule,
) {
  const startDate = new Date(durationStart);
  const endDate = new Date(durationEnd);
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
  const eventObjects = [];

  for (
    let day = startDate;
    day <= endDate;
    day = new Date(day.getTime() + oneDay)
  ) {
    const weekDay = day.toLocaleString("en-US", { weekday: "long" });
    if (dailySchedule[weekDay] && dailySchedule[weekDay].isEnabled) {
      const startDateTime = new Date(
        day.getFullYear(),
        day.getMonth(),
        day.getDate(),
        ...dailySchedule[weekDay].startTime.split(":").map(Number),
      );
      const endDateTime = new Date(
        day.getFullYear(),
        day.getMonth(),
        day.getDate(),
        ...dailySchedule[weekDay].endTime.split(":").map(Number),
      );

      eventObjects.push({
        title: username,
        start: startDateTime.toISOString(),
        end: endDateTime.toISOString(),
        color: userColor,
        display: "block",
      });
    }
  }

  return eventObjects;
}

export function hexToRGBA(hex, opacity) {
  // Remove the hash at the start if it's there
  hex = hex.replace("#", "");

  // Parse the hex color to get the RGB components
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Return the RGBA color with the specified opacity
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
