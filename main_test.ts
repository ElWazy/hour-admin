import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { sumHours } from "./main.ts";

Deno.test('should be sum hours', () => {
  const hours = [
    { 
      init: new Date('2023-01-01T08:00:00'), 
      finish: new Date('2023-01-01T10:00:00') 
    },
    { 
      init: new Date('2023-01-01T11:00:00'), 
      finish: new Date('2023-01-01T12:00:00') 
    },
    { 
      init: new Date('2023-01-02T15:00:00'), 
      finish: new Date('2023-01-02T16:00:00') 
    },
  ]

  assertEquals(sumHours(hours), 4)
})
