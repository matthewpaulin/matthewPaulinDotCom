import about from "./aboutPage";
export default (req, res) => {
  res.status(200).json(about)
}