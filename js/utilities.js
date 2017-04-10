/**
 * Created by pdamerval on 4/6/2017.
 */

function popup(width, height, url, top, left, returnResult) {
  if (width > screen.availWidth) {
    width = (screen.availWidth - 100)
  }
  if (height > screen.availHeight) {
    height = (screen.availHeight - 100)
  }
  if (top === null) top = (screen.availHeight - height) / 2;
  if (left === null) left = (screen.availWidth - width) / 2;

  var args = "scrollbars=yes,toolbar=no,directories=no,menubar=no,location=no,resizable=yes,status=no,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left;
  // create a window name with _ in place of any non-word characters
  var windowName = url.replace(/\W/g, "_");
  var popWindow = window.open(url, windowName, args);
  try {
    popWindow.focus();
  } catch (err) {
    // ie gives an error if window is "inline pdf" and same already exists; ignore it
  }
  // if we always return this, some browsers show a page with the text: [object]
  if (returnResult === true){
    return popWindow;
  }
}
