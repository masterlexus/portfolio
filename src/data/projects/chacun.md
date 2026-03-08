## Overview

A digital implementation of a Carcassonne-based board game (*Chasseurs et Cueilleurs*) built in Java for 2-5 players as part of the Practice of Object-Oriented Programming course at EPFL. The project features complete game logic, a graphical interface built with JavaFX, and networked multiplayer support.

## Game State Management

The core engine handles the full complexity of Carcassonne-style gameplay:

- **Tile placement:** Validation of legal placements based on edge matching rules, with rotation support.
- **Area management:** Tracking of forests, rivers, meadows, and lakes as they grow and merge across placed tiles.
- **Zone partitioning:** Determining which areas belong to which players through connected component analysis.
- **Scoring algorithms:** Computing scores based on completed features, majority control, and end-game bonuses.

All game state is modeled using immutable data structures, making it easy to reason about state transitions and enabling undo functionality.

## Graphical Interface

The GUI is built with JavaFX following the Model-View-Controller pattern. It features:

- Interactive tile placement with visual feedback for legal positions.
- Real-time score tracking and player status display.
- Event handling and property bindings for responsive UI updates.

## OOP Design

The project served as a deep exercise in object-oriented design, applying:

- **Immutable data structures** for safe state management.
- **Builder patterns** for constructing complex game objects.
- **Generics with bounded type parameters** for type-safe collections.
- **Design patterns:** Observer (UI updates), Decorator (tile modifications), Composite (area hierarchies), and Adapter (network protocol translation).

## Networked Multiplayer

Players can connect across different machines through a custom networking layer. Game actions are serialized into a compact binary format for transmission, keeping network overhead minimal while supporting real-time remote play.

The project was developed over a 12-week iterative process with version control, code reviews, and consistent coding standards.
