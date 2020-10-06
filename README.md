# Xcode Asset Catalog Generator

Xcode asset catalog generator for game development.
Builds the Xcode asset catalog from source image assets with optimized sizes for iPad, iPhone, AppleTV and Mac.

## Features

* Specifically targets game development with SpriteKit.
* Creates sizes in 1x, 2x and 3x per device type.
* Saves the output directly to the asset catalog in Xcode.
* Handles numbered image sequences.
* Hanldes Sprite Atlas generation.
* Handles vector images as Universal, Single Scale. PDF and SVG (Xcode 12+).
* Tracks converted images so on each re-generation only new or updated source images are re-generated to the asset catalog.
* In early development, available as-is. The same goes for the documentation.
* ...

I've developed the tool for personal usage, so everything is subject to change between versions and it does have quite a few rough edges.

## Installation

Clone or download this repository. `git clone`

Install the dependencies. `npm install`