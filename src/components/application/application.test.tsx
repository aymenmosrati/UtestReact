import { render, screen } from "@testing-library/react";
import { Application } from "./application";

// 8 different query methods : Order of priority for using queries
// RTL getBy and getAllBy Queries(RTL: react testing library)
//1 getByRole                  / getAllByRole
//2 getByLabelText             / getAllByLabelText
//3 getByPlaceholderText       / getAllByPlaceholderText
//4 getByText                  / getAllByText
//5 getByDisplayValue          / getAllByDisplayValue
//6 getByAltText               / getAllByAltText
//7 getByTitle                 / getAllByTitle
//8 getByTestId                / getAllByTestId

describe("Application", () => {
  // getByRole Options: name, level, hidden, selected, checked, pressed
  test("renders correctly", () => {
    render(<Application />);
    // const pageHeading = screen.getByRole("heading", {
    //   name: "Job application form",
    // });
    // expect(pageHeading).toBeInTheDocument();

    // const sectionHeading = screen.getByRole("heading", {
    //   name: "Section",
    // });
    // expect(sectionHeading).toBeInTheDocument();

    // OR

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    //getByText works just in paragraph p or div or span element
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("Vishwas");
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
