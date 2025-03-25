# AI-Lint

![License](https://img.shields.io/badge/license-MIT-blue.svg)

> **Teach AI Your Documentation Standards, Not the Other Way Around**

<div align="center">
  <h2>📚 <a href="http://ai-lint.com/">Official Documentation Site</a> 📚</h2>
  <p>For detailed usage and rule configuration, please visit our official documentation</p>
  <p><a href="http://ai-lint.com/">http://ai-lint.com/</a></p>
</div>

## Overview

AI-Lint is a tool that allows you to load rules from a Rule Registry to control AI behavior in LLM-powered code development. This approach brings numerous benefits including improved code quality, consistency, and early error detection.

**AI conforms to your standards, not the other way around.** Create documentation rules that reflect your organization's style, structure, and requirements, then use AI-Lint to ensure all documents—whether written by humans or AI—consistently follow these standards.

### Key Features

- **Rule-Based Linting**: Check documents against specified rules
- **Auto-Fix Capability**: Automatically fix linting errors
- **Flexible Rule System**: Create, share, and extend rules
- **MCP Server Integration**: Seamless integration with AI tools
- **Rule Registry**: Load rules from local files or remote repositories
- **Rule Management**: Add, update, remove, and prioritize rules

## Quick Start

```bash
# Clone the repository
git clone https://github.com/ToyB0x/ai-lint.git
cd ai-lint

# Install dependencies and build
pnpm install && pnpm build
```

Add to your MCP server configuration file (adjust the path to your installation):
```json
{
  "mcpServers": {
    "@ai-lint/mcp": {
      "command": "node",
      "args": ["/PATH/TO/YOUR_DIR/ai-lint/apps/mcp/dist/index.js"],
      "autoApprove": [],
      "disabled": false
    }
  }
}
```

<div align="center">
  <h3>🔍 For more detailed information, check our <a href="http://ai-lint.com/">official documentation</a> 🔍</h3>
</div>

## Basic Usage

1. Create a `.clinerules` file in your project root:

```
You (AI assistants like Cline or Roo Code) must follow these important rules:

- Verify that the MCP Server @ai-lint/mcp is properly set up
- If not set up correctly, inform the user "The @ai-lint/mcp configuration is incorrect" and halt all subsequent processing
- If set up correctly, execute @ai-lint/mcp's load-remote-act-rule and apply the following rules
```

2. Restart your AI assistant to ensure it recognizes the new MCP server and rules.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Changelog

- 2025/03/25: [Improved] Simplified README and added links to official documentation site
- 2025/03/25: [Improved] Enhanced README with comprehensive documentation and examples
- 2025/03/25: Initial creation
