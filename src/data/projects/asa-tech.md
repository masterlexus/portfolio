## Overview

Asa Tech is an AI-powered healthcare triage platform designed to serve patients in Iceland. As CTO, I led the full technical development of the platform from architecture to deployment.

The core idea: patients describe their symptoms through a guided interface and receive diagnostic assessments powered by AI. On the other side, clinicians get a real-time dashboard that prioritises patients by severity, surfacing diagnosis summaries, red flag indicators, and confidence levels.

## Technical Architecture

The platform is built as a full-stack application using React and TypeScript on the frontend, with a Node.js backend handling the AI orchestration layer and patient data management. PostgreSQL serves as the primary datastore.

The triage engine processes patient-reported symptoms through a structured interview flow, then runs them against trained models to produce severity scores, differential diagnoses, and confidence intervals. Red flag detection runs as a separate pass to catch critical symptoms that require immediate attention regardless of overall severity score.

The clinician dashboard presents a queue sorted by urgency, with each patient card showing a summary of reported symptoms, the AI assessment, and any flagged concerns. Clinicians can drill into the full symptom history and assessment reasoning.

## Impact

The platform successfully attracted investment from a private healthcare provider in Iceland, validating both the technical approach and the market need. The system was designed to reduce wait times and improve triage accuracy in a healthcare system where access to immediate medical consultation can be limited.
