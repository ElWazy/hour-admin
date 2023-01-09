import { hours } from "./hours.ts";

export interface TimeRange {
  init: Date;
  finish: Date;
  comentary?: string;
}

export const sumHours = (hours: TimeRange[]): number => {
  const calculate_difference = ({ init, finish }: TimeRange): number =>
    finish.getHours() - init.getHours()

  const sumator = (accumulator: number, element: number): number =>
    accumulator + element

  const initial_value = 0

  const hours_difference = hours.map(calculate_difference)
  return hours_difference.reduce(sumator, initial_value)
}

if (import.meta.main) {
  console.log(sumHours(hours))
}
