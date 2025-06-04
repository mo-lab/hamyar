const { Octokit } = require("@octokit/rest");
const fs = require("fs");

const TOKEN = process.env.GITHUB_TOKEN; // set GITHUB_TOKEN=yourtoken
const REPO = "my-repo"; // change to your repo name (e.g., "business-mgmt")
const OWNER = "mo-lab"; // change to your username/org

const issues = JSON.parse(fs.readFileSync("issues.json", "utf8"));

const octokit = new Octokit({ auth: TOKEN });

async function createIssues() {
  for (const issue of issues) {
    await octokit.issues.create({
      owner: OWNER,
      repo: REPO,
      title: issue.title,
      body: issue.body,
      labels: issue.labels,
    });
    console.log(`Created: ${issue.title}`);
  }
}

createIssues().catch(console.error);
