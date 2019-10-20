import React from "react";
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import TechListRedux from "~/components/TechListRedux";

jest.mock("react-redux");

describe("TechList with Redux component", () => {
  it("should render tech list", () => {
    useSelector.mockImplementation(cb =>
      cb({
        techs: ["Node.js", "React"]
      })
    );
    const { getByTestId, getByText } = render(<TechListRedux />);
    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByTestId("tech-list")).toContainElement(getByText("React"));
  });
});
