## Overview

An interactive real-time 3D underwater scene built entirely with WebGL and custom GLSL shaders as part of the Computer Graphics course at EPFL. Every visual effect in the scene is implemented through hand-written vertex and fragment shaders -- no high-level graphics libraries or engines.

## Boids Flocking Algorithm

The fish schooling behavior is powered by Craig Reynolds' Boids algorithm, implementing the three classic rules:

- **Separation:** Fish steer away from nearby neighbors to avoid crowding.
- **Alignment:** Fish match the heading and speed of their local flock.
- **Cohesion:** Fish steer toward the average position of nearby neighbors.

The result is emergent group behavior that looks organic and natural, with fish forming schools that flow through the underwater environment, splitting around obstacles and reforming on the other side.

## Procedural Terrain Generation

The seabed is generated procedurally using layered noise functions (Perlin/simplex noise), producing natural-looking underwater sand topology with ridges, valleys, and gradual elevation changes. The terrain is generated at runtime, so every session can produce a unique landscape.

## Atmospheric Rendering

Underwater atmosphere is simulated through distance-based exponential fog with blue color grading. Objects further from the camera fade into a deep blue haze, mimicking how water absorbs light at different wavelengths. This creates a convincing sense of depth and underwater immersion.

## Camera System

A first-person camera system allows free exploration of the scene using WASD movement controls and mouse look. The camera uses view matrix transformations to handle orientation and position, with smooth event handling for a fluid exploration experience.
