"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./lib/router"));
const path_1 = __importDefault(require("path"));
const { PORT = 3001 } = process.env;
const app = (0, express_1.default)();
// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express_1.default.json());
// Serve API requests from the router
app.use('/api', router_1.default);
// Serve storybook production bundle
app.use('/storybook', express_1.default.static('dist/storybook'));
// Serve app production bundle
app.use(express_1.default.static('dist/app'));
// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'app/index.html'));
});
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map