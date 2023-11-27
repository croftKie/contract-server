"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobs = void 0;
const axios_1 = __importDefault(require("axios"));
const getJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {
        query: req.query.query,
        page: req.query.page,
    };
    const data = yield fetchJobData(query);
    return res.json(data);
    // return res.send("complete");
});
exports.getJobs = getJobs;
function fetchJobData(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: "GET",
            url: "https://jsearch.p.rapidapi.com/search",
            params: {
                query: `${query.query} in UK`,
                page: `${query.page}`,
                num_pages: "1",
                remote_jobs_only: "true",
                employment_types: "CONTRACTOR",
                country: "GB",
            },
            headers: {
                "X-RapidAPI-Key": process.env.SEARCH_KEY,
                "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
            },
        };
        try {
            const response = yield axios_1.default.request(options);
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
