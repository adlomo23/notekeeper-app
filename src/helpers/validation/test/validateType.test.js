import validateType from "../validateType.js";
import { describe, test, expect } from "vitest";

//TDD

describe("Given function validateType", () => {
  describe("When type is string", () => {
    // type string
    test("Then if value is a string true should be returned", () => {
      //Arrange
      const value = "foo";
      const type = "string";

      //Act
      const result = validateType(value, type);

      //Assert
      expect(result).toBe(true);
    });

    test("Then if value is not string false should be returned", () => {
      //Arrange
      const value = 1;
      const type = "string";

      //Act
      const result = validateType(value, type);

      //Assert
      expect(result).toBe(false);
    });
  });

  describe("When type is a number", () => {
    test("Then if value is a number true should be returned", () => {
      //Arrange
      const value = 4 ;
      const type = "number";

      //Act
      const result = validateType(value, type);

      //Assert
      expect(result).toBe(true);
    });

    test("Then if value is not number false should be returned", () => {
      //Arrange
      const value = "foo";
      const type = "number";

      //Act
      const result = validateType(value, type);

      //Assert
      expect(result).toBe(false);
    });
  });

  describe("When type is a boolean", () => {
    test("Then if value is a boolean true should be returned", () => {
      //Arrange
      const value = true;
      const type = "boolean";

      //Act
      const result = validateType(value, type);

      //Assert
      expect(result).toBe(true);
    });

    test("Then if value is not boolean false should be returned", () => {
      //Arrange
      const value = "foo";
      const type = "boolean";

      //Act
      const result = validateType(value, type);

      //Assert
      expect(result).toBe(false);
    });
  });
});
