export async function LoadCategories() {
  let cachedCategories = sessionStorage.getItem("category-data");
  if (!cachedCategories) {
    const json = await fetch("res/categories.json")
      .then(response => response.json());
    if (!json)
      return "";
    const jsonString = JSON.stringify(json);
    sessionStorage.setItem("category-data", jsonString);
    return jsonString;
  }
  return cachedCategories;
}
