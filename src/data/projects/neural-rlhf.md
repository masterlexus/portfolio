## Overview

Neural RLHF Frontend is a real-time stimulus presentation and data collection system for EEG, built in 2 days at the London Neurotech Hackathon. It shows words one at a time using rapid serial visual presentation (RSVP), records how the participant reacts to each word through EEG and spoken feedback, and lines everything up on a shared clock so the reactions can later be used as a human feedback signal.

The codebase is about 5,300 lines of modular Python across 5 packages, with no circular dependencies.

## RSVP word display

Each word onset is pushed as a Lab Streaming Layer (LSL) marker with millisecond precision, so EEG epochs can be locked to exactly what the participant saw. There are two display backends: OpenGL through PsychoPy (vsync-locked) and a browser backend using requestAnimationFrame. Both time stimuli by counting frames rather than reading a clock, which keeps onsets aligned with the actual screen refresh.

## Multi-stream orchestrator

A multi-process orchestrator synchronises 4 independent LSL streams (RSVP, voice, vision and EEG) through LSL's global clock, with marker collection running on daemon threads so no stream blocks another.

## Voice annotation

Participants can react out loud. Silero VAD detects speech onset, faster-whisper (tiny.en, int8) transcribes the segment, and a keyword-based classifier assigns a sentiment. Every annotation carries an LSL timestamp.

## EEG emotion prediction

EEG from BCICore8 hardware is processed in a subprocess with real-time feature extraction, and sklearn models predict valence and arousal.

## Analysis and interface

A 6-phase temporal analysis pipeline associates verbal feedback and EEG emotion predictions with individual words using the LSL timestamps. A single FastAPI and WebSocket server drives a phase-based state machine, so the RSVP display and the feedback review run in one browser tab without page reloads.
