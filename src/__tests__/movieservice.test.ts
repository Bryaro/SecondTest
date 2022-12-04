/**
 * @jest-environment jsdom
 */

import axios from "axios";
import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice"
import { mockData } from "../ts/services/__mocks__/movieservice";



//jest.mock("./../ts/services/movieservice.ts");
jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => {
      resolve({
        data: {
          Search: mockData,
        },
      });
    });
  },
}));

test("should get mock data", async () => {
  //Arrange
  let searchText: string = "hejsan";
  //Act
  let response: IMovie[] = await getData(searchText);
  //Assert
  expect(response.length).toBe(3);
  expect(response[0].Title).toBe("Harry Zotter 1");
});



