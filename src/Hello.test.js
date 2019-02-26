import React from "react";

const Hello = props => {
  return <h1>Hello time at {props.now}</h1>;
};

const moment = new Date(1234567890000);

describe("Testing Hello function", () => {
  let result;

  beforeAll(() => {
    result = Hello({ now: moment.toTimeString });
  });

  it("return a value", () => {
    expect(result).not.toBeNull();
  });

  it("Has h1", () => expect(result.type).toBe("h1"));
});
