const getAllArticle = (req, res) => {
  res.json([
    { id: "1", title: "title 1" },
    { id: "2", title: "title 2" },
  ]);
};

const getIdArticle = (req, res) => {
  const id = req.params.id;
  res.json([{ id: id, title: "title " }]);
};

const creatArticle = (req, res) => {
  res.send("ok");
};

const updateArticle = (req, res) => {
  const id = req.params.id;
  res.json([{ id: id, title: "title " }]);
};

const removeArticle = (req, res) => {
  const id = req.params.id;
  res.json([{ id: id, title: "title " }]);
};

export default {
  getAllArticle,
  getIdArticle,
  creatArticle,
  updateArticle,
  removeArticle,
};
