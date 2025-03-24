# AI-Lint

![License](https://img.shields.io/badge/license-MIT-blue.svg)

> **Teach AI Your Documentation Standards, Not the Other Way Around**

## The Future of Documentation is Rule-Driven

AI-Lint bridges the gap between AI capabilities and human documentation standards. Instead of adapting to how AI writes, define your rules and watch AI conform to your standards.

**Write once, enforce everywhere.** Create documentation rules that reflect your organization's voice, structure, and requirements. Then let AI-Lint ensure every document—whether written by humans or AI—follows these standards consistently.

A document linting tool powered by AI that helps maintain consistent documentation standards through customizable rules. AI-Lint allows you to define, share, and enforce documentation rules across your projects.

## Overview

AI-Lint is an experimental project exploring AI capabilities for document linting. It provides a flexible framework for defining and enforcing documentation standards through a rule-based system. The tool integrates with AI platforms like Cline and other AI coding tools via MCP (Model Context Protocol) servers.

### Key Features

- **Rule-Based Linting**: Lint documents against specified rules
- **Auto-Fix Capability**: Automatically fix linting errors
- **Flexible Rule System**: Create, share, and extend rules
- **MCP Server Integration**: Seamless integration with AI tools
- **Remote Rules**: Load rules from local files or remote repositories
- **Rule Management**: Add, update, remove, and prioritize rules
- **Performance Optimization**: Rule packing and caching for improved performance

## Installation

Currently, AI-Lint is in development and requires manual installation:

1. Clone the repository:
```bash
git clone https://github.com/ToyB0x/ai-lint.git
cd ai-lint
```

2. Install dependencies and build the MCP server:
```bash
pnpm install
cd apps/mcp
pnpm build
```

3. Configure your MCP settings file to include AI-Lint:

For VSCode Cline extension, edit the MCP settings file located at:
`~/Library/Application Support/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_mcp_settings.json`

For Claude desktop app, edit:
`~/Library/Application Support/Claude/claude_desktop_config.json`

Add the following configuration:
```json
{
  "mcpServers": {
    "@ai-lint/mcp": {
      "command": "node",
      "args": [
        "/PATH/TO/YOUR_DIR/ai-lint/apps/mcp/dist/index.js"
      ],
      "autoApprove": [],
      "disabled": false
    },
    // other MCP servers...
  }
}
```

Replace `/PATH/TO/YOUR_DIR` with the actual path to your cloned repository.

## Usage

### Basic Setup

1. Create a `.clinerules` file in your project root:

```
You (AI assistants like Cline or Roo Code) must follow these important rules:

- Verify that the MCP Server @ai-lint/mcp is properly set up
- If not set up correctly, inform the user "The @ai-lint/mcp configuration is incorrect" and halt all subsequent processing
- If set up correctly, execute @ai-lint/mcp's load-remote-act-rule and apply the following rules
```

2. Restart your AI assistant to ensure it recognizes the new MCP server and rules.

### Linting Documents

Once the MCP server is properly configured, your AI assistant will automatically:

- Check if documents follow specified rules
- Suggest fixes for rule violations
- Apply rules when generating or modifying content

### Example Rule Configuration

Create an `ai-lint.config.json` file to define your rules:

```json
{
  "rules": {
    "headings": {
      "enabled": true,
      "options": {
        "requireH1": true,
        "maxDepth": 3
      }
    },
    "spelling": {
      "enabled": true,
      "options": {
        "language": "en-US",
        "ignoreWords": ["AI-Lint", "MCP"]
      }
    },
    "changelog": {
      "enabled": true,
      "options": {
        "dateFormat": "YYYY/MM/DD",
        "requireChangelog": true
      }
    }
  }
}
```

### Using with AI Tools

AI-Lint integrates with AI coding tools through MCP servers, allowing AI assistants to:

1. Check if documents follow specified rules
2. Suggest fixes for rule violations
3. Apply rules when generating or modifying content

Example interaction with an AI assistant:

```
User: Please create a README for my project

AI: I'll create a README that follows your AI-Lint rules.
    [Generates content that adheres to configured rules]
    
    The README includes:
    - A properly formatted H1 title
    - Structured headings up to level 3
    - Correct spelling according to en-US
    - A changelog section at the bottom
```

## Rule System

AI-Lint uses a hierarchical rule system with several key concepts:

### Rule Priority

Rules are processed in the order they are defined (top to bottom):

- Higher rules take precedence over lower rules when conflicts occur
- All non-conflicting rules are applied
- The order of rules determines both logical priority and processing sequence

Example of rule priority:

```markdown
1. Document titles must end with an exclamation mark!
2. Document titles must end with a period.
```

In this case, rule 1 takes precedence over rule 2 when they conflict.

### Rule Types

AI-Lint supports various rule types:

- **Configuration Rules**: Define how AI-Lint integrates with tools
- **Core Rules**: Establish fundamental principles for rule processing
- **Meta Rules**: Define standards for documentation structure
- **Content Rules**: Specify requirements for document content

Example of a meta rule for changelog:

```markdown
# Changelog Meta Rule

## Purpose
- Clearly record document change history
- Standardize the format of change entries
- Make document evolution transparent

## Rule
All documents must include a "Changelog" section at the end with entries in reverse chronological order.

## Format
- YYYY/MM/DD: [Change description]
```

### Creating Custom Rules

Rules can be defined in markdown files with the following structure:

```markdown
# Rule Name

## Purpose
- Describe the rule's purpose

## Rule
Detailed rule description

## AI Instructions
Instructions for AI on how to apply the rule

## Changelog
- 2025/03/25: Initial creation
```

Example of a custom rule:

```markdown
# Technical Term Consistency Rule

## Purpose
- Ensure consistent use of technical terms
- Prevent confusion from terminology variations

## Rule
Technical terms must be used consistently throughout the document. The first occurrence should define the term, and all subsequent references must use the same form.

## AI Instructions
- Identify technical terms in the document
- Ensure each term is used consistently
- Flag variations of the same term as violations
- Suggest standardizing to the form used in the first occurrence

## Changelog
- 2025/03/25: Initial creation
```

## Roadmap

- **MCP Server Features**
  - Lint files with specified rules
  - Auto-fix linting errors
  - Summarize current rules
  - Debug rule application
  - Load local and remote rules
  - Pack rules for improved performance
  - Cache remote rules
  - Comprehensive rule management

- **Rule Registry**
  - Version management
  - Rule management
  - Extendable rule system
  - Customizable rule system
  - Rule prioritization
  - Meta rule system

- **Recommended Rules**
  - User guide standards
  - Product development documentation
  - Internal documentation standards

- **API and CLI**
  - CI/CD integration
  - TypeScript API

## Development

### Project Structure

```
ai-lint/
├── apps/
│   └── mcp/           # MCP server implementation
│       ├── dist/      # Compiled JavaScript files
│       ├── src/       # TypeScript source files
│       ├── package.json
│       ├── tsconfig.json
│       └── tsup.config.ts
├── rules/             # Rule definitions
│   ├── config-clinerule-mcp/
│   ├── core-priority-logical/
│   ├── core-priority-order/
│   └── meta-change-log/
├── .clinerules        # AI instructions for this project
├── package.json
└── README.md
```

### TODO

- Define rule of rules
- Add more rules
- Create core functions for tools (currently using dynamically generated AI prompts)

### Example Implementation

```typescript
// Example of a rule implementation
import { Rule, RuleContext, RuleViolation } from '@ai-lint/core';

export class HeadingRule implements Rule {
  id = 'headings';
  
  validate(context: RuleContext): RuleViolation[] {
    const violations: RuleViolation[] = [];
    const { document, options } = context;
    
    // Check if H1 exists
    if (options.requireH1 && !document.hasH1()) {
      violations.push({
        rule: this.id,
        message: 'Document must have an H1 heading',
        location: { line: 1, column: 1 },
        severity: 'error',
        fix: () => document.prependHeading('# Document Title', 1)
      });
    }
    
    return violations;
  }
}
```

### Note

AI-Lint was created to address limitations in current AI coding tools that cannot load URLs in text files (though some support URL loading through commands).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Changelog

- 2025/03/25: [Improved] Enhanced README with comprehensive documentation and examples
- 2025/03/25: Initial creation
