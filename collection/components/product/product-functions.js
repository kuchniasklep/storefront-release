export function AppendSuggestions(api, id, name) {
  const suggestions = document.createElement("ks-product-suggestions");
  suggestions.setAttribute("product-id", id);
  suggestions.setAttribute("name", name);
  suggestions.setAttribute("api", api);
  document.body.appendChild(suggestions);
}
