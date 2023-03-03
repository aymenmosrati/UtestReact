import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

//describe accepting tow arguments (name, fn)
//test accepting three arguments (name, fn, timeout)
// test.only("Greet renders with an name", () => {// or describe.only
// "only" function to just run this test and skiped other tests
// test.skip("Greet renders with an name", () => { // or describe.skip== describe.xit
// "skip" function to skiped (inactive ) this test
//skip === xit
//test === it
describe("Greet", () => {
  it("renders correctly", () => {
    render(<Greet />);
    const textElment = screen.getByText(/Hello/i);
    expect(textElment).toBeInTheDocument();
  });
  describe("Nested", () => {
    test("renders a name", () => {
      render(<Greet name="ahmed" />);
      const textElment = screen.getByText("Hello ahmed");
      expect(textElment).toBeInTheDocument();
    });
  });
});
