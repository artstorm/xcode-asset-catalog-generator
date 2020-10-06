/**
 * Asset Catalog Generator
 *
 * Asset Catalog Format Reference:
 * https://developer.apple.com/library/archive/documentation/Xcode/Reference/xcode_ref-Asset_Catalog_Format/index.html#//apple_ref/doc/uid/TP40015170-CH18-SW1
 */
const config = require("./config");
const Generator = require("xc-assetcat-gen");

// Create a config object that can be accessed from the generator.
this.config = {
  source_images_root: config.source_images_root,
  asset_catalog_root: config.asset_catalog_root,
  author: config.author
};

// Parse the assets.
const parser = new Generator.Parser(config.assets);
parser.parse();
