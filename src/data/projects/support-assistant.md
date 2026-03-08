## Overview

A Chrome extension built to integrate directly with the Ladesk support interface used at SimplyBook.me, adding AI-powered response capabilities to the existing support workflow.

The extension injects contextual buttons into the support agent's interface, enabling one-click generation of AI-enhanced responses grounded in the company's actual knowledge base.

## RAG Architecture

The core of the system is a Retrieval-Augmented Generation (RAG) pipeline that indexes two primary sources:

- **Help documentation:** The full SimplyBook.me help center, structured and chunked for semantic search.
- **Resolved conversations:** Anonymized summaries of previously resolved support tickets, capturing common issues and successful resolution patterns.

When a support agent receives a new ticket, the system retrieves the most relevant documentation and past resolutions, then uses the OpenAI API to generate a contextually appropriate response draft. This ensures responses are grounded in real company knowledge rather than generic AI output.

## Integration

The extension was designed to feel native to the existing Ladesk interface. Rather than requiring agents to switch to a separate tool, the AI capabilities are injected directly into their workflow through contextual buttons that appear alongside the standard reply interface.

This approach minimized disruption to existing workflows while giving agents access to the full indexed knowledge base with a single click.
