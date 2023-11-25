const request = require("supertest");
const app = require("../dist/server");

describe("GET /jobs", () => {
  it("GET / => 200", async () => {
    return request(app).get("/jobs/").expect(200);
  });
  it("GET / => Endpoint returns an array of data", async () => {
    return request(app)
      .get("/jobs/")
      .then((res) => {
        expect(Array.isArray(res.body.data)).toBe(true);
      });
  });
  it("GET / => array returns objects with job properties", async () => {
    return request(app)
      .get("/jobs/")
      .then((res) => {
        res.body.data.forEach((item) => {
          expect(item).toHaveProperty("employer_name");
          expect(item).toHaveProperty("employer_logo");
          expect(item).toHaveProperty("employer_website");
          expect(item).toHaveProperty("job_publisher");
          expect(item).toHaveProperty("job_employment_type");
          expect(item).toHaveProperty("job_title");
          expect(item).toHaveProperty("job_apply_link");
          expect(item).toHaveProperty("job_apply_quality_score");
          expect(item).toHaveProperty("job_description");
          expect(item).toHaveProperty("job_is_remote");
          expect(item).toHaveProperty("job_posted_at_timestamp");
          expect(item).toHaveProperty("job_city");
          expect(item).toHaveProperty("job_state");
          expect(item).toHaveProperty("job_country");
        });
      });
  });
});
