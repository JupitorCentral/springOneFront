import express from "express";
import { renderPage } from "vike/server";

const app = express();

app.get("*", async (req, res, next) => {
    const pageContextInit = {
        urlOriginal: req.originalUrl,
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) return next();
    const { body, statusCode, contentType } = httpResponse;
    res.status(statusCode).type(contentType).send(body);
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server running at http://localhost:${port}`);
