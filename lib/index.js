'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
}();

var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	};

var _react = require('react');

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : {default: obj};
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}
	return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: {
			value: subClass,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});
	if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var processColor = _reactNative2.default.processColor;

/** A native reference to the chart view */

var CHART_REF = 'chart';

var processData = function processData(chartData) {
	return chartData.map(function (d) {
		return _extends({}, d, {
			color: processColor(d.color),
			fillColor: processColor(d.fillColor),
			dataPointColor: processColor(d.dataPointColor),
			dataPointFillColor: processColor(d.dataPointFillColor),
			highlightColor: processColor(d.highlightColor),
			fillGradient: Array.isArray(d.fillGradient) ? [processColor(d.fillGradient[0]), processColor(d.fillGradient[1])] : undefined,
			sliceColors: Array.isArray(d.sliceColors) ? d.sliceColors.map(function (c) {
				return c ? processColor(c) : processColor('blue');
			}) : undefined
		});
	});
};

/** Our bridge component */

var RNChart = function (_React$Component) {
	_inherits(RNChart, _React$Component);

	function RNChart() {
		_classCallCheck(this, RNChart);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(RNChart).apply(this, arguments));
	}

	_createClass(RNChart, [{
		key: 'render',


		/** Render the native component with the correct props */
		value: function render() {
			var convertedProps = _extends({}, this.props, {
				axisColor: processColor(this.props.axisColor),
				axisTitleColor: processColor(this.props.axisTitleColor),
				chartTitleColor: processColor(this.props.chartTitleColor),
				gridColor: processColor(this.props.gridColor),
				labelTextColor: processColor(this.props.labelTextColor),
				chartData: this.props.chartData ? processData(this.props.chartData) : undefined
			});
			return _react.createElement(RNChartView, _extends({ref: CHART_REF}, convertedProps));
		}
	}]);

	return RNChart;
}(_react.Component);

/** The native chart view */


RNChart.propTypes = {

	chartData: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		data: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
		name: _react.PropTypes.string,
		type: _react.PropTypes.oneOf(['line', 'bar', 'pie']),
		fillColor: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
		fillGradient: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])),
		cornerRadius: _react.PropTypes.number,
		lineWidth: _react.PropTypes.number,
		highlightColor: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
		highlightIndices: _react.PropTypes.arrayOf(_react.PropTypes.number),
		highlightRadius: _react.PropTypes.number,
		widthPercent: _react.PropTypes.number,
		showDataPoint: _react.PropTypes.bool,
		dataPointColor: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
		dataPointFillColor: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
		dataPointRadius: _react.PropTypes.number,
		pieAngle: _react.PropTypes.number,
		pieCenterRatio: _react.PropTypes.number,
		sliceColors: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]))
	})).isRequired,

	animationDuration: _react.PropTypes.number,
	axisColor: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	axisLineWidth: _react.PropTypes.number,
	axisTitleColor: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	axisTitleFontSize: _react.PropTypes.number,
	chartFontSize: _react.PropTypes.number,
	chartTitle: _react.PropTypes.string,
	chartTitleColor: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	gridColor: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	gridLineWidth: _react.PropTypes.number,
	hideHorizontalGridLines: _react.PropTypes.bool,
	hideVerticalGridLines: _react.PropTypes.bool,
	labelFontSize: _react.PropTypes.number,
	labelTextColor: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	showAxis: _react.PropTypes.bool,
	showGrid: _react.PropTypes.bool,
	showXAxisLabels: _react.PropTypes.bool,
	showYAxisLabels: _react.PropTypes.bool,
	style: _react.PropTypes.any,
	tightBounds: _react.PropTypes.bool,
	verticalGridStep: _react.PropTypes.number,
	xAxisTitle: _react.PropTypes.string,
	xLabels: _react.PropTypes.array.isRequired,
	yAxisTitle: _react.PropTypes.string
};
exports.default = RNChart;
var RNChartView = (0, _reactNative.requireNativeComponent)('RNChartView', RNChart);
