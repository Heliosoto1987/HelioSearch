import companies from "../companeis/companies.json";
export const companiesReducer = (state = [], action) => {
  switch (action.type) {
    case "filter":
      const industry = action.payload.industry.toLocaleLowerCase();
      const name = action.payload.name.toLocaleLowerCase();
      return state.filter(
        (value) => value.industry === industry || value.name === name
      );

    case "renewState":
      return (state = companies);

    default:
      return state;
  }
};
