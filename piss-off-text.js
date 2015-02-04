(function () {
	if (window.pissOffText) {
		return;
	}

	var ___slice = Array.prototype.slice;

	var _manageCfg = function (_cfg) {
		// ------------ the default config ------------
		var CFG = {
			text: 'p', // or any other valid selector
			level: 'letters', // or "words"
			distortion: { // sets the vertical and horizontal distortion for each element, 0...100 (none...max)
				v: 0,
				h: 10
			}
		};

		_cfg = _cfg || {};

		if (typeof _cfg.text === 'string') { CFG.text = _cfg.text; }
		if (_cfg.level === 'letters' || _cfg.level === 'words') { CFG.level = _cfg.level; }
		if (_cfg.distortion) {
			if (_cfg.distortion.v !== undefined) { CFG.distortion.v = +_cfg.distortion.v || 0; }
			if (_cfg.distortion.h !== undefined) { CFG.distortion.h = +_cfg.distortion.h || 0; }
		}

		return CFG;
	};

	var _traverseDom = function (elm, callback) {
		if (elm.nodeType === document.TEXT_NODE) {
			callback(elm);
		} else if (elm.nodeType === document.ELEMENT_NODE) {
			___slice.call(elm.childNodes).forEach(function (childElm) {
				_traverseDom(childElm, callback);
			});
		}
	};

	var _splitText = function (text, level) {
		var sep = level === 'letters' ? '' : ' ';
		return ret = (text || '').split(sep);
	};

	var _wrapInSpan = function (text) {
		var span = document.createElement('span');
		span.innerText = text;
		return span;
	};

	var _getDistortion = function (level) {
		return (Math.random() * level * 2 / 100 - level / 100).toFixed(4);
	};

	// ------------ actually, the main method ------------
	window.pissOffText = function (_cfg) {
		var CFG = _manageCfg(_cfg);

		___slice.call(document.querySelectorAll(CFG.text)).forEach(function (nodeWithText) {
			_traverseDom(nodeWithText, function (elm) {
				var text = elm.data,
					wrapper = document.createElement('span');

				elm.parentNode.replaceChild(wrapper, elm);

				_splitText(text, CFG.level).forEach(function (textChunk) {
					var span = _wrapInSpan(textChunk);
					span.style.position = 'relative';
					span.style.left = _getDistortion(CFG.distortion.h) + 'em';
					span.style.top = _getDistortion(CFG.distortion.v) + 'em';
					wrapper.appendChild(span);
				});
			})
		});
	}
})();
