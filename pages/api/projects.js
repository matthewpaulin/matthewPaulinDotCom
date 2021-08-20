import projects from "./projectList";
export default (req, res) => {
  res.status(200).json(projects)
}