import categories from "./categoryList";
export default (req, res) => {
  res.status(200).json(categories)
}