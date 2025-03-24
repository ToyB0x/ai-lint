# ai-lint
A document linting tool by AI. This is an experimental project that I am exploring AI, so there may be better tools out there.

## ROADMAP:
- Provide MCP Server for cline and other tools with following features:
  - Able to lint files with specified rules.
  - Able to lint:fix files with specified rules.
  - Able to summarize current rules.
  - Able to debug rules apply.
  - Able to load local and remote rules.
  - Able to pack and compact rules for improve performance and reduce AI's API cost (reduce API Usage).
  - Able to detect lint violations and fix linting errors.
  - Able to cache remote rules.
  - Able to list current rules.
  - Able to list remote rules.
  - Able to add rules
  - Able to update rules
  - Able to remove rules
- Provide reusable and sharable rules registry via GitHub repository with following features:
  - Version management
  - Rule management
  - Extendable rule system
  - Customizable rule system
  - Prioritize rule system
  - Meta rule system
- Provide recommended rules for common use cases with following features:
  - For user guide
  - For product development
  - For internal document

## TODO:
- Define rule of rules
- Add Rule
- Crate core function for tools (currently, inner tool function is all most dynamically generated AI prompt. But like static package manager, if these functions also become static, it will be more efficient, faster and stable.)

## NOTE:
Currently, AI Coding tools like cline are not available to load url in text files(but @url command can load url), so I created this AI linting tool.
