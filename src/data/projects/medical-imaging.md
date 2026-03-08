## Overview

A comparative study of neural network architectures for skin lesion classification, built as part of the Introduction to Machine Learning course at EPFL. The project uses the DermaMNIST medical dataset and implements multiple architectures from scratch in PyTorch.

## Architectures

The project implements and compares two families of neural networks:

- **MLPs (Multi-Layer Perceptrons):** Baseline fully-connected networks with varying depths and widths to establish performance benchmarks.
- **CNNs (Convolutional Neural Networks):** Custom architectures inspired by LeNet and AlexNet, with configurable convolutional layers, pooling strategies, and activation functions.

Each architecture was designed to be modular, allowing systematic variation of hyperparameters for controlled experiments.

## Hyperparameter Optimization

A comprehensive experimental framework was built to explore the impact of:

- **Model size and depth:** Number of layers and neurons per layer.
- **Activation functions:** Sigmoid, ReLU, and Tanh, compared across architectures.
- **Pooling strategies:** Max pooling vs. average pooling in CNN architectures.
- **Learning rates and batch sizes:** Grid search across standard ranges.

Results were tracked systematically and visualized using Matplotlib to identify optimal configurations.

## Training Pipeline

The training pipeline supports CUDA acceleration for GPU training, with automatic device detection and data transfer. It includes real-time performance visualization, checkpoint saving, and statistical evaluation using both accuracy and macro F1-score metrics.

The macro F1-score is particularly important for medical imaging tasks where class imbalance is common -- it ensures the model performs well across all lesion types, not just the most frequent ones.
