import { hours } from "./hours.ts";

export interface TimeRange {
  init: Date;
  finish: Date;
  comentary?: string;
}

export const sumHours = (hours: TimeRange[]): number => {
  const calculate_hour_difference = ({ init, finish }: TimeRange): number =>
    finish.getHours() - init.getHours();

  const calculate_minute_difference = ({ init, finish }: TimeRange): number =>
    finish.getMinutes() - init.getMinutes();

  const sumator = (accumulator: number, element: number): number =>
    accumulator + element;

  const initial_value = 0;

  const hours_difference = hours.map(calculate_hour_difference);
  const minutes_difference = hours.map(calculate_minute_difference);

  const hours_sum = hours_difference.reduce(sumator, initial_value);
  const minutes_sum = minutes_difference.reduce(sumator, initial_value) / 60;

  return hours_sum - minutes_sum;
};

if (import.meta.main) {
  console.log(sumHours(hours));
}
