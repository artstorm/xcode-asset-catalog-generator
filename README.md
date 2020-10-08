# Xcode Asset Catalog Generator

![Swift Gamedev](https://img.shields.io/badge/swift-gamedev-brightgreen.svg?style=flat)
[![Twitter: @artstorm](https://img.shields.io/badge/twitter-@artstorm-blue.svg?style=flat)](https://twitter.com/artstorm)

Xcode asset catalog generator for game development. It's a batch processing command line tool that builds the Xcode asset catalog from source assets and generates images with optimized sizes for iPad, iPhone, AppleTV and Mac.

## Features

* Creates sizes in @1x, @2x and @3x per device type.
* Saves the output directly to the asset catalog in Xcode.
* Handles numbered image sequences.
* Handles Sprite Atlas generation.
* Handles vector images as Universal, Single Scale. PDF and SVG (Xcode 12+).
* Specifically targets game development with SpriteKit.
* Tracks converted images so on each re-generation only new or updated source images are generated to the asset catalog.
* In early development, available as-is. The same goes for the documentation.

I've developed the tool for personal usage, so everything is subject to change between versions and it does have quite a few rough edges.

## Usage

[![Xcode Asset Catalog Generator - Usage Tutorial](https://img.youtube.com/vi/r7ceDi5FQ7c/0.jpg)](https://www.youtube.com/watch?v=r7ceDi5FQ7c)

I recommend watching the [Usage Tutorial Video](https://www.youtube.com/watch?v=r7ceDi5FQ7c) to quickly get an understanding of how the tool works and how to use it.

### Reference

The [wiki](https://github.com/artstorm/xc-assetcat-gen/wiki
) has more detailed documentation of how to configure and use the tool.

### Installation

1. Node.js is required for the tool to work which can easily be installed using [Homebrew](https://formulae.brew.sh/formula/node).
2. Clone or download this repository.
3. Install the dependencies. `npm install`.
4. Configure your asset build. (see [wiki](https://github.com/artstorm/xc-assetcat-gen/wiki
)).

### Generate

Once the tool is installed and configured, assets can be generated from the command line. The tool provides a dev mode to try the generation to an `output` folder in the tool's installation folder.

```
# Builds the assets to a target folder for dev purposes.
npm run dev

# Builds the assets to the assets folder in Xcode.
npm run prod
```
