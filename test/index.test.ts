import { distance } from "../src";

describe("distance", () => {
  test("success", () => {
    expect(
      distance(
        "d81dba5c3daa3b9b71cf379732d1f0512a5bca5a",
        "68eb2a737ceaca0b65b6cbd381221c846fa357da"
      )
    ).toBe(156);
  });

  test("error", () => {
    expect(() =>
      distance("d81dba5c3daa3b9b71cf379732d1f0512a5bca5a:", "a")
    ).toThrow();
  });
});
