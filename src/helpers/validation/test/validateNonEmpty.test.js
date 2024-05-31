import validateNonEmpty from "../validateNonEmpty.js";
import {describe, test, expect} from "vitest";

describe("Given function validateNonEmpty", () =>{
    test("Then if value is not empty true should be returned", () => {
      //Arrange
      const value = "foo";

      //Act
      const result = validateNonEmpty(value);

      //Assert
      expect(result).toBe(true);
    });

    test("Then if values is empty false should be returned", () => {
      //Arrange
      const value = "";

      //Act
      const result = validateNonEmpty(value);

      //Assert
      expect(result).toBe(false);
    })
})