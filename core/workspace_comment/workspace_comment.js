/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2017 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Object representing a code comment on the workspace.
 * @author fenichel@google.com (Rachel Fenichel)
 */
'use strict';

goog.provide('Blockly.WorkspaceComment');

/**
 * Class for a workspace comment.
 * @constructor
 */
Blockly.WorkspaceComment = function() {
  console.log('New workspace comment!');

  /**
   * @type {number}
   * @private
   */
  this.height_ = null;
  /**
   * @type {number}
   * @private
   */
  this.width_ = null;
};

/**
 * Get comment height.
 * @return {number} comment height.
 */
Blockly.WorkspaceComment.prototype.getHeight = function() {
  return this.height_;
};

/**
 * Set comment height.
 * @param {number} height comment height.
 */
Blockly.WorkspaceComment.prototype.setHeight = function(height) {
  this.height_ = height;
};

/**
 * Get comment width.
 * @return {number} comment width.
 */
Blockly.WorkspaceComment.prototype.getWidth = function() {
  return this.width_;
};

/**
 * Set comment width.
 * @param {number} width comment width.
 */
Blockly.WorkspaceComment.prototype.setWidth = function(width) {
  this.width_ = width;
};