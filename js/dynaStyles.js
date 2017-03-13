/**
 * Created by pdamerval on 3/12/2017.
 */

function CSS(sheet) {

  if (sheet.constructor.name === 'CSSStyleSheet' || sheet instanceof CSSStyleSheet)
    this.sheet = sheet;
  else if (sheet.constructor.name === 'HTMLStyleElement' || sheet instanceof HTMLStyleElement)
    this.sheet = sheet.sheet;
  else
    throw new TypeError(sheet + ' is not a StyleSheet');
}

CSS.prototype = {
  constructor: CSS,
  add: function( cssText ) {
    return this.sheet.insertRule(cssText, this.sheet.cssRules.length);
  },
  del: function(index) {
    return this.sheet.deleteRule(index);
  },
  edit: function( index, cssText) {
    var i;
    if( index < 0 )
      index = 0;
    if( index >= this.sheet.cssRules.length )
      return this.add(cssText);
    i = this.sheet.insertRule(cssText, index);
    if (i === index)
      this.sheet.deleteRule(i + 1);
    return i;
  }
};

/* Instantiate and grab pointer to dynamic header style tag */
var headerStyle = new CSS(document.head.appendChild(document.createElement('style')));



