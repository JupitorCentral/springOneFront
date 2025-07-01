import express from "express";
import { createDevMiddleware, renderPage } from "vike/server";

const isProduction = process.env.NODE_ENV === "production";

const root = new URL("..", import.meta.url).pathname;

async function startServer() {
	const app = express();

	if (isProduction) {
		app.use(express.static(`${root}/dist/client`));
	} else {
		const { devMiddleware } = await createDevMiddleware({ root });
		app.use(devMiddleware);
	}

	app.get(/.*/, async (req, res, next) => {
		const pageContextInit = {
			urlOriginal: req.originalUrl,
		};
		const pageContext = await renderPage(pageContextInit);
		const { httpResponse } = pageContext;
		if (!httpResponse) return next();
		const { body, statusCode, headers } = httpResponse;
		const contentType = headers?.["content-type"] || "text/html";
		res.status(statusCode).type(contentType).send(body);
	});

	const port = process.env.PORT || 3030;
	app.listen(port);
	console.log(`Server running at http://localhost:${port}`);
}

startServer();
