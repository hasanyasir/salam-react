import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "./mocks/RestaurantCard.json";

it("Should render RestaurantCard with data from props", () => {
  render(<RestaurantCard restData={MOCK_DATA} />);

  const card = screen.getByText("Xingxung");

  expect(card).toBeInTheDocument();
});

// it("Should render RestaurantCard with promoted label", () => {
//   const rest = render(<RestaurantCard restData={MOCK_DATA} />);
//   const RestaurantCardPromoted = withPromotedLabel(rest);

//   render(<RestaurantCardPromoted />);

//   const card = screen.getByText("Promoted");

//   expect(card).toBeInTheDocument();
// });
