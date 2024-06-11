import express from "express";
import ArticleControler from "../controllers/articleСontroller.mjs";
const articleRuoter = express.Router();

articleRuoter.get("/", ArticleControler.getAllArticle);
articleRuoter.get("/:id", ArticleControler.getIdArticle);
articleRuoter.post("/", ArticleControler.creatArticle);
articleRuoter.put("/:id", ArticleControler.updateArticle);
articleRuoter.delete("/:id", ArticleControler.removeArticle);
export default articleRuoter;
