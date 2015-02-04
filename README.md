# Piss-off-Text
Make a prank to your designer friend

## What is this?
This is the script that plays witht text kerning and brings the headache to the reader.

## Ok gookle, let's make it!
1. Add the `piss-off-text.js` (or the minified one) to the page.
2. Run `pissOffText();` and enjoy.
3. Extra params can be passed into the function as the object, for instance, `pissOffText({text: 'article > p'});`. Params are:
  * **text** &mdash; means the CSS selector for elements containing text to modify.  
   This allows to patch the particular _part_ of the page, not the entire one.  
   Defaults to `"p"`.
  * **level** &mdash; one of `"letters"` (default) or `"words"`. Means how dep the distortion will work.
  * **distortion** &mdash; is the object that contains one or both of `"v"` and `"h"`properties. It describes the distortion amplitude: **0** leaves the chunks untouched, **100** shuffles 'em hard.  
   Defauls to `{v: 0, h: 50}`.

## Inspered by
http://i.imgur.com/9uspHVL.jpg

## Credits
Roman Melnyk <email.rom.melnyk@gmail.com>
