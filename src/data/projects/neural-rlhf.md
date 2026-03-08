## Overview

Neural RLHF Frontend is a real-time brain-computer interface (BCI) stimulus presentation and data collection system, built in 2 days at the London Neurotech Hackathon. The system presents rapid serial visual presentation (RSVP) stimuli while synchronising EEG data streams, voice annotations, and temporal markers for downstream reinforcement learning from human feedback.

## RSVP Stimulus Presentation

The stimulus engine is built with PsychoPy, presenting images in rapid succession at configurable intervals. Each stimulus onset is time-stamped with sub-millisecond precision and pushed as an LSL (Lab Streaming Layer) marker, enabling exact alignment between what the participant sees and the corresponding EEG response.

## Multi-Stream LSL Orchestrator

A multi-process orchestrator manages 4 concurrent LSL streams simultaneously: EEG data, stimulus markers, voice annotations, and system events. Each stream runs in its own process to avoid blocking, with the orchestrator handling synchronisation, buffering, and graceful shutdown across all streams.

## Voice Annotation Pipeline

Participants can provide spoken feedback on stimuli in real time. The pipeline uses voice activity detection (VAD) to segment speech from silence, then feeds detected segments to OpenAI's Whisper model for transcription. Transcribed annotations are timestamped and aligned with the corresponding stimulus markers.

## EEG Integration

The system interfaces with EEG hardware through LSL, receiving raw neural data streams. Markers from the stimulus presentation are embedded in the EEG recording, allowing post-hoc analysis of event-related potentials (ERPs) and other neural responses tied to specific visual stimuli.

## Temporal Analysis

All data streams share a common time base through LSL's clock synchronisation. This enables cross-modal analysis linking neural responses, stimulus timing, and participant feedback into a unified dataset suitable for training RLHF reward models.
