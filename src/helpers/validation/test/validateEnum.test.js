import validateEnum from "../validateEnum";
import { describe, test, expect } from "vitest";

describe("Given validateEnum function", () => {
  test("Then if value match with one of three options shoud be return true", () => {
    const value = "Pending";

    const result = validateEnum(value);

    expect(result).toBe(true);
  });

   test("Then if value match with one of three options shoud be return true", () => {
     const value = "In Progress";

     const result = validateEnum(value);

     expect(result).toBe(true);
   });

    test("Then if value match with one of three options shoud be return true", () => {
      const value = "Done";

      const result = validateEnum(value);

      expect(result).toBe(true);
    });

  test("Then if value do not match with one of the three option shoult return false", () => {
    const value = "Later";

    const result = validateEnum(value);

    expect(result).toBe(false);
  });
});
