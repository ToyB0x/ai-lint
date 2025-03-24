// If you to use low level API, you can use the following code
// import { Server } from "@modelcontextprotocol/sdk/server";

// currently, we only use High Level API
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
    name: "@ai-lint/mcp-server",
    version: "0.0.1",
    capabilities: {
        tools: {},
        resources: {},
    },
});

// Register get-lint-rule tool
server.tool(
    "get-lint-rule",
    "Get document lint rule for a given url",
    {
        ruleUrl: z.string().url().startsWith("https://raw.githubusercontent.com/").describe("The url of the lint rule hosted on GitHub"),
    },
    async ({ ruleUrl }) => {
        const response = await fetch(ruleUrl);
        if (!response.ok) {
            return {
                content: [
                    {
                        type: "text",
                        text: `Failed to retrieve rule from ${ruleUrl}`,
                    },
                ],
            };
        }

        return {
            content: [
                {
                    type: "text",
                    text: await response.text(),
                },
            ],
        };
    },
);

// Register lint planner tool (AI will run planned lint after this tool on host client)
server.tool(
    "plan-lint",
    "plan how to lint for given document with given rules (AI assistant must run lint after this tool)",
    {
        documentPath: z.string().describe("The file path of the document to lint"),
        rulePath: z.string().describe("The file path of the rule to lint with"),
    },
    async ({ documentPath, rulePath }) => {
            return {
                content: [
                    {
                        type: "text",
                        text: `Lint file ${documentPath} with rule ${rulePath}. 
                        You must also do the following:
                        - If give rule contain github url, you must use get-lint-rule tool to get the rule and memory it.
                          (you must lint the document with the all rules you get from the url)
                        `,
                    },
                ],
            };
    },
);

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("MCP Server running on stdio");
}

main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});


// Example: In the future, we may provide a dynamic resource?
// // Add a dynamic greeting resource
// server.resource(
//     "greeting",
//     new ResourceTemplate("greeting://{name}", { list: undefined }),
//     async (uri, { name }) => ({
//         contents: [{
//             uri: uri.href,
//             text: `Hello, ${name}!`
//         }]
//     })
// );
