## Overview

Arago is building an AI accelerator system-on-chip that uses optical computing for matrix multiplication. PyTorch is the device's programming interface, so the software stack has to carry a model all the way from a PyTorch program on the host down to firmware running on the chip.

I joined on a fixed-term contract from May to September 2026. Two weeks in, I took ownership of the full software stack: the PyTorch backend, the kernel driver, the user-space runtime and the on-device firmware. I led a team of three interns, each owning one part of the stack, while I worked across all layers with a focus on the firmware.

## Firmware for a new SoC

The existing software targeted earlier prototypes, so I rebuilt all on-device firmware from scratch for the new SoC, and ported and reworked the host-side components that could be reused. The stack is mostly C++, with C in the kernel driver and low-level drivers.

## Host-device communication

I designed the protocol that the host and the device use to exchange commands and completions, and a memory abstraction layer so that host code never handles device physical addresses. This keeps the PyTorch backend and runtime independent of where data actually lives on the chip.

## Kernels by declaration

The device implements PyTorch operations as custom kernels. I built a Python code generator that reads the kernel declarations and generates the C++ serialization and deserialization code on both sides. Adding a new kernel only requires declaring it; the plumbing is generated.

Along the way I learned a lot about PyTorch internals: registering a custom device, implementing ATen kernels, and how dispatch prioritizes fused kernels before falling back to decomposed ones.

## Debugging in simulation

Firmware runs in RTL simulation (Cadence Xcelium) and on virtual platforms (Arm Fast Models). Early on I wrote bare-metal test programs to support RTL verification, and most debugging happened through simulation traces. Builds and pipelines ran on CMake and GitLab CI.

<!--
## Outcome

At the end of the contract I was offered a full-time role to continue leading this work. I declined it to start the MSc in Advanced Computing at Imperial College London.
-->
