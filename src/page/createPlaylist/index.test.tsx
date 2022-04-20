import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from ".";
import store from "../../store";

test('should show searchbar', () => {
    render(
        <Provider store={store}><Home /></Provider>);
    const SearchBarForm = screen.getByTestId("SearchBarForm");
    const titleplaylist = screen.getByTestId("titleplaylist");
    const descriptionplaylist = screen.getByTestId("descriptionplaylist");

    expect(SearchBarForm).toBeInTheDocument();
    expect(titleplaylist).toBeInTheDocument();
    expect(descriptionplaylist).toBeInTheDocument();
})