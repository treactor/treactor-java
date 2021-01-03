/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(102), exports);
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(103), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(101), exports);
__exportStar(__webpack_require__(36), exports);
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(104), exports);
__exportStar(__webpack_require__(106), exports);
__exportStar(__webpack_require__(105), exports);
__exportStar(__webpack_require__(107), exports);
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(108), exports);
__exportStar(__webpack_require__(15), exports);
__exportStar(__webpack_require__(120), exports);
__exportStar(__webpack_require__(121), exports);
__exportStar(__webpack_require__(122), exports);
__exportStar(__webpack_require__(123), exports);
__exportStar(__webpack_require__(124), exports);
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(119), exports);
__exportStar(__webpack_require__(126), exports);
__exportStar(__webpack_require__(127), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propagation = exports.metrics = exports.trace = exports.context = void 0;
__exportStar(__webpack_require__(64), exports);
__exportStar(__webpack_require__(65), exports);
__exportStar(__webpack_require__(66), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(67), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(68), exports);
__exportStar(__webpack_require__(69), exports);
__exportStar(__webpack_require__(70), exports);
__exportStar(__webpack_require__(71), exports);
__exportStar(__webpack_require__(72), exports);
__exportStar(__webpack_require__(73), exports);
__exportStar(__webpack_require__(74), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(75), exports);
__exportStar(__webpack_require__(76), exports);
__exportStar(__webpack_require__(84), exports);
__exportStar(__webpack_require__(79), exports);
__exportStar(__webpack_require__(85), exports);
__exportStar(__webpack_require__(87), exports);
__exportStar(__webpack_require__(86), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(80), exports);
__exportStar(__webpack_require__(81), exports);
__exportStar(__webpack_require__(89), exports);
__exportStar(__webpack_require__(90), exports);
__exportStar(__webpack_require__(88), exports);
__exportStar(__webpack_require__(82), exports);
__exportStar(__webpack_require__(91), exports);
__exportStar(__webpack_require__(83), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(92), exports);
__exportStar(__webpack_require__(94), exports);
__exportStar(__webpack_require__(93), exports);
var spancontext_utils_1 = __webpack_require__(12);
Object.defineProperty(exports, "INVALID_SPANID", { enumerable: true, get: function () { return spancontext_utils_1.INVALID_SPANID; } });
Object.defineProperty(exports, "INVALID_TRACEID", { enumerable: true, get: function () { return spancontext_utils_1.INVALID_TRACEID; } });
Object.defineProperty(exports, "INVALID_SPAN_CONTEXT", { enumerable: true, get: function () { return spancontext_utils_1.INVALID_SPAN_CONTEXT; } });
var context_base_1 = __webpack_require__(5);
Object.defineProperty(exports, "Context", { enumerable: true, get: function () { return context_base_1.Context; } });
var context_1 = __webpack_require__(22);
/** Entrypoint for context API */
exports.context = context_1.ContextAPI.getInstance();
var trace_1 = __webpack_require__(63);
/** Entrypoint for trace API */
exports.trace = trace_1.TraceAPI.getInstance();
var metrics_1 = __webpack_require__(61);
/** Entrypoint for metrics API */
exports.metrics = metrics_1.MetricsAPI.getInstance();
var propagation_1 = __webpack_require__(62);
/** Entrypoint for propagation API */
exports.propagation = propagation_1.PropagationAPI.getInstance();
exports.default = {
    trace: exports.trace,
    metrics: exports.metrics,
    context: exports.context,
    propagation: exports.propagation,
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatorKind = exports.MetricKind = void 0;
/** The kind of metric. */
var MetricKind;
(function (MetricKind) {
    MetricKind[MetricKind["COUNTER"] = 0] = "COUNTER";
    MetricKind[MetricKind["UP_DOWN_COUNTER"] = 1] = "UP_DOWN_COUNTER";
    MetricKind[MetricKind["VALUE_RECORDER"] = 2] = "VALUE_RECORDER";
    MetricKind[MetricKind["SUM_OBSERVER"] = 3] = "SUM_OBSERVER";
    MetricKind[MetricKind["UP_DOWN_SUM_OBSERVER"] = 4] = "UP_DOWN_SUM_OBSERVER";
    MetricKind[MetricKind["VALUE_OBSERVER"] = 5] = "VALUE_OBSERVER";
})(MetricKind = exports.MetricKind || (exports.MetricKind = {}));
/** The kind of aggregator. */
var AggregatorKind;
(function (AggregatorKind) {
    AggregatorKind[AggregatorKind["SUM"] = 0] = "SUM";
    AggregatorKind[AggregatorKind["LAST_VALUE"] = 1] = "LAST_VALUE";
    AggregatorKind[AggregatorKind["DISTRIBUTION"] = 2] = "DISTRIBUTION";
    AggregatorKind[AggregatorKind["HISTOGRAM"] = 3] = "HISTOGRAM";
})(AggregatorKind = exports.AggregatorKind || (exports.AggregatorKind = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoundObserver = exports.BoundValueRecorder = exports.BoundUpDownCounter = exports.BoundCounter = exports.BaseBoundInstrument = void 0;
const api = __webpack_require__(1);
/**
 * This class represent the base to BoundInstrument, which is responsible for generating
 * the TimeSeries.
 */
class BaseBoundInstrument {
    constructor(labels, logger, _disabled, _valueType, _aggregator) {
        this._disabled = _disabled;
        this._valueType = _valueType;
        this._aggregator = _aggregator;
        this._labels = labels;
        this._logger = logger;
    }
    update(value) {
        if (this._disabled)
            return;
        if (typeof value !== 'number') {
            this._logger.error(`Metric cannot accept a non-number value for ${Object.values(this._labels)}.`);
            return;
        }
        if (this._valueType === api.ValueType.INT && !Number.isInteger(value)) {
            this._logger.warn(`INT value type cannot accept a floating-point value for ${Object.values(this._labels)}, ignoring the fractional digits.`);
            value = Math.trunc(value);
        }
        this._aggregator.update(value);
    }
    getLabels() {
        return this._labels;
    }
    getAggregator() {
        return this._aggregator;
    }
}
exports.BaseBoundInstrument = BaseBoundInstrument;
/**
 * BoundCounter allows the SDK to observe/record a single metric event. The
 * value of single instrument in the `Counter` associated with specified Labels.
 */
class BoundCounter extends BaseBoundInstrument {
    constructor(labels, disabled, valueType, logger, aggregator) {
        super(labels, logger, disabled, valueType, aggregator);
    }
    add(value) {
        if (value < 0) {
            this._logger.error(`Counter cannot descend for ${Object.values(this._labels)}`);
            return;
        }
        this.update(value);
    }
}
exports.BoundCounter = BoundCounter;
/**
 * BoundUpDownCounter allows the SDK to observe/record a single metric event.
 * The value of single instrument in the `UpDownCounter` associated with
 * specified Labels.
 */
class BoundUpDownCounter extends BaseBoundInstrument {
    constructor(labels, disabled, valueType, logger, aggregator) {
        super(labels, logger, disabled, valueType, aggregator);
    }
    add(value) {
        this.update(value);
    }
}
exports.BoundUpDownCounter = BoundUpDownCounter;
/**
 * BoundMeasure is an implementation of the {@link BoundMeasure} interface.
 */
class BoundValueRecorder extends BaseBoundInstrument {
    constructor(labels, disabled, valueType, logger, aggregator) {
        super(labels, logger, disabled, valueType, aggregator);
    }
    record(value) {
        this.update(value);
    }
}
exports.BoundValueRecorder = BoundValueRecorder;
/**
 * BoundObserver is an implementation of the {@link BoundObserver} interface.
 */
class BoundObserver extends BaseBoundInstrument {
    constructor(labels, disabled, valueType, logger, aggregator) {
        super(labels, logger, disabled, valueType, aggregator);
    }
}
exports.BoundObserver = BoundObserver;
//# sourceMappingURL=BoundInstrument.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Metric = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const api = __webpack_require__(1);
const core_1 = __webpack_require__(0);
const Utils_1 = __webpack_require__(140);
/** This is a SDK implementation of {@link Metric} interface. */
class Metric {
    constructor(_name, _options, _kind, resource, instrumentationLibrary) {
        var _a;
        this._name = _name;
        this._options = _options;
        this._kind = _kind;
        this.resource = resource;
        this.instrumentationLibrary = instrumentationLibrary;
        this._instruments = new Map();
        this._disabled = !!_options.disabled;
        this._valueType =
            typeof _options.valueType === 'number'
                ? _options.valueType
                : api.ValueType.DOUBLE;
        this._logger = (_a = _options.logger) !== null && _a !== void 0 ? _a : new core_1.NoopLogger();
        this._descriptor = this._getMetricDescriptor();
    }
    /**
     * Returns an Instrument associated with specified Labels.
     * It is recommended to keep a reference to the Instrument instead of always
     * calling this method for each operation.
     * @param labels key-values pairs that are associated with a specific metric
     *     that you want to record.
     */
    bind(labels) {
        const hash = Utils_1.hashLabels(labels);
        if (this._instruments.has(hash))
            return this._instruments.get(hash);
        const instrument = this._makeInstrument(labels);
        this._instruments.set(hash, instrument);
        return instrument;
    }
    /**
     * Removes the Instrument from the metric, if it is present.
     * @param labels key-values pairs that are associated with a specific metric.
     */
    unbind(labels) {
        this._instruments.delete(Utils_1.hashLabels(labels));
    }
    /**
     * Clears all Instruments from the Metric.
     */
    clear() {
        this._instruments.clear();
    }
    getMetricRecord() {
        return new Promise(resolve => {
            resolve(Array.from(this._instruments.values()).map(instrument => ({
                descriptor: this._descriptor,
                labels: instrument.getLabels(),
                aggregator: instrument.getAggregator(),
                resource: this.resource,
                instrumentationLibrary: this.instrumentationLibrary,
            })));
        });
    }
    _getMetricDescriptor() {
        return {
            name: this._name,
            description: this._options.description || '',
            unit: this._options.unit || '1',
            metricKind: this._kind,
            valueType: this._valueType,
        };
    }
}
exports.Metric = Metric;
//# sourceMappingURL=Metric.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(96), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(95), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(180), exports);
__exportStar(__webpack_require__(53), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(181), exports);
__exportStar(__webpack_require__(182), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_BACKWARDS_COMPATIBILITY_VERSION = exports.makeGetter = exports._global = exports.GLOBAL_TRACE_API_KEY = exports.GLOBAL_PROPAGATION_API_KEY = exports.GLOBAL_METRICS_API_KEY = exports.GLOBAL_CONTEXT_MANAGER_API_KEY = void 0;
var platform_1 = __webpack_require__(78);
exports.GLOBAL_CONTEXT_MANAGER_API_KEY = Symbol.for('io.opentelemetry.js.api.context');
exports.GLOBAL_METRICS_API_KEY = Symbol.for('io.opentelemetry.js.api.metrics');
exports.GLOBAL_PROPAGATION_API_KEY = Symbol.for('io.opentelemetry.js.api.propagation');
exports.GLOBAL_TRACE_API_KEY = Symbol.for('io.opentelemetry.js.api.trace');
exports._global = platform_1._globalThis;
/**
 * Make a function which accepts a version integer and returns the instance of an API if the version
 * is compatible, or a fallback version (usually NOOP) if it is not.
 *
 * @param requiredVersion Backwards compatibility version which is required to return the instance
 * @param instance Instance which should be returned if the required version is compatible
 * @param fallback Fallback instance, usually NOOP, which will be returned if the required version is not compatible
 */
function makeGetter(requiredVersion, instance, fallback) {
    return function (version) {
        return version === requiredVersion ? instance : fallback;
    };
}
exports.makeGetter = makeGetter;
/**
 * A number which should be incremented each time a backwards incompatible
 * change is made to the API. This number is used when an API package
 * attempts to access the global API to ensure it is getting a compatible
 * version. If the global API is not compatible with the API package
 * attempting to get it, a NOOP API implementation will be returned.
 */
exports.API_BACKWARDS_COMPATIBILITY_VERSION = 0;
//# sourceMappingURL=global-utils.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(164), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(171), exports);
__exportStar(__webpack_require__(167), exports);
__exportStar(__webpack_require__(173), exports);
__exportStar(__webpack_require__(172), exports);
__exportStar(__webpack_require__(174), exports);
__exportStar(__webpack_require__(175), exports);
__exportStar(__webpack_require__(176), exports);
__exportStar(__webpack_require__(177), exports);
__exportStar(__webpack_require__(51), exports);
__exportStar(__webpack_require__(170), exports);
__exportStar(__webpack_require__(178), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOOP_TRACER = exports.NoopTracer = void 0;
var NoopSpan_1 = __webpack_require__(28);
/**
 * No-op implementations of {@link Tracer}.
 */
var NoopTracer = /** @class */ (function () {
    function NoopTracer() {
    }
    NoopTracer.prototype.getCurrentSpan = function () {
        return NoopSpan_1.NOOP_SPAN;
    };
    // startSpan starts a noop span.
    NoopTracer.prototype.startSpan = function (name, options) {
        return NoopSpan_1.NOOP_SPAN;
    };
    NoopTracer.prototype.withSpan = function (span, fn) {
        return fn();
    };
    NoopTracer.prototype.bind = function (target, span) {
        return target;
    };
    return NoopTracer;
}());
exports.NoopTracer = NoopTracer;
exports.NOOP_TRACER = new NoopTracer();
//# sourceMappingURL=NoopTracer.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOOP_TRACER_PROVIDER = exports.NoopTracerProvider = void 0;
var NoopTracer_1 = __webpack_require__(10);
/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */
var NoopTracerProvider = /** @class */ (function () {
    function NoopTracerProvider() {
    }
    NoopTracerProvider.prototype.getTracer = function (_name, _version) {
        return NoopTracer_1.NOOP_TRACER;
    };
    return NoopTracerProvider;
}());
exports.NoopTracerProvider = NoopTracerProvider;
exports.NOOP_TRACER_PROVIDER = new NoopTracerProvider();
//# sourceMappingURL=NoopTracerProvider.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isSpanContextValid = exports.isValidSpanId = exports.isValidTraceId = exports.INVALID_SPAN_CONTEXT = exports.INVALID_TRACEID = exports.INVALID_SPANID = void 0;
var trace_flags_1 = __webpack_require__(31);
var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
exports.INVALID_SPANID = '0000000000000000';
exports.INVALID_TRACEID = '00000000000000000000000000000000';
exports.INVALID_SPAN_CONTEXT = {
    traceId: exports.INVALID_TRACEID,
    spanId: exports.INVALID_SPANID,
    traceFlags: trace_flags_1.TraceFlags.NONE,
};
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== exports.INVALID_TRACEID;
}
exports.isValidTraceId = isValidTraceId;
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== exports.INVALID_SPANID;
}
exports.isValidSpanId = isValidSpanId;
/**
 * Returns true if this {@link SpanContext} is valid.
 * @return true if this {@link SpanContext} is valid.
 */
function isSpanContextValid(spanContext) {
    return (isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId));
}
exports.isSpanContextValid = isSpanContextValid;
//# sourceMappingURL=spancontext-utils.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInstrumentationSuppressed = exports.unsuppressInstrumentation = exports.suppressInstrumentation = exports.getParentSpanContext = exports.setExtractedSpanContext = exports.getExtractedSpanContext = exports.setActiveSpan = exports.getActiveSpan = exports.SUPPRESS_INSTRUMENTATION_KEY = exports.ACTIVE_SPAN_KEY = void 0;
const context_base_1 = __webpack_require__(5);
/**
 * Active span key
 */
exports.ACTIVE_SPAN_KEY = context_base_1.Context.createKey('OpenTelemetry Context Key ACTIVE_SPAN');
const EXTRACTED_SPAN_CONTEXT_KEY = context_base_1.Context.createKey('OpenTelemetry Context Key EXTRACTED_SPAN_CONTEXT');
/**
 * Shared key for indicating if instrumentation should be suppressed beyond
 * this current scope.
 */
exports.SUPPRESS_INSTRUMENTATION_KEY = context_base_1.Context.createKey('OpenTelemetry Context Key SUPPRESS_INSTRUMENTATION');
/**
 * Return the active span if one exists
 *
 * @param context context to get span from
 */
function getActiveSpan(context) {
    return context.getValue(exports.ACTIVE_SPAN_KEY) || undefined;
}
exports.getActiveSpan = getActiveSpan;
/**
 * Set the active span on a context
 *
 * @param context context to use as parent
 * @param span span to set active
 */
function setActiveSpan(context, span) {
    return context.setValue(exports.ACTIVE_SPAN_KEY, span);
}
exports.setActiveSpan = setActiveSpan;
/**
 * Get the extracted span context from a context
 *
 * @param context context to get span context from
 */
function getExtractedSpanContext(context) {
    return (context.getValue(EXTRACTED_SPAN_CONTEXT_KEY) || undefined);
}
exports.getExtractedSpanContext = getExtractedSpanContext;
/**
 * Set the extracted span context on a context
 *
 * @param context context to set span context on
 * @param spanContext span context to set
 */
function setExtractedSpanContext(context, spanContext) {
    return context.setValue(EXTRACTED_SPAN_CONTEXT_KEY, spanContext);
}
exports.setExtractedSpanContext = setExtractedSpanContext;
/**
 * Get the span context of the parent span if it exists,
 * or the extracted span context if there is no active
 * span.
 *
 * @param context context to get values from
 */
function getParentSpanContext(context) {
    var _a;
    return ((_a = getActiveSpan(context)) === null || _a === void 0 ? void 0 : _a.context()) || getExtractedSpanContext(context);
}
exports.getParentSpanContext = getParentSpanContext;
/**
 * Sets value on context to indicate that instrumentation should
 * be suppressed beyond this current scope.
 *
 * @param context context to set the suppress instrumentation value on.
 */
function suppressInstrumentation(context) {
    return context.setValue(exports.SUPPRESS_INSTRUMENTATION_KEY, true);
}
exports.suppressInstrumentation = suppressInstrumentation;
/**
 * Sets value on context to indicate that instrumentation should
 * no-longer be suppressed beyond this current scope.
 *
 * @param context context to set the suppress instrumentation value on.
 */
function unsuppressInstrumentation(context) {
    return context.setValue(exports.SUPPRESS_INSTRUMENTATION_KEY, false);
}
exports.unsuppressInstrumentation = unsuppressInstrumentation;
/**
 * Return current suppress instrumentation value for the given context,
 * if it exists.
 *
 * @param context context check for the suppress instrumentation value.
 */
function isInstrumentationSuppressed(context) {
    return Boolean(context.getValue(exports.SUPPRESS_INSTRUMENTATION_KEY));
}
exports.isInstrumentationSuppressed = isInstrumentationSuppressed;
//# sourceMappingURL=context.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(111), exports);
__exportStar(__webpack_require__(114), exports);
__exportStar(__webpack_require__(115), exports);
__exportStar(__webpack_require__(112), exports);
__exportStar(__webpack_require__(116), exports);
__exportStar(__webpack_require__(117), exports);
__exportStar(__webpack_require__(118), exports);
__exportStar(__webpack_require__(113), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupSpansByResourceAndLibrary = exports.toCollectorExportTraceServiceRequest = exports.toCollectorTraceState = exports.toCollectorKind = exports.toCollectorResource = exports.toCollectorSpan = exports.toCollectorLinks = exports.toCollectorEvents = exports.toCollectorAnyValue = exports.toCollectorAttributeKeyValue = exports.toCollectorKeyValueList = exports.toCollectorArrayValue = exports.toCollectorAttributes = void 0;
const core = __webpack_require__(0);
const types_1 = __webpack_require__(17);
/**
 * Converts attributes to KeyValue array
 * @param attributes
 */
function toCollectorAttributes(attributes) {
    return Object.keys(attributes).map(key => {
        return toCollectorAttributeKeyValue(key, attributes[key]);
    });
}
exports.toCollectorAttributes = toCollectorAttributes;
/**
 * Converts array of unknown value to ArrayValue
 * @param values
 */
function toCollectorArrayValue(values) {
    return {
        values: values.map(value => toCollectorAnyValue(value)),
    };
}
exports.toCollectorArrayValue = toCollectorArrayValue;
/**
 * Converts attributes to KeyValueList
 * @param attributes
 */
function toCollectorKeyValueList(attributes) {
    return {
        values: toCollectorAttributes(attributes),
    };
}
exports.toCollectorKeyValueList = toCollectorKeyValueList;
/**
 * Converts key and unknown value to KeyValue
 * @param value event value
 */
function toCollectorAttributeKeyValue(key, value) {
    const anyValue = toCollectorAnyValue(value);
    return {
        key,
        value: anyValue,
    };
}
exports.toCollectorAttributeKeyValue = toCollectorAttributeKeyValue;
/**
 * Converts unknown value to AnyValue
 * @param value
 */
function toCollectorAnyValue(value) {
    const anyValue = {};
    if (typeof value === 'string') {
        anyValue.stringValue = value;
    }
    else if (typeof value === 'boolean') {
        anyValue.boolValue = value;
    }
    else if (typeof value === 'number') {
        // all numbers will be treated as double
        anyValue.doubleValue = value;
    }
    else if (Array.isArray(value)) {
        anyValue.arrayValue = toCollectorArrayValue(value);
    }
    else if (value) {
        anyValue.kvlistValue = toCollectorKeyValueList(value);
    }
    return anyValue;
}
exports.toCollectorAnyValue = toCollectorAnyValue;
/**
 *
 * Converts events
 * @param events array of events
 */
function toCollectorEvents(timedEvents) {
    return timedEvents.map(timedEvent => {
        const timeUnixNano = core.hrTimeToNanoseconds(timedEvent.time);
        const name = timedEvent.name;
        const attributes = toCollectorAttributes(timedEvent.attributes || {});
        const droppedAttributesCount = 0;
        const protoEvent = {
            timeUnixNano,
            name,
            attributes,
            droppedAttributesCount,
        };
        return protoEvent;
    });
}
exports.toCollectorEvents = toCollectorEvents;
/**
 * Converts links
 * @param span
 */
function toCollectorLinks(span) {
    return span.links.map((link) => {
        const protoLink = {
            traceId: core.hexToBase64(link.context.traceId),
            spanId: core.hexToBase64(link.context.spanId),
            attributes: toCollectorAttributes(link.attributes || {}),
            droppedAttributesCount: 0,
        };
        return protoLink;
    });
}
exports.toCollectorLinks = toCollectorLinks;
/**
 * Converts span
 * @param span
 */
function toCollectorSpan(span) {
    return {
        traceId: core.hexToBase64(span.spanContext.traceId),
        spanId: core.hexToBase64(span.spanContext.spanId),
        parentSpanId: span.parentSpanId
            ? core.hexToBase64(span.parentSpanId)
            : undefined,
        traceState: toCollectorTraceState(span.spanContext.traceState),
        name: span.name,
        kind: toCollectorKind(span.kind),
        startTimeUnixNano: core.hrTimeToNanoseconds(span.startTime),
        endTimeUnixNano: core.hrTimeToNanoseconds(span.endTime),
        attributes: toCollectorAttributes(span.attributes),
        droppedAttributesCount: 0,
        events: toCollectorEvents(span.events),
        droppedEventsCount: 0,
        status: span.status,
        links: toCollectorLinks(span),
        droppedLinksCount: 0,
    };
}
exports.toCollectorSpan = toCollectorSpan;
/**
 * Converts resource
 * @param resource
 * @param additionalAttributes
 */
function toCollectorResource(resource, additionalAttributes = {}) {
    const attr = Object.assign({}, additionalAttributes, resource ? resource.attributes : {});
    const resourceProto = {
        attributes: toCollectorAttributes(attr),
        droppedAttributesCount: 0,
    };
    return resourceProto;
}
exports.toCollectorResource = toCollectorResource;
/**
 * Converts span kind
 * @param kind
 */
function toCollectorKind(kind) {
    const collectorKind = types_1.COLLECTOR_SPAN_KIND_MAPPING[kind];
    return typeof collectorKind === 'number'
        ? collectorKind
        : types_1.opentelemetryProto.trace.v1.Span.SpanKind.SPAN_KIND_UNSPECIFIED;
}
exports.toCollectorKind = toCollectorKind;
/**
 * Converts traceState
 * @param traceState
 */
function toCollectorTraceState(traceState) {
    if (!traceState)
        return undefined;
    return traceState.serialize();
}
exports.toCollectorTraceState = toCollectorTraceState;
/**
 * Prepares trace service request to be sent to collector
 * @param spans spans
 * @param collectorExporterBase
 */
function toCollectorExportTraceServiceRequest(spans, collectorTraceExporterBase) {
    const groupedSpans = groupSpansByResourceAndLibrary(spans);
    const additionalAttributes = Object.assign({}, collectorTraceExporterBase.attributes, {
        'service.name': collectorTraceExporterBase.serviceName,
    });
    return {
        resourceSpans: toCollectorResourceSpans(groupedSpans, additionalAttributes),
    };
}
exports.toCollectorExportTraceServiceRequest = toCollectorExportTraceServiceRequest;
/**
 * Takes an array of spans and groups them by resource and instrumentation
 * library
 * @param spans spans
 */
function groupSpansByResourceAndLibrary(spans) {
    return spans.reduce((spanMap, span) => {
        //group by resource
        let resourceSpans = spanMap.get(span.resource);
        if (!resourceSpans) {
            resourceSpans = new Map();
            spanMap.set(span.resource, resourceSpans);
        }
        //group by instrumentation library
        let libSpans = resourceSpans.get(span.instrumentationLibrary);
        if (!libSpans) {
            libSpans = new Array();
            resourceSpans.set(span.instrumentationLibrary, libSpans);
        }
        libSpans.push(span);
        return spanMap;
    }, new Map());
}
exports.groupSpansByResourceAndLibrary = groupSpansByResourceAndLibrary;
/**
 * Convert to InstrumentationLibrarySpans
 * @param instrumentationLibrary
 * @param spans
 */
function toCollectorInstrumentationLibrarySpans(instrumentationLibrary, spans) {
    return {
        spans: spans.map(toCollectorSpan),
        instrumentationLibrary,
    };
}
/**
 * Returns a list of resource spans which will be exported to the collector
 * @param groupedSpans
 * @param baseAttributes
 */
function toCollectorResourceSpans(groupedSpans, baseAttributes) {
    return Array.from(groupedSpans, ([resource, libSpans]) => {
        return {
            resource: toCollectorResource(resource, baseAttributes),
            instrumentationLibrarySpans: Array.from(libSpans, ([instrumentationLibrary, spans]) => toCollectorInstrumentationLibrarySpans(instrumentationLibrary, spans)),
        };
    });
}
//# sourceMappingURL=transform.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLLECTOR_SPAN_KIND_MAPPING = exports.opentelemetryProto = exports.OT_REQUEST_HEADER = void 0;
const api_1 = __webpack_require__(1);
// header to prevent instrumentation on request
exports.OT_REQUEST_HEADER = 'x-opentelemetry-outgoing-request';
/* eslint-disable @typescript-eslint/no-namespace */
var opentelemetryProto;
(function (opentelemetryProto) {
    let metrics;
    (function (metrics) {
        let v1;
        (function (v1) {
            let MetricDescriptorType;
            (function (MetricDescriptorType) {
                MetricDescriptorType[MetricDescriptorType["INVALID_TYPE"] = 0] = "INVALID_TYPE";
                MetricDescriptorType[MetricDescriptorType["INT64"] = 1] = "INT64";
                MetricDescriptorType[MetricDescriptorType["MONOTONIC_INT64"] = 2] = "MONOTONIC_INT64";
                MetricDescriptorType[MetricDescriptorType["DOUBLE"] = 3] = "DOUBLE";
                MetricDescriptorType[MetricDescriptorType["MONOTONIC_DOUBLE"] = 4] = "MONOTONIC_DOUBLE";
                MetricDescriptorType[MetricDescriptorType["HISTOGRAM"] = 5] = "HISTOGRAM";
                MetricDescriptorType[MetricDescriptorType["SUMMARY"] = 6] = "SUMMARY";
            })(MetricDescriptorType = v1.MetricDescriptorType || (v1.MetricDescriptorType = {}));
            let MetricDescriptorTemporality;
            (function (MetricDescriptorTemporality) {
                MetricDescriptorTemporality[MetricDescriptorTemporality["INVALID_TEMPORALITY"] = 0] = "INVALID_TEMPORALITY";
                MetricDescriptorTemporality[MetricDescriptorTemporality["INSTANTANEOUS"] = 1] = "INSTANTANEOUS";
                MetricDescriptorTemporality[MetricDescriptorTemporality["DELTA"] = 2] = "DELTA";
                MetricDescriptorTemporality[MetricDescriptorTemporality["CUMULATIVE"] = 3] = "CUMULATIVE";
            })(MetricDescriptorTemporality = v1.MetricDescriptorTemporality || (v1.MetricDescriptorTemporality = {}));
        })(v1 = metrics.v1 || (metrics.v1 = {}));
    })(metrics = opentelemetryProto.metrics || (opentelemetryProto.metrics = {}));
    let trace;
    (function (trace) {
        let v1;
        (function (v1) {
            let ConstantSampler;
            (function (ConstantSampler) {
                let ConstantDecision;
                (function (ConstantDecision) {
                    ConstantDecision[ConstantDecision["ALWAYS_OFF"] = 0] = "ALWAYS_OFF";
                    ConstantDecision[ConstantDecision["ALWAYS_ON"] = 1] = "ALWAYS_ON";
                    ConstantDecision[ConstantDecision["ALWAYS_PARENT"] = 2] = "ALWAYS_PARENT";
                })(ConstantDecision = ConstantSampler.ConstantDecision || (ConstantSampler.ConstantDecision = {}));
            })(ConstantSampler = v1.ConstantSampler || (v1.ConstantSampler = {}));
            let Span;
            (function (Span) {
                let SpanKind;
                (function (SpanKind) {
                    SpanKind[SpanKind["SPAN_KIND_UNSPECIFIED"] = 0] = "SPAN_KIND_UNSPECIFIED";
                    SpanKind[SpanKind["INTERNAL"] = 1] = "INTERNAL";
                    SpanKind[SpanKind["SERVER"] = 2] = "SERVER";
                    SpanKind[SpanKind["CLIENT"] = 3] = "CLIENT";
                    SpanKind[SpanKind["PRODUCER"] = 4] = "PRODUCER";
                    SpanKind[SpanKind["CONSUMER"] = 5] = "CONSUMER";
                })(SpanKind = Span.SpanKind || (Span.SpanKind = {}));
            })(Span = v1.Span || (v1.Span = {}));
        })(v1 = trace.v1 || (trace.v1 = {}));
    })(trace = opentelemetryProto.trace || (opentelemetryProto.trace = {}));
    let common;
    (function (common) {
        let v1;
        (function (v1) {
            let ValueType;
            (function (ValueType) {
                ValueType[ValueType["STRING"] = 0] = "STRING";
                ValueType[ValueType["INT"] = 1] = "INT";
                ValueType[ValueType["DOUBLE"] = 2] = "DOUBLE";
                ValueType[ValueType["BOOL"] = 3] = "BOOL";
            })(ValueType = v1.ValueType || (v1.ValueType = {}));
        })(v1 = common.v1 || (common.v1 = {}));
    })(common = opentelemetryProto.common || (opentelemetryProto.common = {}));
})(opentelemetryProto = exports.opentelemetryProto || (exports.opentelemetryProto = {}));
/**
 * Mapping between api SpanKind and proto SpanKind
 */
exports.COLLECTOR_SPAN_KIND_MAPPING = {
    [api_1.SpanKind.INTERNAL]: opentelemetryProto.trace.v1.Span.SpanKind.INTERNAL,
    [api_1.SpanKind.SERVER]: opentelemetryProto.trace.v1.Span.SpanKind.SERVER,
    [api_1.SpanKind.CLIENT]: opentelemetryProto.trace.v1.Span.SpanKind.CLIENT,
    [api_1.SpanKind.PRODUCER]: opentelemetryProto.trace.v1.Span.SpanKind.PRODUCER,
    [api_1.SpanKind.CONSUMER]: opentelemetryProto.trace.v1.Span.SpanKind.CONSUMER,
};
//# sourceMappingURL=types.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseObserverMetric = void 0;
const BoundInstrument_1 = __webpack_require__(3);
const Metric_1 = __webpack_require__(4);
const ObserverResult_1 = __webpack_require__(41);
const NOOP_CALLBACK = () => { };
/**
 * This is a SDK implementation of Base Observer Metric.
 * All observers should extend this class
 */
class BaseObserverMetric extends Metric_1.Metric {
    constructor(name, options, _batcher, resource, metricKind, instrumentationLibrary, callback) {
        super(name, options, metricKind, resource, instrumentationLibrary);
        this._batcher = _batcher;
        this._callback = callback || NOOP_CALLBACK;
    }
    _makeInstrument(labels) {
        return new BoundInstrument_1.BoundObserver(labels, this._disabled, this._valueType, this._logger, this._batcher.aggregatorFor(this._descriptor));
    }
    createObserverResult() {
        return new ObserverResult_1.ObserverResult();
    }
    async getMetricRecord() {
        const observerResult = this.createObserverResult();
        await this._callback(observerResult);
        observerResult.values.forEach((value, labels) => {
            const instrument = this.bind(labels);
            instrument.update(value);
        });
        return super.getMetricRecord();
    }
    observation(value) {
        return {
            value,
            observer: this,
        };
    }
}
exports.BaseObserverMetric = BaseObserverMetric;
//# sourceMappingURL=BaseObserverMetric.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(49), exports);
__exportStar(__webpack_require__(158), exports);
__exportStar(__webpack_require__(50), exports);
__exportStar(__webpack_require__(159), exports);
__exportStar(__webpack_require__(156), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceTimingNames = void 0;
var PerformanceTimingNames;
(function (PerformanceTimingNames) {
    PerformanceTimingNames["CONNECT_END"] = "connectEnd";
    PerformanceTimingNames["CONNECT_START"] = "connectStart";
    PerformanceTimingNames["DOM_COMPLETE"] = "domComplete";
    PerformanceTimingNames["DOM_CONTENT_LOADED_EVENT_END"] = "domContentLoadedEventEnd";
    PerformanceTimingNames["DOM_CONTENT_LOADED_EVENT_START"] = "domContentLoadedEventStart";
    PerformanceTimingNames["DOM_INTERACTIVE"] = "domInteractive";
    PerformanceTimingNames["DOMAIN_LOOKUP_END"] = "domainLookupEnd";
    PerformanceTimingNames["DOMAIN_LOOKUP_START"] = "domainLookupStart";
    PerformanceTimingNames["ENCODED_BODY_SIZE"] = "encodedBodySize";
    PerformanceTimingNames["FETCH_START"] = "fetchStart";
    PerformanceTimingNames["LOAD_EVENT_END"] = "loadEventEnd";
    PerformanceTimingNames["LOAD_EVENT_START"] = "loadEventStart";
    PerformanceTimingNames["REDIRECT_END"] = "redirectEnd";
    PerformanceTimingNames["REDIRECT_START"] = "redirectStart";
    PerformanceTimingNames["REQUEST_START"] = "requestStart";
    PerformanceTimingNames["RESPONSE_END"] = "responseEnd";
    PerformanceTimingNames["RESPONSE_START"] = "responseStart";
    PerformanceTimingNames["SECURE_CONNECTION_START"] = "secureConnectionStart";
    PerformanceTimingNames["UNLOAD_EVENT_END"] = "unloadEventEnd";
    PerformanceTimingNames["UNLOAD_EVENT_START"] = "unloadEventStart";
})(PerformanceTimingNames = exports.PerformanceTimingNames || (exports.PerformanceTimingNames = {}));
//# sourceMappingURL=PerformanceTimingNames.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextAPI = void 0;
var context_base_1 = __webpack_require__(5);
var global_utils_1 = __webpack_require__(7);
var NOOP_CONTEXT_MANAGER = new context_base_1.NoopContextManager();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 */
var ContextAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function ContextAPI() {
    }
    /** Get the singleton instance of the Context API */
    ContextAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    };
    /**
     * Set the current context manager. Returns the initialized context manager
     */
    ContextAPI.prototype.setGlobalContextManager = function (contextManager) {
        if (global_utils_1._global[global_utils_1.GLOBAL_CONTEXT_MANAGER_API_KEY]) {
            // global context manager has already been set
            return this._getContextManager();
        }
        global_utils_1._global[global_utils_1.GLOBAL_CONTEXT_MANAGER_API_KEY] = global_utils_1.makeGetter(global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION, contextManager, NOOP_CONTEXT_MANAGER);
        return contextManager;
    };
    /**
     * Get the currently active context
     */
    ContextAPI.prototype.active = function () {
        return this._getContextManager().active();
    };
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     */
    ContextAPI.prototype.with = function (context, fn) {
        return this._getContextManager().with(context, fn);
    };
    /**
     * Bind a context to a target function or event emitter
     *
     * @param target function or event emitter to bind
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     */
    ContextAPI.prototype.bind = function (target, context) {
        if (context === void 0) { context = this.active(); }
        return this._getContextManager().bind(target, context);
    };
    ContextAPI.prototype._getContextManager = function () {
        var _a, _b;
        return ((_b = (_a = global_utils_1._global[global_utils_1.GLOBAL_CONTEXT_MANAGER_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(global_utils_1._global, global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : NOOP_CONTEXT_MANAGER);
    };
    /** Disable and remove the global context manager */
    ContextAPI.prototype.disable = function () {
        this._getContextManager().disable();
        delete global_utils_1._global[global_utils_1.GLOBAL_CONTEXT_MANAGER_API_KEY];
    };
    return ContextAPI;
}());
exports.ContextAPI = ContextAPI;
//# sourceMappingURL=context.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOOP_TEXT_MAP_PROPAGATOR = exports.NoopTextMapPropagator = void 0;
/**
 * No-op implementations of {@link TextMapPropagator}.
 */
var NoopTextMapPropagator = /** @class */ (function () {
    function NoopTextMapPropagator() {
    }
    /** Noop inject function does nothing */
    NoopTextMapPropagator.prototype.inject = function (context, carrier, setter) { };
    /** Noop extract function does nothing and returns the input context */
    NoopTextMapPropagator.prototype.extract = function (context, carrier, getter) {
        return context;
    };
    return NoopTextMapPropagator;
}());
exports.NoopTextMapPropagator = NoopTextMapPropagator;
exports.NOOP_TEXT_MAP_PROPAGATOR = new NoopTextMapPropagator();
//# sourceMappingURL=NoopTextMapPropagator.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultGetter = void 0;
/**
 * Default getter which just does a simple property access. Returns
 * undefined if the key is not set.
 *
 * @param carrier
 * @param key
 */
function defaultGetter(carrier, key) {
    return carrier[key];
}
exports.defaultGetter = defaultGetter;
//# sourceMappingURL=getter.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSetter = void 0;
/**
 * Default setter which sets value via direct property access
 *
 * @param carrier
 * @param key
 */
function defaultSetter(carrier, key, value) {
    carrier[key] = value;
}
exports.defaultSetter = defaultSetter;
//# sourceMappingURL=setter.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOOP_BATCH_OBSERVER_METRIC = exports.NOOP_SUM_OBSERVER_METRIC = exports.NOOP_UP_DOWN_SUM_OBSERVER_METRIC = exports.NOOP_VALUE_OBSERVER_METRIC = exports.NOOP_BOUND_BASE_OBSERVER = exports.NOOP_VALUE_RECORDER_METRIC = exports.NOOP_BOUND_VALUE_RECORDER = exports.NOOP_COUNTER_METRIC = exports.NOOP_BOUND_COUNTER = exports.NOOP_METER = exports.NoopBoundBaseObserver = exports.NoopBoundValueRecorder = exports.NoopBoundCounter = exports.NoopBatchObserverMetric = exports.NoopBaseObserverMetric = exports.NoopValueRecorderMetric = exports.NoopCounterMetric = exports.NoopMetric = exports.NoopMeter = void 0;
/**
 * NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
 * constant NoopMetrics for all of its methods.
 */
var NoopMeter = /** @class */ (function () {
    function NoopMeter() {
    }
    /**
     * Returns constant noop value recorder.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    NoopMeter.prototype.createValueRecorder = function (name, options) {
        return exports.NOOP_VALUE_RECORDER_METRIC;
    };
    /**
     * Returns a constant noop counter.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    NoopMeter.prototype.createCounter = function (name, options) {
        return exports.NOOP_COUNTER_METRIC;
    };
    /**
     * Returns a constant noop UpDownCounter.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    NoopMeter.prototype.createUpDownCounter = function (name, options) {
        return exports.NOOP_COUNTER_METRIC;
    };
    /**
     * Returns constant noop value observer.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the value observer callback
     */
    NoopMeter.prototype.createValueObserver = function (name, options, callback) {
        return exports.NOOP_VALUE_OBSERVER_METRIC;
    };
    /**
     * Returns constant noop batch observer.
     * @param name the name of the metric.
     * @param callback the batch observer callback
     */
    NoopMeter.prototype.createBatchObserver = function (name, callback) {
        return exports.NOOP_BATCH_OBSERVER_METRIC;
    };
    return NoopMeter;
}());
exports.NoopMeter = NoopMeter;
var NoopMetric = /** @class */ (function () {
    function NoopMetric(instrument) {
        this._instrument = instrument;
    }
    /**
     * Returns a Bound Instrument associated with specified Labels.
     * It is recommended to keep a reference to the Bound Instrument instead of
     * always calling this method for every operations.
     * @param labels key-values pairs that are associated with a specific metric
     *     that you want to record.
     */
    NoopMetric.prototype.bind = function (labels) {
        return this._instrument;
    };
    /**
     * Removes the Binding from the metric, if it is present.
     * @param labels key-values pairs that are associated with a specific metric.
     */
    NoopMetric.prototype.unbind = function (labels) {
        return;
    };
    /**
     * Clears all timeseries from the Metric.
     */
    NoopMetric.prototype.clear = function () {
        return;
    };
    return NoopMetric;
}());
exports.NoopMetric = NoopMetric;
var NoopCounterMetric = /** @class */ (function (_super) {
    __extends(NoopCounterMetric, _super);
    function NoopCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopCounterMetric.prototype.add = function (value, labels) {
        this.bind(labels).add(value);
    };
    return NoopCounterMetric;
}(NoopMetric));
exports.NoopCounterMetric = NoopCounterMetric;
var NoopValueRecorderMetric = /** @class */ (function (_super) {
    __extends(NoopValueRecorderMetric, _super);
    function NoopValueRecorderMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopValueRecorderMetric.prototype.record = function (value, labels) {
        this.bind(labels).record(value);
    };
    return NoopValueRecorderMetric;
}(NoopMetric));
exports.NoopValueRecorderMetric = NoopValueRecorderMetric;
var NoopBaseObserverMetric = /** @class */ (function (_super) {
    __extends(NoopBaseObserverMetric, _super);
    function NoopBaseObserverMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopBaseObserverMetric.prototype.observation = function () {
        return {
            observer: this,
            value: 0,
        };
    };
    return NoopBaseObserverMetric;
}(NoopMetric));
exports.NoopBaseObserverMetric = NoopBaseObserverMetric;
var NoopBatchObserverMetric = /** @class */ (function (_super) {
    __extends(NoopBatchObserverMetric, _super);
    function NoopBatchObserverMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopBatchObserverMetric;
}(NoopMetric));
exports.NoopBatchObserverMetric = NoopBatchObserverMetric;
var NoopBoundCounter = /** @class */ (function () {
    function NoopBoundCounter() {
    }
    NoopBoundCounter.prototype.add = function (value) {
        return;
    };
    return NoopBoundCounter;
}());
exports.NoopBoundCounter = NoopBoundCounter;
var NoopBoundValueRecorder = /** @class */ (function () {
    function NoopBoundValueRecorder() {
    }
    NoopBoundValueRecorder.prototype.record = function (value, correlationContext, spanContext) {
        return;
    };
    return NoopBoundValueRecorder;
}());
exports.NoopBoundValueRecorder = NoopBoundValueRecorder;
var NoopBoundBaseObserver = /** @class */ (function () {
    function NoopBoundBaseObserver() {
    }
    NoopBoundBaseObserver.prototype.update = function (value) { };
    return NoopBoundBaseObserver;
}());
exports.NoopBoundBaseObserver = NoopBoundBaseObserver;
exports.NOOP_METER = new NoopMeter();
exports.NOOP_BOUND_COUNTER = new NoopBoundCounter();
exports.NOOP_COUNTER_METRIC = new NoopCounterMetric(exports.NOOP_BOUND_COUNTER);
exports.NOOP_BOUND_VALUE_RECORDER = new NoopBoundValueRecorder();
exports.NOOP_VALUE_RECORDER_METRIC = new NoopValueRecorderMetric(exports.NOOP_BOUND_VALUE_RECORDER);
exports.NOOP_BOUND_BASE_OBSERVER = new NoopBoundBaseObserver();
exports.NOOP_VALUE_OBSERVER_METRIC = new NoopBaseObserverMetric(exports.NOOP_BOUND_BASE_OBSERVER);
exports.NOOP_UP_DOWN_SUM_OBSERVER_METRIC = new NoopBaseObserverMetric(exports.NOOP_BOUND_BASE_OBSERVER);
exports.NOOP_SUM_OBSERVER_METRIC = new NoopBaseObserverMetric(exports.NOOP_BOUND_BASE_OBSERVER);
exports.NOOP_BATCH_OBSERVER_METRIC = new NoopBatchObserverMetric();
//# sourceMappingURL=NoopMeter.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOOP_METER_PROVIDER = exports.NoopMeterProvider = void 0;
var NoopMeter_1 = __webpack_require__(26);
/**
 * An implementation of the {@link MeterProvider} which returns an impotent Meter
 * for all calls to `getMeter`
 */
var NoopMeterProvider = /** @class */ (function () {
    function NoopMeterProvider() {
    }
    NoopMeterProvider.prototype.getMeter = function (_name, _version) {
        return NoopMeter_1.NOOP_METER;
    };
    return NoopMeterProvider;
}());
exports.NoopMeterProvider = NoopMeterProvider;
exports.NOOP_METER_PROVIDER = new NoopMeterProvider();
//# sourceMappingURL=NoopMeterProvider.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOOP_SPAN = exports.NoopSpan = void 0;
var spancontext_utils_1 = __webpack_require__(12);
/**
 * The NoopSpan is the default {@link Span} that is used when no Span
 * implementation is available. All operations are no-op including context
 * propagation.
 */
var NoopSpan = /** @class */ (function () {
    function NoopSpan(_spanContext) {
        if (_spanContext === void 0) { _spanContext = spancontext_utils_1.INVALID_SPAN_CONTEXT; }
        this._spanContext = _spanContext;
    }
    // Returns a SpanContext.
    NoopSpan.prototype.context = function () {
        return this._spanContext;
    };
    // By default does nothing
    NoopSpan.prototype.setAttribute = function (key, value) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.setAttributes = function (attributes) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.addEvent = function (name, attributes) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.setStatus = function (status) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.updateName = function (name) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.end = function (endTime) { };
    // isRecording always returns false for noopSpan.
    NoopSpan.prototype.isRecording = function () {
        return false;
    };
    // By default does nothing
    NoopSpan.prototype.recordException = function (exception, time) { };
    return NoopSpan;
}());
exports.NoopSpan = NoopSpan;
exports.NOOP_SPAN = new NoopSpan();
//# sourceMappingURL=NoopSpan.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyTracer = void 0;
var NoopTracer_1 = __webpack_require__(10);
/**
 * Proxy tracer provided by the proxy tracer provider
 */
var ProxyTracer = /** @class */ (function () {
    function ProxyTracer(_provider, name, version) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
    }
    ProxyTracer.prototype.getCurrentSpan = function () {
        return this._getTracer().getCurrentSpan();
    };
    ProxyTracer.prototype.startSpan = function (name, options) {
        return this._getTracer().startSpan(name, options);
    };
    ProxyTracer.prototype.withSpan = function (span, fn) {
        return this._getTracer().withSpan(span, fn);
    };
    ProxyTracer.prototype.bind = function (target, span) {
        return this._getTracer().bind(target, span);
    };
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */
    ProxyTracer.prototype._getTracer = function () {
        if (this._delegate) {
            return this._delegate;
        }
        var tracer = this._provider.getDelegateTracer(this.name, this.version);
        if (!tracer) {
            return NoopTracer_1.NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer;
}());
exports.ProxyTracer = ProxyTracer;
//# sourceMappingURL=ProxyTracer.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyTracerProvider = void 0;
var ProxyTracer_1 = __webpack_require__(29);
var NoopTracerProvider_1 = __webpack_require__(11);
/**
 * Tracer provider which provides {@link ProxyTracer}s.
 *
 * Before a delegate is set, tracers provided are NoOp.
 *   When a delegate is set, traces are provided from the delegate.
 *   When a delegate is set after tracers have already been provided,
 *   all tracers already provided will use the provided delegate implementation.
 */
var ProxyTracerProvider = /** @class */ (function () {
    function ProxyTracerProvider() {
    }
    /**
     * Get a {@link ProxyTracer}
     */
    ProxyTracerProvider.prototype.getTracer = function (name, version) {
        var _a;
        return ((_a = this.getDelegateTracer(name, version)) !== null && _a !== void 0 ? _a : new ProxyTracer_1.ProxyTracer(this, name, version));
    };
    ProxyTracerProvider.prototype.getDelegate = function () {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NoopTracerProvider_1.NOOP_TRACER_PROVIDER;
    };
    /**
     * Set the delegate tracer provider
     */
    ProxyTracerProvider.prototype.setDelegate = function (delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider.prototype.getDelegateTracer = function (name, version) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version);
    };
    return ProxyTracerProvider;
}());
exports.ProxyTracerProvider = ProxyTracerProvider;
//# sourceMappingURL=ProxyTracerProvider.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceFlags = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TraceFlags;
(function (TraceFlags) {
    /** Represents no flag set. */
    TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */
    TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags = exports.TraceFlags || (exports.TraceFlags = {}));
//# sourceMappingURL=trace_flags.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Context = /** @class */ (function () {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */
    function Context(parentContext) {
        this._currentContext = parentContext ? new Map(parentContext) : new Map();
    }
    /** Get a key to uniquely identify a context value */
    Context.createKey = function (description) {
        return Symbol.for(description);
    };
    /**
     * Get a value from the context.
     *
     * @param key key which identifies a context value
     */
    Context.prototype.getValue = function (key) {
        return this._currentContext.get(key);
    };
    /**
     * Create a new context which inherits from this context and has
     * the given key set to the given value.
     *
     * @param key context key for which to set the value
     * @param value value to set for the given key
     */
    Context.prototype.setValue = function (key, value) {
        var context = new Context(this._currentContext);
        context._currentContext.set(key, value);
        return context;
    };
    /**
     * Return a new context which inherits from this context but does
     * not contain a value for the given key.
     *
     * @param key context key for which to clear a value
     */
    Context.prototype.deleteValue = function (key) {
        var context = new Context(this._currentContext);
        context._currentContext.delete(key);
        return context;
    };
    /** The root context is used as the default parent context when there is no active context */
    Context.ROOT_CONTEXT = new Context();
    /**
     * This is another identifier to the root context which allows developers to easily search the
     * codebase for direct uses of context which need to be removed in later PRs.
     *
     * It's existence is temporary and it should be removed when all references are fixed.
     */
    Context.TODO = Context.ROOT_CONTEXT;
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=context.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoopLogger = void 0;
/** No-op implementation of Logger */
class NoopLogger {
    // By default does nothing
    debug(message, ...args) { }
    // By default does nothing
    error(message, ...args) { }
    // By default does nothing
    warn(message, ...args) { }
    // By default does nothing
    info(message, ...args) { }
}
exports.NoopLogger = NoopLogger;
//# sourceMappingURL=NoopLogger.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCorrelationContext = exports.getCorrelationContext = void 0;
const context_base_1 = __webpack_require__(5);
const CORRELATION_CONTEXT = context_base_1.Context.createKey('OpenTelemetry Distributed Contexts Key');
/**
 * @param {Context} Context that manage all context values
 * @returns {CorrelationContext} Extracted correlation context from the context
 */
function getCorrelationContext(context) {
    return (context.getValue(CORRELATION_CONTEXT) || undefined);
}
exports.getCorrelationContext = getCorrelationContext;
/**
 * @param {Context} Context that manage all context values
 * @param {CorrelationContext} correlation context that will be set in the actual context
 */
function setCorrelationContext(context, correlationContext) {
    return context.setValue(CORRELATION_CONTEXT, correlationContext);
}
exports.setCorrelationContext = setCorrelationContext;
//# sourceMappingURL=correlation-context.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceState = void 0;
const validators_1 = __webpack_require__(109);
const MAX_TRACE_STATE_ITEMS = 32;
const MAX_TRACE_STATE_LEN = 512;
const LIST_MEMBERS_SEPARATOR = ',';
const LIST_MEMBER_KEY_VALUE_SPLITTER = '=';
/**
 * TraceState must be a class and not a simple object type because of the spec
 * requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
 *
 * Here is the list of allowed mutations:
 * - New key-value pair should be added into the beginning of the list
 * - The value of any key can be updated. Modified keys MUST be moved to the
 * beginning of the list.
 */
class TraceState {
    constructor(rawTraceState) {
        this._internalState = new Map();
        if (rawTraceState)
            this._parse(rawTraceState);
    }
    set(key, value) {
        // TODO: Benchmark the different approaches(map vs list) and
        // use the faster one.
        if (this._internalState.has(key))
            this._internalState.delete(key);
        this._internalState.set(key, value);
    }
    unset(key) {
        this._internalState.delete(key);
    }
    get(key) {
        return this._internalState.get(key);
    }
    serialize() {
        return this._keys()
            .reduce((agg, key) => {
            agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + this.get(key));
            return agg;
        }, [])
            .join(LIST_MEMBERS_SEPARATOR);
    }
    _parse(rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN)
            return;
        this._internalState = rawTraceState
            .split(LIST_MEMBERS_SEPARATOR)
            .reverse() // Store in reverse so new keys (.set(...)) will be placed at the beginning
            .reduce((agg, part) => {
            const listMember = part.trim(); // Optional Whitespace (OWS) handling
            const i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (i !== -1) {
                const key = listMember.slice(0, i);
                const value = listMember.slice(i + 1, part.length);
                if (validators_1.validateKey(key) && validators_1.validateValue(value)) {
                    agg.set(key, value);
                }
                else {
                    // TODO: Consider to add warning log
                }
            }
            return agg;
        }, new Map());
        // Because of the reverse() requirement, trunc must be done after map is created
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
            this._internalState = new Map(Array.from(this._internalState.entries())
                .reverse() // Use reverse same as original tracestate parse chain
                .slice(0, MAX_TRACE_STATE_ITEMS));
        }
    }
    _keys() {
        return Array.from(this._internalState.keys()).reverse();
    }
}
exports.TraceState = TraceState;
//# sourceMappingURL=TraceState.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.VERSION = '0.11.0';
//# sourceMappingURL=version.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectorExporterBase = void 0;
const core_1 = __webpack_require__(0);
/**
 * Collector Exporter abstract base class
 */
class CollectorExporterBase {
    /**
     * @param config
     */
    constructor(config = {}) {
        this._isShutdown = false;
        this.serviceName = this.getDefaultServiceName(config);
        this.url = this.getDefaultUrl(config);
        if (typeof config.hostname === 'string') {
            this.hostname = config.hostname;
        }
        this.attributes = config.attributes;
        this.logger = config.logger || new core_1.NoopLogger();
        this.shutdown = this.shutdown.bind(this);
        // platform dependent
        this.onInit(config);
    }
    /**
     * Export items.
     * @param items
     * @param resultCallback
     */
    export(items, resultCallback) {
        if (this._isShutdown) {
            resultCallback(core_1.ExportResult.FAILED_NOT_RETRYABLE);
            return;
        }
        this._export(items)
            .then(() => {
            resultCallback(core_1.ExportResult.SUCCESS);
        })
            .catch((error) => {
            if (error.message) {
                this.logger.error(error.message);
            }
            if (error.code && error.code < 500) {
                resultCallback(core_1.ExportResult.FAILED_NOT_RETRYABLE);
            }
            else {
                resultCallback(core_1.ExportResult.FAILED_RETRYABLE);
            }
        });
    }
    _export(items) {
        return new Promise((resolve, reject) => {
            try {
                this.logger.debug('items to be sent', items);
                this.send(items, resolve, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    /**
     * Shutdown the exporter.
     */
    shutdown() {
        if (this._isShutdown) {
            this.logger.debug('shutdown already started');
            return;
        }
        this._isShutdown = true;
        this.logger.debug('shutdown started');
        // platform dependent
        this.onShutdown();
    }
}
exports.CollectorExporterBase = CollectorExporterBase;
//# sourceMappingURL=CollectorExporterBase.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectorExporterBrowserBase = void 0;
const CollectorExporterBase_1 = __webpack_require__(37);
const util_1 = __webpack_require__(132);
const util_2 = __webpack_require__(131);
/**
 * Collector Metric Exporter abstract base class
 */
class CollectorExporterBrowserBase extends CollectorExporterBase_1.CollectorExporterBase {
    /**
     * @param config
     */
    constructor(config = {}) {
        super(config);
        this._useXHR = false;
        this._useXHR =
            !!config.headers || typeof navigator.sendBeacon !== 'function';
        if (this._useXHR) {
            this._headers = util_1.parseHeaders(config.headers, this.logger);
        }
        else {
            this._headers = {};
        }
    }
    onInit() {
        window.addEventListener('unload', this.shutdown);
    }
    onShutdown() {
        window.removeEventListener('unload', this.shutdown);
    }
    send(items, onSuccess, onError) {
        const serviceRequest = this.convert(items);
        const body = JSON.stringify(serviceRequest);
        if (this._useXHR) {
            util_2.sendWithXhr(body, this.url, this._headers, this.logger, onSuccess, onError);
        }
        else {
            util_2.sendWithBeacon(body, this.url, this.logger, onSuccess, onError);
        }
    }
}
exports.CollectorExporterBrowserBase = CollectorExporterBrowserBase;
//# sourceMappingURL=CollectorExporterBrowserBase.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupMetricsByResourceAndLibrary = exports.toCollectorExportMetricServiceRequest = exports.toCollectorMetric = exports.toSummaryPoint = exports.toHistogramPoint = exports.toSingularPoint = exports.toCollectorMetricDescriptor = exports.toCollectorTemporality = exports.toCollectorType = exports.toCollectorLabels = void 0;
const metrics_1 = __webpack_require__(47);
const types_1 = __webpack_require__(17);
const api = __webpack_require__(1);
const core = __webpack_require__(0);
const transform_1 = __webpack_require__(16);
/**
 * Converts labels
 * @param labels
 */
function toCollectorLabels(labels) {
    return Object.entries(labels).map(([key, value]) => {
        return { key, value: String(value) };
    });
}
exports.toCollectorLabels = toCollectorLabels;
/**
 * Given a MetricDescriptor, return its type in a compatible format with the collector
 * @param descriptor
 */
function toCollectorType(metric) {
    if (metric.descriptor.metricKind === metrics_1.MetricKind.COUNTER ||
        metric.descriptor.metricKind === metrics_1.MetricKind.SUM_OBSERVER) {
        if (metric.descriptor.valueType === api.ValueType.INT) {
            return types_1.opentelemetryProto.metrics.v1.MetricDescriptorType.MONOTONIC_INT64;
        }
        return types_1.opentelemetryProto.metrics.v1.MetricDescriptorType.MONOTONIC_DOUBLE;
    }
    if (metric.aggregator instanceof metrics_1.HistogramAggregator) {
        return types_1.opentelemetryProto.metrics.v1.MetricDescriptorType.HISTOGRAM;
    }
    if (metric.aggregator instanceof metrics_1.MinMaxLastSumCountAggregator) {
        return types_1.opentelemetryProto.metrics.v1.MetricDescriptorType.SUMMARY;
    }
    if (metric.descriptor.valueType == api.ValueType.INT) {
        return types_1.opentelemetryProto.metrics.v1.MetricDescriptorType.INT64;
    }
    if (metric.descriptor.valueType === api.ValueType.DOUBLE) {
        return types_1.opentelemetryProto.metrics.v1.MetricDescriptorType.DOUBLE;
    }
    return types_1.opentelemetryProto.metrics.v1.MetricDescriptorType.INVALID_TYPE;
}
exports.toCollectorType = toCollectorType;
/**
 * Given a MetricDescriptor, return its temporality in a compatible format with the collector
 * @param descriptor
 */
function toCollectorTemporality(metric) {
    if (metric.descriptor.metricKind === metrics_1.MetricKind.COUNTER ||
        metric.descriptor.metricKind === metrics_1.MetricKind.SUM_OBSERVER) {
        return types_1.opentelemetryProto.metrics.v1.MetricDescriptorTemporality.CUMULATIVE;
    }
    if (metric.descriptor.metricKind === metrics_1.MetricKind.UP_DOWN_COUNTER ||
        metric.descriptor.metricKind === metrics_1.MetricKind.UP_DOWN_SUM_OBSERVER) {
        return types_1.opentelemetryProto.metrics.v1.MetricDescriptorTemporality.DELTA;
    }
    if (metric.descriptor.metricKind === metrics_1.MetricKind.VALUE_OBSERVER ||
        metric.descriptor.metricKind === metrics_1.MetricKind.VALUE_RECORDER) {
        // TODO: Change once LastValueAggregator is implemented.
        // If the aggregator is LastValue or Exact, then it will be instantaneous
        return types_1.opentelemetryProto.metrics.v1.MetricDescriptorTemporality.DELTA;
    }
    return types_1.opentelemetryProto.metrics.v1.MetricDescriptorTemporality
        .INVALID_TEMPORALITY;
}
exports.toCollectorTemporality = toCollectorTemporality;
/**
 * Given a MetricRecord, return the Collector compatible type of MetricDescriptor
 * @param metric
 */
function toCollectorMetricDescriptor(metric) {
    return {
        name: metric.descriptor.name,
        description: metric.descriptor.description,
        unit: metric.descriptor.unit,
        type: toCollectorType(metric),
        temporality: toCollectorTemporality(metric),
    };
}
exports.toCollectorMetricDescriptor = toCollectorMetricDescriptor;
/**
 * Returns an Int64Point or DoublePoint to the collector
 * @param metric
 * @param startTime
 */
function toSingularPoint(metric, startTime) {
    return {
        labels: toCollectorLabels(metric.labels),
        value: metric.aggregator.toPoint().value,
        startTimeUnixNano: startTime,
        timeUnixNano: core.hrTimeToNanoseconds(metric.aggregator.toPoint().timestamp),
    };
}
exports.toSingularPoint = toSingularPoint;
/**
 * Returns a HistogramPoint to the collector
 * @param metric
 * @param startTime
 */
function toHistogramPoint(metric, startTime) {
    const { value, timestamp } = metric.aggregator.toPoint();
    return {
        labels: toCollectorLabels(metric.labels),
        sum: value.sum,
        count: value.count,
        startTimeUnixNano: startTime,
        timeUnixNano: core.hrTimeToNanoseconds(timestamp),
        buckets: value.buckets.counts.map(count => {
            return { count };
        }),
        explicitBounds: value.buckets.boundaries,
    };
}
exports.toHistogramPoint = toHistogramPoint;
/**
 * Returns a SummaryPoint to the collector
 * @param metric
 * @param startTime
 */
function toSummaryPoint(metric, startTime) {
    const { value, timestamp } = metric.aggregator.toPoint();
    return {
        labels: toCollectorLabels(metric.labels),
        sum: value.sum,
        count: value.count,
        startTimeUnixNano: startTime,
        timeUnixNano: core.hrTimeToNanoseconds(timestamp),
        percentileValues: [
            { percentile: 0, value: value.min },
            { percentile: 100, value: value.max },
        ],
    };
}
exports.toSummaryPoint = toSummaryPoint;
/**
 * Converts a metric to be compatible with the collector
 * @param metric
 * @param startTime start time in nanoseconds
 */
function toCollectorMetric(metric, startTime) {
    if (toCollectorType(metric) ===
        types_1.opentelemetryProto.metrics.v1.MetricDescriptorType.HISTOGRAM) {
        return {
            metricDescriptor: toCollectorMetricDescriptor(metric),
            histogramDataPoints: [toHistogramPoint(metric, startTime)],
        };
    }
    if (toCollectorType(metric) ===
        types_1.opentelemetryProto.metrics.v1.MetricDescriptorType.SUMMARY) {
        return {
            metricDescriptor: toCollectorMetricDescriptor(metric),
            summaryDataPoints: [toSummaryPoint(metric, startTime)],
        };
    }
    if (metric.descriptor.valueType == api.ValueType.INT) {
        return {
            metricDescriptor: toCollectorMetricDescriptor(metric),
            int64DataPoints: [toSingularPoint(metric, startTime)],
        };
    }
    if (metric.descriptor.valueType === api.ValueType.DOUBLE) {
        return {
            metricDescriptor: toCollectorMetricDescriptor(metric),
            doubleDataPoints: [toSingularPoint(metric, startTime)],
        };
    }
    return {
        metricDescriptor: toCollectorMetricDescriptor(metric),
        int64DataPoints: [],
    };
}
exports.toCollectorMetric = toCollectorMetric;
/**
 * Prepares metric service request to be sent to collector
 * @param metrics metrics
 * @param startTime start time of the metric in nanoseconds
 * @param collectorMetricExporterBase
 */
function toCollectorExportMetricServiceRequest(metrics, startTime, collectorExporterBase) {
    const groupedMetrics = groupMetricsByResourceAndLibrary(metrics);
    const additionalAttributes = Object.assign({}, collectorExporterBase.attributes, {
        'service.name': collectorExporterBase.serviceName,
    });
    return {
        resourceMetrics: toCollectorResourceMetrics(groupedMetrics, additionalAttributes, startTime),
    };
}
exports.toCollectorExportMetricServiceRequest = toCollectorExportMetricServiceRequest;
/**
 * Takes an array of metrics and groups them by resource and instrumentation
 * library
 * @param metrics metrics
 */
function groupMetricsByResourceAndLibrary(metrics) {
    return metrics.reduce((metricMap, metric) => {
        //group by resource
        let resourceMetrics = metricMap.get(metric.resource);
        if (!resourceMetrics) {
            resourceMetrics = new Map();
            metricMap.set(metric.resource, resourceMetrics);
        }
        //group by instrumentation library
        let libMetrics = resourceMetrics.get(metric.instrumentationLibrary);
        if (!libMetrics) {
            libMetrics = new Array();
            resourceMetrics.set(metric.instrumentationLibrary, libMetrics);
        }
        libMetrics.push(metric);
        return metricMap;
    }, new Map());
}
exports.groupMetricsByResourceAndLibrary = groupMetricsByResourceAndLibrary;
/**
 * Convert to InstrumentationLibraryMetrics
 * @param instrumentationLibrary
 * @param metrics
 * @param startTime
 */
function toCollectorInstrumentationLibraryMetrics(instrumentationLibrary, metrics, startTime) {
    return {
        metrics: metrics.map(metric => toCollectorMetric(metric, startTime)),
        instrumentationLibrary,
    };
}
/**
 * Returns a list of resource metrics which will be exported to the collector
 * @param groupedSpans
 * @param baseAttributes
 */
function toCollectorResourceMetrics(groupedMetrics, baseAttributes, startTime) {
    return Array.from(groupedMetrics, ([resource, libMetrics]) => {
        return {
            resource: transform_1.toCollectorResource(resource, baseAttributes),
            instrumentationLibraryMetrics: Array.from(libMetrics, ([instrumentationLibrary, metrics]) => toCollectorInstrumentationLibraryMetrics(instrumentationLibrary, metrics, startTime)),
        };
    });
}
//# sourceMappingURL=transformMetrics.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterMetric = void 0;
const BoundInstrument_1 = __webpack_require__(3);
const types_1 = __webpack_require__(2);
const Metric_1 = __webpack_require__(4);
/** This is a SDK implementation of Counter Metric. */
class CounterMetric extends Metric_1.Metric {
    constructor(name, options, _batcher, resource, instrumentationLibrary) {
        super(name, options, types_1.MetricKind.COUNTER, resource, instrumentationLibrary);
        this._batcher = _batcher;
    }
    _makeInstrument(labels) {
        return new BoundInstrument_1.BoundCounter(labels, this._disabled, this._valueType, this._logger, 
        // @todo: consider to set to CounterSumAggregator always.
        this._batcher.aggregatorFor(this._descriptor));
    }
    /**
     * Adds the given value to the current value. Values cannot be negative.
     * @param value the value to add.
     * @param [labels = {}] key-values pairs that are associated with a specific metric
     *     that you want to record.
     */
    add(value, labels = {}) {
        this.bind(labels).add(value);
    }
}
exports.CounterMetric = CounterMetric;
//# sourceMappingURL=CounterMetric.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObserverResult = void 0;
/**
 * Implementation of {@link TypeObserverResult}
 */
class ObserverResult {
    constructor() {
        this.values = new Map();
    }
    observe(value, labels) {
        this.values.set(labels, value);
    }
}
exports.ObserverResult = ObserverResult;
//# sourceMappingURL=ObserverResult.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpDownCounterMetric = void 0;
const BoundInstrument_1 = __webpack_require__(3);
const types_1 = __webpack_require__(2);
const Metric_1 = __webpack_require__(4);
/** This is a SDK implementation of UpDownCounter Metric. */
class UpDownCounterMetric extends Metric_1.Metric {
    constructor(name, options, _batcher, resource, instrumentationLibrary) {
        super(name, options, types_1.MetricKind.UP_DOWN_COUNTER, resource, instrumentationLibrary);
        this._batcher = _batcher;
    }
    _makeInstrument(labels) {
        return new BoundInstrument_1.BoundUpDownCounter(labels, this._disabled, this._valueType, this._logger, this._batcher.aggregatorFor(this._descriptor));
    }
    /**
     * Adds the given value to the current value. Values cannot be negative.
     * @param value the value to add.
     * @param [labels = {}] key-values pairs that are associated with a specific
     *     metric that you want to record.
     */
    add(value, labels = {}) {
        this.bind(labels).add(value);
    }
}
exports.UpDownCounterMetric = UpDownCounterMetric;
//# sourceMappingURL=UpDownCounterMetric.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObserverMetric = void 0;
const BaseObserverMetric_1 = __webpack_require__(18);
const types_1 = __webpack_require__(2);
/** This is a SDK implementation of Value Observer Metric. */
class ValueObserverMetric extends BaseObserverMetric_1.BaseObserverMetric {
    constructor(name, options, batcher, resource, instrumentationLibrary, callback) {
        super(name, options, batcher, resource, types_1.MetricKind.VALUE_OBSERVER, instrumentationLibrary, callback);
    }
}
exports.ValueObserverMetric = ValueObserverMetric;
//# sourceMappingURL=ValueObserverMetric.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueRecorderMetric = void 0;
const BoundInstrument_1 = __webpack_require__(3);
const types_1 = __webpack_require__(2);
const Metric_1 = __webpack_require__(4);
/** This is a SDK implementation of Value Recorder Metric. */
class ValueRecorderMetric extends Metric_1.Metric {
    constructor(name, options, _batcher, resource, instrumentationLibrary) {
        super(name, options, types_1.MetricKind.VALUE_RECORDER, resource, instrumentationLibrary);
        this._batcher = _batcher;
    }
    _makeInstrument(labels) {
        return new BoundInstrument_1.BoundValueRecorder(labels, this._disabled, this._valueType, this._logger, this._batcher.aggregatorFor(this._descriptor));
    }
    record(value, labels = {}) {
        this.bind(labels).record(value);
    }
}
exports.ValueRecorderMetric = ValueRecorderMetric;
//# sourceMappingURL=ValueRecorderMetric.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UngroupedBatcher = exports.Batcher = void 0;
const aggregators = __webpack_require__(46);
const types_1 = __webpack_require__(2);
/**
 * Base class for all batcher types.
 *
 * The batcher is responsible for storing the aggregators and aggregated
 * values received from updates from metrics in the meter. The stored values
 * will be sent to an exporter for exporting.
 */
class Batcher {
    constructor() {
        this._batchMap = new Map();
    }
    checkPointSet() {
        return Array.from(this._batchMap.values());
    }
}
exports.Batcher = Batcher;
/**
 * Batcher which retains all dimensions/labels. It accepts all records and
 * passes them for exporting.
 */
class UngroupedBatcher extends Batcher {
    aggregatorFor(metricDescriptor) {
        switch (metricDescriptor.metricKind) {
            case types_1.MetricKind.COUNTER:
            case types_1.MetricKind.UP_DOWN_COUNTER:
            case types_1.MetricKind.SUM_OBSERVER:
            case types_1.MetricKind.UP_DOWN_SUM_OBSERVER:
                return new aggregators.SumAggregator();
            case types_1.MetricKind.VALUE_RECORDER:
            case types_1.MetricKind.VALUE_OBSERVER:
                return new aggregators.MinMaxLastSumCountAggregator();
            default:
                return new aggregators.MinMaxLastSumCountAggregator();
        }
    }
    process(record) {
        const labels = Object.keys(record.labels)
            .map(k => `${k}=${record.labels[k]}`)
            .join(',');
        this._batchMap.set(record.descriptor.name + labels, record);
    }
}
exports.UngroupedBatcher = UngroupedBatcher;
//# sourceMappingURL=Batcher.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(144), exports);
__exportStar(__webpack_require__(145), exports);
__exportStar(__webpack_require__(146), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(3), exports);
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(44), exports);
__exportStar(__webpack_require__(135), exports);
__exportStar(__webpack_require__(136), exports);
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(43), exports);
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(45), exports);
__exportStar(__webpack_require__(141), exports);
__exportStar(__webpack_require__(2), exports);
__exportStar(__webpack_require__(42), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_METRIC_OPTIONS = exports.DEFAULT_CONFIG = void 0;
const core_1 = __webpack_require__(0);
const api = __webpack_require__(1);
/** Default Meter configuration. */
exports.DEFAULT_CONFIG = {
    logLevel: core_1.getEnv().OTEL_LOG_LEVEL,
    gracefulShutdown: true,
};
/** The default metric creation options value. */
exports.DEFAULT_METRIC_OPTIONS = {
    disabled: false,
    description: '',
    unit: '1',
    valueType: api.ValueType.DOUBLE,
};
//# sourceMappingURL=types.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
const core_1 = __webpack_require__(0);
const constants_1 = __webpack_require__(50);
/**
 * A Resource describes the entity for which a signals (metrics or trace) are
 * collected.
 */
class Resource {
    constructor(
    /**
     * A dictionary of attributes with string keys and values that provide
     * information about the entity as numbers, strings or booleans
     * TODO: Consider to add check/validation on attributes.
     */
    attributes) {
        this.attributes = attributes;
    }
    /**
     * Returns an empty Resource
     */
    static empty() {
        return Resource.EMPTY;
    }
    /**
     * Returns a Resource that indentifies the SDK in use.
     */
    static createTelemetrySDKResource() {
        return new Resource({
            [constants_1.TELEMETRY_SDK_RESOURCE.LANGUAGE]: core_1.SDK_INFO.LANGUAGE,
            [constants_1.TELEMETRY_SDK_RESOURCE.NAME]: core_1.SDK_INFO.NAME,
            [constants_1.TELEMETRY_SDK_RESOURCE.VERSION]: core_1.SDK_INFO.VERSION,
        });
    }
    /**
     * Returns a new, merged {@link Resource} by merging the current Resource
     * with the other Resource. In case of a collision, current Resource takes
     * precedence.
     *
     * @param other the Resource that will be merged with this.
     * @returns the newly merged Resource.
     */
    merge(other) {
        if (!other || !Object.keys(other.attributes).length)
            return this;
        // Attributes from resource overwrite attributes from other resource.
        const mergedAttributes = Object.assign({}, other.attributes, this.attributes);
        return new Resource(mergedAttributes);
    }
}
exports.Resource = Resource;
Resource.EMPTY = new Resource({});
//# sourceMappingURL=Resource.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVICE_RESOURCE = exports.TELEMETRY_SDK_RESOURCE = exports.K8S_RESOURCE = exports.HOST_RESOURCE = exports.CONTAINER_RESOURCE = exports.CLOUD_RESOURCE = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.CLOUD_RESOURCE = {
    /** Name of the cloud provider. Example values are aws, azure, gcp. */
    PROVIDER: 'cloud.provider',
    /** The cloud account id used to identify different entities. */
    ACCOUNT_ID: 'cloud.account.id',
    /** A specific geographical location where different entities can run. */
    REGION: 'cloud.region',
    /** Zones are a sub set of the region connected through low-latency links. */
    ZONE: 'cloud.zone',
};
/**
 * Attributes defining a compute unit (e.g. Container, Process, Lambda
 * Function).
 * */
exports.CONTAINER_RESOURCE = {
    /** The container name. */
    NAME: 'container.name',
    /** The name of the image the container was built on. */
    IMAGE_NAME: 'container.image.name',
    /** The container image tag. */
    IMAGE_TAG: 'container.image.tag',
};
/** Attributes defining a computing instance (e.g. host). */
exports.HOST_RESOURCE = {
    /**
     * Hostname of the host. It contains what the hostname command returns on the
     * host machine.
     */
    HOSTNAME: 'host.hostname',
    /**
     * Unique host id. For Cloud this must be the instance_id assigned by the
     * cloud provider
     */
    ID: 'host.id',
    /**
     * Name of the host. It may contain what hostname returns on Unix systems,
     * the fully qualified, or a name specified by the user.
     */
    NAME: 'host.name',
    /** Type of host. For Cloud this must be the machine type.*/
    TYPE: 'host.type',
    /** Name of the VM image or OS install the host was instantiated from. */
    IMAGE_NAME: 'host.image.name',
    /** VM image id. For Cloud, this value is from the provider. */
    IMAGE_ID: 'host.image.id',
    /** The version string of the VM image */
    IMAGE_VERSION: 'host.image.version',
};
/** Attributes defining a deployment service (e.g. Kubernetes). */
exports.K8S_RESOURCE = {
    /** The name of the cluster that the pod is running in. */
    CLUSTER_NAME: 'k8s.cluster.name',
    /** The name of the namespace that the pod is running in. */
    NAMESPACE_NAME: 'k8s.namespace.name',
    /** The name of the pod. */
    POD_NAME: 'k8s.pod.name',
    /** The name of the deployment. */
    DEPLOYMENT_NAME: 'k8s.deployment.name',
};
/** Attributes describing the telemetry library. */
exports.TELEMETRY_SDK_RESOURCE = {
    /** The name of the telemetry library. */
    NAME: 'telemetry.sdk.name',
    /** The language of telemetry library and of the code instrumented with it. */
    LANGUAGE: 'telemetry.sdk.language',
    /** The version string of the telemetry library */
    VERSION: 'telemetry.sdk.version',
};
/** Attributes describing a service instance. */
exports.SERVICE_RESOURCE = {
    /** Logical name of the service.  */
    NAME: 'service.name',
    /** A namespace for `service.name`. */
    NAMESPACE: 'service.namespace',
    /** The string ID of the service instance. */
    INSTANCE_ID: 'service.instance.id',
    /** The version string of the service API or implementation. */
    VERSION: 'service.version',
};
//# sourceMappingURL=constants.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Span = void 0;
const api = __webpack_require__(1);
const core_1 = __webpack_require__(0);
const semantic_conventions_1 = __webpack_require__(8);
/**
 * This class represents a span.
 */
class Span {
    /** Constructs a new Span instance. */
    constructor(parentTracer, spanName, spanContext, kind, parentSpanId, links = [], startTime = core_1.hrTime()) {
        this.attributes = {};
        this.links = [];
        this.events = [];
        this.status = {
            code: api.CanonicalCode.OK,
        };
        this.endTime = [0, 0];
        this._ended = false;
        this._duration = [-1, -1];
        this.name = spanName;
        this.spanContext = spanContext;
        this.parentSpanId = parentSpanId;
        this.kind = kind;
        this.links = links;
        this.startTime = core_1.timeInputToHrTime(startTime);
        this.resource = parentTracer.resource;
        this.instrumentationLibrary = parentTracer.instrumentationLibrary;
        this._logger = parentTracer.logger;
        this._traceParams = parentTracer.getActiveTraceParams();
        this._spanProcessor = parentTracer.getActiveSpanProcessor();
        this._spanProcessor.onStart(this);
    }
    context() {
        return this.spanContext;
    }
    setAttribute(key, value) {
        if (this._isSpanEnded())
            return this;
        if (Object.keys(this.attributes).length >=
            this._traceParams.numberOfAttributesPerSpan) {
            const attributeKeyToDelete = Object.keys(this.attributes).shift();
            if (attributeKeyToDelete) {
                this._logger.warn(`Dropping extra attributes : ${attributeKeyToDelete}`);
                delete this.attributes[attributeKeyToDelete];
            }
        }
        this.attributes[key] = value;
        return this;
    }
    setAttributes(attributes) {
        Object.keys(attributes).forEach(key => {
            this.setAttribute(key, attributes[key]);
        });
        return this;
    }
    /**
     *
     * @param name Span Name
     * @param [attributesOrStartTime] Span attributes or start time
     *     if type is {@type TimeInput} and 3rd param is undefined
     * @param [startTime] Specified start time for the event
     */
    addEvent(name, attributesOrStartTime, startTime) {
        if (this._isSpanEnded())
            return this;
        if (this.events.length >= this._traceParams.numberOfEventsPerSpan) {
            this._logger.warn('Dropping extra events.');
            this.events.shift();
        }
        if (core_1.isTimeInput(attributesOrStartTime)) {
            if (typeof startTime === 'undefined') {
                startTime = attributesOrStartTime;
            }
            attributesOrStartTime = undefined;
        }
        if (typeof startTime === 'undefined') {
            startTime = core_1.hrTime();
        }
        this.events.push({
            name,
            attributes: attributesOrStartTime,
            time: core_1.timeInputToHrTime(startTime),
        });
        return this;
    }
    setStatus(status) {
        if (this._isSpanEnded())
            return this;
        this.status = status;
        return this;
    }
    updateName(name) {
        if (this._isSpanEnded())
            return this;
        this.name = name;
        return this;
    }
    end(endTime = core_1.hrTime()) {
        if (this._isSpanEnded()) {
            this._logger.error('You can only call end() on a span once.');
            return;
        }
        this._ended = true;
        this.endTime = core_1.timeInputToHrTime(endTime);
        this._duration = core_1.hrTimeDuration(this.startTime, this.endTime);
        if (this._duration[0] < 0) {
            this._logger.warn('Inconsistent start and end time, startTime > endTime', this.startTime, this.endTime);
        }
        this._spanProcessor.onEnd(this);
    }
    isRecording() {
        return true;
    }
    recordException(exception, time = core_1.hrTime()) {
        const attributes = {};
        if (typeof exception === 'string') {
            attributes[semantic_conventions_1.ExceptionAttribute.MESSAGE] = exception;
        }
        else if (exception) {
            if (exception.code) {
                attributes[semantic_conventions_1.ExceptionAttribute.TYPE] = exception.code;
            }
            else if (exception.name) {
                attributes[semantic_conventions_1.ExceptionAttribute.TYPE] = exception.name;
            }
            if (exception.message) {
                attributes[semantic_conventions_1.ExceptionAttribute.MESSAGE] = exception.message;
            }
            if (exception.stack) {
                attributes[semantic_conventions_1.ExceptionAttribute.STACKTRACE] = exception.stack;
            }
        }
        // these are minimum requirements from spec
        if (attributes[semantic_conventions_1.ExceptionAttribute.TYPE] ||
            attributes[semantic_conventions_1.ExceptionAttribute.MESSAGE]) {
            this.addEvent(semantic_conventions_1.ExceptionEventName, attributes, time);
        }
        else {
            this._logger.warn(`Failed to record an exception ${exception}`);
        }
    }
    get duration() {
        return this._duration;
    }
    get ended() {
        return this._ended;
    }
    _isSpanEnded() {
        if (this._ended) {
            this._logger.warn('Can not execute the operation on ended Span {traceId: %s, spanId: %s}', this.spanContext.traceId, this.spanContext.spanId);
        }
        return this._ended;
    }
}
exports.Span = Span;
//# sourceMappingURL=Span.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CONFIG = exports.DEFAULT_MAX_LINKS_PER_SPAN = exports.DEFAULT_MAX_ATTRIBUTES_PER_SPAN = exports.DEFAULT_MAX_EVENTS_PER_SPAN = void 0;
const core_1 = __webpack_require__(0);
/** Default limit for Message events per span */
exports.DEFAULT_MAX_EVENTS_PER_SPAN = 128;
/** Default limit for Attributes per span */
exports.DEFAULT_MAX_ATTRIBUTES_PER_SPAN = 32;
/** Default limit for Links per span */
exports.DEFAULT_MAX_LINKS_PER_SPAN = 32;
/**
 * Default configuration. For fields with primitive values, any user-provided
 * value will override the corresponding default value. For fields with
 * non-primitive values (like `traceParams`), the user-provided value will be
 * used to extend the default value.
 */
exports.DEFAULT_CONFIG = {
    logLevel: core_1.getEnv().OTEL_LOG_LEVEL,
    sampler: new core_1.AlwaysOnSampler(),
    traceParams: {
        numberOfAttributesPerSpan: exports.DEFAULT_MAX_ATTRIBUTES_PER_SPAN,
        numberOfLinksPerSpan: exports.DEFAULT_MAX_LINKS_PER_SPAN,
        numberOfEventsPerSpan: exports.DEFAULT_MAX_EVENTS_PER_SPAN,
    },
    gracefulShutdown: true,
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackContextManager = void 0;
const api_1 = __webpack_require__(1);
/**
 * Stack Context Manager for managing the state in web
 * it doesn't fully support the async calls though
 */
class StackContextManager {
    constructor() {
        /**
         * whether the context manager is enabled or not
         */
        this._enabled = false;
        /**
         * Keeps the reference to current context
         */
        this._currentContext = api_1.Context.ROOT_CONTEXT;
    }
    /**
     *
     * @param target Function to be executed within the context
     * @param context
     */
    _bindFunction(target, context = api_1.Context.ROOT_CONTEXT) {
        const manager = this;
        const contextWrapper = function (...args) {
            return manager.with(context, () => target.apply(this, args));
        };
        Object.defineProperty(contextWrapper, 'length', {
            enumerable: false,
            configurable: true,
            writable: false,
            value: target.length,
        });
        return contextWrapper;
    }
    /**
     * Returns the active context
     */
    active() {
        return this._currentContext;
    }
    /**
     * Binds a the certain context or the active one to the target function and then returns the target
     * @param target
     * @param context
     */
    bind(target, context = api_1.Context.ROOT_CONTEXT) {
        // if no specific context to propagate is given, we use the current one
        if (context === undefined) {
            context = this.active();
        }
        if (typeof target === 'function') {
            return this._bindFunction(target, context);
        }
        return target;
    }
    /**
     * Disable the context manager (clears the current context)
     */
    disable() {
        this._currentContext = api_1.Context.ROOT_CONTEXT;
        this._enabled = false;
        return this;
    }
    /**
     * Enables the context manager and creates a default(root) context
     */
    enable() {
        if (this._enabled) {
            return this;
        }
        this._enabled = true;
        this._currentContext = api_1.Context.ROOT_CONTEXT;
        return this;
    }
    /**
     * Calls the callback function [fn] with the provided [context]. If [context] is undefined then it will use the window.
     * The context will be set as active
     * @param context
     * @param fn Callback function
     */
    with(context, fn) {
        const previousContext = this._currentContext;
        this._currentContext = context || api_1.Context.ROOT_CONTEXT;
        try {
            return fn();
        }
        finally {
            this._currentContext = previousContext;
        }
    }
}
exports.StackContextManager = StackContextManager;
//# sourceMappingURL=StackContextManager.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isFunction (funktion) {
  return typeof funktion === 'function'
}

// Default to complaining loudly when things don't go according to plan.
var logger = console.error.bind(console)

// Sets a property on an object, preserving its enumerability.
// This function assumes that the property is already writable.
function defineProperty (obj, name, value) {
  var enumerable = !!obj[name] && obj.propertyIsEnumerable(name)
  Object.defineProperty(obj, name, {
    configurable: true,
    enumerable: enumerable,
    writable: true,
    value: value
  })
}

// Keep initialization idempotent.
function shimmer (options) {
  if (options && options.logger) {
    if (!isFunction(options.logger)) logger("new logger isn't a function, not replacing")
    else logger = options.logger
  }
}

function wrap (nodule, name, wrapper) {
  if (!nodule || !nodule[name]) {
    logger('no original function ' + name + ' to wrap')
    return
  }

  if (!wrapper) {
    logger('no wrapper function')
    logger((new Error()).stack)
    return
  }

  if (!isFunction(nodule[name]) || !isFunction(wrapper)) {
    logger('original object and wrapper must be functions')
    return
  }

  var original = nodule[name]
  var wrapped = wrapper(original, name)

  defineProperty(wrapped, '__original', original)
  defineProperty(wrapped, '__unwrap', function () {
    if (nodule[name] === wrapped) defineProperty(nodule, name, original)
  })
  defineProperty(wrapped, '__wrapped', true)

  defineProperty(nodule, name, wrapped)
  return wrapped
}

function massWrap (nodules, names, wrapper) {
  if (!nodules) {
    logger('must provide one or more modules to patch')
    logger((new Error()).stack)
    return
  } else if (!Array.isArray(nodules)) {
    nodules = [nodules]
  }

  if (!(names && Array.isArray(names))) {
    logger('must provide one or more functions to wrap on modules')
    return
  }

  nodules.forEach(function (nodule) {
    names.forEach(function (name) {
      wrap(nodule, name, wrapper)
    })
  })
}

function unwrap (nodule, name) {
  if (!nodule || !nodule[name]) {
    logger('no function to unwrap.')
    logger((new Error()).stack)
    return
  }

  if (!nodule[name].__unwrap) {
    logger('no original to unwrap to -- has ' + name + ' already been unwrapped?')
  } else {
    return nodule[name].__unwrap()
  }
}

function massUnwrap (nodules, names) {
  if (!nodules) {
    logger('must provide one or more modules to patch')
    logger((new Error()).stack)
    return
  } else if (!Array.isArray(nodules)) {
    nodules = [nodules]
  }

  if (!(names && Array.isArray(names))) {
    logger('must provide one or more functions to unwrap on modules')
    return
  }

  nodules.forEach(function (nodule) {
    names.forEach(function (name) {
      unwrap(nodule, name)
    })
  })
}

shimmer.wrap = wrap
shimmer.massWrap = massWrap
shimmer.unwrap = unwrap
shimmer.massUnwrap = massUnwrap

module.exports = shimmer


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(98), exports);
__webpack_require__(186);
//# sourceMappingURL=index.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(130), exports);
exports.collectorTypes = __webpack_require__(17);
var transform_1 = __webpack_require__(16);
Object.defineProperty(exports, "toCollectorExportTraceServiceRequest", { enumerable: true, get: function () { return transform_1.toCollectorExportTraceServiceRequest; } });
var transformMetrics_1 = __webpack_require__(39);
Object.defineProperty(exports, "toCollectorExportMetricServiceRequest", { enumerable: true, get: function () { return transformMetrics_1.toCollectorExportMetricServiceRequest; } });
//# sourceMappingURL=index.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(147), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(151), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(155), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__opentelemetry_tracing__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__opentelemetry_tracing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__opentelemetry_tracing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opentelemetry_web__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opentelemetry_web___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__opentelemetry_web__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opentelemetry_plugin_xml_http_request__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opentelemetry_plugin_xml_http_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__opentelemetry_plugin_xml_http_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opentelemetry_plugin_user_interaction__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opentelemetry_plugin_user_interaction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__opentelemetry_plugin_user_interaction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opentelemetry_context_zone__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opentelemetry_context_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__opentelemetry_context_zone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__opentelemetry_exporter_collector__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__opentelemetry_exporter_collector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__opentelemetry_exporter_collector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__opentelemetry_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__opentelemetry_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__opentelemetry_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__opentelemetry_api__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__opentelemetry_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__opentelemetry_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__opentelemetry_plugin_document_load__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__opentelemetry_plugin_document_load___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__opentelemetry_plugin_document_load__);










const w3cPropagator = new __WEBPACK_IMPORTED_MODULE_6__opentelemetry_core__["HttpTraceContext"]()

const providerWithZone = new __WEBPACK_IMPORTED_MODULE_1__opentelemetry_web__["WebTracerProvider"]({
    plugins: [
        new __WEBPACK_IMPORTED_MODULE_8__opentelemetry_plugin_document_load__["DocumentLoad"](),
        new __WEBPACK_IMPORTED_MODULE_3__opentelemetry_plugin_user_interaction__["UserInteractionPlugin"](),
        new __WEBPACK_IMPORTED_MODULE_2__opentelemetry_plugin_xml_http_request__["XMLHttpRequestPlugin"]({
                ignoreUrls: [/localhost/],
                propagateTraceHeaderCorsUrls: [
                    'http://localhost:8080'
                ]
            }
        )
    ]
});

// providerWithZone.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
providerWithZone.addSpanProcessor(new __WEBPACK_IMPORTED_MODULE_0__opentelemetry_tracing__["SimpleSpanProcessor"](new __WEBPACK_IMPORTED_MODULE_5__opentelemetry_exporter_collector__["CollectorTraceExporter"]()));

providerWithZone.register({
    contextManager: new __WEBPACK_IMPORTED_MODULE_4__opentelemetry_context_zone__["ZoneContextManager"](),
    propagator: w3cPropagator,
});

const tracer = providerWithZone.getTracer('treactor');

let lastButtonId = 0;

function btnAddClick() {
    lastButtonId++;
    const btn = document.createElement('button');
    // for easier testing of element xpath
    let navigate = false;
    if (lastButtonId % 2 === 0) {
        btn.setAttribute('id', `button${lastButtonId}`);
        navigate = true;
    }
    btn.setAttribute('class', `buttonClass${lastButtonId}`);
    btn.append(document.createTextNode(`Click ${lastButtonId}`));
    btn.addEventListener('click', onClick.bind(this, navigate));
    document.querySelector('#buttons').append(btn);
}


function prepareClickEvents() {

    const metaElement = [...document.getElementsByTagName('meta')].find(
        e => e.getAttribute('name') === __WEBPACK_IMPORTED_MODULE_6__opentelemetry_core__["TRACE_PARENT_HEADER"]
    );
    const traceParent = (metaElement && metaElement.content) || '';
    const tp = traceParent.split("-")
    const span1 = tracer.startSpan('Alex was in Javascript!', {
        parent: {
            traceId: tp[1],
            spanId: tp[2]
        }
    });

    for (let i = 0; i < 5; i++) {
        btnAddClick();
    }
    const btnAdd = document.getElementById('btnAdd');
    btnAdd.addEventListener('click', btnAddClick);

    tracer.withSpan(span1, () => {
        tracer.getCurrentSpan().addEvent("starting some data download")
        const span = tracer.startSpan("callingData")
        getData('/treact/atom?symbol=H').then(() => {
            console.log('data downloaded 2');
        });
    })


    span1.end();
}

function onClick(navigate) {
    if (navigate) {
        history.pushState({test: 'testing'}, '', `${location.pathname}`);
        history.pushState({test: 'testing'}, '', `${location.pathname}#foo=bar1`);
    }
    getData('https://httpbin.org/get?a=1').then(() => {
        getData('https://httpbin.org/get?a=1').then(() => {
            console.log('data downloaded 2');
        });
        getData('https://httpbin.org/get?a=1').then(() => {
            console.log('data downloaded 3');
        });
        console.log('data downloaded 1');
    });
}

function getData(url, resolve) {
    return new Promise(async (resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.setRequestHeader('Accept', 'application/json');
        req.send();
        req.onload = function () {
            resolve();
        };
    });
}

window.addEventListener('load', prepareClickEvents);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsAPI = void 0;
var NoopMeterProvider_1 = __webpack_require__(27);
var global_utils_1 = __webpack_require__(7);
/**
 * Singleton object which represents the entry point to the OpenTelemetry Metrics API
 */
var MetricsAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function MetricsAPI() {
    }
    /** Get the singleton instance of the Metrics API */
    MetricsAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new MetricsAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global meter. Returns the initialized global meter provider.
     */
    MetricsAPI.prototype.setGlobalMeterProvider = function (provider) {
        if (global_utils_1._global[global_utils_1.GLOBAL_METRICS_API_KEY]) {
            // global meter provider has already been set
            return this.getMeterProvider();
        }
        global_utils_1._global[global_utils_1.GLOBAL_METRICS_API_KEY] = global_utils_1.makeGetter(global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION, provider, NoopMeterProvider_1.NOOP_METER_PROVIDER);
        return provider;
    };
    /**
     * Returns the global meter provider.
     */
    MetricsAPI.prototype.getMeterProvider = function () {
        var _a, _b;
        return ((_b = (_a = global_utils_1._global[global_utils_1.GLOBAL_METRICS_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(global_utils_1._global, global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : NoopMeterProvider_1.NOOP_METER_PROVIDER);
    };
    /**
     * Returns a meter from the global meter provider.
     */
    MetricsAPI.prototype.getMeter = function (name, version) {
        return this.getMeterProvider().getMeter(name, version);
    };
    /** Remove the global meter provider */
    MetricsAPI.prototype.disable = function () {
        delete global_utils_1._global[global_utils_1.GLOBAL_METRICS_API_KEY];
    };
    return MetricsAPI;
}());
exports.MetricsAPI = MetricsAPI;
//# sourceMappingURL=metrics.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropagationAPI = void 0;
var getter_1 = __webpack_require__(24);
var NoopTextMapPropagator_1 = __webpack_require__(23);
var setter_1 = __webpack_require__(25);
var context_1 = __webpack_require__(22);
var global_utils_1 = __webpack_require__(7);
var contextApi = context_1.ContextAPI.getInstance();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Propagation API
 */
var PropagationAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function PropagationAPI() {
    }
    /** Get the singleton instance of the Propagator API */
    PropagationAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new PropagationAPI();
        }
        return this._instance;
    };
    /**
     * Set the current propagator. Returns the initialized propagator
     */
    PropagationAPI.prototype.setGlobalPropagator = function (propagator) {
        if (global_utils_1._global[global_utils_1.GLOBAL_PROPAGATION_API_KEY]) {
            // global propagator has already been set
            return this._getGlobalPropagator();
        }
        global_utils_1._global[global_utils_1.GLOBAL_PROPAGATION_API_KEY] = global_utils_1.makeGetter(global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION, propagator, NoopTextMapPropagator_1.NOOP_TEXT_MAP_PROPAGATOR);
        return propagator;
    };
    /**
     * Inject context into a carrier to be propagated inter-process
     *
     * @param carrier carrier to inject context into
     * @param setter Function used to set values on the carrier
     * @param context Context carrying tracing data to inject. Defaults to the currently active context.
     */
    PropagationAPI.prototype.inject = function (carrier, setter, context) {
        if (setter === void 0) { setter = setter_1.defaultSetter; }
        if (context === void 0) { context = contextApi.active(); }
        return this._getGlobalPropagator().inject(context, carrier, setter);
    };
    /**
     * Extract context from a carrier
     *
     * @param carrier Carrier to extract context from
     * @param getter Function used to extract keys from a carrier
     * @param context Context which the newly created context will inherit from. Defaults to the currently active context.
     */
    PropagationAPI.prototype.extract = function (carrier, getter, context) {
        if (getter === void 0) { getter = getter_1.defaultGetter; }
        if (context === void 0) { context = contextApi.active(); }
        return this._getGlobalPropagator().extract(context, carrier, getter);
    };
    /** Remove the global propagator */
    PropagationAPI.prototype.disable = function () {
        delete global_utils_1._global[global_utils_1.GLOBAL_PROPAGATION_API_KEY];
    };
    PropagationAPI.prototype._getGlobalPropagator = function () {
        var _a, _b;
        return ((_b = (_a = global_utils_1._global[global_utils_1.GLOBAL_PROPAGATION_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(global_utils_1._global, global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : NoopTextMapPropagator_1.NOOP_TEXT_MAP_PROPAGATOR);
    };
    return PropagationAPI;
}());
exports.PropagationAPI = PropagationAPI;
//# sourceMappingURL=propagation.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceAPI = void 0;
var NoopTracerProvider_1 = __webpack_require__(11);
var ProxyTracerProvider_1 = __webpack_require__(30);
var spancontext_utils_1 = __webpack_require__(12);
var global_utils_1 = __webpack_require__(7);
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 */
var TraceAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function TraceAPI() {
        this._proxyTracerProvider = new ProxyTracerProvider_1.ProxyTracerProvider();
        this.isSpanContextValid = spancontext_utils_1.isSpanContextValid;
    }
    /** Get the singleton instance of the Trace API */
    TraceAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global tracer. Returns the initialized global tracer provider
     */
    TraceAPI.prototype.setGlobalTracerProvider = function (provider) {
        if (global_utils_1._global[global_utils_1.GLOBAL_TRACE_API_KEY]) {
            // global tracer provider has already been set
            return this.getTracerProvider();
        }
        this._proxyTracerProvider.setDelegate(provider);
        global_utils_1._global[global_utils_1.GLOBAL_TRACE_API_KEY] = global_utils_1.makeGetter(global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION, this._proxyTracerProvider, NoopTracerProvider_1.NOOP_TRACER_PROVIDER);
        return this.getTracerProvider();
    };
    /**
     * Returns the global tracer provider.
     */
    TraceAPI.prototype.getTracerProvider = function () {
        var _a, _b;
        return ((_b = (_a = global_utils_1._global[global_utils_1.GLOBAL_TRACE_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(global_utils_1._global, global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : this._proxyTracerProvider);
    };
    /**
     * Returns a tracer from the global tracer provider.
     */
    TraceAPI.prototype.getTracer = function (name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    /** Remove the global tracer provider */
    TraceAPI.prototype.disable = function () {
        delete global_utils_1._global[global_utils_1.GLOBAL_TRACE_API_KEY];
        this._proxyTracerProvider = new ProxyTracerProvider_1.ProxyTracerProvider();
    };
    return TraceAPI;
}());
exports.TraceAPI = TraceAPI;
//# sourceMappingURL=trace.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=Exception.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=Logger.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=Time.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=TextMapPropagator.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=CorrelationContext.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryTtl = void 0;
/**
 * EntryTtl is an integer that represents number of hops an entry can propagate.
 *
 * For now, ONLY special values (0 and -1) are supported.
 */
var EntryTtl;
(function (EntryTtl) {
    /**
     * NO_PROPAGATION is considered to have local context and is used within the
     * process it created.
     */
    EntryTtl[EntryTtl["NO_PROPAGATION"] = 0] = "NO_PROPAGATION";
    /** UNLIMITED_PROPAGATION can propagate unlimited hops. */
    EntryTtl[EntryTtl["UNLIMITED_PROPAGATION"] = -1] = "UNLIMITED_PROPAGATION";
})(EntryTtl = exports.EntryTtl || (exports.EntryTtl = {}));
//# sourceMappingURL=EntryValue.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=BatchObserverResult.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=BoundInstrument.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=Meter.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=MeterProvider.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueType = void 0;
/** The Type of value. It describes how the data is reported. */
var ValueType;
(function (ValueType) {
    ValueType[ValueType["INT"] = 0] = "INT";
    ValueType[ValueType["DOUBLE"] = 1] = "DOUBLE";
})(ValueType = exports.ValueType || (exports.ValueType = {}));
//# sourceMappingURL=Metric.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=Observation.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=ObserverResult.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports._globalThis = void 0;
/** only globals that common to node and browsers are allowed */
// eslint-disable-next-line node/no-unsupported-features/es-builtins, no-undef
exports._globalThis = typeof globalThis === 'object' ? globalThis : window;
//# sourceMappingURL=globalThis.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(77), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=Event.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=Sampler.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamplingDecision = void 0;
/**
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */
var SamplingDecision;
(function (SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */
    SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */
    SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */
    SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision = exports.SamplingDecision || (exports.SamplingDecision = {}));
//# sourceMappingURL=SamplingResult.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=SpanOptions.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=TimedEvent.js.map

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=attributes.js.map

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=Plugin.js.map

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=link.js.map

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=link_context.js.map

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=span.js.map

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=span_context.js.map

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SpanKind = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SpanKind;
(function (SpanKind) {
    /** Default value. Indicates that the span is used internally. */
    SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */
    SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */
    SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind = exports.SpanKind || (exports.SpanKind = {}));
//# sourceMappingURL=span_kind.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CanonicalCode = void 0;
/**
 * An enumeration of canonical status codes.
 */
var CanonicalCode;
(function (CanonicalCode) {
    /**
     * Not an error; returned on success
     */
    CanonicalCode[CanonicalCode["OK"] = 0] = "OK";
    /**
     * The operation was cancelled (typically by the caller).
     */
    CanonicalCode[CanonicalCode["CANCELLED"] = 1] = "CANCELLED";
    /**
     * Unknown error.  An example of where this error may be returned is
     * if a status value received from another address space belongs to
     * an error-space that is not known in this address space.  Also
     * errors raised by APIs that do not return enough error information
     * may be converted to this error.
     */
    CanonicalCode[CanonicalCode["UNKNOWN"] = 2] = "UNKNOWN";
    /**
     * Client specified an invalid argument.  Note that this differs
     * from FAILED_PRECONDITION.  INVALID_ARGUMENT indicates arguments
     * that are problematic regardless of the state of the system
     * (e.g., a malformed file name).
     */
    CanonicalCode[CanonicalCode["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
    /**
     * Deadline expired before operation could complete.  For operations
     * that change the state of the system, this error may be returned
     * even if the operation has completed successfully.  For example, a
     * successful response from a server could have been delayed long
     * enough for the deadline to expire.
     */
    CanonicalCode[CanonicalCode["DEADLINE_EXCEEDED"] = 4] = "DEADLINE_EXCEEDED";
    /**
     * Some requested entity (e.g., file or directory) was not found.
     */
    CanonicalCode[CanonicalCode["NOT_FOUND"] = 5] = "NOT_FOUND";
    /**
     * Some entity that we attempted to create (e.g., file or directory)
     * already exists.
     */
    CanonicalCode[CanonicalCode["ALREADY_EXISTS"] = 6] = "ALREADY_EXISTS";
    /**
     * The caller does not have permission to execute the specified
     * operation.  PERMISSION_DENIED must not be used for rejections
     * caused by exhausting some resource (use RESOURCE_EXHAUSTED
     * instead for those errors).  PERMISSION_DENIED must not be
     * used if the caller can not be identified (use UNAUTHENTICATED
     * instead for those errors).
     */
    CanonicalCode[CanonicalCode["PERMISSION_DENIED"] = 7] = "PERMISSION_DENIED";
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or
     * perhaps the entire file system is out of space.
     */
    CanonicalCode[CanonicalCode["RESOURCE_EXHAUSTED"] = 8] = "RESOURCE_EXHAUSTED";
    /**
     * Operation was rejected because the system is not in a state
     * required for the operation's execution.  For example, directory
     * to be deleted may be non-empty, an rmdir operation is applied to
     * a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *
     *  - Use UNAVAILABLE if the client can retry just the failing call.
     *  - Use ABORTED if the client should retry at a higher-level
     *    (e.g., restarting a read-modify-write sequence).
     *  - Use FAILED_PRECONDITION if the client should not retry until
     *    the system state has been explicitly fixed.  E.g., if an "rmdir"
     *    fails because the directory is non-empty, FAILED_PRECONDITION
     *    should be returned since the client should not retry unless
     *    they have first fixed up the directory by deleting files from it.
     *  - Use FAILED_PRECONDITION if the client performs conditional
     *    REST Get/Update/Delete on a resource and the resource on the
     *    server does not match the condition. E.g., conflicting
     *    read-modify-write on the same resource.
     */
    CanonicalCode[CanonicalCode["FAILED_PRECONDITION"] = 9] = "FAILED_PRECONDITION";
    /**
     * The operation was aborted, typically due to a concurrency issue
     * like sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION,
     * ABORTED, and UNAVAILABLE.
     */
    CanonicalCode[CanonicalCode["ABORTED"] = 10] = "ABORTED";
    /**
     * Operation was attempted past the valid range.  E.g., seeking or
     * reading past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may
     * be fixed if the system state changes. For example, a 32-bit file
     * system will generate INVALID_ARGUMENT if asked to read at an
     * offset that is not in the range [0,2^32-1], but it will generate
     * OUT_OF_RANGE if asked to read from an offset past the current
     * file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE.  We recommend using OUT_OF_RANGE (the more specific
     * error) when it applies so that callers who are iterating through
     * a space can easily look for an OUT_OF_RANGE error to detect when
     * they are done.
     */
    CanonicalCode[CanonicalCode["OUT_OF_RANGE"] = 11] = "OUT_OF_RANGE";
    /**
     * Operation is not implemented or not supported/enabled in this service.
     */
    CanonicalCode[CanonicalCode["UNIMPLEMENTED"] = 12] = "UNIMPLEMENTED";
    /**
     * Internal errors.  Means some invariants expected by underlying
     * system has been broken.  If you see one of these errors,
     * something is very broken.
     */
    CanonicalCode[CanonicalCode["INTERNAL"] = 13] = "INTERNAL";
    /**
     * The service is currently unavailable.  This is a most likely a
     * transient condition and may be corrected by retrying with
     * a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION,
     * ABORTED, and UNAVAILABLE.
     */
    CanonicalCode[CanonicalCode["UNAVAILABLE"] = 14] = "UNAVAILABLE";
    /**
     * Unrecoverable data loss or corruption.
     */
    CanonicalCode[CanonicalCode["DATA_LOSS"] = 15] = "DATA_LOSS";
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    CanonicalCode[CanonicalCode["UNAUTHENTICATED"] = 16] = "UNAUTHENTICATED";
})(CanonicalCode = exports.CanonicalCode || (exports.CanonicalCode = {}));
//# sourceMappingURL=status.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=trace_state.js.map

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=tracer.js.map

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=tracer_provider.js.map

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoopContextManager = void 0;
var context_1 = __webpack_require__(32);
var NoopContextManager = /** @class */ (function () {
    function NoopContextManager() {
    }
    NoopContextManager.prototype.active = function () {
        return context_1.Context.ROOT_CONTEXT;
    };
    NoopContextManager.prototype.with = function (context, fn) {
        return fn();
    };
    NoopContextManager.prototype.bind = function (target, context) {
        return target;
    };
    NoopContextManager.prototype.enable = function () {
        return this;
    };
    NoopContextManager.prototype.disable = function () {
        return this;
    };
    return NoopContextManager;
}());
exports.NoopContextManager = NoopContextManager;
//# sourceMappingURL=NoopContextManager.js.map

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=types.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneContextManager = void 0;
const context_base_1 = __webpack_require__(5);
const util_1 = __webpack_require__(100);
/* Key name to be used to save a context reference in Zone */
const ZONE_CONTEXT_KEY = 'OT_ZONE_CONTEXT';
/**
 * ZoneContextManager
 * This module provides an easy functionality for tracing action between asynchronous operations in web.
 * It was not possible with standard [StackContextManager]{@link https://github.com/open-telemetry/opentelemetry-js/blob/master/packages/opentelemetry-web/src/StackContextManager.ts}.
 * It heavily depends on [zone.js]{@link https://www.npmjs.com/package/zone.js}.
 * It stores the information about context in zone. Each Context will have always new Zone;
 * It also supports binding a certain Span to a target that has "addEventListener" and "removeEventListener".
 * When this happens a new zone is being created and the provided Span is being assigned to this zone.
 */
class ZoneContextManager {
    constructor() {
        /**
         * whether the context manager is enabled or not
         */
        this._enabled = false;
        /**
         * Helps to create a unique name for the zones - part of zone name
         */
        this._zoneCounter = 0;
    }
    /**
     * Returns the active context from certain zone name
     * @param activeZone
     */
    _activeContextFromZone(activeZone) {
        return ((activeZone && activeZone.get(ZONE_CONTEXT_KEY)) || context_base_1.Context.ROOT_CONTEXT);
    }
    /**
     * @param target Function to be executed within the context
     * @param context A context (span) to be executed within target function
     */
    _bindFunction(target, context) {
        const manager = this;
        const contextWrapper = function (...args) {
            return manager.with(context, () => target.apply(this, args));
        };
        Object.defineProperty(contextWrapper, 'length', {
            enumerable: false,
            configurable: true,
            writable: false,
            value: target.length,
        });
        return contextWrapper;
    }
    /**
     * @param obj target object on which the listeners will be patched
     * @param context A context (span) to be bind to target
     */
    _bindListener(obj, context) {
        const target = obj;
        if (target.__ot_listeners !== undefined) {
            return obj;
        }
        target.__ot_listeners = {};
        if (typeof target.addEventListener === 'function') {
            target.addEventListener = this._patchAddEventListener(target, target.addEventListener, context);
        }
        if (typeof target.removeEventListener === 'function') {
            target.removeEventListener = this._patchRemoveEventListener(target, target.removeEventListener);
        }
        return obj;
    }
    /**
     * Creates a new unique zone name
     */
    _createZoneName() {
        this._zoneCounter++;
        const random = Math.random();
        return `${this._zoneCounter}-${random}`;
    }
    /**
     * Creates a new zone
     * @param zoneName zone name
     * @param context A context (span) to be bind with Zone
     */
    _createZone(zoneName, context) {
        return Zone.current.fork({
            name: zoneName,
            properties: {
                [ZONE_CONTEXT_KEY]: context,
            },
        });
    }
    /**
     * Returns the active zone
     */
    _getActiveZone() {
        return Zone.current;
    }
    /**
     * Patches addEventListener method
     * @param target any target that has "addEventListener" method
     * @param original reference to the patched method
     * @param [context] context to be bind to the listener
     */
    _patchAddEventListener(target, original, context) {
        const contextManager = this;
        return function (event, listener, opts) {
            if (target.__ot_listeners === undefined) {
                target.__ot_listeners = {};
            }
            let listeners = target.__ot_listeners[event];
            if (listeners === undefined) {
                listeners = new WeakMap();
                target.__ot_listeners[event] = listeners;
            }
            const patchedListener = contextManager.bind(listener, context);
            // store a weak reference of the user listener to ours
            listeners.set(listener, patchedListener);
            return original.call(this, event, patchedListener, opts);
        };
    }
    /**
     * Patches removeEventListener method
     * @param target any target that has "removeEventListener" method
     * @param original reference to the patched method
     */
    _patchRemoveEventListener(target, original) {
        return function (event, listener) {
            if (target.__ot_listeners === undefined ||
                target.__ot_listeners[event] === undefined) {
                return original.call(this, event, listener);
            }
            const events = target.__ot_listeners[event];
            const patchedListener = events.get(listener);
            events.delete(listener);
            return original.call(this, event, patchedListener || listener);
        };
    }
    /**
     * Returns the active context
     */
    active() {
        if (!this._enabled) {
            return context_base_1.Context.ROOT_CONTEXT;
        }
        const activeZone = this._getActiveZone();
        const active = this._activeContextFromZone(activeZone);
        if (active) {
            return active;
        }
        return context_base_1.Context.ROOT_CONTEXT;
    }
    /**
     * Binds a the certain context or the active one to the target function and then returns the target
     * @param target
     * @param context A context (span) to be bind to target
     */
    bind(target, context) {
        // if no specific context to propagate is given, we use the current one
        if (context === undefined) {
            context = this.active();
        }
        if (typeof target === 'function') {
            return this._bindFunction(target, context);
        }
        else if (util_1.isListenerObject(target)) {
            this._bindListener(target, context);
        }
        return target;
    }
    /**
     * Disable the context manager (clears all the contexts)
     */
    disable() {
        this._enabled = false;
        return this;
    }
    /**
     * Enables the context manager and creates a default(root) context
     */
    enable() {
        this._enabled = true;
        return this;
    }
    /**
     * Calls the callback function [fn] with the provided [context].
     *     If [context] is undefined then it will use the active context.
     *     The context will be set as active
     * @param context A context (span) to be called with provided callback
     * @param fn Callback function
     */
    with(context, fn) {
        const zoneName = this._createZoneName();
        const newZone = this._createZone(zoneName, context);
        return newZone.run(fn, context);
    }
}
exports.ZoneContextManager = ZoneContextManager;
//# sourceMappingURL=ZoneContextManager.js.map

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(97), exports);
__exportStar(__webpack_require__(99), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=types.js.map

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isListenerObject = void 0;
/**
 * check if an object has addEventListener and removeEventListener functions then it will return true
 * @param obj
 */
function isListenerObject(obj = {}) {
    return (typeof obj.addEventListener === 'function' &&
        typeof obj.removeEventListener === 'function');
}
exports.isListenerObject = isListenerObject;
//# sourceMappingURL=util.js.map

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportResult = void 0;
var ExportResult;
(function (ExportResult) {
    ExportResult[ExportResult["SUCCESS"] = 0] = "SUCCESS";
    ExportResult[ExportResult["FAILED_NOT_RETRYABLE"] = 1] = "FAILED_NOT_RETRYABLE";
    ExportResult[ExportResult["FAILED_RETRYABLE"] = 2] = "FAILED_RETRYABLE";
})(ExportResult = exports.ExportResult || (exports.ExportResult = {}));
//# sourceMappingURL=ExportResult.js.map

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
const types_1 = __webpack_require__(13);
const platform_1 = __webpack_require__(15);
class ConsoleLogger {
    constructor(level = platform_1.getEnv().OTEL_LOG_LEVEL) {
        if (level >= types_1.LogLevel.DEBUG) {
            this.debug = (...args) => {
                console.debug(...args);
            };
        }
        if (level >= types_1.LogLevel.INFO) {
            this.info = (...args) => {
                console.info(...args);
            };
        }
        if (level >= types_1.LogLevel.WARN) {
            this.warn = (...args) => {
                console.warn(...args);
            };
        }
        if (level >= types_1.LogLevel.ERROR) {
            this.error = (...args) => {
                console.error(...args);
            };
        }
    }
    debug(message, ...args) { }
    error(message, ...args) { }
    warn(message, ...args) { }
    info(message, ...args) { }
}
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=ConsoleLogger.js.map

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTimeInput = exports.isTimeInputHrTime = exports.hrTimeToMicroseconds = exports.hrTimeToMilliseconds = exports.hrTimeToNanoseconds = exports.hrTimeToTimeStamp = exports.hrTimeDuration = exports.timeInputToHrTime = exports.hrTime = void 0;
const platform_1 = __webpack_require__(15);
const NANOSECOND_DIGITS = 9;
const SECOND_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS);
/**
 * Converts a number to HrTime
 * @param epochMillis
 */
function numberToHrtime(epochMillis) {
    const epochSeconds = epochMillis / 1000;
    // Decimals only.
    const seconds = Math.trunc(epochSeconds);
    // Round sub-nanosecond accuracy to nanosecond.
    const nanos = Number((epochSeconds - seconds).toFixed(NANOSECOND_DIGITS)) *
        SECOND_TO_NANOSECONDS;
    return [seconds, nanos];
}
function getTimeOrigin() {
    let timeOrigin = platform_1.otperformance.timeOrigin;
    if (typeof timeOrigin !== 'number') {
        const perf = platform_1.otperformance;
        timeOrigin = perf.timing && perf.timing.fetchStart;
    }
    return timeOrigin;
}
/**
 * Returns an hrtime calculated via performance component.
 * @param performanceNow
 */
function hrTime(performanceNow) {
    const timeOrigin = numberToHrtime(getTimeOrigin());
    const now = numberToHrtime(typeof performanceNow === 'number' ? performanceNow : platform_1.otperformance.now());
    let seconds = timeOrigin[0] + now[0];
    let nanos = timeOrigin[1] + now[1];
    // Nanoseconds
    if (nanos > SECOND_TO_NANOSECONDS) {
        nanos -= SECOND_TO_NANOSECONDS;
        seconds += 1;
    }
    return [seconds, nanos];
}
exports.hrTime = hrTime;
/**
 *
 * Converts a TimeInput to an HrTime, defaults to _hrtime().
 * @param time
 */
function timeInputToHrTime(time) {
    // process.hrtime
    if (isTimeInputHrTime(time)) {
        return time;
    }
    else if (typeof time === 'number') {
        // Must be a performance.now() if it's smaller than process start time.
        if (time < getTimeOrigin()) {
            return hrTime(time);
        }
        else {
            // epoch milliseconds or performance.timeOrigin
            return numberToHrtime(time);
        }
    }
    else if (time instanceof Date) {
        return [time.getTime(), 0];
    }
    else {
        throw TypeError('Invalid input type');
    }
}
exports.timeInputToHrTime = timeInputToHrTime;
/**
 * Returns a duration of two hrTime.
 * @param startTime
 * @param endTime
 */
function hrTimeDuration(startTime, endTime) {
    let seconds = endTime[0] - startTime[0];
    let nanos = endTime[1] - startTime[1];
    // overflow
    if (nanos < 0) {
        seconds -= 1;
        // negate
        nanos += SECOND_TO_NANOSECONDS;
    }
    return [seconds, nanos];
}
exports.hrTimeDuration = hrTimeDuration;
/**
 * Convert hrTime to timestamp, for example "2019-05-14T17:00:00.000123456Z"
 * @param hrTime
 */
function hrTimeToTimeStamp(hrTime) {
    const precision = NANOSECOND_DIGITS;
    const tmp = `${'0'.repeat(precision)}${hrTime[1]}Z`;
    const nanoString = tmp.substr(tmp.length - precision - 1);
    const date = new Date(hrTime[0] * 1000).toISOString();
    return date.replace('000Z', nanoString);
}
exports.hrTimeToTimeStamp = hrTimeToTimeStamp;
/**
 * Convert hrTime to nanoseconds.
 * @param hrTime
 */
function hrTimeToNanoseconds(hrTime) {
    return hrTime[0] * SECOND_TO_NANOSECONDS + hrTime[1];
}
exports.hrTimeToNanoseconds = hrTimeToNanoseconds;
/**
 * Convert hrTime to milliseconds.
 * @param hrTime
 */
function hrTimeToMilliseconds(hrTime) {
    return Math.round(hrTime[0] * 1e3 + hrTime[1] / 1e6);
}
exports.hrTimeToMilliseconds = hrTimeToMilliseconds;
/**
 * Convert hrTime to microseconds.
 * @param hrTime
 */
function hrTimeToMicroseconds(hrTime) {
    return Math.round(hrTime[0] * 1e6 + hrTime[1] / 1e3);
}
exports.hrTimeToMicroseconds = hrTimeToMicroseconds;
/**
 * check if time is HrTime
 * @param value
 */
function isTimeInputHrTime(value) {
    return (Array.isArray(value) &&
        value.length === 2 &&
        typeof value[0] === 'number' &&
        typeof value[1] === 'number');
}
exports.isTimeInputHrTime = isTimeInputHrTime;
/**
 * check if input value is a correct types.TimeInput
 * @param value
 */
function isTimeInput(value) {
    return (isTimeInputHrTime(value) ||
        typeof value === 'number' ||
        value instanceof Date);
}
exports.isTimeInput = isTimeInput;
//# sourceMappingURL=time.js.map

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3Propagator = exports.DEBUG_FLAG_KEY = exports.PARENT_SPAN_ID_KEY = exports.X_B3_FLAGS = exports.X_B3_PARENT_SPAN_ID = exports.X_B3_SAMPLED = exports.X_B3_SPAN_ID = exports.X_B3_TRACE_ID = void 0;
const api_1 = __webpack_require__(1);
const context_1 = __webpack_require__(14);
exports.X_B3_TRACE_ID = 'x-b3-traceid';
exports.X_B3_SPAN_ID = 'x-b3-spanid';
exports.X_B3_SAMPLED = 'x-b3-sampled';
exports.X_B3_PARENT_SPAN_ID = 'x-b3-parentspanid';
exports.X_B3_FLAGS = 'x-b3-flags';
exports.PARENT_SPAN_ID_KEY = api_1.Context.createKey('OpenTelemetry Context Key B3 Parent Span Id');
exports.DEBUG_FLAG_KEY = api_1.Context.createKey('OpenTelemetry Context Key B3 Debug Flag');
const VALID_TRACEID_REGEX = /^([0-9a-f]{16}){1,2}$/i;
const VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
const INVALID_ID_REGEX = /^0+$/i;
const VALID_SAMPLED_VALUES = new Set([true, 'true', 'True', '1', 1]);
const VALID_UNSAMPLED_VALUES = new Set([false, 'false', 'False', '0', 0]);
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && !INVALID_ID_REGEX.test(traceId);
}
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && !INVALID_ID_REGEX.test(spanId);
}
function isValidParentSpanID(spanId) {
    return spanId === undefined || isValidSpanId(spanId);
}
function isValidSampledValue(sampled) {
    return sampled === api_1.TraceFlags.SAMPLED || sampled === api_1.TraceFlags.NONE;
}
function parseHeader(header) {
    return Array.isArray(header) ? header[0] : header;
}
function getHeaderValue(carrier, getter, key) {
    const header = getter(carrier, key);
    return parseHeader(header);
}
function getTraceId(carrier, getter) {
    const traceId = getHeaderValue(carrier, getter, exports.X_B3_TRACE_ID);
    if (typeof traceId === 'string') {
        return traceId.padStart(32, '0');
    }
    return '';
}
function getSpanId(carrier, getter) {
    const spanId = getHeaderValue(carrier, getter, exports.X_B3_SPAN_ID);
    if (typeof spanId === 'string') {
        return spanId;
    }
    return '';
}
function getParentSpanId(carrier, getter) {
    const spanId = getHeaderValue(carrier, getter, exports.X_B3_PARENT_SPAN_ID);
    if (typeof spanId === 'string') {
        return spanId;
    }
    return;
}
function getDebug(carrier, getter) {
    const debug = getHeaderValue(carrier, getter, exports.X_B3_FLAGS);
    return debug === '1' ? '1' : undefined;
}
function getTraceFlags(carrier, getter) {
    const traceFlags = getHeaderValue(carrier, getter, exports.X_B3_SAMPLED);
    const debug = getDebug(carrier, getter);
    if (debug === '1' || VALID_SAMPLED_VALUES.has(traceFlags)) {
        return api_1.TraceFlags.SAMPLED;
    }
    if (traceFlags === undefined || VALID_UNSAMPLED_VALUES.has(traceFlags)) {
        return api_1.TraceFlags.NONE;
    }
    // This indicates to isValidSampledValue that this is not valid
    return;
}
/**
 * Propagator for the B3 HTTP header format.
 * Based on: https://github.com/openzipkin/b3-propagation
 */
class B3Propagator {
    inject(context, carrier, setter) {
        const spanContext = context_1.getParentSpanContext(context);
        if (!spanContext)
            return;
        const parentSpanId = context.getValue(exports.PARENT_SPAN_ID_KEY);
        if (isValidTraceId(spanContext.traceId) &&
            isValidSpanId(spanContext.spanId) &&
            isValidParentSpanID(parentSpanId)) {
            const debug = context.getValue(exports.DEBUG_FLAG_KEY);
            setter(carrier, exports.X_B3_TRACE_ID, spanContext.traceId);
            setter(carrier, exports.X_B3_SPAN_ID, spanContext.spanId);
            if (parentSpanId) {
                setter(carrier, exports.X_B3_PARENT_SPAN_ID, parentSpanId);
            }
            // According to the B3 spec, if the debug flag is set,
            // the sampled flag shouldn't be propagated as well.
            if (debug === '1') {
                setter(carrier, exports.X_B3_FLAGS, debug);
            }
            else if (spanContext.traceFlags !== undefined) {
                // We set the header only if there is an existing sampling decision.
                // Otherwise we will omit it => Absent.
                setter(carrier, exports.X_B3_SAMPLED, (api_1.TraceFlags.SAMPLED & spanContext.traceFlags) === api_1.TraceFlags.SAMPLED
                    ? '1'
                    : '0');
            }
        }
    }
    extract(context, carrier, getter) {
        const traceId = getTraceId(carrier, getter);
        const spanId = getSpanId(carrier, getter);
        const parentSpanId = getParentSpanId(carrier, getter);
        const traceFlags = getTraceFlags(carrier, getter);
        const debug = getDebug(carrier, getter);
        if (isValidTraceId(traceId) &&
            isValidSpanId(spanId) &&
            isValidParentSpanID(parentSpanId) &&
            isValidSampledValue(traceFlags)) {
            context = context.setValue(exports.PARENT_SPAN_ID_KEY, parentSpanId);
            context = context.setValue(exports.DEBUG_FLAG_KEY, debug);
            return context_1.setExtractedSpanContext(context, {
                traceId,
                spanId,
                isRemote: true,
                traceFlags,
            });
        }
        return context;
    }
}
exports.B3Propagator = B3Propagator;
//# sourceMappingURL=B3Propagator.js.map

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpTraceContext = exports.parseTraceParent = exports.TRACE_STATE_HEADER = exports.TRACE_PARENT_HEADER = void 0;
const api_1 = __webpack_require__(1);
const TraceState_1 = __webpack_require__(35);
const context_1 = __webpack_require__(14);
exports.TRACE_PARENT_HEADER = 'traceparent';
exports.TRACE_STATE_HEADER = 'tracestate';
const VERSION = '00';
const VERSION_PART_COUNT = 4; // Version 00 only allows the specific 4 fields.
const VERSION_REGEX = /^(?!ff)[\da-f]{2}$/;
const TRACE_ID_REGEX = /^(?![0]{32})[\da-f]{32}$/;
const PARENT_ID_REGEX = /^(?![0]{16})[\da-f]{16}$/;
const FLAGS_REGEX = /^[\da-f]{2}$/;
/**
 * Parses information from the [traceparent] span tag and converts it into {@link SpanContext}
 * @param traceParent - A meta property that comes from server.
 *     It should be dynamically generated server side to have the server's request trace Id,
 *     a parent span Id that was set on the server's request span,
 *     and the trace flags to indicate the server's sampling decision
 *     (01 = sampled, 00 = not sampled).
 *     for example: '{version}-{traceId}-{spanId}-{sampleDecision}'
 *     For more information see {@link https://www.w3.org/TR/trace-context/}
 */
function parseTraceParent(traceParent) {
    const trimmed = traceParent.trim();
    const traceParentParts = trimmed.split('-');
    // Current version must be structured correctly.
    // For future versions, we can grab just the parts we do support.
    if (traceParentParts[0] === VERSION &&
        traceParentParts.length !== VERSION_PART_COUNT) {
        return null;
    }
    const [version, traceId, parentId, flags] = traceParentParts;
    const isValidParent = VERSION_REGEX.test(version) &&
        TRACE_ID_REGEX.test(traceId) &&
        PARENT_ID_REGEX.test(parentId) &&
        FLAGS_REGEX.test(flags);
    if (!isValidParent) {
        return null;
    }
    return {
        traceId: traceId,
        spanId: parentId,
        traceFlags: parseInt(flags, 16),
    };
}
exports.parseTraceParent = parseTraceParent;
/**
 * Propagates {@link SpanContext} through Trace Context format propagation.
 *
 * Based on the Trace Context specification:
 * https://www.w3.org/TR/trace-context/
 */
class HttpTraceContext {
    inject(context, carrier, setter) {
        const spanContext = context_1.getParentSpanContext(context);
        if (!spanContext)
            return;
        const traceParent = `${VERSION}-${spanContext.traceId}-${spanContext.spanId}-0${Number(spanContext.traceFlags || api_1.TraceFlags.NONE).toString(16)}`;
        setter(carrier, exports.TRACE_PARENT_HEADER, traceParent);
        if (spanContext.traceState) {
            setter(carrier, exports.TRACE_STATE_HEADER, spanContext.traceState.serialize());
        }
    }
    extract(context, carrier, getter) {
        const traceParentHeader = getter(carrier, exports.TRACE_PARENT_HEADER);
        if (!traceParentHeader)
            return context;
        const traceParent = Array.isArray(traceParentHeader)
            ? traceParentHeader[0]
            : traceParentHeader;
        if (typeof traceParent !== 'string')
            return context;
        const spanContext = parseTraceParent(traceParent);
        if (!spanContext)
            return context;
        spanContext.isRemote = true;
        const traceStateHeader = getter(carrier, exports.TRACE_STATE_HEADER);
        if (traceStateHeader) {
            // If more than one `tracestate` header is found, we merge them into a
            // single header.
            const state = Array.isArray(traceStateHeader)
                ? traceStateHeader.join(',')
                : traceStateHeader;
            spanContext.traceState = new TraceState_1.TraceState(typeof state === 'string' ? state : undefined);
        }
        return context_1.setExtractedSpanContext(context, spanContext);
    }
}
exports.HttpTraceContext = HttpTraceContext;
//# sourceMappingURL=HttpTraceContext.js.map

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositePropagator = void 0;
const NoopLogger_1 = __webpack_require__(33);
/** Combines multiple propagators into a single propagator. */
class CompositePropagator {
    /**
     * Construct a composite propagator from a list of propagators.
     *
     * @param [config] Configuration object for composite propagator
     */
    constructor(config = {}) {
        var _a, _b;
        this._propagators = (_a = config.propagators) !== null && _a !== void 0 ? _a : [];
        this._logger = (_b = config.logger) !== null && _b !== void 0 ? _b : new NoopLogger_1.NoopLogger();
    }
    /**
     * Run each of the configured propagators with the given context and carrier.
     * Propagators are run in the order they are configured, so if multiple
     * propagators write the same carrier key, the propagator later in the list
     * will "win".
     *
     * @param context Context to inject
     * @param carrier Carrier into which context will be injected
     */
    inject(context, carrier, setter) {
        for (const propagator of this._propagators) {
            try {
                propagator.inject(context, carrier, setter);
            }
            catch (err) {
                this._logger.warn(`Failed to inject with ${propagator.constructor.name}. Err: ${err.message}`);
            }
        }
    }
    /**
     * Run each of the configured propagators with the given context and carrier.
     * Propagators are run in the order they are configured, so if multiple
     * propagators write the same context key, the propagator later in the list
     * will "win".
     *
     * @param context Context to add values to
     * @param carrier Carrier from which to extract context
     */
    extract(context, carrier, getter) {
        return this._propagators.reduce((ctx, propagator) => {
            try {
                return propagator.extract(ctx, carrier, getter);
            }
            catch (err) {
                this._logger.warn(`Failed to inject with ${propagator.constructor.name}. Err: ${err.message}`);
            }
            return ctx;
        }, context);
    }
}
exports.CompositePropagator = CompositePropagator;
//# sourceMappingURL=composite.js.map

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=types.js.map

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpCorrelationContext = exports.MAX_TOTAL_LENGTH = exports.MAX_PER_NAME_VALUE_PAIRS = exports.MAX_NAME_VALUE_PAIRS = exports.CORRELATION_CONTEXT_HEADER = void 0;
const correlation_context_1 = __webpack_require__(34);
const KEY_PAIR_SEPARATOR = '=';
const PROPERTIES_SEPARATOR = ';';
const ITEMS_SEPARATOR = ',';
// Name of the http header used to propagate the correlation context
exports.CORRELATION_CONTEXT_HEADER = 'otcorrelations';
// Maximum number of name-value pairs allowed by w3c spec
exports.MAX_NAME_VALUE_PAIRS = 180;
// Maximum number of bytes per a single name-value pair allowed by w3c spec
exports.MAX_PER_NAME_VALUE_PAIRS = 4096;
// Maximum total length of all name-value pairs allowed by w3c spec
exports.MAX_TOTAL_LENGTH = 8192;
/**
 * Propagates {@link CorrelationContext} through Context format propagation.
 *
 * Based on the Correlation Context specification:
 * https://w3c.github.io/correlation-context/
 */
class HttpCorrelationContext {
    inject(context, carrier, setter) {
        const correlationContext = correlation_context_1.getCorrelationContext(context);
        if (!correlationContext)
            return;
        const keyPairs = this._getKeyPairs(correlationContext)
            .filter((pair) => {
            return pair.length <= exports.MAX_PER_NAME_VALUE_PAIRS;
        })
            .slice(0, exports.MAX_NAME_VALUE_PAIRS);
        const headerValue = this._serializeKeyPairs(keyPairs);
        if (headerValue.length > 0) {
            setter(carrier, exports.CORRELATION_CONTEXT_HEADER, headerValue);
        }
    }
    _serializeKeyPairs(keyPairs) {
        return keyPairs.reduce((hValue, current) => {
            const value = `${hValue}${hValue != '' ? ITEMS_SEPARATOR : ''}${current}`;
            return value.length > exports.MAX_TOTAL_LENGTH ? hValue : value;
        }, '');
    }
    _getKeyPairs(correlationContext) {
        return Object.keys(correlationContext).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(correlationContext[key].value)}`);
    }
    extract(context, carrier, getter) {
        const headerValue = getter(carrier, exports.CORRELATION_CONTEXT_HEADER);
        if (!headerValue)
            return context;
        const correlationContext = {};
        if (headerValue.length == 0) {
            return context;
        }
        const pairs = headerValue.split(ITEMS_SEPARATOR);
        pairs.forEach(entry => {
            const keyPair = this._parsePairKeyValue(entry);
            if (keyPair) {
                correlationContext[keyPair.key] = { value: keyPair.value };
            }
        });
        if (Object.entries(correlationContext).length === 0) {
            return context;
        }
        return correlation_context_1.setCorrelationContext(context, correlationContext);
    }
    _parsePairKeyValue(entry) {
        const valueProps = entry.split(PROPERTIES_SEPARATOR);
        if (valueProps.length <= 0)
            return;
        const keyPairPart = valueProps.shift();
        if (!keyPairPart)
            return;
        const keyPair = keyPairPart.split(KEY_PAIR_SEPARATOR);
        if (keyPair.length != 2)
            return;
        const key = decodeURIComponent(keyPair[0].trim());
        let value = decodeURIComponent(keyPair[1].trim());
        if (valueProps.length > 0) {
            value =
                value + PROPERTIES_SEPARATOR + valueProps.join(PROPERTIES_SEPARATOR);
        }
        return { key, value };
    }
}
exports.HttpCorrelationContext = HttpCorrelationContext;
//# sourceMappingURL=HttpCorrelationContext.js.map

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateValue = exports.validateKey = void 0;
const VALID_KEY_CHAR_RANGE = '[_0-9a-z-*/]';
const VALID_KEY = `[a-z]${VALID_KEY_CHAR_RANGE}{0,255}`;
const VALID_VENDOR_KEY = `[a-z0-9]${VALID_KEY_CHAR_RANGE}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE}{0,13}`;
const VALID_KEY_REGEX = new RegExp(`^(?:${VALID_KEY}|${VALID_VENDOR_KEY})$`);
const VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
const INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
/**
 * Key is opaque string up to 256 characters printable. It MUST begin with a
 * lowercase letter, and can only contain lowercase letters a-z, digits 0-9,
 * underscores _, dashes -, asterisks *, and forward slashes /.
 * For multi-tenant vendor scenarios, an at sign (@) can be used to prefix the
 * vendor name. Vendors SHOULD set the tenant ID at the beginning of the key.
 * see https://www.w3.org/TR/trace-context/#key
 */
function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
exports.validateKey = validateKey;
/**
 * Value is opaque string up to 256 characters printable ASCII RFC0020
 * characters (i.e., the range 0x20 to 0x7E) except comma , and =.
 */
function validateValue(value) {
    return (VALID_VALUE_BASE_REGEX.test(value) &&
        !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value));
}
exports.validateValue = validateValue;
//# sourceMappingURL=validators.js.map

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAbstractPlugin = void 0;
/** This class represent the base to patch plugin. */
class BaseAbstractPlugin {
    constructor(_tracerName, _tracerVersion) {
        this._tracerName = _tracerName;
        this._tracerVersion = _tracerVersion;
    }
    disable() {
        this.unpatch();
    }
}
exports.BaseAbstractPlugin = BaseAbstractPlugin;
//# sourceMappingURL=BaseAbstractPlugin.js.map

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePlugin = void 0;
const BaseAbstractPlugin_1 = __webpack_require__(110);
/** This class represent the base to patch plugin. */
class BasePlugin extends BaseAbstractPlugin_1.BaseAbstractPlugin {
    enable(moduleExports, tracerProvider, logger, config) {
        this._moduleExports = moduleExports;
        this._tracer = tracerProvider.getTracer(this._tracerName, this._tracerVersion);
        this._logger = logger;
        if (config)
            this._config = config;
        return this.patch();
    }
}
exports.BasePlugin = BasePlugin;
//# sourceMappingURL=BasePlugin.js.map

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomIdGenerator = void 0;
const SPAN_ID_BYTES = 8;
const TRACE_ID_BYTES = 16;
class RandomIdGenerator {
    constructor() {
        /**
         * Returns a random 16-byte trace ID formatted/encoded as a 32 lowercase hex
         * characters corresponding to 128 bits.
         */
        this.generateTraceId = getIdGenerator(TRACE_ID_BYTES);
        /**
         * Returns a random 8-byte span ID formatted/encoded as a 16 lowercase hex
         * characters corresponding to 64 bits.
         */
        this.generateSpanId = getIdGenerator(SPAN_ID_BYTES);
    }
}
exports.RandomIdGenerator = RandomIdGenerator;
const SHARED_CHAR_CODES_ARRAY = Array(32);
function getIdGenerator(bytes) {
    return function generateId() {
        for (let i = 0; i < bytes * 2; i++) {
            SHARED_CHAR_CODES_ARRAY[i] = Math.floor(Math.random() * 16) + 48;
            // valid hex characters in the range 48-57 and 97-102
            if (SHARED_CHAR_CODES_ARRAY[i] >= 58) {
                SHARED_CHAR_CODES_ARRAY[i] += 39;
            }
        }
        return String.fromCharCode.apply(null, SHARED_CHAR_CODES_ARRAY.slice(0, bytes * 2));
    };
}
//# sourceMappingURL=RandomIdGenerator.js.map

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports._invokeGlobalShutdown = exports.notifyOnGlobalShutdown = void 0;
/**
 * Adds an event listener to trigger a callback when an unload event in the window is detected
 */
function notifyOnGlobalShutdown(cb) {
    window.addEventListener('unload', cb, { once: true });
    return function removeCallbackFromGlobalShutdown() {
        window.removeEventListener('unload', cb, false);
    };
}
exports.notifyOnGlobalShutdown = notifyOnGlobalShutdown;
/**
 * Warning: meant for internal use only! Closes the current window, triggering the unload event
 */
function _invokeGlobalShutdown() {
    window.close();
}
exports._invokeGlobalShutdown = _invokeGlobalShutdown;
//# sourceMappingURL=ShutdownNotifier.js.map

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnv = void 0;
const environment_1 = __webpack_require__(125);
/**
 * Gets the environment variables
 */
function getEnv() {
    const _window = window;
    const globalEnv = environment_1.parseEnvironment(_window);
    return Object.assign({}, environment_1.DEFAULT_ENVIRONMENT, globalEnv);
}
exports.getEnv = getEnv;
//# sourceMappingURL=environment.js.map

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToBase64 = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hexToBase64(hexStr) {
    const hexStrLen = hexStr.length;
    let hexAsciiCharsStr = '';
    for (let i = 0; i < hexStrLen; i += 2) {
        const hexPair = hexStr.substring(i, i + 2);
        const hexVal = parseInt(hexPair, 16);
        hexAsciiCharsStr += String.fromCharCode(hexVal);
    }
    return btoa(hexAsciiCharsStr);
}
exports.hexToBase64 = hexToBase64;
//# sourceMappingURL=hex-to-base64.js.map

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.otperformance = void 0;
exports.otperformance = performance;
//# sourceMappingURL=performance.js.map

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK_INFO = void 0;
const version_1 = __webpack_require__(36);
/** Constants describing the SDK in use */
exports.SDK_INFO = {
    NAME: 'opentelemetry',
    RUNTIME: 'browser',
    LANGUAGE: 'webjs',
    VERSION: version_1.VERSION,
};
//# sourceMappingURL=sdk-info.js.map

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.unrefTimer = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function unrefTimer(timer) { }
exports.unrefTimer = unrefTimer;
//# sourceMappingURL=timer-util.js.map

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=IdGenerator.js.map

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoRecordingSpan = void 0;
const api_1 = __webpack_require__(1);
/**
 * The NoRecordingSpan extends the {@link NoopSpan}, making all operations no-op
 * except context propagation.
 */
class NoRecordingSpan extends api_1.NoopSpan {
    constructor(spanContext) {
        super(spanContext);
        this._context = spanContext || api_1.INVALID_SPAN_CONTEXT;
    }
    // Returns a SpanContext.
    context() {
        return this._context;
    }
}
exports.NoRecordingSpan = NoRecordingSpan;
//# sourceMappingURL=NoRecordingSpan.js.map

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlwaysOffSampler = void 0;
const api_1 = __webpack_require__(1);
/** Sampler that samples no traces. */
class AlwaysOffSampler {
    shouldSample() {
        return {
            decision: api_1.SamplingDecision.NOT_RECORD,
        };
    }
    toString() {
        return `AlwaysOffSampler`;
    }
}
exports.AlwaysOffSampler = AlwaysOffSampler;
//# sourceMappingURL=AlwaysOffSampler.js.map

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlwaysOnSampler = void 0;
const api_1 = __webpack_require__(1);
/** Sampler that samples all traces. */
class AlwaysOnSampler {
    shouldSample() {
        return {
            decision: api_1.SamplingDecision.RECORD_AND_SAMPLED,
        };
    }
    toString() {
        return `AlwaysOnSampler`;
    }
}
exports.AlwaysOnSampler = AlwaysOnSampler;
//# sourceMappingURL=AlwaysOnSampler.js.map

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentOrElseSampler = void 0;
const api_1 = __webpack_require__(1);
/**
 * A composite sampler that either respects the parent span's sampling decision
 * or delegates to `delegateSampler` for root spans.
 */
class ParentOrElseSampler {
    constructor(_delegateSampler) {
        this._delegateSampler = _delegateSampler;
    }
    shouldSample(parentContext, traceId, spanName, spanKind, attributes, links) {
        // Respect the parent sampling decision if there is one
        if (parentContext) {
            return {
                decision: (api_1.TraceFlags.SAMPLED & parentContext.traceFlags) === api_1.TraceFlags.SAMPLED
                    ? api_1.SamplingDecision.RECORD_AND_SAMPLED
                    : api_1.SamplingDecision.NOT_RECORD,
            };
        }
        return this._delegateSampler.shouldSample(parentContext, traceId, spanName, spanKind, attributes, links);
    }
    toString() {
        return `ParentOrElse{${this._delegateSampler.toString()}}`;
    }
}
exports.ParentOrElseSampler = ParentOrElseSampler;
//# sourceMappingURL=ParentOrElseSampler.js.map

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProbabilitySampler = void 0;
const api_1 = __webpack_require__(1);
/** Sampler that samples a given fraction of traces. */
class ProbabilitySampler {
    constructor(_probability = 0) {
        this._probability = _probability;
        this._probability = this._normalize(_probability);
    }
    shouldSample(parentContext) {
        // Respect the parent sampling decision if there is one.
        // TODO(#1284): add an option to ignore parent regarding to spec.
        if (parentContext) {
            return {
                decision: (api_1.TraceFlags.SAMPLED & parentContext.traceFlags) === api_1.TraceFlags.SAMPLED
                    ? api_1.SamplingDecision.RECORD_AND_SAMPLED
                    : api_1.SamplingDecision.NOT_RECORD,
            };
        }
        return {
            decision: Math.random() < this._probability
                ? api_1.SamplingDecision.RECORD_AND_SAMPLED
                : api_1.SamplingDecision.NOT_RECORD,
        };
    }
    toString() {
        return `ProbabilitySampler{${this._probability}}`;
    }
    _normalize(probability) {
        if (typeof probability !== 'number' || isNaN(probability))
            return 0;
        return probability >= 1 ? 1 : probability <= 0 ? 0 : probability;
    }
}
exports.ProbabilitySampler = ProbabilitySampler;
//# sourceMappingURL=ProbabilitySampler.js.map

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEnvironment = exports.DEFAULT_ENVIRONMENT = void 0;
const types_1 = __webpack_require__(13);
const ENVIRONMENT_NUMBERS = [
    'OTEL_SAMPLING_PROBABILITY',
];
/**
 * Default environment variables
 */
exports.DEFAULT_ENVIRONMENT = {
    OTEL_NO_PATCH_MODULES: '',
    OTEL_LOG_LEVEL: types_1.LogLevel.INFO,
    OTEL_SAMPLING_PROBABILITY: 1,
};
/**
 * Parses a variable as number with number validation
 * @param name
 * @param environment
 * @param values
 * @param min
 * @param max
 */
function parseNumber(name, environment, values, min = -Infinity, max = Infinity) {
    if (typeof values[name] !== 'undefined') {
        const value = Number(values[name]);
        if (!isNaN(value) && value >= min && value <= max) {
            environment[name] = value;
        }
    }
}
/**
 * Environmentally sets log level if valid log level string is provided
 * @param key
 * @param environment
 * @param values
 */
function setLogLevelFromEnv(key, environment, values) {
    const value = values[key];
    switch (typeof value === 'string' ? value.toUpperCase() : value) {
        case 'DEBUG':
            environment[key] = types_1.LogLevel.DEBUG;
            break;
        case 'INFO':
            environment[key] = types_1.LogLevel.INFO;
            break;
        case 'WARN':
            environment[key] = types_1.LogLevel.WARN;
            break;
        case 'ERROR':
            environment[key] = types_1.LogLevel.ERROR;
            break;
        default:
            // do nothing
            break;
    }
}
/**
 * Parses environment values
 * @param values
 */
function parseEnvironment(values) {
    const environment = {};
    for (const env in exports.DEFAULT_ENVIRONMENT) {
        const key = env;
        switch (key) {
            case 'OTEL_SAMPLING_PROBABILITY':
                parseNumber(key, environment, values, 0, 1);
                break;
            case 'OTEL_LOG_LEVEL':
                setLogLevelFromEnv(key, environment, values);
                break;
            default:
                if (ENVIRONMENT_NUMBERS.indexOf(key) >= 0) {
                    parseNumber(key, environment, values);
                }
                else {
                    if (typeof values[key] !== 'undefined') {
                        environment[key] = values[key];
                    }
                }
        }
    }
    return environment;
}
exports.parseEnvironment = parseEnvironment;
//# sourceMappingURL=environment.js.map

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isUrlIgnored = exports.urlMatches = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function urlMatches(url, urlToMatch) {
    if (typeof urlToMatch === 'string') {
        return url === urlToMatch;
    }
    else {
        return !!url.match(urlToMatch);
    }
}
exports.urlMatches = urlMatches;
/**
 * Check if {@param url} should be ignored when comparing against {@param ignoredUrls}
 * @param url
 * @param ignoredUrls
 */
function isUrlIgnored(url, ignoredUrls) {
    if (!ignoredUrls) {
        return false;
    }
    for (const ignoreUrl of ignoredUrls) {
        if (urlMatches(url, ignoreUrl)) {
            return true;
        }
    }
    return false;
}
exports.isUrlIgnored = isUrlIgnored;
//# sourceMappingURL=url.js.map

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWrapped = void 0;
/**
 * Checks if certain function has been already wrapped
 * @param func
 */
function isWrapped(func) {
    return (typeof func === 'function' &&
        typeof func.__original === 'function' &&
        typeof func.__unwrap === 'function' &&
        func.__wrapped === true);
}
exports.isWrapped = isWrapped;
//# sourceMappingURL=wrap.js.map

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectorMetricExporter = void 0;
const CollectorExporterBrowserBase_1 = __webpack_require__(38);
const transformMetrics_1 = __webpack_require__(39);
const DEFAULT_COLLECTOR_URL = 'http://localhost:55681/v1/metrics';
const DEFAULT_SERVICE_NAME = 'collector-metric-exporter';
/**
 * Collector Metric Exporter for Web
 */
class CollectorMetricExporter extends CollectorExporterBrowserBase_1.CollectorExporterBrowserBase {
    constructor() {
        super(...arguments);
        // Converts time to nanoseconds
        this._startTime = new Date().getTime() * 1000000;
    }
    convert(metrics) {
        return transformMetrics_1.toCollectorExportMetricServiceRequest(metrics, this._startTime, this);
    }
    getDefaultUrl(config) {
        return config.url || DEFAULT_COLLECTOR_URL;
    }
    getDefaultServiceName(config) {
        return config.serviceName || DEFAULT_SERVICE_NAME;
    }
}
exports.CollectorMetricExporter = CollectorMetricExporter;
//# sourceMappingURL=CollectorMetricExporter.js.map

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectorTraceExporter = void 0;
const CollectorExporterBrowserBase_1 = __webpack_require__(38);
const transform_1 = __webpack_require__(16);
const DEFAULT_SERVICE_NAME = 'collector-trace-exporter';
const DEFAULT_COLLECTOR_URL = 'http://localhost:55681/v1/trace';
/**
 * Collector Trace Exporter for Web
 */
class CollectorTraceExporter extends CollectorExporterBrowserBase_1.CollectorExporterBrowserBase {
    convert(spans) {
        return transform_1.toCollectorExportTraceServiceRequest(spans, this);
    }
    getDefaultUrl(config) {
        return config.url || DEFAULT_COLLECTOR_URL;
    }
    getDefaultServiceName(config) {
        return config.serviceName || DEFAULT_SERVICE_NAME;
    }
}
exports.CollectorTraceExporter = CollectorTraceExporter;
//# sourceMappingURL=CollectorTraceExporter.js.map

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(129), exports);
__exportStar(__webpack_require__(128), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWithXhr = exports.sendWithBeacon = void 0;
/**
 * Send metrics/spans using browser navigator.sendBeacon
 * @param body
 * @param onSuccess
 * @param onError
 */
function sendWithBeacon(body, url, logger, onSuccess, onError) {
    if (navigator.sendBeacon(url, body)) {
        logger.debug('sendBeacon - can send', body);
        onSuccess();
    }
    else {
        logger.error('sendBeacon - cannot send', body);
        onError({});
    }
}
exports.sendWithBeacon = sendWithBeacon;
/**
 * function to send metrics/spans using browser XMLHttpRequest
 *     used when navigator.sendBeacon is not available
 * @param body
 * @param onSuccess
 * @param onError
 */
function sendWithXhr(body, url, headers, logger, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    Object.entries(headers).forEach(([k, v]) => {
        xhr.setRequestHeader(k, v);
    });
    xhr.send(body);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status <= 299) {
                logger.debug('xhr success', body);
                onSuccess();
            }
            else {
                logger.error('body', body);
                logger.error('xhr error', xhr);
                onError({
                    code: xhr.status,
                    message: xhr.responseText,
                });
            }
        }
    };
}
exports.sendWithXhr = sendWithXhr;
//# sourceMappingURL=util.js.map

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHeaders = void 0;
const core_1 = __webpack_require__(0);
/**
 * Parses headers from config leaving only those that have defined values
 * @param partialHeaders
 * @param logger
 */
function parseHeaders(partialHeaders = {}, logger = new core_1.NoopLogger()) {
    const headers = {};
    Object.entries(partialHeaders).forEach(([key, value]) => {
        if (typeof value !== 'undefined') {
            headers[key] = String(value);
        }
        else {
            logger.warn(`Header "${key}" has wrong value and will be ignored`);
        }
    });
    return headers;
}
exports.parseHeaders = parseHeaders;
//# sourceMappingURL=util.js.map

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchObserverMetric = void 0;
const BatchObserverResult_1 = __webpack_require__(134);
const BoundInstrument_1 = __webpack_require__(3);
const types_1 = __webpack_require__(2);
const Metric_1 = __webpack_require__(4);
const NOOP_CALLBACK = () => { };
const MAX_TIMEOUT_UPDATE_MS = 500;
/** This is a SDK implementation of Batch Observer Metric. */
class BatchObserverMetric extends Metric_1.Metric {
    constructor(name, options, _batcher, resource, instrumentationLibrary, callback) {
        var _a;
        super(name, options, types_1.MetricKind.VALUE_OBSERVER, resource, instrumentationLibrary);
        this._batcher = _batcher;
        this._maxTimeoutUpdateMS = (_a = options.maxTimeoutUpdateMS) !== null && _a !== void 0 ? _a : MAX_TIMEOUT_UPDATE_MS;
        this._callback = callback || NOOP_CALLBACK;
    }
    _makeInstrument(labels) {
        return new BoundInstrument_1.BoundObserver(labels, this._disabled, this._valueType, this._logger, this._batcher.aggregatorFor(this._descriptor));
    }
    getMetricRecord() {
        this._logger.debug('getMetricRecord - start');
        return new Promise((resolve, reject) => {
            const observerResult = new BatchObserverResult_1.BatchObserverResult();
            // cancels after MAX_TIMEOUT_MS - no more waiting for results
            const timer = setTimeout(() => {
                observerResult.cancelled = true;
                // remove callback to prevent user from updating the values later if
                // for any reason the observerBatchResult will be referenced
                observerResult.onObserveCalled();
                super.getMetricRecord().then(resolve, reject);
                this._logger.debug('getMetricRecord - timeout');
            }, this._maxTimeoutUpdateMS);
            // sets callback for each "observe" method
            observerResult.onObserveCalled(() => {
                clearTimeout(timer);
                super.getMetricRecord().then(resolve, reject);
                this._logger.debug('getMetricRecord - end');
            });
            // calls the BatchObserverResult callback
            this._callback(observerResult);
        });
    }
}
exports.BatchObserverMetric = BatchObserverMetric;
//# sourceMappingURL=BatchObserverMetric.js.map

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchObserverResult = void 0;
/**
 * Implementation of api BatchObserverResult
 */
class BatchObserverResult {
    constructor() {
        /**
         * Cancels the further updates.
         * This is used to prevent updating the value of result that took too
         * long to update. For example to avoid update after timeout.
         * See {@link BatchObserverMetric.getMetricRecord}
         */
        this.cancelled = false;
    }
    /**
     * used to save a callback that will be called after the observations are
     *     updated
     * @param [callback]
     */
    onObserveCalled(callback) {
        this._callback = callback;
    }
    observe(labels, observations) {
        if (this.cancelled || !this._callback) {
            return;
        }
        observations.forEach(observation => {
            observation.observer.bind(labels).update(observation.value);
        });
        if (!this._immediate) {
            this._immediate = setImmediate(() => {
                if (typeof this._callback === 'function') {
                    this._callback();
                    // prevent user from updating the values later if for any reason
                    // the observerBatchResult will be referenced and then try to use
                    this._callback = undefined;
                }
            });
        }
    }
}
exports.BatchObserverResult = BatchObserverResult;
//# sourceMappingURL=BatchObserverResult.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(185).setImmediate))

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meter = void 0;
const api = __webpack_require__(1);
const core_1 = __webpack_require__(0);
const resources_1 = __webpack_require__(19);
const BatchObserverMetric_1 = __webpack_require__(133);
const UpDownCounterMetric_1 = __webpack_require__(42);
const CounterMetric_1 = __webpack_require__(40);
const UpDownSumObserverMetric_1 = __webpack_require__(139);
const ValueRecorderMetric_1 = __webpack_require__(44);
const ValueObserverMetric_1 = __webpack_require__(43);
const SumObserverMetric_1 = __webpack_require__(138);
const types_1 = __webpack_require__(48);
const Batcher_1 = __webpack_require__(45);
const Controller_1 = __webpack_require__(142);
const NoopExporter_1 = __webpack_require__(143);
/**
 * Meter is an implementation of the {@link Meter} interface.
 */
class Meter {
    /**
     * Constructs a new Meter instance.
     */
    constructor(instrumentationLibrary, config = types_1.DEFAULT_CONFIG) {
        var _a;
        this._metrics = new Map();
        this._logger = config.logger || new core_1.ConsoleLogger(config.logLevel);
        this._batcher = (_a = config.batcher) !== null && _a !== void 0 ? _a : new Batcher_1.UngroupedBatcher();
        this._resource = config.resource || resources_1.Resource.createTelemetrySDKResource();
        this._instrumentationLibrary = instrumentationLibrary;
        // start the push controller
        const exporter = config.exporter || new NoopExporter_1.NoopExporter();
        const interval = config.interval;
        this._controller = new Controller_1.PushController(this, exporter, interval);
    }
    /**
     * Creates and returns a new {@link ValueRecorder}.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    createValueRecorder(name, options) {
        if (!this._isValidName(name)) {
            this._logger.warn(`Invalid metric name ${name}. Defaulting to noop metric implementation.`);
            return api.NOOP_VALUE_RECORDER_METRIC;
        }
        const opt = Object.assign(Object.assign({ logger: this._logger }, types_1.DEFAULT_METRIC_OPTIONS), options);
        const valueRecorder = new ValueRecorderMetric_1.ValueRecorderMetric(name, opt, this._batcher, this._resource, this._instrumentationLibrary);
        this._registerMetric(name, valueRecorder);
        return valueRecorder;
    }
    /**
     * Creates a new counter metric. Generally, this kind of metric when the
     * value is a quantity, the sum is of primary interest, and the event count
     * and value distribution are not of primary interest.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    createCounter(name, options) {
        if (!this._isValidName(name)) {
            this._logger.warn(`Invalid metric name ${name}. Defaulting to noop metric implementation.`);
            return api.NOOP_COUNTER_METRIC;
        }
        const opt = Object.assign(Object.assign({ logger: this._logger }, types_1.DEFAULT_METRIC_OPTIONS), options);
        const counter = new CounterMetric_1.CounterMetric(name, opt, this._batcher, this._resource, this._instrumentationLibrary);
        this._registerMetric(name, counter);
        return counter;
    }
    /**
     * Creates a new `UpDownCounter` metric. UpDownCounter is a synchronous
     * instrument and very similar to Counter except that Add(increment)
     * supports negative increments. It is generally useful for capturing changes
     * in an amount of resources used, or any quantity that rises and falls
     * during a request.
     *
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    createUpDownCounter(name, options) {
        if (!this._isValidName(name)) {
            this._logger.warn(`Invalid metric name ${name}. Defaulting to noop metric implementation.`);
            return api.NOOP_COUNTER_METRIC;
        }
        const opt = Object.assign(Object.assign(Object.assign({}, types_1.DEFAULT_METRIC_OPTIONS), { logger: this._logger }), options);
        const upDownCounter = new UpDownCounterMetric_1.UpDownCounterMetric(name, opt, this._batcher, this._resource, this._instrumentationLibrary);
        this._registerMetric(name, upDownCounter);
        return upDownCounter;
    }
    /**
     * Creates a new `ValueObserver` metric.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the value observer callback
     */
    createValueObserver(name, options = {}, callback) {
        if (!this._isValidName(name)) {
            this._logger.warn(`Invalid metric name ${name}. Defaulting to noop metric implementation.`);
            return api.NOOP_VALUE_OBSERVER_METRIC;
        }
        const opt = Object.assign(Object.assign({ logger: this._logger }, types_1.DEFAULT_METRIC_OPTIONS), options);
        const valueObserver = new ValueObserverMetric_1.ValueObserverMetric(name, opt, this._batcher, this._resource, this._instrumentationLibrary, callback);
        this._registerMetric(name, valueObserver);
        return valueObserver;
    }
    createSumObserver(name, options = {}, callback) {
        if (!this._isValidName(name)) {
            this._logger.warn(`Invalid metric name ${name}. Defaulting to noop metric implementation.`);
            return api.NOOP_SUM_OBSERVER_METRIC;
        }
        const opt = Object.assign(Object.assign({ logger: this._logger }, types_1.DEFAULT_METRIC_OPTIONS), options);
        const sumObserver = new SumObserverMetric_1.SumObserverMetric(name, opt, this._batcher, this._resource, this._instrumentationLibrary, callback);
        this._registerMetric(name, sumObserver);
        return sumObserver;
    }
    /**
     * Creates a new `UpDownSumObserver` metric.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the value observer callback
     */
    createUpDownSumObserver(name, options = {}, callback) {
        if (!this._isValidName(name)) {
            this._logger.warn(`Invalid metric name ${name}. Defaulting to noop metric implementation.`);
            return api.NOOP_UP_DOWN_SUM_OBSERVER_METRIC;
        }
        const opt = Object.assign(Object.assign({ logger: this._logger }, types_1.DEFAULT_METRIC_OPTIONS), options);
        const upDownSumObserver = new UpDownSumObserverMetric_1.UpDownSumObserverMetric(name, opt, this._batcher, this._resource, this._instrumentationLibrary, callback);
        this._registerMetric(name, upDownSumObserver);
        return upDownSumObserver;
    }
    /**
     * Creates a new batch observer metric.
     * @param name the name of the metric.
     * @param callback the batch observer callback
     * @param [options] the metric batch options.
     */
    createBatchObserver(name, callback, options = {}) {
        if (!this._isValidName(name)) {
            this._logger.warn(`Invalid metric name ${name}. Defaulting to noop metric implementation.`);
            return api.NOOP_BATCH_OBSERVER_METRIC;
        }
        const opt = Object.assign(Object.assign({ logger: this._logger }, types_1.DEFAULT_METRIC_OPTIONS), options);
        const batchObserver = new BatchObserverMetric_1.BatchObserverMetric(name, opt, this._batcher, this._resource, this._instrumentationLibrary, callback);
        this._registerMetric(name, batchObserver);
        return batchObserver;
    }
    /**
     * Collects all the metrics created with this `Meter` for export.
     *
     * Utilizes the batcher to create checkpoints of the current values in
     * each aggregator belonging to the metrics that were created with this
     * meter instance.
     */
    async collect() {
        const metrics = Array.from(this._metrics.values()).map(metric => {
            return metric.getMetricRecord();
        });
        await Promise.all(metrics).then(records => {
            records.forEach(metrics => {
                metrics.forEach(metric => this._batcher.process(metric));
            });
        });
    }
    getBatcher() {
        return this._batcher;
    }
    async shutdown() {
        await this._controller.shutdown();
    }
    /**
     * Registers metric to register.
     * @param name The name of the metric.
     * @param metric The metric to register.
     */
    _registerMetric(name, metric) {
        if (this._metrics.has(name)) {
            this._logger.error(`A metric with the name ${name} has already been registered.`);
            return;
        }
        this._metrics.set(name, metric);
    }
    /**
     * Ensure a metric name conforms to the following rules:
     *
     * 1. They are non-empty strings
     *
     * 2. The first character must be non-numeric, non-space, non-punctuation
     *
     * 3. Subsequent characters must be belong to the alphanumeric characters,
     *    '_', '.', and '-'.
     *
     * Names are case insensitive
     *
     * @param name Name of metric to be created
     */
    _isValidName(name) {
        return Boolean(name.match(/^[a-z][a-z0-9_.-]*$/i));
    }
}
exports.Meter = Meter;
//# sourceMappingURL=Meter.js.map

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeterProvider = void 0;
const core_1 = __webpack_require__(0);
const resources_1 = __webpack_require__(19);
const _1 = __webpack_require__(47);
const types_1 = __webpack_require__(48);
/**
 * This class represents a meter provider which platform libraries can extend
 */
class MeterProvider {
    constructor(config = types_1.DEFAULT_CONFIG) {
        var _a, _b;
        this._meters = new Map();
        this.logger = (_a = config.logger) !== null && _a !== void 0 ? _a : new core_1.ConsoleLogger(config.logLevel);
        this.resource = (_b = config.resource) !== null && _b !== void 0 ? _b : resources_1.Resource.createTelemetrySDKResource();
        this._config = Object.assign({}, config, {
            logger: this.logger,
            resource: this.resource,
        });
        if (this._config.gracefulShutdown) {
            this._cleanNotifyOnGlobalShutdown = core_1.notifyOnGlobalShutdown(this._shutdownAllMeters.bind(this));
        }
    }
    /**
     * Returns a Meter, creating one if one with the given name and version is not already created
     *
     * @returns Meter A Meter with the given name and version
     */
    getMeter(name, version = '*', config) {
        const key = `${name}@${version}`;
        if (!this._meters.has(key)) {
            this._meters.set(key, new _1.Meter({ name, version }, config || this._config));
        }
        return this._meters.get(key);
    }
    shutdown(cb = () => { }) {
        this._shutdownAllMeters().then(() => {
            setTimeout(cb, 0);
        });
        if (this._cleanNotifyOnGlobalShutdown) {
            this._cleanNotifyOnGlobalShutdown();
            this._cleanNotifyOnGlobalShutdown = undefined;
        }
    }
    _shutdownAllMeters() {
        if (this._config.exporter) {
            this._config.exporter.shutdown();
        }
        return Promise.all(Array.from(this._meters, ([_, meter]) => meter.shutdown()));
    }
}
exports.MeterProvider = MeterProvider;
//# sourceMappingURL=MeterProvider.js.map

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonotonicObserverResult = void 0;
const ObserverResult_1 = __webpack_require__(41);
class MonotonicObserverResult extends ObserverResult_1.ObserverResult {
    observe(value, labels) {
        if (value >= 0) {
            this.values.set(labels, value);
        }
    }
}
exports.MonotonicObserverResult = MonotonicObserverResult;
//# sourceMappingURL=MonotonicObserverResult.js.map

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumObserverMetric = void 0;
const BaseObserverMetric_1 = __webpack_require__(18);
const MonotonicObserverResult_1 = __webpack_require__(137);
const types_1 = __webpack_require__(2);
/** This is a SDK implementation of SumObserver Metric. */
class SumObserverMetric extends BaseObserverMetric_1.BaseObserverMetric {
    constructor(name, options, batcher, resource, instrumentationLibrary, callback) {
        super(name, options, batcher, resource, types_1.MetricKind.SUM_OBSERVER, instrumentationLibrary, callback);
    }
    createObserverResult() {
        return new MonotonicObserverResult_1.MonotonicObserverResult();
    }
}
exports.SumObserverMetric = SumObserverMetric;
//# sourceMappingURL=SumObserverMetric.js.map

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpDownSumObserverMetric = void 0;
const BaseObserverMetric_1 = __webpack_require__(18);
const types_1 = __webpack_require__(2);
/** This is a SDK implementation of UpDownSumObserver Metric. */
class UpDownSumObserverMetric extends BaseObserverMetric_1.BaseObserverMetric {
    constructor(name, options, batcher, resource, instrumentationLibrary, callback) {
        super(name, options, batcher, resource, types_1.MetricKind.UP_DOWN_SUM_OBSERVER, instrumentationLibrary, callback);
    }
}
exports.UpDownSumObserverMetric = UpDownSumObserverMetric;
//# sourceMappingURL=UpDownSumObserverMetric.js.map

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashLabels = exports.notNull = void 0;
/**
 * Type guard to remove nulls from arrays
 *
 * @param value value to be checked for null equality
 */
function notNull(value) {
    return value !== null;
}
exports.notNull = notNull;
/**
 * Converting the unordered labels into unique identifier string.
 * @param labels user provided unordered Labels.
 */
function hashLabels(labels) {
    let keys = Object.keys(labels);
    if (keys.length === 0)
        return '';
    keys = keys.sort();
    return keys.reduce((result, key) => {
        if (result.length > 2) {
            result += ',';
        }
        return (result += key + ':' + labels[key]);
    }, '|#');
}
exports.hashLabels = hashLabels;
//# sourceMappingURL=Utils.js.map

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleMetricExporter = void 0;
const core_1 = __webpack_require__(0);
/**
 * This is implementation of {@link MetricExporter} that prints metrics data to
 * the console. This class can be used for diagnostic purposes.
 */
class ConsoleMetricExporter {
    export(metrics, resultCallback) {
        for (const metric of metrics) {
            console.log(metric.descriptor);
            console.log(metric.labels);
            const point = metric.aggregator.toPoint();
            if (typeof point.value === 'number') {
                console.log('value: ' + point.value);
            }
            else if (typeof point.value.buckets === 'object') {
                const histogram = point.value;
                console.log(`count: ${histogram.count}, sum: ${histogram.sum}, buckets: ${histogram.buckets}`);
            }
            else {
                const distribution = point.value;
                console.log('min: ' +
                    distribution.min +
                    ', max: ' +
                    distribution.max +
                    ', count: ' +
                    distribution.count +
                    ', sum: ' +
                    distribution.sum);
            }
        }
        return resultCallback(core_1.ExportResult.SUCCESS);
    }
    shutdown() {
        // By default does nothing
    }
}
exports.ConsoleMetricExporter = ConsoleMetricExporter;
//# sourceMappingURL=ConsoleMetricExporter.js.map

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushController = exports.Controller = void 0;
const core_1 = __webpack_require__(0);
const DEFAULT_EXPORT_INTERVAL = 60000;
class Controller {
}
exports.Controller = Controller;
/** Controller organizes a periodic push of metric data. */
class PushController extends Controller {
    constructor(_meter, _exporter, interval = DEFAULT_EXPORT_INTERVAL) {
        super();
        this._meter = _meter;
        this._exporter = _exporter;
        this._timer = setInterval(() => {
            this._collect();
        }, interval);
        core_1.unrefTimer(this._timer);
    }
    async shutdown() {
        clearInterval(this._timer);
        await this._collect();
    }
    async _collect() {
        await this._meter.collect();
        return new Promise((resolve, reject) => {
            this._exporter.export(this._meter.getBatcher().checkPointSet(), result => {
                if (result === core_1.ExportResult.SUCCESS) {
                    resolve();
                }
                else {
                    // @todo log error
                    reject();
                }
            });
        });
    }
}
exports.PushController = PushController;
//# sourceMappingURL=Controller.js.map

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoopExporter = void 0;
class NoopExporter {
    // By default does nothing
    export(metrics, resultCallback) { }
    // By default does nothing
    shutdown() { }
}
exports.NoopExporter = NoopExporter;
//# sourceMappingURL=NoopExporter.js.map

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistogramAggregator = void 0;
const types_1 = __webpack_require__(2);
const core_1 = __webpack_require__(0);
/**
 * Basic aggregator which observes events and counts them in pre-defined buckets
 * and provides the total sum and count of all observations.
 */
class HistogramAggregator {
    constructor(boundaries) {
        this.kind = types_1.AggregatorKind.HISTOGRAM;
        if (boundaries === undefined || boundaries.length === 0) {
            throw new Error('HistogramAggregator should be created with boundaries.');
        }
        // we need to an ordered set to be able to correctly compute count for each
        // boundary since we'll iterate on each in order.
        this._boundaries = boundaries.sort((a, b) => a - b);
        this._current = this._newEmptyCheckpoint();
        this._lastUpdateTime = core_1.hrTime();
    }
    update(value) {
        this._current.count += 1;
        this._current.sum += value;
        for (let i = 0; i < this._boundaries.length; i++) {
            if (value < this._boundaries[i]) {
                this._current.buckets.counts[i] += 1;
                return;
            }
        }
        // value is above all observed boundaries
        this._current.buckets.counts[this._boundaries.length] += 1;
    }
    toPoint() {
        return {
            value: this._current,
            timestamp: this._lastUpdateTime,
        };
    }
    _newEmptyCheckpoint() {
        return {
            buckets: {
                boundaries: this._boundaries,
                counts: this._boundaries.map(() => 0).concat([0]),
            },
            sum: 0,
            count: 0,
        };
    }
}
exports.HistogramAggregator = HistogramAggregator;
//# sourceMappingURL=Histogram.js.map

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinMaxLastSumCountAggregator = void 0;
const types_1 = __webpack_require__(2);
const core_1 = __webpack_require__(0);
/**
 * Basic aggregator keeping all raw values (events, sum, max, last and min).
 */
class MinMaxLastSumCountAggregator {
    constructor() {
        this.kind = types_1.AggregatorKind.DISTRIBUTION;
        this._lastUpdateTime = [0, 0];
        this._distribution = {
            min: Infinity,
            max: -Infinity,
            last: 0,
            sum: 0,
            count: 0,
        };
    }
    update(value) {
        this._distribution.count++;
        this._distribution.sum += value;
        this._distribution.last = value;
        this._distribution.min = Math.min(this._distribution.min, value);
        this._distribution.max = Math.max(this._distribution.max, value);
        this._lastUpdateTime = core_1.hrTime();
    }
    toPoint() {
        return {
            value: this._distribution,
            timestamp: this._lastUpdateTime,
        };
    }
}
exports.MinMaxLastSumCountAggregator = MinMaxLastSumCountAggregator;
//# sourceMappingURL=MinMaxLastSumCount.js.map

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumAggregator = void 0;
const types_1 = __webpack_require__(2);
const core_1 = __webpack_require__(0);
/** Basic aggregator which calculates a Sum from individual measurements. */
class SumAggregator {
    constructor() {
        this.kind = types_1.AggregatorKind.SUM;
        this._current = 0;
        this._lastUpdateTime = [0, 0];
    }
    update(value) {
        this._current += value;
        this._lastUpdateTime = core_1.hrTime();
    }
    toPoint() {
        return {
            value: this._current,
            timestamp: this._lastUpdateTime,
        };
    }
}
exports.SumAggregator = SumAggregator;
//# sourceMappingURL=Sum.js.map

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentLoad = void 0;
const api_1 = __webpack_require__(1);
const core_1 = __webpack_require__(0);
const web_1 = __webpack_require__(6);
const AttributeNames_1 = __webpack_require__(148);
const version_1 = __webpack_require__(149);
const semantic_conventions_1 = __webpack_require__(8);
/**
 * This class represents a document load plugin
 */
class DocumentLoad extends core_1.BasePlugin {
    /**
     *
     * @param config
     */
    constructor(config = {}) {
        super('@opentelemetry/plugin-document-load', version_1.VERSION);
        this.component = 'document-load';
        this.version = '1';
        this.moduleName = this.component;
        this._onDocumentLoaded = this._onDocumentLoaded.bind(this);
        this._config = config;
    }
    /**
     * callback to be executed when page is loaded
     */
    _onDocumentLoaded() {
        // Timeout is needed as load event doesn't have yet the performance metrics for loadEnd.
        // Support for event "loadend" is very limited and cannot be used
        window.setTimeout(() => {
            this._collectPerformance();
        });
    }
    /**
     * Adds spans for all resources
     * @param rootSpan
     */
    _addResourcesSpans(rootSpan) {
        const resources = core_1.otperformance.getEntriesByType('resource');
        if (resources) {
            resources.forEach(resource => {
                this._initResourceSpan(resource, { parent: rootSpan });
            });
        }
    }
    /**
     * Collects information about performance and creates appropriate spans
     */
    _collectPerformance() {
        const metaElement = [...document.getElementsByTagName('meta')].find(e => e.getAttribute('name') === core_1.TRACE_PARENT_HEADER);
        const entries = this._getEntries();
        const traceparent = (metaElement && metaElement.content) || '';
        api_1.context.with(api_1.propagation.extract({ traceparent }), () => {
            const rootSpan = this._startSpan(AttributeNames_1.AttributeNames.DOCUMENT_LOAD, web_1.PerformanceTimingNames.FETCH_START, entries);
            if (!rootSpan) {
                return;
            }
            this._tracer.withSpan(rootSpan, () => {
                const fetchSpan = this._startSpan(AttributeNames_1.AttributeNames.DOCUMENT_FETCH, web_1.PerformanceTimingNames.FETCH_START, entries);
                if (fetchSpan) {
                    this._tracer.withSpan(fetchSpan, () => {
                        web_1.addSpanNetworkEvents(fetchSpan, entries);
                        this._endSpan(fetchSpan, web_1.PerformanceTimingNames.RESPONSE_END, entries);
                    });
                }
            });
            this._addResourcesSpans(rootSpan);
            web_1.addSpanNetworkEvent(rootSpan, web_1.PerformanceTimingNames.FETCH_START, entries);
            web_1.addSpanNetworkEvent(rootSpan, web_1.PerformanceTimingNames.UNLOAD_EVENT_START, entries);
            web_1.addSpanNetworkEvent(rootSpan, web_1.PerformanceTimingNames.UNLOAD_EVENT_END, entries);
            web_1.addSpanNetworkEvent(rootSpan, web_1.PerformanceTimingNames.DOM_INTERACTIVE, entries);
            web_1.addSpanNetworkEvent(rootSpan, web_1.PerformanceTimingNames.DOM_CONTENT_LOADED_EVENT_START, entries);
            web_1.addSpanNetworkEvent(rootSpan, web_1.PerformanceTimingNames.DOM_CONTENT_LOADED_EVENT_END, entries);
            web_1.addSpanNetworkEvent(rootSpan, web_1.PerformanceTimingNames.DOM_COMPLETE, entries);
            web_1.addSpanNetworkEvent(rootSpan, web_1.PerformanceTimingNames.LOAD_EVENT_START, entries);
            web_1.addSpanNetworkEvent(rootSpan, web_1.PerformanceTimingNames.LOAD_EVENT_END, entries);
            this._endSpan(rootSpan, web_1.PerformanceTimingNames.LOAD_EVENT_END, entries);
        });
    }
    /**
     * Helper function for ending span
     * @param span
     * @param performanceName name of performance entry for time end
     * @param entries
     */
    _endSpan(span, performanceName, entries) {
        // span can be undefined when entries are missing the certain performance - the span will not be created
        if (span) {
            if (web_1.hasKey(entries, performanceName)) {
                span.end(entries[performanceName]);
            }
            else {
                // just end span
                span.end();
            }
        }
    }
    /**
     * gets performance entries of navigation
     */
    _getEntries() {
        const entries = {};
        const performanceNavigationTiming = core_1.otperformance.getEntriesByType('navigation')[0];
        if (performanceNavigationTiming) {
            const keys = Object.values(web_1.PerformanceTimingNames);
            keys.forEach((key) => {
                if (web_1.hasKey(performanceNavigationTiming, key)) {
                    const value = performanceNavigationTiming[key];
                    if (typeof value === 'number' && value >= 0) {
                        entries[key] = value;
                    }
                }
            });
        }
        else {
            // // fallback to previous version
            const perf = core_1.otperformance;
            const performanceTiming = perf.timing;
            if (performanceTiming) {
                const keys = Object.values(web_1.PerformanceTimingNames);
                keys.forEach((key) => {
                    if (web_1.hasKey(performanceTiming, key)) {
                        const value = performanceTiming[key];
                        if (typeof value === 'number' && value >= 0) {
                            entries[key] = value;
                        }
                    }
                });
            }
        }
        return entries;
    }
    /**
     * Creates and ends a span with network information about resource added as timed events
     * @param resource
     * @param spanOptions
     */
    _initResourceSpan(resource, spanOptions = {}) {
        const span = this._startSpan(AttributeNames_1.AttributeNames.RESOURCE_FETCH, web_1.PerformanceTimingNames.FETCH_START, resource, spanOptions);
        if (span) {
            span.setAttribute(semantic_conventions_1.HttpAttribute.HTTP_URL, resource.name);
            web_1.addSpanNetworkEvents(span, resource);
            this._endSpan(span, web_1.PerformanceTimingNames.RESPONSE_END, resource);
        }
    }
    /**
     * Helper function for starting a span
     * @param spanName name of span
     * @param performanceName name of performance entry for time start
     * @param entries
     * @param spanOptions
     */
    _startSpan(spanName, performanceName, entries, spanOptions = {}) {
        if (web_1.hasKey(entries, performanceName) &&
            typeof entries[performanceName] === 'number') {
            const span = this._tracer.startSpan(spanName, Object.assign({}, {
                startTime: entries[performanceName],
            }, spanOptions));
            span.setAttribute(AttributeNames_1.AttributeNames.COMPONENT, this.component);
            return span;
        }
        return undefined;
    }
    /**
     * executes callback {_onDocumentLoaded} when the page is loaded
     */
    _waitForPageLoad() {
        if (window.document.readyState === 'complete') {
            this._onDocumentLoaded();
        }
        else {
            window.addEventListener('load', this._onDocumentLoaded);
        }
    }
    /**
     * implements patch function
     */
    patch() {
        this._waitForPageLoad();
        return this._moduleExports;
    }
    /**
     * implements unpatch function
     */
    unpatch() {
        window.removeEventListener('load', this._onDocumentLoaded);
    }
}
exports.DocumentLoad = DocumentLoad;
//# sourceMappingURL=documentLoad.js.map

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeNames = void 0;
var AttributeNames;
(function (AttributeNames) {
    AttributeNames["COMPONENT"] = "component";
    AttributeNames["DOCUMENT_LOAD"] = "documentLoad";
    AttributeNames["DOCUMENT_FETCH"] = "documentFetch";
    AttributeNames["RESOURCE_FETCH"] = "resourceFetch";
})(AttributeNames = exports.AttributeNames || (exports.AttributeNames = {}));
//# sourceMappingURL=AttributeNames.js.map

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.VERSION = '0.10.0';
//# sourceMappingURL=version.js.map

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeNames = void 0;
var AttributeNames;
(function (AttributeNames) {
    AttributeNames["COMPONENT"] = "component";
    AttributeNames["EVENT_TYPE"] = "event_type";
    AttributeNames["TARGET_ELEMENT"] = "target_element";
    AttributeNames["TARGET_XPATH"] = "target_xpath";
    AttributeNames["HTTP_URL"] = "http.url";
    // NOT ON OFFICIAL SPEC
    AttributeNames["HTTP_USER_AGENT"] = "http.user_agent";
})(AttributeNames = exports.AttributeNames || (exports.AttributeNames = {}));
//# sourceMappingURL=AttributeNames.js.map

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInteractionPlugin = void 0;
const shimmer = __webpack_require__(54);
const core_1 = __webpack_require__(0);
const web_1 = __webpack_require__(6);
const AttributeNames_1 = __webpack_require__(150);
const version_1 = __webpack_require__(152);
const ZONE_CONTEXT_KEY = 'OT_ZONE_CONTEXT';
const EVENT_NAVIGATION_NAME = 'Navigation:';
/**
 * This class represents a UserInteraction plugin for auto instrumentation.
 * If zone.js is available then it patches the zone otherwise it patches
 * addEventListener of HTMLElement
 */
class UserInteractionPlugin extends core_1.BasePlugin {
    constructor() {
        super('@opentelemetry/plugin-user-interaction', version_1.VERSION);
        this.component = 'user-interaction';
        this.version = version_1.VERSION;
        this.moduleName = this.component;
        this._spansData = new WeakMap();
        this._zonePatched = false;
        // for addEventListener/removeEventListener state
        this._wrappedListeners = new WeakMap();
        // for event bubbling
        this._eventsSpanMap = new WeakMap();
    }
    /**
     * This will check if last task was timeout and will save the time to
     * fix the user interaction when nothing happens
     * This timeout comes from xhr plugin which is needed to collect information
     * about last xhr main request from observer
     * @param task
     * @param span
     */
    _checkForTimeout(task, span) {
        const spanData = this._spansData.get(span);
        if (spanData) {
            if (task.source === 'setTimeout') {
                spanData.hrTimeLastTimeout = core_1.hrTime();
            }
            else if (task.source !== 'Promise.then' &&
                task.source !== 'setTimeout') {
                spanData.hrTimeLastTimeout = undefined;
            }
        }
    }
    /**
     * Controls whether or not to create a span, based on the event type.
     */
    _allowEventType(eventType) {
        return eventType === 'click';
    }
    /**
     * Creates a new span
     * @param element
     * @param eventName
     */
    _createSpan(element, eventName, parentSpan) {
        if (!element.getAttribute) {
            return undefined;
        }
        if (element.hasAttribute('disabled')) {
            return undefined;
        }
        if (!this._allowEventType(eventName)) {
            return undefined;
        }
        const xpath = web_1.getElementXPath(element, true);
        try {
            const span = this._tracer.startSpan(eventName, {
                parent: parentSpan,
                attributes: {
                    [AttributeNames_1.AttributeNames.COMPONENT]: this.component,
                    [AttributeNames_1.AttributeNames.EVENT_TYPE]: eventName,
                    [AttributeNames_1.AttributeNames.TARGET_ELEMENT]: element.tagName,
                    [AttributeNames_1.AttributeNames.TARGET_XPATH]: xpath,
                    [AttributeNames_1.AttributeNames.HTTP_URL]: window.location.href,
                    [AttributeNames_1.AttributeNames.HTTP_USER_AGENT]: navigator.userAgent,
                },
            });
            this._spansData.set(span, {
                taskCount: 0,
            });
            return span;
        }
        catch (e) {
            this._logger.error(this.component, e);
        }
        return undefined;
    }
    /**
     * Decrement number of tasks that left in zone,
     * This is needed to be able to end span when no more tasks left
     * @param span
     */
    _decrementTask(span) {
        const spanData = this._spansData.get(span);
        if (spanData) {
            spanData.taskCount--;
            if (spanData.taskCount === 0) {
                this._tryToEndSpan(span, spanData.hrTimeLastTimeout);
            }
        }
    }
    /**
     * Return the current span
     * @param zone
     * @private
     */
    _getCurrentSpan(zone) {
        const context = zone.get(ZONE_CONTEXT_KEY);
        if (context) {
            return context.getValue(core_1.ACTIVE_SPAN_KEY);
        }
        return context;
    }
    /**
     * Increment number of tasks that are run within the same zone.
     *     This is needed to be able to end span when no more tasks left
     * @param span
     */
    _incrementTask(span) {
        const spanData = this._spansData.get(span);
        if (spanData) {
            spanData.taskCount++;
        }
    }
    /**
     * Returns true iff we should use the patched callback; false if it's already been patched
     */
    addPatchedListener(on, type, listener, wrappedListener) {
        let listener2Type = this._wrappedListeners.get(listener);
        if (!listener2Type) {
            listener2Type = new Map();
            this._wrappedListeners.set(listener, listener2Type);
        }
        let element2patched = listener2Type.get(type);
        if (!element2patched) {
            element2patched = new Map();
            listener2Type.set(type, element2patched);
        }
        if (element2patched.has(on)) {
            return false;
        }
        element2patched.set(on, wrappedListener);
        return true;
    }
    /**
     * Returns the patched version of the callback (or undefined)
     */
    removePatchedListener(on, type, listener) {
        const listener2Type = this._wrappedListeners.get(listener);
        if (!listener2Type) {
            return undefined;
        }
        const element2patched = listener2Type.get(type);
        if (!element2patched) {
            return undefined;
        }
        const patched = element2patched.get(on);
        if (patched) {
            element2patched.delete(on);
            if (element2patched.size === 0) {
                listener2Type.delete(type);
                if (listener2Type.size === 0) {
                    this._wrappedListeners.delete(listener);
                }
            }
        }
        return patched;
    }
    /**
     * This patches the addEventListener of HTMLElement to be able to
     * auto instrument the click events
     * This is done when zone is not available
     */
    _patchElement() {
        const plugin = this;
        return (original) => {
            return function addEventListenerPatched(type, listener, useCapture) {
                const once = useCapture && useCapture.once;
                const patchedListener = (...args) => {
                    const target = this;
                    let parentSpan;
                    const event = args[0];
                    if (event) {
                        parentSpan = plugin._eventsSpanMap.get(event);
                    }
                    if (once) {
                        plugin.removePatchedListener(this, type, listener);
                    }
                    const span = plugin._createSpan(target, type, parentSpan);
                    if (span) {
                        if (event) {
                            plugin._eventsSpanMap.set(event, span);
                        }
                        return plugin._tracer.withSpan(span, () => {
                            const result = listener.apply(target, args);
                            // no zone so end span immediately
                            span.end();
                            return result;
                        });
                    }
                    else {
                        return listener.apply(target, args);
                    }
                };
                if (plugin.addPatchedListener(this, type, listener, patchedListener)) {
                    return original.call(this, type, patchedListener, useCapture);
                }
            };
        };
    }
    /**
     * This patches the removeEventListener of HTMLElement to handle the fact that
     * we patched the original callbacks
     * This is done when zone is not available
     */
    _patchRemoveEventListener() {
        const plugin = this;
        return (original) => {
            return function removeEventListenerPatched(type, listener, useCapture) {
                const wrappedListener = plugin.removePatchedListener(this, type, listener);
                if (wrappedListener) {
                    return original.call(this, type, wrappedListener, useCapture);
                }
                else {
                    return original.call(this, type, listener, useCapture);
                }
            };
        };
    }
    /**
     * Patches the history api
     */
    _patchHistoryApi() {
        this._unpatchHistoryApi();
        shimmer.wrap(history, 'replaceState', this._patchHistoryMethod());
        shimmer.wrap(history, 'pushState', this._patchHistoryMethod());
        shimmer.wrap(history, 'back', this._patchHistoryMethod());
        shimmer.wrap(history, 'forward', this._patchHistoryMethod());
        shimmer.wrap(history, 'go', this._patchHistoryMethod());
    }
    /**
     * Patches the certain history api method
     */
    _patchHistoryMethod() {
        const plugin = this;
        return (original) => {
            return function patchHistoryMethod(...args) {
                const url = `${location.pathname}${location.hash}${location.search}`;
                const result = original.apply(this, args);
                const urlAfter = `${location.pathname}${location.hash}${location.search}`;
                if (url !== urlAfter) {
                    plugin._updateInteractionName(urlAfter);
                }
                return result;
            };
        };
    }
    /**
     * unpatch the history api methods
     */
    _unpatchHistoryApi() {
        if (core_1.isWrapped(history.replaceState))
            shimmer.unwrap(history, 'replaceState');
        if (core_1.isWrapped(history.pushState))
            shimmer.unwrap(history, 'pushState');
        if (core_1.isWrapped(history.back))
            shimmer.unwrap(history, 'back');
        if (core_1.isWrapped(history.forward))
            shimmer.unwrap(history, 'forward');
        if (core_1.isWrapped(history.go))
            shimmer.unwrap(history, 'go');
    }
    /**
     * Updates interaction span name
     * @param url
     */
    _updateInteractionName(url) {
        const span = this._tracer.getCurrentSpan();
        if (span && typeof span.updateName === 'function') {
            span.updateName(`${EVENT_NAVIGATION_NAME} ${url}`);
        }
    }
    /**
     * Patches zone cancel task - this is done to be able to correctly
     * decrement the number of remaining tasks
     */
    _patchZoneCancelTask() {
        const plugin = this;
        return (original) => {
            return function patchCancelTask(task) {
                const currentZone = Zone.current;
                const currentSpan = plugin._getCurrentSpan(currentZone);
                if (currentSpan && plugin._shouldCountTask(task, currentZone)) {
                    plugin._decrementTask(currentSpan);
                }
                return original.call(this, task);
            };
        };
    }
    /**
     * Patches zone schedule task - this is done to be able to correctly
     * increment the number of tasks running within current zone but also to
     * save time in case of timeout running from xhr plugin when waiting for
     * main request from PerformanceResourceTiming
     */
    _patchZoneScheduleTask() {
        const plugin = this;
        return (original) => {
            return function patchScheduleTask(task) {
                const currentZone = Zone.current;
                const currentSpan = plugin._getCurrentSpan(currentZone);
                if (currentSpan && plugin._shouldCountTask(task, currentZone)) {
                    plugin._incrementTask(currentSpan);
                    plugin._checkForTimeout(task, currentSpan);
                }
                return original.call(this, task);
            };
        };
    }
    /**
     * Patches zone run task - this is done to be able to create a span when
     * user interaction starts
     * @private
     */
    _patchZoneRunTask() {
        const plugin = this;
        return (original) => {
            return function patchRunTask(task, applyThis, applyArgs) {
                const target = task.target;
                let span;
                const activeZone = this;
                if (target) {
                    span = plugin._createSpan(target, task.eventName);
                    if (span) {
                        plugin._incrementTask(span);
                        return activeZone.run(() => {
                            try {
                                return plugin._tracer.withSpan(span, () => {
                                    const currentZone = Zone.current;
                                    task._zone = currentZone;
                                    return original.call(currentZone, task, applyThis, applyArgs);
                                });
                            }
                            finally {
                                plugin._decrementTask(span);
                            }
                        });
                    }
                }
                else {
                    span = plugin._getCurrentSpan(activeZone);
                }
                try {
                    return original.call(activeZone, task, applyThis, applyArgs);
                }
                finally {
                    if (span && plugin._shouldCountTask(task, activeZone)) {
                        plugin._decrementTask(span);
                    }
                }
            };
        };
    }
    /**
     * Decides if task should be counted.
     * @param task
     * @param currentZone
     * @private
     */
    _shouldCountTask(task, currentZone) {
        if (task._zone) {
            currentZone = task._zone;
        }
        if (!currentZone || !task.data || task.data.isPeriodic) {
            return false;
        }
        const currentSpan = this._getCurrentSpan(currentZone);
        if (!currentSpan) {
            return false;
        }
        if (!this._spansData.get(currentSpan)) {
            return false;
        }
        return task.type === 'macroTask' || task.type === 'microTask';
    }
    /**
     * Will try to end span when such span still exists.
     * @param span
     * @param endTime
     * @private
     */
    _tryToEndSpan(span, endTime) {
        if (span) {
            const spanData = this._spansData.get(span);
            if (spanData) {
                span.end(endTime);
                this._spansData.delete(span);
            }
        }
    }
    /**
     * implements patch function
     */
    patch() {
        const ZoneWithPrototype = this.getZoneWithPrototype();
        this._logger.debug('applying patch to', this.moduleName, this.version, 'zone:', !!ZoneWithPrototype);
        if (ZoneWithPrototype) {
            if (core_1.isWrapped(ZoneWithPrototype.prototype.runTask)) {
                shimmer.unwrap(ZoneWithPrototype.prototype, 'runTask');
                this._logger.debug('removing previous patch from method runTask');
            }
            if (core_1.isWrapped(ZoneWithPrototype.prototype.scheduleTask)) {
                shimmer.unwrap(ZoneWithPrototype.prototype, 'scheduleTask');
                this._logger.debug('removing previous patch from method scheduleTask');
            }
            if (core_1.isWrapped(ZoneWithPrototype.prototype.cancelTask)) {
                shimmer.unwrap(ZoneWithPrototype.prototype, 'cancelTask');
                this._logger.debug('removing previous patch from method cancelTask');
            }
            this._zonePatched = true;
            shimmer.wrap(ZoneWithPrototype.prototype, 'runTask', this._patchZoneRunTask());
            shimmer.wrap(ZoneWithPrototype.prototype, 'scheduleTask', this._patchZoneScheduleTask());
            shimmer.wrap(ZoneWithPrototype.prototype, 'cancelTask', this._patchZoneCancelTask());
        }
        else {
            this._zonePatched = false;
            if (core_1.isWrapped(HTMLElement.prototype.addEventListener)) {
                shimmer.unwrap(HTMLElement.prototype, 'addEventListener');
                this._logger.debug('removing previous patch from method addEventListener');
            }
            if (core_1.isWrapped(HTMLElement.prototype.removeEventListener)) {
                shimmer.unwrap(HTMLElement.prototype, 'removeEventListener');
                this._logger.debug('removing previous patch from method removeEventListener');
            }
            shimmer.wrap(HTMLElement.prototype, 'addEventListener', this._patchElement());
            shimmer.wrap(HTMLElement.prototype, 'removeEventListener', this._patchRemoveEventListener());
        }
        this._patchHistoryApi();
        return this._moduleExports;
    }
    /**
     * implements unpatch function
     */
    unpatch() {
        const ZoneWithPrototype = this.getZoneWithPrototype();
        this._logger.debug('removing patch from', this.moduleName, this.version, 'zone:', !!ZoneWithPrototype);
        if (ZoneWithPrototype && this._zonePatched) {
            shimmer.unwrap(ZoneWithPrototype.prototype, 'runTask');
            shimmer.unwrap(ZoneWithPrototype.prototype, 'scheduleTask');
            shimmer.unwrap(ZoneWithPrototype.prototype, 'cancelTask');
        }
        else {
            shimmer.unwrap(HTMLElement.prototype, 'addEventListener');
            shimmer.unwrap(HTMLElement.prototype, 'removeEventListener');
        }
        this._unpatchHistoryApi();
    }
    /**
     * returns Zone
     */
    getZoneWithPrototype() {
        const _window = window;
        return _window.Zone;
    }
}
exports.UserInteractionPlugin = UserInteractionPlugin;
//# sourceMappingURL=userInteraction.js.map

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.VERSION = '0.10.0';
//# sourceMappingURL=version.js.map

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventNames = void 0;
var EventNames;
(function (EventNames) {
    EventNames["METHOD_OPEN"] = "open";
    EventNames["METHOD_SEND"] = "send";
    EventNames["EVENT_ABORT"] = "abort";
    EventNames["EVENT_ERROR"] = "error";
    EventNames["EVENT_LOAD"] = "loaded";
    EventNames["EVENT_TIMEOUT"] = "timeout";
})(EventNames = exports.EventNames || (exports.EventNames = {}));
//# sourceMappingURL=EventNames.js.map

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.VERSION = '0.11.0';
//# sourceMappingURL=version.js.map

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLHttpRequestPlugin = void 0;
const api = __webpack_require__(1);
const core_1 = __webpack_require__(0);
const semantic_conventions_1 = __webpack_require__(8);
const web_1 = __webpack_require__(6);
const shimmer = __webpack_require__(54);
const EventNames_1 = __webpack_require__(153);
const version_1 = __webpack_require__(154);
// how long to wait for observer to collect information about resources
// this is needed as event "load" is called before observer
// hard to say how long it should really wait, seems like 300ms is
// safe enough
const OBSERVER_WAIT_TIME_MS = 300;
/**
 * This class represents a XMLHttpRequest plugin for auto instrumentation
 */
class XMLHttpRequestPlugin extends core_1.BasePlugin {
    constructor(_config = {}) {
        super('@opentelemetry/plugin-xml-http-request', version_1.VERSION);
        this._config = _config;
        this.component = 'xml-http-request';
        this.version = version_1.VERSION;
        this.moduleName = this.component;
        this._tasksCount = 0;
        this._xhrMem = new WeakMap();
        this._usedResources = new WeakSet();
    }
    /**
     * Adds custom headers to XMLHttpRequest
     * @param xhr
     * @param span
     * @private
     */
    _addHeaders(xhr, spanUrl) {
        if (!web_1.shouldPropagateTraceHeaders(spanUrl, this._config.propagateTraceHeaderCorsUrls)) {
            return;
        }
        const headers = {};
        api.propagation.inject(headers);
        Object.keys(headers).forEach(key => {
            xhr.setRequestHeader(key, String(headers[key]));
        });
    }
    /**
     * Add cors pre flight child span
     * @param span
     * @param corsPreFlightRequest
     * @private
     */
    _addChildSpan(span, corsPreFlightRequest) {
        this._tracer.withSpan(span, () => {
            const childSpan = this._tracer.startSpan('CORS Preflight', {
                startTime: corsPreFlightRequest[web_1.PerformanceTimingNames.FETCH_START],
            });
            web_1.addSpanNetworkEvents(childSpan, corsPreFlightRequest);
            childSpan.end(corsPreFlightRequest[web_1.PerformanceTimingNames.RESPONSE_END]);
        });
    }
    /**
     * Add attributes when span is going to end
     * @param span
     * @param xhr
     * @param spanUrl
     * @private
     */
    _addFinalSpanAttributes(span, xhrMem, spanUrl) {
        if (typeof spanUrl === 'string') {
            const parsedUrl = web_1.parseUrl(spanUrl);
            span.setAttribute(semantic_conventions_1.HttpAttribute.HTTP_STATUS_CODE, xhrMem.status);
            span.setAttribute(semantic_conventions_1.HttpAttribute.HTTP_STATUS_TEXT, xhrMem.statusText);
            span.setAttribute(semantic_conventions_1.HttpAttribute.HTTP_HOST, parsedUrl.host);
            span.setAttribute(semantic_conventions_1.HttpAttribute.HTTP_SCHEME, parsedUrl.protocol.replace(':', ''));
            // @TODO do we want to collect this or it will be collected earlier once only or
            //    maybe when parent span is not available ?
            span.setAttribute(semantic_conventions_1.HttpAttribute.HTTP_USER_AGENT, navigator.userAgent);
        }
    }
    /**
     * will collect information about all resources created
     * between "send" and "end" with additional waiting for main resource
     * @param xhr
     * @param spanUrl
     * @private
     */
    _addResourceObserver(xhr, spanUrl) {
        const xhrMem = this._xhrMem.get(xhr);
        if (!xhrMem || typeof window.PerformanceObserver === 'undefined') {
            return;
        }
        xhrMem.createdResources = {
            observer: new PerformanceObserver(list => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    if (entry.initiatorType === 'xmlhttprequest' &&
                        entry.name === spanUrl) {
                        if (xhrMem.createdResources) {
                            xhrMem.createdResources.entries.push(entry);
                        }
                    }
                });
            }),
            entries: [],
        };
        xhrMem.createdResources.observer.observe({
            entryTypes: ['resource'],
        });
    }
    /**
     * Clears the resource timings and all resources assigned with spans
     *     when {@link XMLHttpRequestPluginConfig.clearTimingResources} is
     *     set to true (default false)
     * @private
     */
    _clearResources() {
        if (this._tasksCount === 0 && this._config.clearTimingResources) {
            core_1.otperformance.clearResourceTimings();
            this._xhrMem = new WeakMap();
            this._usedResources = new WeakSet();
        }
    }
    /**
     * Finds appropriate resource and add network events to the span
     * @param span
     */
    _findResourceAndAddNetworkEvents(xhrMem, span, spanUrl, startTime, endTime) {
        if (!spanUrl || !startTime || !endTime || !xhrMem.createdResources) {
            return;
        }
        let resources = xhrMem.createdResources.entries;
        if (!resources || !resources.length) {
            // fallback - either Observer is not available or it took longer
            // then OBSERVER_WAIT_TIME_MS and observer didn't collect enough
            // information
            resources = core_1.otperformance.getEntriesByType(
            // ts thinks this is the perf_hooks module, but it is the browser performance api
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            'resource');
        }
        const resource = web_1.getResource(spanUrl, startTime, endTime, resources, this._usedResources);
        if (resource.mainRequest) {
            const mainRequest = resource.mainRequest;
            this._markResourceAsUsed(mainRequest);
            const corsPreFlightRequest = resource.corsPreFlightRequest;
            if (corsPreFlightRequest) {
                this._addChildSpan(span, corsPreFlightRequest);
                this._markResourceAsUsed(corsPreFlightRequest);
            }
            web_1.addSpanNetworkEvents(span, mainRequest);
        }
    }
    /**
     * Removes the previous information about span.
     * This might happened when the same xhr is used again.
     * @param xhr
     * @private
     */
    _cleanPreviousSpanInformation(xhr) {
        const xhrMem = this._xhrMem.get(xhr);
        if (xhrMem) {
            const callbackToRemoveEvents = xhrMem.callbackToRemoveEvents;
            if (callbackToRemoveEvents) {
                callbackToRemoveEvents();
            }
            this._xhrMem.delete(xhr);
        }
    }
    /**
     * Creates a new span when method "open" is called
     * @param xhr
     * @param url
     * @param method
     * @private
     */
    _createSpan(xhr, url, method) {
        if (core_1.isUrlIgnored(url, this._config.ignoreUrls)) {
            this._logger.debug('ignoring span as url matches ignored url');
            return;
        }
        const spanName = `HTTP ${method.toUpperCase()}`;
        const currentSpan = this._tracer.startSpan(spanName, {
            kind: api.SpanKind.CLIENT,
            attributes: {
                [semantic_conventions_1.HttpAttribute.HTTP_METHOD]: method,
                [semantic_conventions_1.HttpAttribute.HTTP_URL]: url,
            },
        });
        currentSpan.addEvent(EventNames_1.EventNames.METHOD_OPEN);
        this._cleanPreviousSpanInformation(xhr);
        this._xhrMem.set(xhr, {
            span: currentSpan,
            spanUrl: url,
        });
        return currentSpan;
    }
    /**
     * Marks certain [resource]{@link PerformanceResourceTiming} when information
     * from this is used to add events to span.
     * This is done to avoid reusing the same resource again for next span
     * @param resource
     * @private
     */
    _markResourceAsUsed(resource) {
        this._usedResources.add(resource);
    }
    /**
     * Patches the method open
     * @private
     */
    _patchOpen() {
        return (original) => {
            const plugin = this;
            return function patchOpen(...args) {
                const method = args[0];
                const url = args[1];
                plugin._createSpan(this, url, method);
                return original.apply(this, args);
            };
        };
    }
    /**
     * Patches the method send
     * @private
     */
    _patchSend() {
        const plugin = this;
        function endSpanTimeout(eventName, xhrMem, endTime) {
            const callbackToRemoveEvents = xhrMem.callbackToRemoveEvents;
            if (typeof callbackToRemoveEvents === 'function') {
                callbackToRemoveEvents();
            }
            const { span, spanUrl, sendStartTime } = xhrMem;
            if (span) {
                plugin._findResourceAndAddNetworkEvents(xhrMem, span, spanUrl, sendStartTime, endTime);
                span.addEvent(eventName, endTime);
                plugin._addFinalSpanAttributes(span, xhrMem, spanUrl);
                span.end(endTime);
                plugin._tasksCount--;
            }
            plugin._clearResources();
        }
        function endSpan(eventName, xhr) {
            const xhrMem = plugin._xhrMem.get(xhr);
            if (!xhrMem) {
                return;
            }
            xhrMem.status = xhr.status;
            xhrMem.statusText = xhr.statusText;
            plugin._xhrMem.delete(xhr);
            const endTime = core_1.hrTime();
            // the timeout is needed as observer doesn't have yet information
            // when event "load" is called. Also the time may differ depends on
            // browser and speed of computer
            setTimeout(() => {
                endSpanTimeout(eventName, xhrMem, endTime);
            }, OBSERVER_WAIT_TIME_MS);
        }
        function onError() {
            endSpan(EventNames_1.EventNames.EVENT_ERROR, this);
        }
        function onAbort() {
            endSpan(EventNames_1.EventNames.EVENT_ABORT, this);
        }
        function onTimeout() {
            endSpan(EventNames_1.EventNames.EVENT_TIMEOUT, this);
        }
        function onLoad() {
            if (this.status < 299) {
                endSpan(EventNames_1.EventNames.EVENT_LOAD, this);
            }
            else {
                endSpan(EventNames_1.EventNames.EVENT_ERROR, this);
            }
        }
        function unregister(xhr) {
            xhr.removeEventListener('abort', onAbort);
            xhr.removeEventListener('error', onError);
            xhr.removeEventListener('load', onLoad);
            xhr.removeEventListener('timeout', onTimeout);
            const xhrMem = plugin._xhrMem.get(xhr);
            if (xhrMem) {
                xhrMem.callbackToRemoveEvents = undefined;
            }
        }
        return (original) => {
            return function patchSend(...args) {
                const xhrMem = plugin._xhrMem.get(this);
                if (!xhrMem) {
                    return original.apply(this, args);
                }
                const currentSpan = xhrMem.span;
                const spanUrl = xhrMem.spanUrl;
                if (currentSpan && spanUrl) {
                    plugin._tracer.withSpan(currentSpan, () => {
                        plugin._tasksCount++;
                        xhrMem.sendStartTime = core_1.hrTime();
                        currentSpan.addEvent(EventNames_1.EventNames.METHOD_SEND);
                        this.addEventListener('abort', onAbort);
                        this.addEventListener('error', onError);
                        this.addEventListener('load', onLoad);
                        this.addEventListener('timeout', onTimeout);
                        xhrMem.callbackToRemoveEvents = () => {
                            unregister(this);
                            if (xhrMem.createdResources) {
                                xhrMem.createdResources.observer.disconnect();
                            }
                        };
                        plugin._addHeaders(this, spanUrl);
                        plugin._addResourceObserver(this, spanUrl);
                    });
                }
                return original.apply(this, args);
            };
        };
    }
    /**
     * implements patch function
     */
    patch() {
        this._logger.debug('applying patch to', this.moduleName, this.version);
        if (core_1.isWrapped(XMLHttpRequest.prototype.open)) {
            shimmer.unwrap(XMLHttpRequest.prototype, 'open');
            this._logger.debug('removing previous patch from method open');
        }
        if (core_1.isWrapped(XMLHttpRequest.prototype.send)) {
            shimmer.unwrap(XMLHttpRequest.prototype, 'send');
            this._logger.debug('removing previous patch from method send');
        }
        shimmer.wrap(XMLHttpRequest.prototype, 'open', this._patchOpen());
        shimmer.wrap(XMLHttpRequest.prototype, 'send', this._patchSend());
        return this._moduleExports;
    }
    /**
     * implements unpatch function
     */
    unpatch() {
        this._logger.debug('removing patch from', this.moduleName, this.version);
        shimmer.unwrap(XMLHttpRequest.prototype, 'open');
        shimmer.unwrap(XMLHttpRequest.prototype, 'send');
        this._tasksCount = 0;
        this._xhrMem = new WeakMap();
        this._usedResources = new WeakSet();
    }
}
exports.XMLHttpRequestPlugin = XMLHttpRequestPlugin;
//# sourceMappingURL=xhr.js.map

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=config.js.map

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectResources = void 0;
const Resource_1 = __webpack_require__(49);
/**
 * Detects resources for the browser platform, which is currently only the
 * telemetry SDK resource. More could be added in the future. This method
 * is async to match the signature of corresponding method for node.
 */
exports.detectResources = async () => {
    return Resource_1.Resource.createTelemetrySDKResource();
};
//# sourceMappingURL=detect-resources.js.map

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(157), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=types.js.map

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseAttribute = void 0;
/**
 * Database attribute names defined by the Opetelemetry Semantic Conventions specification
 * https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/database.md
 */
exports.DatabaseAttribute = {
    // Connection-level attributes
    /**
     * An identifier for the database management system (DBMS) product being used.
     *
     * @remarks
     * Required.
     */
    DB_SYSTEM: 'db.system',
    /**
     * The connection string used to connect to the database.
     * It is recommended to remove embedded credentials.
     *
     * @remarks
     * Optional.
     */
    DB_CONNECTION_STRING: 'db.connection_string',
    /**
     * Username for accessing the database, e.g., "readonly_user" or "reporting_user".
     *
     * @remarks
     * Optional.
     */
    DB_USER: 'db.user',
    // Please see ./general.ts for NET_PEER_NAME, NET_PEER_IP, NET_PEER_PORT, NET_TRANSPORT
    // Call-level attributes
    /**
     * If no [tech-specific attribute](https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/database.md#call-level-attributes-for-specific-technologies)
     * is defined in the list below,
     * this attribute is used to report the name of the database being accessed.
     * For commands that switch the database,this should be set to the
     * target database (even if the command fails).
     *
     * @remarks
     * Required if applicable and no more specific attribute is defined.
     */
    DB_NAME: 'db.name',
    /**
     * The database statement being executed.
     * Note that the value may be sanitized to exclude sensitive information.
     * E.g., for db.system="other_sql", "SELECT * FROM wuser_table";
     * for db.system="redis", "SET mykey 'WuValue'".
     *
     * @remarks
     * Required if applicable.
     */
    DB_STATEMENT: 'db.statement',
    /**
     * The name of the operation being executed,
     * e.g. the MongoDB command name such as findAndModify.
     * While it would semantically make sense to set this,
     * e.g., to an SQL keyword like SELECT or INSERT,
     * it is not recommended to attempt any client-side parsing of
     * db.statement just to get this property (the back end can do that if required).
     *
     * @remarks
     * Required if db.statement is not applicable.
     */
    DB_OPERATION: 'db.operation',
    // Connection-level attributes for specific technologies
    /**
     * The instance name connecting to.
     * This name is used to determine the port of a named instance.
     *
     * @remarks
     * If setting a `db.mssql.instance_name`,
     * `net.peer.port` is no longer required (but still recommended if non-standard)
     */
    DB_MSSSQL_INSTANCE_NAME: 'db.mssql.instance_name',
    /**
     * The fully-qualified class name of the Java Database Connectivity (JDBC) driver used to connect,
     * e.g., "org.postgresql.Driver" or "com.microsoft.sqlserver.jdbc.SQLServerDriver".
     *
     * @remarks
     * Optional.
     */
    DB_JDBC_DRIVER_CLASSNAME: 'db.jdbc.driver_classname',
    // Call-level attributes for specific technologies
    /**
     * The name of the keyspace being accessed. To be used instead of the generic db.name attribute.
     *
     * @remarks
     * Required.
     */
    DB_CASSANDRA_KEYSPACE: 'db.cassandra.keyspace',
    /**
     * The [HBase namespace](https://hbase.apache.org/book.html#_namespace) being accessed.
     * To be used instead of the generic db.name attribute.
     *
     * @remarks
     * Required.
     */
    DB_HBASE_NAMESPACE: 'db.hbase.namespace',
    /**
     * The index of the database being accessed as used in the [SELECT command](https://redis.io/commands/select),
     * provided as an integer. To be used instead of the generic db.name attribute.
     *
     * @remarks
     * Required if other than the default database (0).
     */
    DB_REDIS_DATABASE_INDEX: 'db.redis.database_index',
    /**
     * The collection being accessed within the database stated in db.name.
     *
     * @remarks
     * Required.
     */
    DB_MONGODB_COLLECTION: 'db.mongodb.collection',
    // Not in spec.
    /** Deprecated. Not in spec. */
    DB_TYPE: 'db.type',
    /** Deprecated. Not in spec. */
    DB_INSTANCE: 'db.instance',
    /** Deprecated. Not in spec. */
    DB_URL: 'db.url',
};
//# sourceMappingURL=database.js.map

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionEventName = exports.ExceptionAttribute = void 0;
exports.ExceptionAttribute = {
    MESSAGE: 'exception.message',
    STACKTRACE: 'exception.stacktrace',
    TYPE: 'exception.type',
};
exports.ExceptionEventName = 'exception';
//# sourceMappingURL=exception.js.map

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralAttribute = void 0;
/**
 * General purpose networking attributes defined by the OpenTelemetry Semantic Conventions Specification
 * https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/span-general.md
 */
exports.GeneralAttribute = {
    NET_PEER_IP: 'net.peer.ip',
    NET_PEER_ADDRESS: 'net.peer.address',
    NET_PEER_HOSTNAME: 'net.peer.host',
    NET_PEER_PORT: 'net.peer.port',
    NET_PEER_NAME: 'net.peer.name',
    NET_PEER_IPV4: 'net.peer.ipv4',
    NET_PEER_IPV6: 'net.peer.ipv6',
    NET_PEER_SERVICE: 'net.peer.service',
    NET_HOST_IP: 'net.host.ip',
    NET_HOST_PORT: 'net.host.port',
    NET_HOST_NAME: 'net.host.name',
    NET_TRANSPORT: 'net.transport',
    // These are used as potential values to NET_TRANSPORT
    IP_TCP: 'IP.TCP',
    IP_UDP: 'IP.UDP',
    INPROC: 'inproc',
};
//# sourceMappingURL=general.js.map

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpAttribute = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.HttpAttribute = {
    HTTP_HOST: 'http.host',
    HTTP_METHOD: 'http.method',
    HTTP_TARGET: 'http.target',
    HTTP_ROUTE: 'http.route',
    HTTP_URL: 'http.url',
    HTTP_STATUS_CODE: 'http.status_code',
    HTTP_STATUS_TEXT: 'http.status_text',
    HTTP_FLAVOR: 'http.flavor',
    HTTP_SERVER_NAME: 'http.server_name',
    HTTP_CLIENT_IP: 'http.client_ip',
    HTTP_SCHEME: 'http.scheme',
    HTTP_RESPONSE_CONTENT_LENGTH: 'http.response_content_length',
    // NOT ON OFFICIAL SPEC
    HTTP_ERROR_NAME: 'http.error_name',
    HTTP_ERROR_MESSAGE: 'http.error_message',
    HTTP_USER_AGENT: 'http.user_agent',
};
//# sourceMappingURL=http.js.map

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(160), exports);
__exportStar(__webpack_require__(161), exports);
__exportStar(__webpack_require__(162), exports);
__exportStar(__webpack_require__(163), exports);
__exportStar(__webpack_require__(165), exports);
__exportStar(__webpack_require__(166), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatingSystemValues = exports.OperatingSystem = void 0;
/**
 * The operating system (OS) on which the process represented by this resource is running.
 *
 * In case of virtualized environments, this is the operating system as it
 * is observed by the process, i.e., the virtualized guest rather than the
 * underlying host.
 * https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/resource/semantic_conventions/os.md
 */
exports.OperatingSystem = {
    /**
     * The operating system type.
     * This should be set to one of {@link OperatingSystemValues}
     * E.g., "WINDOWS"
     *
     * @remarks
     * Required.
     */
    TYPE: 'os.type',
    /**
     * Human readable (not intended to be parsed) OS version information.
     * E.g., "Microsoft Windows [Version 10.0.18363.778]"
     *
     * @remarks
     * Required if applicable.
     */
    DESCRIPTION: 'os.description',
};
/**
 * {@link OperatingSystem.TYPE} SHOULD be set to one of the values
 * listed below.
 * If none of the listed values apply, a custom value best describing
 * the family the operating system belongs to CAN be used.
 */
exports.OperatingSystemValues = {
    WINDOWS: 'WINDOWS',
    LINUX: 'LINUX',
    DARWIN: 'DARWIN',
    FREEBSD: 'FREEBSD',
    NETBSD: 'NETBSD',
    OPENBSD: 'OPENBSD',
    DRAGONFLYBSD: 'DRAGONFLYBSD',
    HPUX: 'HPUX',
    AIX: 'AIX',
    SOLARIS: 'SOLARIS',
    ZOS: 'ZOS',
};
//# sourceMappingURL=os.js.map

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcAttribute = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.RpcAttribute = {
    RPC_SERVICE: 'rpc.service',
    // GRPC (no spec)
    GRPC_KIND: 'grpc.kind',
    GRPC_METHOD: 'grpc.method',
    GRPC_STATUS_CODE: 'grpc.status_code',
    GRPC_ERROR_NAME: 'grpc.error_name',
    GRPC_ERROR_MESSAGE: 'grpc.error_message',
};
//# sourceMappingURL=rpc.js.map

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicTracerProvider = void 0;
const api = __webpack_require__(1);
const core_1 = __webpack_require__(0);
const _1 = __webpack_require__(9);
const config_1 = __webpack_require__(52);
const MultiSpanProcessor_1 = __webpack_require__(168);
const NoopSpanProcessor_1 = __webpack_require__(169);
const resources_1 = __webpack_require__(19);
/**
 * This class represents a basic tracer provider which platform libraries can extend
 */
class BasicTracerProvider {
    constructor(config = config_1.DEFAULT_CONFIG) {
        var _a, _b;
        this._registeredSpanProcessors = [];
        this._tracers = new Map();
        this.activeSpanProcessor = new NoopSpanProcessor_1.NoopSpanProcessor();
        this.logger = (_a = config.logger) !== null && _a !== void 0 ? _a : new core_1.ConsoleLogger(config.logLevel);
        this.resource = (_b = config.resource) !== null && _b !== void 0 ? _b : resources_1.Resource.createTelemetrySDKResource();
        this._config = Object.assign({}, config, {
            logger: this.logger,
            resource: this.resource,
        });
        if (this._config.gracefulShutdown) {
            this._cleanNotifyOnGlobalShutdown = core_1.notifyOnGlobalShutdown(this._shutdownActiveProcessor.bind(this));
        }
    }
    getTracer(name, version = '*', config) {
        const key = `${name}@${version}`;
        if (!this._tracers.has(key)) {
            this._tracers.set(key, new _1.Tracer({ name, version }, config || this._config, this));
        }
        return this._tracers.get(key);
    }
    /**
     * Adds a new {@link SpanProcessor} to this tracer.
     * @param spanProcessor the new SpanProcessor to be added.
     */
    addSpanProcessor(spanProcessor) {
        this._registeredSpanProcessors.push(spanProcessor);
        this.activeSpanProcessor = new MultiSpanProcessor_1.MultiSpanProcessor(this._registeredSpanProcessors);
    }
    getActiveSpanProcessor() {
        return this.activeSpanProcessor;
    }
    /**
     * Register this TracerProvider for use with the OpenTelemetry API.
     * Undefined values may be replaced with defaults, and
     * null values will be skipped.
     *
     * @param config Configuration object for SDK registration
     */
    register(config = {}) {
        api.trace.setGlobalTracerProvider(this);
        if (config.propagator === undefined) {
            config.propagator = new core_1.CompositePropagator({
                propagators: [new core_1.HttpCorrelationContext(), new core_1.HttpTraceContext()],
            });
        }
        if (config.contextManager) {
            api.context.setGlobalContextManager(config.contextManager);
        }
        if (config.propagator) {
            api.propagation.setGlobalPropagator(config.propagator);
        }
    }
    shutdown(cb = () => { }) {
        this.activeSpanProcessor.shutdown(cb);
        if (this._cleanNotifyOnGlobalShutdown) {
            this._cleanNotifyOnGlobalShutdown();
            this._cleanNotifyOnGlobalShutdown = undefined;
        }
    }
    _shutdownActiveProcessor() {
        this.activeSpanProcessor.shutdown();
    }
}
exports.BasicTracerProvider = BasicTracerProvider;
//# sourceMappingURL=BasicTracerProvider.js.map

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSpanProcessor = void 0;
/**
 * Implementation of the {@link SpanProcessor} that simply forwards all
 * received events to a list of {@link SpanProcessor}s.
 */
class MultiSpanProcessor {
    constructor(_spanProcessors) {
        this._spanProcessors = _spanProcessors;
    }
    forceFlush(cb = () => { }) {
        let finished = 0;
        const total = this._spanProcessors.length;
        for (const spanProcessor of this._spanProcessors) {
            spanProcessor.forceFlush(() => {
                if (++finished === total) {
                    cb();
                }
            });
        }
    }
    onStart(span) {
        for (const spanProcessor of this._spanProcessors) {
            spanProcessor.onStart(span);
        }
    }
    onEnd(span) {
        for (const spanProcessor of this._spanProcessors) {
            spanProcessor.onEnd(span);
        }
    }
    shutdown(cb = () => { }) {
        let finished = 0;
        const total = this._spanProcessors.length;
        for (const spanProcessor of this._spanProcessors) {
            spanProcessor.shutdown(() => {
                if (++finished === total) {
                    cb();
                }
            });
        }
    }
}
exports.MultiSpanProcessor = MultiSpanProcessor;
//# sourceMappingURL=MultiSpanProcessor.js.map

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoopSpanProcessor = void 0;
/** No-op implementation of SpanProcessor */
class NoopSpanProcessor {
    onStart(span) { }
    onEnd(span) { }
    shutdown(cb = () => { }) {
        setTimeout(cb, 0);
    }
    forceFlush(cb = () => { }) {
        setTimeout(cb, 0);
    }
}
exports.NoopSpanProcessor = NoopSpanProcessor;
//# sourceMappingURL=NoopSpanProcessor.js.map

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=SpanProcessor.js.map

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracer = void 0;
const api = __webpack_require__(1);
const core_1 = __webpack_require__(0);
const Span_1 = __webpack_require__(51);
const utility_1 = __webpack_require__(179);
/**
 * This class represents a basic tracer.
 */
class Tracer {
    /**
     * Constructs a new Tracer instance.
     */
    constructor(instrumentationLibrary, config, _tracerProvider) {
        this._tracerProvider = _tracerProvider;
        const localConfig = utility_1.mergeConfig(config);
        this._sampler = localConfig.sampler;
        this._traceParams = localConfig.traceParams;
        this._idGenerator = config.idGenerator || new core_1.RandomIdGenerator();
        this.resource = _tracerProvider.resource;
        this.instrumentationLibrary = instrumentationLibrary;
        this.logger = config.logger || new core_1.ConsoleLogger(config.logLevel);
    }
    /**
     * Starts a new Span or returns the default NoopSpan based on the sampling
     * decision.
     */
    startSpan(name, options = {}, context = api.context.active()) {
        var _a, _b, _c;
        if (core_1.isInstrumentationSuppressed(context)) {
            this.logger.debug('Instrumentation suppressed, returning Noop Span');
            return api.NOOP_SPAN;
        }
        const parentContext = getParent(options, context);
        const spanId = this._idGenerator.generateSpanId();
        let traceId;
        let traceState;
        if (!parentContext || !api.trace.isSpanContextValid(parentContext)) {
            // New root span.
            traceId = this._idGenerator.generateTraceId();
        }
        else {
            // New child span.
            traceId = parentContext.traceId;
            traceState = parentContext.traceState;
        }
        const spanKind = (_a = options.kind) !== null && _a !== void 0 ? _a : api.SpanKind.INTERNAL;
        const links = (_b = options.links) !== null && _b !== void 0 ? _b : [];
        const attributes = (_c = options.attributes) !== null && _c !== void 0 ? _c : {};
        // make sampling decision
        const samplingResult = this._sampler.shouldSample(parentContext, traceId, name, spanKind, attributes, links);
        const traceFlags = samplingResult.decision === api.SamplingDecision.RECORD_AND_SAMPLED
            ? api.TraceFlags.SAMPLED
            : api.TraceFlags.NONE;
        const spanContext = { traceId, spanId, traceFlags, traceState };
        if (samplingResult.decision === api.SamplingDecision.NOT_RECORD) {
            this.logger.debug('Recording is off, starting no recording span');
            return new core_1.NoRecordingSpan(spanContext);
        }
        const span = new Span_1.Span(this, name, spanContext, spanKind, parentContext ? parentContext.spanId : undefined, links, options.startTime);
        // Set default attributes
        span.setAttributes(Object.assign(attributes, samplingResult.attributes));
        return span;
    }
    /**
     * Returns the current Span from the current context.
     *
     * If there is no Span associated with the current context, undefined is returned.
     */
    getCurrentSpan() {
        const ctx = api.context.active();
        // Get the current Span from the context or null if none found.
        return core_1.getActiveSpan(ctx);
    }
    /**
     * Enters the context of code where the given Span is in the current context.
     */
    withSpan(span, fn) {
        // Set given span to context.
        return api.context.with(core_1.setActiveSpan(api.context.active(), span), fn);
    }
    /**
     * Bind a span (or the current one) to the target's context
     */
    bind(target, span) {
        return api.context.bind(target, span ? core_1.setActiveSpan(api.context.active(), span) : api.context.active());
    }
    /** Returns the active {@link TraceParams}. */
    getActiveTraceParams() {
        return this._traceParams;
    }
    getActiveSpanProcessor() {
        return this._tracerProvider.getActiveSpanProcessor();
    }
}
exports.Tracer = Tracer;
/**
 * Get the parent to assign to a started span. If options.parent is null,
 * do not assign a parent.
 *
 * @param options span options
 * @param context context to check for parent
 */
function getParent(options, context) {
    if (options.parent === null)
        return undefined;
    if (options.parent)
        return getContext(options.parent);
    return core_1.getParentSpanContext(context);
}
function getContext(span) {
    return isSpan(span) ? span.context() : span;
}
function isSpan(span) {
    return typeof span.context === 'function';
}
//# sourceMappingURL=Tracer.js.map

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchSpanProcessor = void 0;
const api_1 = __webpack_require__(1);
const core_1 = __webpack_require__(0);
const DEFAULT_BUFFER_SIZE = 100;
const DEFAULT_BUFFER_TIMEOUT_MS = 20000;
/**
 * Implementation of the {@link SpanProcessor} that batches spans exported by
 * the SDK then pushes them to the exporter pipeline.
 */
class BatchSpanProcessor {
    constructor(_exporter, config) {
        this._exporter = _exporter;
        this._finishedSpans = [];
        this._isShutdown = false;
        this._bufferSize =
            config && config.bufferSize ? config.bufferSize : DEFAULT_BUFFER_SIZE;
        this._bufferTimeout =
            config && typeof config.bufferTimeout === 'number'
                ? config.bufferTimeout
                : DEFAULT_BUFFER_TIMEOUT_MS;
    }
    forceFlush(cb = () => { }) {
        if (this._isShutdown) {
            setTimeout(cb, 0);
            return;
        }
        this._flush(cb);
    }
    // does nothing.
    onStart(span) { }
    onEnd(span) {
        if (this._isShutdown) {
            return;
        }
        this._addToBuffer(span);
    }
    shutdown(cb = () => { }) {
        if (this._isShutdown) {
            setTimeout(cb, 0);
            return;
        }
        this.forceFlush(cb);
        this._isShutdown = true;
        this._exporter.shutdown();
    }
    /** Add a span in the buffer. */
    _addToBuffer(span) {
        this._finishedSpans.push(span);
        this._maybeStartTimer();
        if (this._finishedSpans.length > this._bufferSize) {
            this._flush();
        }
    }
    /** Send the span data list to exporter */
    _flush(cb = () => { }) {
        this._clearTimer();
        if (this._finishedSpans.length === 0) {
            setTimeout(cb, 0);
            return;
        }
        // prevent downstream exporter calls from generating spans
        api_1.context.with(core_1.suppressInstrumentation(api_1.context.active()), () => {
            this._exporter.export(this._finishedSpans, cb);
        });
        this._finishedSpans = [];
    }
    _maybeStartTimer() {
        if (this._timer !== undefined)
            return;
        this._timer = setTimeout(() => {
            this._flush();
        }, this._bufferTimeout);
        core_1.unrefTimer(this._timer);
    }
    _clearTimer() {
        if (this._timer !== undefined) {
            clearTimeout(this._timer);
            this._timer = undefined;
        }
    }
}
exports.BatchSpanProcessor = BatchSpanProcessor;
//# sourceMappingURL=BatchSpanProcessor.js.map

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleSpanExporter = void 0;
const core_1 = __webpack_require__(0);
/**
 * This is implementation of {@link SpanExporter} that prints spans to the
 * console. This class can be used for diagnostic purposes.
 */
class ConsoleSpanExporter {
    /**
     * Export spans.
     * @param spans
     * @param resultCallback
     */
    export(spans, resultCallback) {
        return this._sendSpans(spans, resultCallback);
    }
    /**
     * Shutdown the exporter.
     */
    shutdown() {
        return this._sendSpans([]);
    }
    /**
     * converts span info into more readable format
     * @param span
     */
    _exportInfo(span) {
        return {
            traceId: span.spanContext.traceId,
            parentId: span.parentSpanId,
            name: span.name,
            id: span.spanContext.spanId,
            kind: span.kind,
            timestamp: core_1.hrTimeToMicroseconds(span.startTime),
            duration: core_1.hrTimeToMicroseconds(span.duration),
            attributes: span.attributes,
            status: span.status,
            events: span.events,
        };
    }
    /**
     * Showing spans in console
     * @param spans
     * @param done
     */
    _sendSpans(spans, done) {
        for (const span of spans) {
            console.log(this._exportInfo(span));
        }
        if (done) {
            return done(core_1.ExportResult.SUCCESS);
        }
    }
}
exports.ConsoleSpanExporter = ConsoleSpanExporter;
//# sourceMappingURL=ConsoleSpanExporter.js.map

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemorySpanExporter = void 0;
const core_1 = __webpack_require__(0);
/**
 * This class can be used for testing purposes. It stores the exported spans
 * in a list in memory that can be retrieved using the `getFinishedSpans()`
 * method.
 */
class InMemorySpanExporter {
    constructor() {
        this._finishedSpans = [];
        /**
         * Indicates if the exporter has been "shutdown."
         * When false, exported spans will not be stored in-memory.
         */
        this._stopped = false;
    }
    export(spans, resultCallback) {
        if (this._stopped)
            return resultCallback(core_1.ExportResult.FAILED_NOT_RETRYABLE);
        this._finishedSpans.push(...spans);
        setTimeout(() => resultCallback(core_1.ExportResult.SUCCESS), 0);
    }
    shutdown() {
        this._stopped = true;
        this._finishedSpans = [];
    }
    reset() {
        this._finishedSpans = [];
    }
    getFinishedSpans() {
        return this._finishedSpans;
    }
}
exports.InMemorySpanExporter = InMemorySpanExporter;
//# sourceMappingURL=InMemorySpanExporter.js.map

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=ReadableSpan.js.map

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleSpanProcessor = void 0;
const api_1 = __webpack_require__(1);
const core_1 = __webpack_require__(0);
/**
 * An implementation of the {@link SpanProcessor} that converts the {@link Span}
 * to {@link ReadableSpan} and passes it to the configured exporter.
 *
 * Only spans that are sampled are converted.
 */
class SimpleSpanProcessor {
    constructor(_exporter) {
        this._exporter = _exporter;
        this._isShutdown = false;
    }
    forceFlush(cb = () => { }) {
        // do nothing as all spans are being exported without waiting
        setTimeout(cb, 0);
    }
    // does nothing.
    onStart(span) { }
    onEnd(span) {
        if (this._isShutdown) {
            return;
        }
        // prevent downstream exporter calls from generating spans
        api_1.context.with(core_1.suppressInstrumentation(api_1.context.active()), () => {
            this._exporter.export([span], () => { });
        });
    }
    shutdown(cb = () => { }) {
        if (this._isShutdown) {
            setTimeout(cb, 0);
            return;
        }
        this._isShutdown = true;
        this._exporter.shutdown();
        setTimeout(cb, 0);
    }
}
exports.SimpleSpanProcessor = SimpleSpanProcessor;
//# sourceMappingURL=SimpleSpanProcessor.js.map

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=SpanExporter.js.map

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=types.js.map

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeConfig = void 0;
const config_1 = __webpack_require__(52);
const core_1 = __webpack_require__(0);
/**
 * Function to merge Default configuration (as specified in './config') with
 * user provided configurations.
 */
function mergeConfig(userConfig) {
    const traceParams = userConfig.traceParams;
    const otelSamplingProbability = core_1.getEnv().OTEL_SAMPLING_PROBABILITY;
    const target = Object.assign(config_1.DEFAULT_CONFIG, 
    // use default AlwaysOnSampler if otelSamplingProbability is 1
    otelSamplingProbability !== undefined && otelSamplingProbability < 1
        ? {
            sampler: new core_1.ParentOrElseSampler(new core_1.ProbabilitySampler(otelSamplingProbability)),
        }
        : {}, userConfig);
    // the user-provided value will be used to extend the default value.
    if (traceParams) {
        target.traceParams.numberOfAttributesPerSpan =
            traceParams.numberOfAttributesPerSpan || config_1.DEFAULT_MAX_ATTRIBUTES_PER_SPAN;
        target.traceParams.numberOfEventsPerSpan =
            traceParams.numberOfEventsPerSpan || config_1.DEFAULT_MAX_EVENTS_PER_SPAN;
        target.traceParams.numberOfLinksPerSpan =
            traceParams.numberOfLinksPerSpan || config_1.DEFAULT_MAX_LINKS_PER_SPAN;
    }
    return target;
}
exports.mergeConfig = mergeConfig;
//# sourceMappingURL=utility.js.map

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebTracerProvider = void 0;
const tracing_1 = __webpack_require__(9);
const StackContextManager_1 = __webpack_require__(53);
/**
 * This class represents a web tracer with {@link StackContextManager}
 */
class WebTracerProvider extends tracing_1.BasicTracerProvider {
    /**
     * Constructs a new Tracer instance.
     * @param config Web Tracer config
     */
    constructor(config = {}) {
        if (typeof config.plugins === 'undefined') {
            config.plugins = [];
        }
        super(config);
        for (const plugin of config.plugins) {
            plugin.enable([], this, this.logger);
        }
        if (config.contextManager) {
            throw ('contextManager should be defined in register method not in' +
                ' constructor');
        }
        if (config.propagator) {
            throw 'propagator should be defined in register method not in constructor';
        }
    }
    /**
     * Register this TracerProvider for use with the OpenTelemetry API.
     * Undefined values may be replaced with defaults, and
     * null values will be skipped.
     *
     * @param config Configuration object for SDK registration
     */
    register(config = {}) {
        if (config.contextManager === undefined) {
            config.contextManager = new StackContextManager_1.StackContextManager();
        }
        if (config.contextManager) {
            config.contextManager.enable();
        }
        super.register(config);
    }
}
exports.WebTracerProvider = WebTracerProvider;
//# sourceMappingURL=WebTracerProvider.js.map

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PerformanceTimingNames_1 = __webpack_require__(20);
//# sourceMappingURL=types.js.map

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldPropagateTraceHeaders = exports.getElementXPath = exports.parseUrl = exports.getResource = exports.sortResources = exports.addSpanNetworkEvents = exports.addSpanNetworkEvent = exports.hasKey = void 0;
const PerformanceTimingNames_1 = __webpack_require__(20);
const core_1 = __webpack_require__(0);
const semantic_conventions_1 = __webpack_require__(8);
// Used to normalize relative URLs
const urlNormalizingA = document.createElement('a');
/**
 * Helper function to be able to use enum as typed key in type and in interface when using forEach
 * @param obj
 * @param key
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function hasKey(obj, key) {
    return key in obj;
}
exports.hasKey = hasKey;
/**
 * Helper function for starting an event on span based on {@link PerformanceEntries}
 * @param span
 * @param performanceName name of performance entry for time start
 * @param entries
 */
function addSpanNetworkEvent(span, performanceName, entries) {
    if (hasKey(entries, performanceName) &&
        typeof entries[performanceName] === 'number') {
        // some metrics are available but have value 0 which means they are invalid
        // for example "secureConnectionStart" is 0 which makes the events to be wrongly interpreted
        if (entries[performanceName] === 0) {
            return undefined;
        }
        span.addEvent(performanceName, entries[performanceName]);
        return span;
    }
    return undefined;
}
exports.addSpanNetworkEvent = addSpanNetworkEvent;
/**
 * Helper function for adding network events
 * @param span
 * @param resource
 */
function addSpanNetworkEvents(span, resource) {
    addSpanNetworkEvent(span, PerformanceTimingNames_1.PerformanceTimingNames.FETCH_START, resource);
    addSpanNetworkEvent(span, PerformanceTimingNames_1.PerformanceTimingNames.DOMAIN_LOOKUP_START, resource);
    addSpanNetworkEvent(span, PerformanceTimingNames_1.PerformanceTimingNames.DOMAIN_LOOKUP_END, resource);
    addSpanNetworkEvent(span, PerformanceTimingNames_1.PerformanceTimingNames.CONNECT_START, resource);
    addSpanNetworkEvent(span, PerformanceTimingNames_1.PerformanceTimingNames.SECURE_CONNECTION_START, resource);
    addSpanNetworkEvent(span, PerformanceTimingNames_1.PerformanceTimingNames.CONNECT_END, resource);
    addSpanNetworkEvent(span, PerformanceTimingNames_1.PerformanceTimingNames.REQUEST_START, resource);
    addSpanNetworkEvent(span, PerformanceTimingNames_1.PerformanceTimingNames.RESPONSE_START, resource);
    addSpanNetworkEvent(span, PerformanceTimingNames_1.PerformanceTimingNames.RESPONSE_END, resource);
    if (resource[PerformanceTimingNames_1.PerformanceTimingNames.ENCODED_BODY_SIZE]) {
        span.setAttribute(semantic_conventions_1.HttpAttribute.HTTP_RESPONSE_CONTENT_LENGTH, resource[PerformanceTimingNames_1.PerformanceTimingNames.ENCODED_BODY_SIZE]);
    }
}
exports.addSpanNetworkEvents = addSpanNetworkEvents;
/**
 * sort resources by startTime
 * @param filteredResources
 */
function sortResources(filteredResources) {
    return filteredResources.slice().sort((a, b) => {
        const valueA = a[PerformanceTimingNames_1.PerformanceTimingNames.FETCH_START];
        const valueB = b[PerformanceTimingNames_1.PerformanceTimingNames.FETCH_START];
        if (valueA > valueB) {
            return 1;
        }
        else if (valueA < valueB) {
            return -1;
        }
        return 0;
    });
}
exports.sortResources = sortResources;
/**
 * Get closest performance resource ignoring the resources that have been
 * already used.
 * @param spanUrl
 * @param startTimeHR
 * @param endTimeHR
 * @param resources
 * @param ignoredResources
 * @param initiatorType
 */
function getResource(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources = new WeakSet(), initiatorType) {
    // de-relativize the URL before usage (does no harm to absolute URLs)
    urlNormalizingA.href = spanUrl;
    spanUrl = urlNormalizingA.href;
    const filteredResources = filterResourcesForSpan(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources, initiatorType);
    if (filteredResources.length === 0) {
        return {
            mainRequest: undefined,
        };
    }
    if (filteredResources.length === 1) {
        return {
            mainRequest: filteredResources[0],
        };
    }
    const sorted = sortResources(filteredResources.slice());
    const parsedSpanUrl = parseUrl(spanUrl);
    if (parsedSpanUrl.origin !== window.location.origin && sorted.length > 1) {
        let corsPreFlightRequest = sorted[0];
        let mainRequest = findMainRequest(sorted, corsPreFlightRequest[PerformanceTimingNames_1.PerformanceTimingNames.RESPONSE_END], endTimeHR);
        const responseEnd = corsPreFlightRequest[PerformanceTimingNames_1.PerformanceTimingNames.RESPONSE_END];
        const fetchStart = mainRequest[PerformanceTimingNames_1.PerformanceTimingNames.FETCH_START];
        // no corsPreFlightRequest
        if (fetchStart < responseEnd) {
            mainRequest = corsPreFlightRequest;
            corsPreFlightRequest = undefined;
        }
        return {
            corsPreFlightRequest,
            mainRequest,
        };
    }
    else {
        return {
            mainRequest: filteredResources[0],
        };
    }
}
exports.getResource = getResource;
/**
 * Will find the main request skipping the cors pre flight requests
 * @param resources
 * @param corsPreFlightRequestEndTime
 * @param spanEndTimeHR
 */
function findMainRequest(resources, corsPreFlightRequestEndTime, spanEndTimeHR) {
    const spanEndTime = core_1.hrTimeToNanoseconds(spanEndTimeHR);
    const minTime = core_1.hrTimeToNanoseconds(core_1.timeInputToHrTime(corsPreFlightRequestEndTime));
    let mainRequest = resources[1];
    let bestGap;
    const length = resources.length;
    for (let i = 1; i < length; i++) {
        const resource = resources[i];
        const resourceStartTime = core_1.hrTimeToNanoseconds(core_1.timeInputToHrTime(resource[PerformanceTimingNames_1.PerformanceTimingNames.FETCH_START]));
        const resourceEndTime = core_1.hrTimeToNanoseconds(core_1.timeInputToHrTime(resource[PerformanceTimingNames_1.PerformanceTimingNames.RESPONSE_END]));
        const currentGap = spanEndTime - resourceEndTime;
        if (resourceStartTime >= minTime && (!bestGap || currentGap < bestGap)) {
            bestGap = currentGap;
            mainRequest = resource;
        }
    }
    return mainRequest;
}
/**
 * Filter all resources that has started and finished according to span start time and end time.
 *     It will return the closest resource to a start time
 * @param spanUrl
 * @param startTimeHR
 * @param endTimeHR
 * @param resources
 * @param ignoredResources
 */
function filterResourcesForSpan(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources, initiatorType) {
    const startTime = core_1.hrTimeToNanoseconds(startTimeHR);
    const endTime = core_1.hrTimeToNanoseconds(endTimeHR);
    let filteredResources = resources.filter(resource => {
        const resourceStartTime = core_1.hrTimeToNanoseconds(core_1.timeInputToHrTime(resource[PerformanceTimingNames_1.PerformanceTimingNames.FETCH_START]));
        const resourceEndTime = core_1.hrTimeToNanoseconds(core_1.timeInputToHrTime(resource[PerformanceTimingNames_1.PerformanceTimingNames.RESPONSE_END]));
        return (resource.initiatorType.toLowerCase() ===
            (initiatorType || 'xmlhttprequest') &&
            resource.name === spanUrl &&
            resourceStartTime >= startTime &&
            resourceEndTime <= endTime);
    });
    if (filteredResources.length > 0) {
        filteredResources = filteredResources.filter(resource => {
            return !ignoredResources.has(resource);
        });
    }
    return filteredResources;
}
/**
 * Parses url using anchor element
 * @param url
 */
function parseUrl(url) {
    const a = document.createElement('a');
    a.href = url;
    return a;
}
exports.parseUrl = parseUrl;
/**
 * Get element XPath
 * @param target - target element
 * @param optimised - when id attribute of element is present the xpath can be
 * simplified to contain id
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getElementXPath(target, optimised) {
    if (target.nodeType === Node.DOCUMENT_NODE) {
        return '/';
    }
    const targetValue = getNodeValue(target, optimised);
    if (optimised && targetValue.indexOf('@id') > 0) {
        return targetValue;
    }
    let xpath = '';
    if (target.parentNode) {
        xpath += getElementXPath(target.parentNode, false);
    }
    xpath += targetValue;
    return xpath;
}
exports.getElementXPath = getElementXPath;
/**
 * get node index within the siblings
 * @param target
 */
function getNodeIndex(target) {
    if (!target.parentNode) {
        return 0;
    }
    const allowedTypes = [target.nodeType];
    if (target.nodeType === Node.CDATA_SECTION_NODE) {
        allowedTypes.push(Node.TEXT_NODE);
    }
    let elements = Array.from(target.parentNode.childNodes);
    elements = elements.filter((element) => {
        const localName = element.localName;
        return (allowedTypes.indexOf(element.nodeType) >= 0 &&
            localName === target.localName);
    });
    if (elements.length >= 1) {
        return elements.indexOf(target) + 1; // xpath starts from 1
    }
    // if there are no other similar child xpath doesn't need index
    return 0;
}
/**
 * get node value for xpath
 * @param target
 * @param optimised
 */
function getNodeValue(target, optimised) {
    const nodeType = target.nodeType;
    const index = getNodeIndex(target);
    let nodeValue = '';
    if (nodeType === Node.ELEMENT_NODE) {
        const id = target.getAttribute('id');
        if (optimised && id) {
            return `//*[@id="${id}"]`;
        }
        nodeValue = target.localName;
    }
    else if (nodeType === Node.TEXT_NODE ||
        nodeType === Node.CDATA_SECTION_NODE) {
        nodeValue = 'text()';
    }
    else if (nodeType === Node.COMMENT_NODE) {
        nodeValue = 'comment()';
    }
    else {
        return '';
    }
    // if index is 1 it can be omitted in xpath
    if (nodeValue && index > 1) {
        return `/${nodeValue}[${index}]`;
    }
    return `/${nodeValue}`;
}
/**
 * Checks if trace headers should be propagated
 * @param spanUrl
 * @private
 */
function shouldPropagateTraceHeaders(spanUrl, propagateTraceHeaderCorsUrls) {
    let propagateTraceHeaderUrls = propagateTraceHeaderCorsUrls || [];
    if (typeof propagateTraceHeaderUrls === 'string' ||
        propagateTraceHeaderUrls instanceof RegExp) {
        propagateTraceHeaderUrls = [propagateTraceHeaderUrls];
    }
    const parsedSpanUrl = parseUrl(spanUrl);
    if (parsedSpanUrl.origin === window.location.origin) {
        return true;
    }
    else {
        return propagateTraceHeaderUrls.some(propagateTraceHeaderUrl => core_1.urlMatches(spanUrl, propagateTraceHeaderUrl));
    }
}
exports.shouldPropagateTraceHeaders = shouldPropagateTraceHeaders;
//# sourceMappingURL=utils.js.map

/***/ }),
/* 183 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21), __webpack_require__(183)))

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(184);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
* @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
* (c) 2010-2020 Google LLC. https://angular.io/
* License: MIT
*/
(function (factory) {
     true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) :
        factory();
}((function () {
    'use strict';
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var Zone$1 = (function (global) {
        var performance = global['performance'];
        function mark(name) { performance && performance['mark'] && performance['mark'](name); }
        function performanceMeasure(name, label) {
            performance && performance['measure'] && performance['measure'](name, label);
        }
        mark('Zone');
        // Initialize before it's accessed below.
        // __Zone_symbol_prefix global can be used to override the default zone
        // symbol prefix with a custom one if needed.
        var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';
        function __symbol__(name) { return symbolPrefix + name; }
        var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
        if (global['Zone']) {
            // if global['Zone'] already exists (maybe zone.js was already loaded or
            // some other lib also registered a global object named Zone), we may need
            // to throw an error, but sometimes user may not want this error.
            // For example,
            // we have two web pages, page1 includes zone.js, page2 doesn't.
            // and the 1st time user load page1 and page2, everything work fine,
            // but when user load page2 again, error occurs because global['Zone'] already exists.
            // so we add a flag to let user choose whether to throw this error or not.
            // By default, if existing Zone is from zone.js, we will not throw the error.
            if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
                throw new Error('Zone already loaded.');
            }
            else {
                return global['Zone'];
            }
        }
        var Zone = /** @class */ (function () {
            function Zone(parent, zoneSpec) {
                this._parent = parent;
                this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
                this._properties = zoneSpec && zoneSpec.properties || {};
                this._zoneDelegate =
                    new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
            }
            Zone.assertZonePatched = function () {
                if (global['Promise'] !== patches['ZoneAwarePromise']) {
                    throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                        'has been overwritten.\n' +
                        'Most likely cause is that a Promise polyfill has been loaded ' +
                        'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                        'If you must load one, do so before loading zone.js.)');
                }
            };
            Object.defineProperty(Zone, "root", {
                get: function () {
                    var zone = Zone.current;
                    while (zone.parent) {
                        zone = zone.parent;
                    }
                    return zone;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Zone, "current", {
                get: function () { return _currentZoneFrame.zone; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Zone, "currentTask", {
                get: function () { return _currentTask; },
                enumerable: true,
                configurable: true
            });
            // tslint:disable-next-line:require-internal-with-underscore
            Zone.__load_patch = function (name, fn) {
                if (patches.hasOwnProperty(name)) {
                    if (checkDuplicate) {
                        throw Error('Already loaded patch: ' + name);
                    }
                }
                else if (!global['__Zone_disable_' + name]) {
                    var perfName = 'Zone:' + name;
                    mark(perfName);
                    patches[name] = fn(global, Zone, _api);
                    performanceMeasure(perfName, perfName);
                }
            };
            Object.defineProperty(Zone.prototype, "parent", {
                get: function () { return this._parent; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Zone.prototype, "name", {
                get: function () { return this._name; },
                enumerable: true,
                configurable: true
            });
            Zone.prototype.get = function (key) {
                var zone = this.getZoneWith(key);
                if (zone)
                    return zone._properties[key];
            };
            Zone.prototype.getZoneWith = function (key) {
                var current = this;
                while (current) {
                    if (current._properties.hasOwnProperty(key)) {
                        return current;
                    }
                    current = current._parent;
                }
                return null;
            };
            Zone.prototype.fork = function (zoneSpec) {
                if (!zoneSpec)
                    throw new Error('ZoneSpec required!');
                return this._zoneDelegate.fork(this, zoneSpec);
            };
            Zone.prototype.wrap = function (callback, source) {
                if (typeof callback !== 'function') {
                    throw new Error('Expecting function got: ' + callback);
                }
                var _callback = this._zoneDelegate.intercept(this, callback, source);
                var zone = this;
                return function () {
                    return zone.runGuarded(_callback, this, arguments, source);
                };
            };
            Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                finally {
                    _currentZoneFrame = _currentZoneFrame.parent;
                }
            };
            Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
                if (applyThis === void 0) { applyThis = null; }
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    try {
                        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                    }
                    catch (error) {
                        if (this._zoneDelegate.handleError(this, error)) {
                            throw error;
                        }
                    }
                }
                finally {
                    _currentZoneFrame = _currentZoneFrame.parent;
                }
            };
            Zone.prototype.runTask = function (task, applyThis, applyArgs) {
                if (task.zone != this) {
                    throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                        (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                }
                // https://github.com/angular/zone.js/issues/778, sometimes eventTask
                // will run in notScheduled(canceled) state, we should not try to
                // run such kind of task but just return
                if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                    return;
                }
                var reEntryGuard = task.state != running;
                reEntryGuard && task._transitionTo(running, scheduled);
                task.runCount++;
                var previousTask = _currentTask;
                _currentTask = task;
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                        task.cancelFn = undefined;
                    }
                    try {
                        return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                    }
                    catch (error) {
                        if (this._zoneDelegate.handleError(this, error)) {
                            throw error;
                        }
                    }
                }
                finally {
                    // if the task's state is notScheduled or unknown, then it has already been cancelled
                    // we should not reset the state to scheduled
                    if (task.state !== notScheduled && task.state !== unknown) {
                        if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                            reEntryGuard && task._transitionTo(scheduled, running);
                        }
                        else {
                            task.runCount = 0;
                            this._updateTaskCount(task, -1);
                            reEntryGuard &&
                                task._transitionTo(notScheduled, running, notScheduled);
                        }
                    }
                    _currentZoneFrame = _currentZoneFrame.parent;
                    _currentTask = previousTask;
                }
            };
            Zone.prototype.scheduleTask = function (task) {
                if (task.zone && task.zone !== this) {
                    // check if the task was rescheduled, the newZone
                    // should not be the children of the original zone
                    var newZone = this;
                    while (newZone) {
                        if (newZone === task.zone) {
                            throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                        }
                        newZone = newZone.parent;
                    }
                }
                task._transitionTo(scheduling, notScheduled);
                var zoneDelegates = [];
                task._zoneDelegates = zoneDelegates;
                task._zone = this;
                try {
                    task = this._zoneDelegate.scheduleTask(this, task);
                }
                catch (err) {
                    // should set task's state to unknown when scheduleTask throw error
                    // because the err may from reschedule, so the fromState maybe notScheduled
                    task._transitionTo(unknown, scheduling, notScheduled);
                    // TODO: @JiaLiPassion, should we check the result from handleError?
                    this._zoneDelegate.handleError(this, err);
                    throw err;
                }
                if (task._zoneDelegates === zoneDelegates) {
                    // we have to check because internally the delegate can reschedule the task.
                    this._updateTaskCount(task, 1);
                }
                if (task.state == scheduling) {
                    task._transitionTo(scheduled, scheduling);
                }
                return task;
            };
            Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
                return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
            };
            Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
                return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            };
            Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
                return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            };
            Zone.prototype.cancelTask = function (task) {
                if (task.zone != this)
                    throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                        (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                task._transitionTo(canceling, scheduled, running);
                try {
                    this._zoneDelegate.cancelTask(this, task);
                }
                catch (err) {
                    // if error occurs when cancelTask, transit the state to unknown
                    task._transitionTo(unknown, canceling);
                    this._zoneDelegate.handleError(this, err);
                    throw err;
                }
                this._updateTaskCount(task, -1);
                task._transitionTo(notScheduled, canceling);
                task.runCount = 0;
                return task;
            };
            Zone.prototype._updateTaskCount = function (task, count) {
                var zoneDelegates = task._zoneDelegates;
                if (count == -1) {
                    task._zoneDelegates = null;
                }
                for (var i = 0; i < zoneDelegates.length; i++) {
                    zoneDelegates[i]._updateTaskCount(task.type, count);
                }
            };
            return Zone;
        }());
        // tslint:disable-next-line:require-internal-with-underscore
        Zone.__symbol__ = __symbol__;
        var DELEGATE_ZS = {
            name: '',
            onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
            onScheduleTask: function (delegate, _, target, task) { return delegate.scheduleTask(target, task); },
            onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
            onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
        };
        var ZoneDelegate = /** @class */ (function () {
            function ZoneDelegate(zone, parentDelegate, zoneSpec) {
                this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
                this.zone = zone;
                this._parentDelegate = parentDelegate;
                this._forkZS =
                    zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
                this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
                this._forkCurrZone =
                    zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
                this._interceptZS =
                    zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
                this._interceptDlgt =
                    zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
                this._interceptCurrZone =
                    zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
                this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
                this._invokeDlgt =
                    zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
                this._invokeCurrZone =
                    zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
                this._handleErrorZS =
                    zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
                this._handleErrorDlgt = zoneSpec &&
                    (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
                this._handleErrorCurrZone =
                    zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
                this._scheduleTaskZS =
                    zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
                this._scheduleTaskDlgt = zoneSpec &&
                    (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
                this._scheduleTaskCurrZone = zoneSpec &&
                    (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
                this._invokeTaskZS =
                    zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
                this._invokeTaskDlgt =
                    zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
                this._invokeTaskCurrZone =
                    zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
                this._cancelTaskZS =
                    zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
                this._cancelTaskDlgt =
                    zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
                this._cancelTaskCurrZone =
                    zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
                this._hasTaskZS = null;
                this._hasTaskDlgt = null;
                this._hasTaskDlgtOwner = null;
                this._hasTaskCurrZone = null;
                var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
                var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
                if (zoneSpecHasTask || parentHasTask) {
                    // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                    // a case all task related interceptors must go through this ZD. We can't short circuit it.
                    this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                    this._hasTaskDlgt = parentDelegate;
                    this._hasTaskDlgtOwner = this;
                    this._hasTaskCurrZone = zone;
                    if (!zoneSpec.onScheduleTask) {
                        this._scheduleTaskZS = DELEGATE_ZS;
                        this._scheduleTaskDlgt = parentDelegate;
                        this._scheduleTaskCurrZone = this.zone;
                    }
                    if (!zoneSpec.onInvokeTask) {
                        this._invokeTaskZS = DELEGATE_ZS;
                        this._invokeTaskDlgt = parentDelegate;
                        this._invokeTaskCurrZone = this.zone;
                    }
                    if (!zoneSpec.onCancelTask) {
                        this._cancelTaskZS = DELEGATE_ZS;
                        this._cancelTaskDlgt = parentDelegate;
                        this._cancelTaskCurrZone = this.zone;
                    }
                }
            }
            ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
                return this._forkZS ?
                    this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                    new Zone(targetZone, zoneSpec);
            };
            ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
                return this._interceptZS ?
                    this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                    callback;
            };
            ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
                return this._invokeZS ?
                    this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                    callback.apply(applyThis, applyArgs);
            };
            ZoneDelegate.prototype.handleError = function (targetZone, error) {
                return this._handleErrorZS ?
                    this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                    true;
            };
            ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
                var returnTask = task;
                if (this._scheduleTaskZS) {
                    if (this._hasTaskZS) {
                        returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                    }
                    // clang-format off
                    returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                    // clang-format on
                    if (!returnTask)
                        returnTask = task;
                }
                else {
                    if (task.scheduleFn) {
                        task.scheduleFn(task);
                    }
                    else if (task.type == microTask) {
                        scheduleMicroTask(task);
                    }
                    else {
                        throw new Error('Task is missing scheduleFn.');
                    }
                }
                return returnTask;
            };
            ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
                return this._invokeTaskZS ?
                    this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                    task.callback.apply(applyThis, applyArgs);
            };
            ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
                var value;
                if (this._cancelTaskZS) {
                    value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
                }
                else {
                    if (!task.cancelFn) {
                        throw Error('Task is not cancelable');
                    }
                    value = task.cancelFn(task);
                }
                return value;
            };
            ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
                // hasTask should not throw error so other ZoneDelegate
                // can still trigger hasTask callback
                try {
                    this._hasTaskZS &&
                        this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
                }
                catch (err) {
                    this.handleError(targetZone, err);
                }
            };
            // tslint:disable-next-line:require-internal-with-underscore
            ZoneDelegate.prototype._updateTaskCount = function (type, count) {
                var counts = this._taskCounts;
                var prev = counts[type];
                var next = counts[type] = prev + count;
                if (next < 0) {
                    throw new Error('More tasks executed then were scheduled.');
                }
                if (prev == 0 || next == 0) {
                    var isEmpty = {
                        microTask: counts['microTask'] > 0,
                        macroTask: counts['macroTask'] > 0,
                        eventTask: counts['eventTask'] > 0,
                        change: type
                    };
                    this.hasTask(this.zone, isEmpty);
                }
            };
            return ZoneDelegate;
        }());
        var ZoneTask = /** @class */ (function () {
            function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
                // tslint:disable-next-line:require-internal-with-underscore
                this._zone = null;
                this.runCount = 0;
                // tslint:disable-next-line:require-internal-with-underscore
                this._zoneDelegates = null;
                // tslint:disable-next-line:require-internal-with-underscore
                this._state = 'notScheduled';
                this.type = type;
                this.source = source;
                this.data = options;
                this.scheduleFn = scheduleFn;
                this.cancelFn = cancelFn;
                if (!callback) {
                    throw new Error('callback is not defined');
                }
                this.callback = callback;
                var self = this;
                // TODO: @JiaLiPassion options should have interface
                if (type === eventTask && options && options.useG) {
                    this.invoke = ZoneTask.invokeTask;
                }
                else {
                    this.invoke = function () {
                        return ZoneTask.invokeTask.call(global, self, this, arguments);
                    };
                }
            }
            ZoneTask.invokeTask = function (task, target, args) {
                if (!task) {
                    task = this;
                }
                _numberOfNestedTaskFrames++;
                try {
                    task.runCount++;
                    return task.zone.runTask(task, target, args);
                }
                finally {
                    if (_numberOfNestedTaskFrames == 1) {
                        drainMicroTaskQueue();
                    }
                    _numberOfNestedTaskFrames--;
                }
            };
            Object.defineProperty(ZoneTask.prototype, "zone", {
                get: function () { return this._zone; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ZoneTask.prototype, "state", {
                get: function () { return this._state; },
                enumerable: true,
                configurable: true
            });
            ZoneTask.prototype.cancelScheduleRequest = function () { this._transitionTo(notScheduled, scheduling); };
            // tslint:disable-next-line:require-internal-with-underscore
            ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
                if (this._state === fromState1 || this._state === fromState2) {
                    this._state = toState;
                    if (toState == notScheduled) {
                        this._zoneDelegates = null;
                    }
                }
                else {
                    throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
                }
            };
            ZoneTask.prototype.toString = function () {
                if (this.data && typeof this.data.handleId !== 'undefined') {
                    return this.data.handleId.toString();
                }
                else {
                    return Object.prototype.toString.call(this);
                }
            };
            // add toJSON method to prevent cyclic error when
            // call JSON.stringify(zoneTask)
            ZoneTask.prototype.toJSON = function () {
                return {
                    type: this.type,
                    state: this.state,
                    source: this.source,
                    zone: this.zone.name,
                    runCount: this.runCount
                };
            };
            return ZoneTask;
        }());
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  MICROTASK QUEUE
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        var symbolSetTimeout = __symbol__('setTimeout');
        var symbolPromise = __symbol__('Promise');
        var symbolThen = __symbol__('then');
        var _microTaskQueue = [];
        var _isDrainingMicrotaskQueue = false;
        var nativeMicroTaskQueuePromise;
        function scheduleMicroTask(task) {
            // if we are not running in any task, and there has not been anything scheduled
            // we must bootstrap the initial task creation by manually scheduling the drain
            if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
                // We are not running in Task, so we need to kickstart the microtask queue.
                if (!nativeMicroTaskQueuePromise) {
                    if (global[symbolPromise]) {
                        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                    }
                }
                if (nativeMicroTaskQueuePromise) {
                    var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                    if (!nativeThen) {
                        // native Promise is not patchable, we need to use `then` directly
                        // issue 1078
                        nativeThen = nativeMicroTaskQueuePromise['then'];
                    }
                    nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
                }
                else {
                    global[symbolSetTimeout](drainMicroTaskQueue, 0);
                }
            }
            task && _microTaskQueue.push(task);
        }
        function drainMicroTaskQueue() {
            if (!_isDrainingMicrotaskQueue) {
                _isDrainingMicrotaskQueue = true;
                while (_microTaskQueue.length) {
                    var queue = _microTaskQueue;
                    _microTaskQueue = [];
                    for (var i = 0; i < queue.length; i++) {
                        var task = queue[i];
                        try {
                            task.zone.runTask(task, null, null);
                        }
                        catch (error) {
                            _api.onUnhandledError(error);
                        }
                    }
                }
                _api.microtaskDrainDone();
                _isDrainingMicrotaskQueue = false;
            }
        }
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  BOOTSTRAP
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        var NO_ZONE = { name: 'NO ZONE' };
        var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
        var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
        var patches = {};
        var _api = {
            symbol: __symbol__,
            currentZoneFrame: function () { return _currentZoneFrame; },
            onUnhandledError: noop,
            microtaskDrainDone: noop,
            scheduleMicroTask: scheduleMicroTask,
            showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
            patchEventTarget: function () { return []; },
            patchOnProperties: noop,
            patchMethod: function () { return noop; },
            bindArguments: function () { return []; },
            patchThen: function () { return noop; },
            patchMacroTask: function () { return noop; },
            setNativePromise: function (NativePromise) {
                // sometimes NativePromise.resolve static function
                // is not ready yet, (such as core-js/es6.promise)
                // so we need to check here.
                if (NativePromise && typeof NativePromise.resolve === 'function') {
                    nativeMicroTaskQueuePromise = NativePromise.resolve(0);
                }
            },
            patchEventPrototype: function () { return noop; },
            isIEOrEdge: function () { return false; },
            getGlobalObjects: function () { return undefined; },
            ObjectDefineProperty: function () { return noop; },
            ObjectGetOwnPropertyDescriptor: function () { return undefined; },
            ObjectCreate: function () { return undefined; },
            ArraySlice: function () { return []; },
            patchClass: function () { return noop; },
            wrapWithCurrentZone: function () { return noop; },
            filterProperties: function () { return []; },
            attachOriginToPatched: function () { return noop; },
            _redefineProperty: function () { return noop; },
            patchCallbacks: function () { return noop; }
        };
        var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
        var _currentTask = null;
        var _numberOfNestedTaskFrames = 0;
        function noop() { }
        performanceMeasure('Zone', 'Zone');
        return global['Zone'] = Zone;
    })(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
        var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ObjectDefineProperty = Object.defineProperty;
        function readableObjectToString(obj) {
            if (obj && obj.toString === Object.prototype.toString) {
                var className = obj.constructor && obj.constructor.name;
                return (className ? className : '') + ': ' + JSON.stringify(obj);
            }
            return obj ? obj.toString() : Object.prototype.toString.call(obj);
        }
        var __symbol__ = api.symbol;
        var _uncaughtPromiseErrors = [];
        var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;
        var symbolPromise = __symbol__('Promise');
        var symbolThen = __symbol__('then');
        var creationTrace = '__creationTrace__';
        api.onUnhandledError = function (e) {
            if (api.showUncaughtError()) {
                var rejection = e && e.rejection;
                if (rejection) {
                    console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
                }
                else {
                    console.error(e);
                }
            }
        };
        api.microtaskDrainDone = function () {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () { throw uncaughtPromiseError; });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        };
        var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
        function handleUnhandledRejection(e) {
            api.onUnhandledError(e);
            try {
                var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
                if (typeof handler === 'function') {
                    handler.call(this, e);
                }
            }
            catch (err) {
            }
        }
        function isThenable(value) { return value && value.then; }
        function forwardResolution(value) { return value; }
        function forwardRejection(rejection) { return ZoneAwarePromise.reject(rejection); }
        var symbolState = __symbol__('state');
        var symbolValue = __symbol__('value');
        var symbolFinally = __symbol__('finally');
        var symbolParentPromiseValue = __symbol__('parentPromiseValue');
        var symbolParentPromiseState = __symbol__('parentPromiseState');
        var source = 'Promise.then';
        var UNRESOLVED = null;
        var RESOLVED = true;
        var REJECTED = false;
        var REJECTED_NO_CATCH = 0;
        function makeResolver(promise, state) {
            return function (v) {
                try {
                    resolvePromise(promise, state, v);
                }
                catch (err) {
                    resolvePromise(promise, false, err);
                }
                // Do not return value or you will break the Promise spec.
            };
        }
        var once = function () {
            var wasCalled = false;
            return function wrapper(wrappedFunction) {
                return function () {
                    if (wasCalled) {
                        return;
                    }
                    wasCalled = true;
                    wrappedFunction.apply(null, arguments);
                };
            };
        };
        var TYPE_ERROR = 'Promise resolved with itself';
        var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
        // Promise Resolution
        function resolvePromise(promise, state, value) {
            var onceWrapper = once();
            if (promise === value) {
                throw new TypeError(TYPE_ERROR);
            }
            if (promise[symbolState] === UNRESOLVED) {
                // should only get value.then once based on promise spec.
                var then = null;
                try {
                    if (typeof value === 'object' || typeof value === 'function') {
                        then = value && value.then;
                    }
                }
                catch (err) {
                    onceWrapper(function () { resolvePromise(promise, false, err); })();
                    return promise;
                }
                // if (value instanceof ZoneAwarePromise) {
                if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                    value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                    value[symbolState] !== UNRESOLVED) {
                    clearRejectedNoCatch(value);
                    resolvePromise(promise, value[symbolState], value[symbolValue]);
                }
                else if (state !== REJECTED && typeof then === 'function') {
                    try {
                        then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                    }
                    catch (err) {
                        onceWrapper(function () { resolvePromise(promise, false, err); })();
                    }
                }
                else {
                    promise[symbolState] = state;
                    var queue = promise[symbolValue];
                    promise[symbolValue] = value;
                    if (promise[symbolFinally] === symbolFinally) {
                        // the promise is generated by Promise.prototype.finally
                        if (state === RESOLVED) {
                            // the state is resolved, should ignore the value
                            // and use parent promise value
                            promise[symbolState] = promise[symbolParentPromiseState];
                            promise[symbolValue] = promise[symbolParentPromiseValue];
                        }
                    }
                    // record task information in value when error occurs, so we can
                    // do some additional work such as render longStackTrace
                    if (state === REJECTED && value instanceof Error) {
                        // check if longStackTraceZone is here
                        var trace = Zone.currentTask && Zone.currentTask.data &&
                            Zone.currentTask.data[creationTrace];
                        if (trace) {
                            // only keep the long stack trace into error when in longStackTraceZone
                            ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                        }
                    }
                    for (var i = 0; i < queue.length;) {
                        scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                    }
                    if (queue.length == 0 && state == REJECTED) {
                        promise[symbolState] = REJECTED_NO_CATCH;
                        var uncaughtPromiseError = value;
                        if (!isDisableWrappingUncaughtPromiseRejection) {
                            // If disable wrapping uncaught promise reject
                            // and the rejected value is an Error object,
                            // use the value instead of wrapping it.
                            try {
                                // Here we throws a new Error to print more readable error log
                                // and if the value is not an error, zone.js builds an `Error`
                                // Object here to attach the stack information.
                                throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                                    (value && value.stack ? '\n' + value.stack : ''));
                            }
                            catch (err) {
                                uncaughtPromiseError = err;
                            }
                        }
                        uncaughtPromiseError.rejection = value;
                        uncaughtPromiseError.promise = promise;
                        uncaughtPromiseError.zone = Zone.current;
                        uncaughtPromiseError.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(uncaughtPromiseError);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
            // Resolving an already resolved promise is a noop.
            return promise;
        }
        var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
        function clearRejectedNoCatch(promise) {
            if (promise[symbolState] === REJECTED_NO_CATCH) {
                // if the promise is rejected no catch status
                // and queue.length > 0, means there is a error handler
                // here to handle the rejected promise, we should trigger
                // windows.rejectionhandled eventHandler or nodejs rejectionHandled
                // eventHandler
                try {
                    var handler = Zone[REJECTION_HANDLED_HANDLER];
                    if (handler && typeof handler === 'function') {
                        handler.call(this, { rejection: promise[symbolValue], promise: promise });
                    }
                }
                catch (err) {
                }
                promise[symbolState] = REJECTED;
                for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                    if (promise === _uncaughtPromiseErrors[i].promise) {
                        _uncaughtPromiseErrors.splice(i, 1);
                    }
                }
            }
        }
        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
            clearRejectedNoCatch(promise);
            var promiseState = promise[symbolState];
            var delegate = promiseState ?
                (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
                (typeof onRejected === 'function') ? onRejected : forwardRejection;
            zone.scheduleMicroTask(source, function () {
                try {
                    var parentPromiseValue = promise[symbolValue];
                    var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
                    if (isFinallyPromise) {
                        // if the promise is generated from finally call, keep parent promise's state and value
                        chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                        chainPromise[symbolParentPromiseState] = promiseState;
                    }
                    // should not pass value to finally callback
                    var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                        [] :
                        [parentPromiseValue]);
                    resolvePromise(chainPromise, true, value);
                }
                catch (error) {
                    // if error occurs, should always return this error
                    resolvePromise(chainPromise, false, error);
                }
            }, chainPromise);
        }
        var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
        var noop = function () { };
        var ZoneAwarePromise = /** @class */ (function () {
            function ZoneAwarePromise(executor) {
                var promise = this;
                if (!(promise instanceof ZoneAwarePromise)) {
                    throw new Error('Must be an instanceof Promise.');
                }
                promise[symbolState] = UNRESOLVED;
                promise[symbolValue] = []; // queue;
                try {
                    executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
                }
                catch (error) {
                    resolvePromise(promise, false, error);
                }
            }
            ZoneAwarePromise.toString = function () { return ZONE_AWARE_PROMISE_TO_STRING; };
            ZoneAwarePromise.resolve = function (value) {
                return resolvePromise(new this(null), RESOLVED, value);
            };
            ZoneAwarePromise.reject = function (error) {
                return resolvePromise(new this(null), REJECTED, error);
            };
            ZoneAwarePromise.race = function (values) {
                var resolve;
                var reject;
                var promise = new this(function (res, rej) {
                    resolve = res;
                    reject = rej;
                });
                function onResolve(value) { resolve(value); }
                function onReject(error) { reject(error); }
                for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                    var value = values_1[_i];
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
                return promise;
            };
            ZoneAwarePromise.all = function (values) { return ZoneAwarePromise.allWithCallback(values); };
            ZoneAwarePromise.allSettled = function (values) {
                var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
                return P.allWithCallback(values, {
                    thenCallback: function (value) { return ({ status: 'fulfilled', value: value }); },
                    errorCallback: function (err) { return ({ status: 'rejected', reason: err }); }
                });
            };
            ZoneAwarePromise.allWithCallback = function (values, callback) {
                var resolve;
                var reject;
                var promise = new this(function (res, rej) {
                    resolve = res;
                    reject = rej;
                });
                // Start at 2 to prevent prematurely resolving if .then is called immediately.
                var unresolvedCount = 2;
                var valueIndex = 0;
                var resolvedValues = [];
                var _loop_2 = function (value) {
                    if (!isThenable(value)) {
                        value = this_1.resolve(value);
                    }
                    var curValueIndex = valueIndex;
                    try {
                        value.then(function (value) {
                            resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                            unresolvedCount--;
                            if (unresolvedCount === 0) {
                                resolve(resolvedValues);
                            }
                        }, function (err) {
                            if (!callback) {
                                reject(err);
                            }
                            else {
                                resolvedValues[curValueIndex] = callback.errorCallback(err);
                                unresolvedCount--;
                                if (unresolvedCount === 0) {
                                    resolve(resolvedValues);
                                }
                            }
                        });
                    }
                    catch (thenErr) {
                        reject(thenErr);
                    }
                    unresolvedCount++;
                    valueIndex++;
                };
                var this_1 = this;
                for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                    var value = values_2[_i];
                    _loop_2(value);
                }
                // Make the unresolvedCount zero-based again.
                unresolvedCount -= 2;
                if (unresolvedCount === 0) {
                    resolve(resolvedValues);
                }
                return promise;
            };
            Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
                get: function () { return 'Promise'; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ZoneAwarePromise.prototype, Symbol.species, {
                get: function () { return ZoneAwarePromise; },
                enumerable: true,
                configurable: true
            });
            ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
                var C = this.constructor[Symbol.species];
                if (!C || typeof C !== 'function') {
                    C = this.constructor || ZoneAwarePromise;
                }
                var chainPromise = new C(noop);
                var zone = Zone.current;
                if (this[symbolState] == UNRESOLVED) {
                    this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
                }
                else {
                    scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
                }
                return chainPromise;
            };
            ZoneAwarePromise.prototype.catch = function (onRejected) {
                return this.then(null, onRejected);
            };
            ZoneAwarePromise.prototype.finally = function (onFinally) {
                var C = this.constructor[Symbol.species];
                if (!C || typeof C !== 'function') {
                    C = ZoneAwarePromise;
                }
                var chainPromise = new C(noop);
                chainPromise[symbolFinally] = symbolFinally;
                var zone = Zone.current;
                if (this[symbolState] == UNRESOLVED) {
                    this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
                }
                else {
                    scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
                }
                return chainPromise;
            };
            return ZoneAwarePromise;
        }());
        // Protect against aggressive optimizers dropping seemingly unused properties.
        // E.g. Closure Compiler in advanced mode.
        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
        var NativePromise = global[symbolPromise] = global['Promise'];
        var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
        var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
        if (!desc || desc.configurable) {
            desc && delete desc.writable;
            desc && delete desc.value;
            if (!desc) {
                desc = { configurable: true, enumerable: true };
            }
            desc.get = function () {
                // if we already set ZoneAwarePromise, use patched one
                // otherwise return native one.
                return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
            };
            desc.set = function (NewNativePromise) {
                if (NewNativePromise === ZoneAwarePromise) {
                    // if the NewNativePromise is ZoneAwarePromise
                    // save to global
                    global[ZONE_AWARE_PROMISE] = NewNativePromise;
                }
                else {
                    // if the NewNativePromise is not ZoneAwarePromise
                    // for example: after load zone.js, some library just
                    // set es6-promise to global, if we set it to global
                    // directly, assertZonePatched will fail and angular
                    // will not loaded, so we just set the NewNativePromise
                    // to global[symbolPromise], so the result is just like
                    // we load ES6 Promise before zone.js
                    global[symbolPromise] = NewNativePromise;
                    if (!NewNativePromise.prototype[symbolThen]) {
                        patchThen(NewNativePromise);
                    }
                    api.setNativePromise(NewNativePromise);
                }
            };
            ObjectDefineProperty(global, 'Promise', desc);
        }
        global['Promise'] = ZoneAwarePromise;
        var symbolThenPatched = __symbol__('thenPatched');
        function patchThen(Ctor) {
            var proto = Ctor.prototype;
            var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
            if (prop && (prop.writable === false || !prop.configurable)) {
                // check Ctor.prototype.then propertyDescriptor is writable or not
                // in meteor env, writable is false, we should ignore such case
                return;
            }
            var originalThen = proto.then;
            // Keep a reference to the original method.
            proto[symbolThen] = originalThen;
            Ctor.prototype.then = function (onResolve, onReject) {
                var _this = this;
                var wrapped = new ZoneAwarePromise(function (resolve, reject) { originalThen.call(_this, resolve, reject); });
                return wrapped.then(onResolve, onReject);
            };
            Ctor[symbolThenPatched] = true;
        }
        api.patchThen = patchThen;
        function zoneify(fn) {
            return function () {
                var resultPromise = fn.apply(this, arguments);
                if (resultPromise instanceof ZoneAwarePromise) {
                    return resultPromise;
                }
                var ctor = resultPromise.constructor;
                if (!ctor[symbolThenPatched]) {
                    patchThen(ctor);
                }
                return resultPromise;
            };
        }
        if (NativePromise) {
            patchThen(NativePromise);
            var fetch_1 = global['fetch'];
            if (typeof fetch_1 == 'function') {
                global[api.symbol('fetch')] = fetch_1;
                global['fetch'] = zoneify(fetch_1);
            }
        }
        // This is not part of public API, but it is useful for tests, so we expose it.
        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
        return ZoneAwarePromise;
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Suppress closure compiler errors about unknown 'Zone' variable
     * @fileoverview
     * @suppress {undefinedVars,globalThis,missingRequire}
     */
    /// <reference types="node"/>
    // issue #989, to reduce bundle size, use short name
    /** Object.getOwnPropertyDescriptor */
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    /** Object.defineProperty */
    var ObjectDefineProperty = Object.defineProperty;
    /** Object.getPrototypeOf */
    var ObjectGetPrototypeOf = Object.getPrototypeOf;
    /** Object.create */
    var ObjectCreate = Object.create;
    /** Array.prototype.slice */
    var ArraySlice = Array.prototype.slice;
    /** addEventListener string const */
    var ADD_EVENT_LISTENER_STR = 'addEventListener';
    /** removeEventListener string const */
    var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
    /** zoneSymbol addEventListener */
    var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
    /** zoneSymbol removeEventListener */
    var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
    /** true string const */
    var TRUE_STR = 'true';
    /** false string const */
    var FALSE_STR = 'false';
    /** Zone symbol prefix string const. */
    var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');
    function wrapWithCurrentZone(callback, source) {
        return Zone.current.wrap(callback, source);
    }
    function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
        return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
    }
    var zoneSymbol = Zone.__symbol__;
    var isWindowExists = typeof window !== 'undefined';
    var internalWindow = isWindowExists ? window : undefined;
    var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
    var REMOVE_ATTRIBUTE = 'removeAttribute';
    var NULL_ON_PROP_VALUE = [null];
    function bindArguments(args, source) {
        for (var i = args.length - 1; i >= 0; i--) {
            if (typeof args[i] === 'function') {
                args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
            }
        }
        return args;
    }
    function patchPrototype(prototype, fnNames) {
        var source = prototype.constructor['name'];
        var _loop_3 = function (i) {
            var name_1 = fnNames[i];
            var delegate = prototype[name_1];
            if (delegate) {
                var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
                if (!isPropertyWritable(prototypeDesc)) {
                    return "continue";
                }
                prototype[name_1] = (function (delegate) {
                    var patched = function () {
                        return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                    };
                    attachOriginToPatched(patched, delegate);
                    return patched;
                })(delegate);
            }
        };
        for (var i = 0; i < fnNames.length; i++) {
            _loop_3(i);
        }
    }
    function isPropertyWritable(propertyDesc) {
        if (!propertyDesc) {
            return true;
        }
        if (propertyDesc.writable === false) {
            return false;
        }
        return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
    }
    var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.
    var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
        {}.toString.call(_global.process) === '[object process]');
    var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
    // we are in electron of nw, so we are both browser and nodejs
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.
    var isMix = typeof _global.process !== 'undefined' &&
        {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
        !!(isWindowExists && internalWindow['HTMLElement']);
    var zoneSymbolEventNames = {};
    var wrapFn = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        var eventNameSymbol = zoneSymbolEventNames[event.type];
        if (!eventNameSymbol) {
            eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
        }
        var target = this || event.target || _global;
        var listener = target[eventNameSymbol];
        var result;
        if (isBrowser && target === internalWindow && event.type === 'error') {
            // window.onerror have different signiture
            // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
            // and onerror callback will prevent default when callback return true
            var errorEvent = event;
            result = listener &&
                listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
            if (result === true) {
                event.preventDefault();
            }
        }
        else {
            result = listener && listener.apply(this, arguments);
            if (result != undefined && !result) {
                event.preventDefault();
            }
        }
        return result;
    };
    function patchProperty(obj, prop, prototype) {
        var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
        if (!desc && prototype) {
            // when patch window object, use prototype to check prop exist or not
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
            if (prototypeDesc) {
                desc = { enumerable: true, configurable: true };
            }
        }
        // if the descriptor not exists or is not configurable
        // just return
        if (!desc || !desc.configurable) {
            return;
        }
        var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
        if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
            return;
        }
        // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified
        delete desc.writable;
        delete desc.value;
        var originalDescGet = desc.get;
        var originalDescSet = desc.set;
        // substr(2) cuz 'onclick' -> 'click', etc
        var eventName = prop.substr(2);
        var eventNameSymbol = zoneSymbolEventNames[eventName];
        if (!eventNameSymbol) {
            eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
        }
        desc.set = function (newValue) {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            var target = this;
            if (!target && obj === _global) {
                target = _global;
            }
            if (!target) {
                return;
            }
            var previousValue = target[eventNameSymbol];
            if (previousValue) {
                target.removeEventListener(eventName, wrapFn);
            }
            // issue #978, when onload handler was added before loading zone.js
            // we should remove it with originalDescSet
            if (originalDescSet) {
                originalDescSet.apply(target, NULL_ON_PROP_VALUE);
            }
            if (typeof newValue === 'function') {
                target[eventNameSymbol] = newValue;
                target.addEventListener(eventName, wrapFn, false);
            }
            else {
                target[eventNameSymbol] = null;
            }
        };
        // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null
        desc.get = function () {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            var target = this;
            if (!target && obj === _global) {
                target = _global;
            }
            if (!target) {
                return null;
            }
            var listener = target[eventNameSymbol];
            if (listener) {
                return listener;
            }
            else if (originalDescGet) {
                // result will be null when use inline event attribute,
                // such as <button onclick="func();">OK</button>
                // because the onclick function is internal raw uncompiled handler
                // the onclick will be evaluated when first time event was triggered or
                // the property is accessed, https://github.com/angular/zone.js/issues/525
                // so we should use original native get to retrieve the handler
                var value = originalDescGet && originalDescGet.call(this);
                if (value) {
                    desc.set.call(this, value);
                    if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                        target.removeAttribute(prop);
                    }
                    return value;
                }
            }
            return null;
        };
        ObjectDefineProperty(obj, prop, desc);
        obj[onPropPatchedSymbol] = true;
    }
    function patchOnProperties(obj, properties, prototype) {
        if (properties) {
            for (var i = 0; i < properties.length; i++) {
                patchProperty(obj, 'on' + properties[i], prototype);
            }
        }
        else {
            var onProperties = [];
            for (var prop in obj) {
                if (prop.substr(0, 2) == 'on') {
                    onProperties.push(prop);
                }
            }
            for (var j = 0; j < onProperties.length; j++) {
                patchProperty(obj, onProperties[j], prototype);
            }
        }
    }
    var originalInstanceKey = zoneSymbol('originalInstance');
    // wrap some native API on `window`
    function patchClass(className) {
        var OriginalClass = _global[className];
        if (!OriginalClass)
            return;
        // keep original class in global
        _global[zoneSymbol(className)] = OriginalClass;
        _global[className] = function () {
            var a = bindArguments(arguments, className);
            switch (a.length) {
                case 0:
                    this[originalInstanceKey] = new OriginalClass();
                    break;
                case 1:
                    this[originalInstanceKey] = new OriginalClass(a[0]);
                    break;
                case 2:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                    break;
                case 3:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                    break;
                case 4:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                    break;
                default:
                    throw new Error('Arg list too long.');
            }
        };
        // attach original delegate to patched function
        attachOriginToPatched(_global[className], OriginalClass);
        var instance = new OriginalClass(function () { });
        var prop;
        for (prop in instance) {
            // https://bugs.webkit.org/show_bug.cgi?id=44721
            if (className === 'XMLHttpRequest' && prop === 'responseBlob')
                continue;
            (function (prop) {
                if (typeof instance[prop] === 'function') {
                    _global[className].prototype[prop] = function () {
                        return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                    };
                }
                else {
                    ObjectDefineProperty(_global[className].prototype, prop, {
                        set: function (fn) {
                            if (typeof fn === 'function') {
                                this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                                // keep callback in wrapped function so we can
                                // use it in Function.prototype.toString to return
                                // the native one.
                                attachOriginToPatched(this[originalInstanceKey][prop], fn);
                            }
                            else {
                                this[originalInstanceKey][prop] = fn;
                            }
                        },
                        get: function () { return this[originalInstanceKey][prop]; }
                    });
                }
            }(prop));
        }
        for (prop in OriginalClass) {
            if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
                _global[className][prop] = OriginalClass[prop];
            }
        }
    }
    function copySymbolProperties(src, dest) {
        if (typeof Object.getOwnPropertySymbols !== 'function') {
            return;
        }
        var symbols = Object.getOwnPropertySymbols(src);
        symbols.forEach(function (symbol) {
            var desc = Object.getOwnPropertyDescriptor(src, symbol);
            Object.defineProperty(dest, symbol, {
                get: function () { return src[symbol]; },
                set: function (value) {
                    if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                        // if src[symbol] is not writable or not have a setter, just return
                        return;
                    }
                    src[symbol] = value;
                },
                enumerable: desc ? desc.enumerable : true,
                configurable: desc ? desc.configurable : true
            });
        });
    }
    var shouldCopySymbolProperties = false;
    function patchMethod(target, name, patchFn) {
        var proto = target;
        while (proto && !proto.hasOwnProperty(name)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && target[name]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = target;
        }
        var delegateName = zoneSymbol(name);
        var delegate = null;
        if (proto && !(delegate = proto[delegateName])) {
            delegate = proto[delegateName] = proto[name];
            // check whether proto[name] is writable
            // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
            var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
            if (isPropertyWritable(desc)) {
                var patchDelegate_1 = patchFn(delegate, delegateName, name);
                proto[name] = function () { return patchDelegate_1(this, arguments); };
                attachOriginToPatched(proto[name], delegate);
                if (shouldCopySymbolProperties) {
                    copySymbolProperties(delegate, proto[name]);
                }
            }
        }
        return delegate;
    }
    // TODO: @JiaLiPassion, support cancel task later if necessary
    function patchMacroTask(obj, funcName, metaCreator) {
        var setNative = null;
        function scheduleTask(task) {
            var data = task.data;
            data.args[data.cbIdx] = function () { task.invoke.apply(this, arguments); };
            setNative.apply(data.target, data.args);
            return task;
        }
        setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
            var meta = metaCreator(self, args);
            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
                return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(self, args);
            }
        }; });
    }
    function attachOriginToPatched(patched, original) {
        patched[zoneSymbol('OriginalDelegate')] = original;
    }
    var isDetectedIEOrEdge = false;
    var ieOrEdge = false;
    function isIE() {
        try {
            var ua = internalWindow.navigator.userAgent;
            if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
                return true;
            }
        }
        catch (error) {
        }
        return false;
    }
    function isIEOrEdge() {
        if (isDetectedIEOrEdge) {
            return ieOrEdge;
        }
        isDetectedIEOrEdge = true;
        try {
            var ua = internalWindow.navigator.userAgent;
            if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
                ieOrEdge = true;
            }
        }
        catch (error) {
        }
        return ieOrEdge;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // override Function.prototype.toString to make zone.js patched function
    // look like native function
    Zone.__load_patch('toString', function (global) {
        // patch Func.prototype.toString to let them look like native
        var originalFunctionToString = Function.prototype.toString;
        var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
        var PROMISE_SYMBOL = zoneSymbol('Promise');
        var ERROR_SYMBOL = zoneSymbol('Error');
        var newFunctionToString = function toString() {
            if (typeof this === 'function') {
                var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
                if (originalDelegate) {
                    if (typeof originalDelegate === 'function') {
                        return originalFunctionToString.call(originalDelegate);
                    }
                    else {
                        return Object.prototype.toString.call(originalDelegate);
                    }
                }
                if (this === Promise) {
                    var nativePromise = global[PROMISE_SYMBOL];
                    if (nativePromise) {
                        return originalFunctionToString.call(nativePromise);
                    }
                }
                if (this === Error) {
                    var nativeError = global[ERROR_SYMBOL];
                    if (nativeError) {
                        return originalFunctionToString.call(nativeError);
                    }
                }
            }
            return originalFunctionToString.call(this);
        };
        newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
        Function.prototype.toString = newFunctionToString;
        // patch Object.prototype.toString to let them look like native
        var originalObjectToString = Object.prototype.toString;
        var PROMISE_OBJECT_TO_STRING = '[object Promise]';
        Object.prototype.toString = function () {
            if (this instanceof Promise) {
                return PROMISE_OBJECT_TO_STRING;
            }
            return originalObjectToString.call(this);
        };
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var passiveSupported = false;
    if (typeof window !== 'undefined') {
        try {
            var options = Object.defineProperty({}, 'passive', { get: function () { passiveSupported = true; } });
            window.addEventListener('test', options, options);
            window.removeEventListener('test', options, options);
        }
        catch (err) {
            passiveSupported = false;
        }
    }
    // an identifier to tell ZoneTask do not create a new invoke closure
    var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
        useG: true
    };
    var zoneSymbolEventNames$1 = {};
    var globalSources = {};
    var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
    var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
    function prepareEventNames(eventName, eventNameToString) {
        var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
        var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    function patchEventTarget(_global, apis, patchOptions) {
        var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
        var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
        var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
        var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
        var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
        var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
        var PREPEND_EVENT_LISTENER = 'prependListener';
        var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
        var invokeTask = function (task, target, event) {
            // for better performance, check isRemoved which is set
            // by removeEventListener
            if (task.isRemoved) {
                return;
            }
            var delegate = task.callback;
            if (typeof delegate === 'object' && delegate.handleEvent) {
                // create the bind version of handleEvent when invoke
                task.callback = function (event) { return delegate.handleEvent(event); };
                task.originalDelegate = delegate;
            }
            // invoke static task.invoke
            task.invoke(task, target, [event]);
            var options = task.options;
            if (options && typeof options === 'object' && options.once) {
                // if options.once is true, after invoke once remove listener here
                // only browser need to do this, nodejs eventEmitter will cal removeListener
                // inside EventEmitter.once
                var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
                target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
            }
        };
        // global shared zoneAwareCallback to handle all event callback with capture = false
        var globalZoneAwareCallback = function (event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;
            if (!event) {
                return;
            }
            // event.target is needed for Samsung TV and SourceBuffer
            // || global is needed https://github.com/angular/zone.js/issues/190
            var target = this || event.target || _global;
            var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
            if (tasks) {
                // invoke all tasks which attached to current target with given event.type and capture = false
                // for performance concern, if task.length === 1, just invoke
                if (tasks.length === 1) {
                    invokeTask(tasks[0], target, event);
                }
                else {
                    // https://github.com/angular/zone.js/issues/836
                    // copy the tasks array before invoke, to avoid
                    // the callback will remove itself or other listener
                    var copyTasks = tasks.slice();
                    for (var i = 0; i < copyTasks.length; i++) {
                        if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                            break;
                        }
                        invokeTask(copyTasks[i], target, event);
                    }
                }
            }
        };
        // global shared zoneAwareCallback to handle all event callback with capture = true
        var globalZoneAwareCaptureCallback = function (event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;
            if (!event) {
                return;
            }
            // event.target is needed for Samsung TV and SourceBuffer
            // || global is needed https://github.com/angular/zone.js/issues/190
            var target = this || event.target || _global;
            var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
            if (tasks) {
                // invoke all tasks which attached to current target with given event.type and capture = false
                // for performance concern, if task.length === 1, just invoke
                if (tasks.length === 1) {
                    invokeTask(tasks[0], target, event);
                }
                else {
                    // https://github.com/angular/zone.js/issues/836
                    // copy the tasks array before invoke, to avoid
                    // the callback will remove itself or other listener
                    var copyTasks = tasks.slice();
                    for (var i = 0; i < copyTasks.length; i++) {
                        if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                            break;
                        }
                        invokeTask(copyTasks[i], target, event);
                    }
                }
            }
        };
        function patchEventTargetMethods(obj, patchOptions) {
            if (!obj) {
                return false;
            }
            var useGlobalCallback = true;
            if (patchOptions && patchOptions.useG !== undefined) {
                useGlobalCallback = patchOptions.useG;
            }
            var validateHandler = patchOptions && patchOptions.vh;
            var checkDuplicate = true;
            if (patchOptions && patchOptions.chkDup !== undefined) {
                checkDuplicate = patchOptions.chkDup;
            }
            var returnTarget = false;
            if (patchOptions && patchOptions.rt !== undefined) {
                returnTarget = patchOptions.rt;
            }
            var proto = obj;
            while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
                proto = ObjectGetPrototypeOf(proto);
            }
            if (!proto && obj[ADD_EVENT_LISTENER]) {
                // somehow we did not find it, but we can see it. This happens on IE for Window properties.
                proto = obj;
            }
            if (!proto) {
                return false;
            }
            if (proto[zoneSymbolAddEventListener]) {
                return false;
            }
            var eventNameToString = patchOptions && patchOptions.eventNameToString;
            // a shared global taskData to pass data for scheduleEventTask
            // so we do not need to create a new object just for pass some data
            var taskData = {};
            var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
            var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
                proto[REMOVE_EVENT_LISTENER];
            var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
                proto[LISTENERS_EVENT_LISTENER];
            var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
                proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
            var nativePrependEventListener;
            if (patchOptions && patchOptions.prepend) {
                nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                    proto[patchOptions.prepend];
            }
            /**
             * This util function will build an option object with passive option
             * to handle all possible input from the user.
             */
            function buildEventListenerOptions(options, passive) {
                if (!passiveSupported && typeof options === 'object' && options) {
                    // doesn't support passive but user want to pass an object as options.
                    // this will not work on some old browser, so we just pass a boolean
                    // as useCapture parameter
                    return !!options.capture;
                }
                if (!passiveSupported || !passive) {
                    return options;
                }
                if (typeof options === 'boolean') {
                    return { capture: options, passive: true };
                }
                if (!options) {
                    return { passive: true };
                }
                if (typeof options === 'object' && options.passive !== false) {
                    return Object.assign(Object.assign({}, options), { passive: true });
                }
                return options;
            }
            var customScheduleGlobal = function (task) {
                // if there is already a task for the eventName + capture,
                // just return, because we use the shared globalZoneAwareCallback here.
                if (taskData.isExisting) {
                    return;
                }
                return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
            };
            var customCancelGlobal = function (task) {
                // if task is not marked as isRemoved, this call is directly
                // from Zone.prototype.cancelTask, we should remove the task
                // from tasksList of target first
                if (!task.isRemoved) {
                    var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                    var symbolEventName = void 0;
                    if (symbolEventNames) {
                        symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                    }
                    var existingTasks = symbolEventName && task.target[symbolEventName];
                    if (existingTasks) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            var existingTask = existingTasks[i];
                            if (existingTask === task) {
                                existingTasks.splice(i, 1);
                                // set isRemoved to data for faster invokeTask check
                                task.isRemoved = true;
                                if (existingTasks.length === 0) {
                                    // all tasks for the eventName + capture have gone,
                                    // remove globalZoneAwareCallback and remove the task cache from target
                                    task.allRemoved = true;
                                    task.target[symbolEventName] = null;
                                }
                                break;
                            }
                        }
                    }
                }
                // if all tasks for the eventName + capture have gone,
                // we will really remove the global event callback,
                // if not, return
                if (!task.allRemoved) {
                    return;
                }
                return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
            };
            var customScheduleNonGlobal = function (task) {
                return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
            };
            var customSchedulePrepend = function (task) {
                return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
            };
            var customCancelNonGlobal = function (task) {
                return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
            };
            var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
            var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
            var compareTaskCallbackVsDelegate = function (task, delegate) {
                var typeOfDelegate = typeof delegate;
                return (typeOfDelegate === 'function' && task.callback === delegate) ||
                    (typeOfDelegate === 'object' && task.originalDelegate === delegate);
            };
            var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
            var blackListedEvents = Zone[zoneSymbol('BLACK_LISTED_EVENTS')];
            var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];
            var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
                if (returnTarget === void 0) { returnTarget = false; }
                if (prepend === void 0) { prepend = false; }
                return function () {
                    var target = this || _global;
                    var eventName = arguments[0];
                    if (patchOptions && patchOptions.transferEventName) {
                        eventName = patchOptions.transferEventName(eventName);
                    }
                    var delegate = arguments[1];
                    if (!delegate) {
                        return nativeListener.apply(this, arguments);
                    }
                    if (isNode && eventName === 'uncaughtException') {
                        // don't patch uncaughtException of nodejs to prevent endless loop
                        return nativeListener.apply(this, arguments);
                    }
                    // don't create the bind delegate function for handleEvent
                    // case here to improve addEventListener performance
                    // we will create the bind delegate when invoke
                    var isHandleEvent = false;
                    if (typeof delegate !== 'function') {
                        if (!delegate.handleEvent) {
                            return nativeListener.apply(this, arguments);
                        }
                        isHandleEvent = true;
                    }
                    if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                        return;
                    }
                    var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
                    var options = buildEventListenerOptions(arguments[2], passive);
                    if (blackListedEvents) {
                        // check black list
                        for (var i = 0; i < blackListedEvents.length; i++) {
                            if (eventName === blackListedEvents[i]) {
                                if (passive) {
                                    return nativeListener.call(target, eventName, delegate, options);
                                }
                                else {
                                    return nativeListener.apply(this, arguments);
                                }
                            }
                        }
                    }
                    var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
                    var once = options && typeof options === 'object' ? options.once : false;
                    var zone = Zone.current;
                    var symbolEventNames = zoneSymbolEventNames$1[eventName];
                    if (!symbolEventNames) {
                        prepareEventNames(eventName, eventNameToString);
                        symbolEventNames = zoneSymbolEventNames$1[eventName];
                    }
                    var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                    var existingTasks = target[symbolEventName];
                    var isExisting = false;
                    if (existingTasks) {
                        // already have task registered
                        isExisting = true;
                        if (checkDuplicate) {
                            for (var i = 0; i < existingTasks.length; i++) {
                                if (compare(existingTasks[i], delegate)) {
                                    // same callback, same capture, same event name, just return
                                    return;
                                }
                            }
                        }
                    }
                    else {
                        existingTasks = target[symbolEventName] = [];
                    }
                    var source;
                    var constructorName = target.constructor['name'];
                    var targetSource = globalSources[constructorName];
                    if (targetSource) {
                        source = targetSource[eventName];
                    }
                    if (!source) {
                        source = constructorName + addSource +
                            (eventNameToString ? eventNameToString(eventName) : eventName);
                    }
                    // do not create a new object as task.data to pass those things
                    // just use the global shared one
                    taskData.options = options;
                    if (once) {
                        // if addEventListener with once options, we don't pass it to
                        // native addEventListener, instead we keep the once setting
                        // and handle ourselves.
                        taskData.options.once = false;
                    }
                    taskData.target = target;
                    taskData.capture = capture;
                    taskData.eventName = eventName;
                    taskData.isExisting = isExisting;
                    var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                    // keep taskData into data to allow onScheduleEventTask to access the task information
                    if (data) {
                        data.taskData = taskData;
                    }
                    var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                    // should clear taskData.target to avoid memory leak
                    // issue, https://github.com/angular/angular/issues/20442
                    taskData.target = null;
                    // need to clear up taskData because it is a global object
                    if (data) {
                        data.taskData = null;
                    }
                    // have to save those information to task in case
                    // application may call task.zone.cancelTask() directly
                    if (once) {
                        options.once = true;
                    }
                    if (!(!passiveSupported && typeof task.options === 'boolean')) {
                        // if not support passive, and we pass an option object
                        // to addEventListener, we should save the options to task
                        task.options = options;
                    }
                    task.target = target;
                    task.capture = capture;
                    task.eventName = eventName;
                    if (isHandleEvent) {
                        // save original delegate for compare to check duplicate
                        task.originalDelegate = delegate;
                    }
                    if (!prepend) {
                        existingTasks.push(task);
                    }
                    else {
                        existingTasks.unshift(task);
                    }
                    if (returnTarget) {
                        return target;
                    }
                };
            };
            proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
            if (nativePrependEventListener) {
                proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
            }
            proto[REMOVE_EVENT_LISTENER] = function () {
                var target = this || _global;
                var eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                }
                var options = arguments[2];
                var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeRemoveEventListener.apply(this, arguments);
                }
                if (validateHandler &&
                    !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                    return;
                }
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (compare(existingTask, delegate)) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            existingTask.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                existingTask.allRemoved = true;
                                target[symbolEventName] = null;
                                // in the target, we have an event listener which is added by on_property
                                // such as target.onclick = function() {}, so we need to clear this internal
                                // property too if all delegates all removed
                                if (typeof eventName === 'string') {
                                    var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                                    target[onPropertySymbol] = null;
                                }
                            }
                            existingTask.zone.cancelTask(existingTask);
                            if (returnTarget) {
                                return target;
                            }
                            return;
                        }
                    }
                }
                // issue 930, didn't find the event name or callback
                // from zone kept existingTasks, the callback maybe
                // added outside of zone, we need to call native removeEventListener
                // to try to remove it.
                return nativeRemoveEventListener.apply(this, arguments);
            };
            proto[LISTENERS_EVENT_LISTENER] = function () {
                var target = this || _global;
                var eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                }
                var listeners = [];
                var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
                for (var i = 0; i < tasks.length; i++) {
                    var task = tasks[i];
                    var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                    listeners.push(delegate);
                }
                return listeners;
            };
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
                var target = this || _global;
                var eventName = arguments[0];
                if (!eventName) {
                    var keys = Object.keys(target);
                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                        var evtName = match && match[1];
                        // in nodejs EventEmitter, removeListener event is
                        // used for monitoring the removeListener call,
                        // so just keep removeListener eventListener until
                        // all other eventListeners are removed
                        if (evtName && evtName !== 'removeListener') {
                            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                        }
                    }
                    // remove removeListener listener finally
                    this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
                }
                else {
                    if (patchOptions && patchOptions.transferEventName) {
                        eventName = patchOptions.transferEventName(eventName);
                    }
                    var symbolEventNames = zoneSymbolEventNames$1[eventName];
                    if (symbolEventNames) {
                        var symbolEventName = symbolEventNames[FALSE_STR];
                        var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                        var tasks = target[symbolEventName];
                        var captureTasks = target[symbolCaptureEventName];
                        if (tasks) {
                            var removeTasks = tasks.slice();
                            for (var i = 0; i < removeTasks.length; i++) {
                                var task = removeTasks[i];
                                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                            }
                        }
                        if (captureTasks) {
                            var removeTasks = captureTasks.slice();
                            for (var i = 0; i < removeTasks.length; i++) {
                                var task = removeTasks[i];
                                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                            }
                        }
                    }
                }
                if (returnTarget) {
                    return this;
                }
            };
            // for native toString patch
            attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
            attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
            if (nativeRemoveAllListeners) {
                attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
            }
            if (nativeListeners) {
                attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
            }
            return true;
        }
        var results = [];
        for (var i = 0; i < apis.length; i++) {
            results[i] = patchEventTargetMethods(apis[i], patchOptions);
        }
        return results;
    }
    function findEventTasks(target, eventName) {
        if (!eventName) {
            var foundTasks = [];
            for (var prop in target) {
                var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                var evtName = match && match[1];
                if (evtName && (!eventName || evtName === eventName)) {
                    var tasks = target[prop];
                    if (tasks) {
                        for (var i = 0; i < tasks.length; i++) {
                            foundTasks.push(tasks[i]);
                        }
                    }
                }
            }
            return foundTasks;
        }
        var symbolEventName = zoneSymbolEventNames$1[eventName];
        if (!symbolEventName) {
            prepareEventNames(eventName);
            symbolEventName = zoneSymbolEventNames$1[eventName];
        }
        var captureFalseTasks = target[symbolEventName[FALSE_STR]];
        var captureTrueTasks = target[symbolEventName[TRUE_STR]];
        if (!captureFalseTasks) {
            return captureTrueTasks ? captureTrueTasks.slice() : [];
        }
        else {
            return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) :
                captureFalseTasks.slice();
        }
    }
    function patchEventPrototype(global, api) {
        var Event = global['Event'];
        if (Event && Event.prototype) {
            api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
                self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
                // we need to call the native stopImmediatePropagation
                // in case in some hybrid application, some part of
                // application will be controlled by zone, some are not
                delegate && delegate.apply(self, args);
            }; });
        }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function patchCallbacks(api, target, targetName, method, callbacks) {
        var symbol = Zone.__symbol__(method);
        if (target[symbol]) {
            return;
        }
        var nativeDelegate = target[symbol] = target[method];
        target[method] = function (name, opts, options) {
            if (opts && opts.prototype) {
                callbacks.forEach(function (callback) {
                    var source = targetName + "." + method + "::" + callback;
                    var prototype = opts.prototype;
                    if (prototype.hasOwnProperty(callback)) {
                        var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                        if (descriptor && descriptor.value) {
                            descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                            api._redefineProperty(opts.prototype, callback, descriptor);
                        }
                        else if (prototype[callback]) {
                            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                        }
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                });
            }
            return nativeDelegate.call(target, name, opts, options);
        };
        api.attachOriginToPatched(target[method], nativeDelegate);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var globalEventHandlersEventNames = [
        'abort',
        'animationcancel',
        'animationend',
        'animationiteration',
        'auxclick',
        'beforeinput',
        'blur',
        'cancel',
        'canplay',
        'canplaythrough',
        'change',
        'compositionstart',
        'compositionupdate',
        'compositionend',
        'cuechange',
        'click',
        'close',
        'contextmenu',
        'curechange',
        'dblclick',
        'drag',
        'dragend',
        'dragenter',
        'dragexit',
        'dragleave',
        'dragover',
        'drop',
        'durationchange',
        'emptied',
        'ended',
        'error',
        'focus',
        'focusin',
        'focusout',
        'gotpointercapture',
        'input',
        'invalid',
        'keydown',
        'keypress',
        'keyup',
        'load',
        'loadstart',
        'loadeddata',
        'loadedmetadata',
        'lostpointercapture',
        'mousedown',
        'mouseenter',
        'mouseleave',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'mousewheel',
        'orientationchange',
        'pause',
        'play',
        'playing',
        'pointercancel',
        'pointerdown',
        'pointerenter',
        'pointerleave',
        'pointerlockchange',
        'mozpointerlockchange',
        'webkitpointerlockerchange',
        'pointerlockerror',
        'mozpointerlockerror',
        'webkitpointerlockerror',
        'pointermove',
        'pointout',
        'pointerover',
        'pointerup',
        'progress',
        'ratechange',
        'reset',
        'resize',
        'scroll',
        'seeked',
        'seeking',
        'select',
        'selectionchange',
        'selectstart',
        'show',
        'sort',
        'stalled',
        'submit',
        'suspend',
        'timeupdate',
        'volumechange',
        'touchcancel',
        'touchmove',
        'touchstart',
        'touchend',
        'transitioncancel',
        'transitionend',
        'waiting',
        'wheel'
    ];
    var documentEventNames = [
        'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
        'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
        'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
        'visibilitychange', 'resume'
    ];
    var windowEventNames = [
        'absolutedeviceorientation',
        'afterinput',
        'afterprint',
        'appinstalled',
        'beforeinstallprompt',
        'beforeprint',
        'beforeunload',
        'devicelight',
        'devicemotion',
        'deviceorientation',
        'deviceorientationabsolute',
        'deviceproximity',
        'hashchange',
        'languagechange',
        'message',
        'mozbeforepaint',
        'offline',
        'online',
        'paint',
        'pageshow',
        'pagehide',
        'popstate',
        'rejectionhandled',
        'storage',
        'unhandledrejection',
        'unload',
        'userproximity',
        'vrdisplayconnected',
        'vrdisplaydisconnected',
        'vrdisplaypresentchange'
    ];
    var htmlElementEventNames = [
        'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
        'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
        'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
    ];
    var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
    var ieElementEventNames = [
        'activate',
        'afterupdate',
        'ariarequest',
        'beforeactivate',
        'beforedeactivate',
        'beforeeditfocus',
        'beforeupdate',
        'cellchange',
        'controlselect',
        'dataavailable',
        'datasetchanged',
        'datasetcomplete',
        'errorupdate',
        'filterchange',
        'layoutcomplete',
        'losecapture',
        'move',
        'moveend',
        'movestart',
        'propertychange',
        'resizeend',
        'resizestart',
        'rowenter',
        'rowexit',
        'rowsdelete',
        'rowsinserted',
        'command',
        'compassneedscalibration',
        'deactivate',
        'help',
        'mscontentzoom',
        'msmanipulationstatechanged',
        'msgesturechange',
        'msgesturedoubletap',
        'msgestureend',
        'msgesturehold',
        'msgesturestart',
        'msgesturetap',
        'msgotpointercapture',
        'msinertiastart',
        'mslostpointercapture',
        'mspointercancel',
        'mspointerdown',
        'mspointerenter',
        'mspointerhover',
        'mspointerleave',
        'mspointermove',
        'mspointerout',
        'mspointerover',
        'mspointerup',
        'pointerout',
        'mssitemodejumplistitemremoved',
        'msthumbnailclick',
        'stop',
        'storagecommit'
    ];
    var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
    var formEventNames = ['autocomplete', 'autocompleteerror'];
    var detailEventNames = ['toggle'];
    var frameEventNames = ['load'];
    var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
    var marqueeEventNames = ['bounce', 'finish', 'start'];
    var XMLHttpRequestEventNames = [
        'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
        'readystatechange'
    ];
    var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
    var websocketEventNames = ['close', 'error', 'open', 'message'];
    var workerEventNames = ['error', 'message'];
    var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
    function filterProperties(target, onProperties, ignoreProperties) {
        if (!ignoreProperties || ignoreProperties.length === 0) {
            return onProperties;
        }
        var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
        if (!tip || tip.length === 0) {
            return onProperties;
        }
        var targetIgnoreProperties = tip[0].ignoreProperties;
        return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
    }
    function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
        // check whether target is available, sometimes target will be undefined
        // because different browser or some 3rd party plugin.
        if (!target) {
            return;
        }
        var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
        patchOnProperties(target, filteredProperties, prototype);
    }
    function propertyDescriptorPatch(api, _global) {
        if (isNode && !isMix) {
            return;
        }
        if (Zone[api.symbol('patchEvents')]) {
            // events are already been patched by legacy patch.
            return;
        }
        var supportsWebSocket = typeof WebSocket !== 'undefined';
        var ignoreProperties = _global['__Zone_ignore_on_properties'];
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow_1 = window;
            var ignoreErrorProperties = isIE ? [{ target: internalWindow_1, ignoreProperties: ['error'] }] : [];
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow_1, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow_1));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow_1['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow_1['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow_1['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow_1['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        var XMLHttpRequest = _global['XMLHttpRequest'];
        if (XMLHttpRequest) {
            // XMLHttpRequest is not available in ServiceWorker, so we need to check here
            patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('util', function (global, Zone, api) {
        api.patchOnProperties = patchOnProperties;
        api.patchMethod = patchMethod;
        api.bindArguments = bindArguments;
        api.patchMacroTask = patchMacroTask;
        // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
        // define which events will not be patched by `Zone.js`.
        // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
        // the name consistent with angular repo.
        // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
        // backwards compatibility.
        var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
        var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
        if (global[SYMBOL_UNPATCHED_EVENTS]) {
            global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
        }
        if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
            Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
                global[SYMBOL_BLACK_LISTED_EVENTS];
        }
        api.patchEventPrototype = patchEventPrototype;
        api.patchEventTarget = patchEventTarget;
        api.isIEOrEdge = isIEOrEdge;
        api.ObjectDefineProperty = ObjectDefineProperty;
        api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
        api.ObjectCreate = ObjectCreate;
        api.ArraySlice = ArraySlice;
        api.patchClass = patchClass;
        api.wrapWithCurrentZone = wrapWithCurrentZone;
        api.filterProperties = filterProperties;
        api.attachOriginToPatched = attachOriginToPatched;
        api._redefineProperty = Object.defineProperty;
        api.patchCallbacks = patchCallbacks;
        api.getGlobalObjects = function () { return ({ globalSources: globalSources, zoneSymbolEventNames: zoneSymbolEventNames$1, eventNames: eventNames, isBrowser: isBrowser, isMix: isMix, isNode: isNode, TRUE_STR: TRUE_STR,
            FALSE_STR: FALSE_STR, ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX, ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR }); };
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /*
     * This is necessary for Chrome and Chrome mobile, to enable
     * things like redefining `createdCallback` on an element.
     */
    var zoneSymbol$1;
    var _defineProperty;
    var _getOwnPropertyDescriptor;
    var _create;
    var unconfigurablesKey;
    function propertyPatch() {
        zoneSymbol$1 = Zone.__symbol__;
        _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
        _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
            Object.getOwnPropertyDescriptor;
        _create = Object.create;
        unconfigurablesKey = zoneSymbol$1('unconfigurables');
        Object.defineProperty = function (obj, prop, desc) {
            if (isUnconfigurable(obj, prop)) {
                throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
            }
            var originalConfigurableFlag = desc.configurable;
            if (prop !== 'prototype') {
                desc = rewriteDescriptor(obj, prop, desc);
            }
            return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
        };
        Object.defineProperties = function (obj, props) {
            Object.keys(props).forEach(function (prop) { Object.defineProperty(obj, prop, props[prop]); });
            return obj;
        };
        Object.create = function (obj, proto) {
            if (typeof proto === 'object' && !Object.isFrozen(proto)) {
                Object.keys(proto).forEach(function (prop) {
                    proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
                });
            }
            return _create(obj, proto);
        };
        Object.getOwnPropertyDescriptor = function (obj, prop) {
            var desc = _getOwnPropertyDescriptor(obj, prop);
            if (desc && isUnconfigurable(obj, prop)) {
                desc.configurable = false;
            }
            return desc;
        };
    }
    function _redefineProperty(obj, prop, desc) {
        var originalConfigurableFlag = desc.configurable;
        desc = rewriteDescriptor(obj, prop, desc);
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    }
    function isUnconfigurable(obj, prop) {
        return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
    }
    function rewriteDescriptor(obj, prop, desc) {
        // issue-927, if the desc is frozen, don't try to change the desc
        if (!Object.isFrozen(desc)) {
            desc.configurable = true;
        }
        if (!desc.configurable) {
            // issue-927, if the obj is frozen, don't try to set the desc to obj
            if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
                _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
            }
            if (obj[unconfigurablesKey]) {
                obj[unconfigurablesKey][prop] = true;
            }
        }
        return desc;
    }
    function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
        try {
            return _defineProperty(obj, prop, desc);
        }
        catch (error) {
            if (desc.configurable) {
                // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
                // retry with the original flag value
                if (typeof originalConfigurableFlag == 'undefined') {
                    delete desc.configurable;
                }
                else {
                    desc.configurable = originalConfigurableFlag;
                }
                try {
                    return _defineProperty(obj, prop, desc);
                }
                catch (error) {
                    var descJson = null;
                    try {
                        descJson = JSON.stringify(desc);
                    }
                    catch (error) {
                        descJson = desc.toString();
                    }
                    console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
                }
            }
            else {
                throw error;
            }
        }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function eventTargetLegacyPatch(_global, api) {
        var _a = api.getGlobalObjects(), eventNames = _a.eventNames, globalSources = _a.globalSources, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
        var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
        var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
            .split(',');
        var EVENT_TARGET = 'EventTarget';
        var apis = [];
        var isWtf = _global['wtf'];
        var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
        if (isWtf) {
            // Workaround for: https://github.com/google/tracing-framework/issues/555
            apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
        }
        else if (_global[EVENT_TARGET]) {
            apis.push(EVENT_TARGET);
        }
        else {
            // Note: EventTarget is not available in all browsers,
            // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
            apis = NO_EVENT_TARGET;
        }
        var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
        var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
        var ieOrEdge = api.isIEOrEdge();
        var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
        var FUNCTION_WRAPPER = '[object FunctionWrapper]';
        var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
        var pointerEventsMap = {
            'MSPointerCancel': 'pointercancel',
            'MSPointerDown': 'pointerdown',
            'MSPointerEnter': 'pointerenter',
            'MSPointerHover': 'pointerhover',
            'MSPointerLeave': 'pointerleave',
            'MSPointerMove': 'pointermove',
            'MSPointerOut': 'pointerout',
            'MSPointerOver': 'pointerover',
            'MSPointerUp': 'pointerup'
        };
        //  predefine all __zone_symbol__ + eventName + true/false string
        for (var i = 0; i < eventNames.length; i++) {
            var eventName = eventNames[i];
            var falseEventName = eventName + FALSE_STR;
            var trueEventName = eventName + TRUE_STR;
            var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
            var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
            zoneSymbolEventNames[eventName] = {};
            zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
            zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }
        //  predefine all task.source string
        for (var i = 0; i < WTF_ISSUE_555_ARRAY.length; i++) {
            var target = WTF_ISSUE_555_ARRAY[i];
            var targets = globalSources[target] = {};
            for (var j = 0; j < eventNames.length; j++) {
                var eventName = eventNames[j];
                targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
            }
        }
        var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
            if (!isDisableIECheck && ieOrEdge) {
                if (isEnableCrossContextCheck) {
                    try {
                        var testString = delegate.toString();
                        if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                            nativeDelegate.apply(target, args);
                            return false;
                        }
                    }
                    catch (error) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                else {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
            }
            else if (isEnableCrossContextCheck) {
                try {
                    delegate.toString();
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            return true;
        };
        var apiTypes = [];
        for (var i = 0; i < apis.length; i++) {
            var type = _global[apis[i]];
            apiTypes.push(type && type.prototype);
        }
        // vh is validateHandler to check event handler
        // is valid or not(for security check)
        api.patchEventTarget(_global, apiTypes, {
            vh: checkIEAndCrossContext,
            transferEventName: function (eventName) {
                var pointerEventName = pointerEventsMap[eventName];
                return pointerEventName || eventName;
            }
        });
        Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
        return true;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // we have to patch the instance since the proto is non-configurable
    function apply(api, _global) {
        var _a = api.getGlobalObjects(), ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;
        var WS = _global.WebSocket;
        // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
        // On older Chrome, no need since EventTarget was already patched
        if (!_global.EventTarget) {
            api.patchEventTarget(_global, [WS.prototype]);
        }
        _global.WebSocket = function (x, y) {
            var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
            var proxySocket;
            var proxySocketProto;
            // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
            var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
            if (onmessageDesc && onmessageDesc.configurable === false) {
                proxySocket = api.ObjectCreate(socket);
                // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
                // but proxySocket not, so we will keep socket as prototype and pass it to
                // patchOnProperties method
                proxySocketProto = socket;
                [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                    proxySocket[propName] = function () {
                        var args = api.ArraySlice.call(arguments);
                        if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                            var eventName = args.length > 0 ? args[0] : undefined;
                            if (eventName) {
                                var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                                socket[propertySymbol] = proxySocket[propertySymbol];
                            }
                        }
                        return socket[propName].apply(socket, args);
                    };
                });
            }
            else {
                // we can patch the real socket
                proxySocket = socket;
            }
            api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
            return proxySocket;
        };
        var globalWebSocket = _global['WebSocket'];
        for (var prop in WS) {
            globalWebSocket[prop] = WS[prop];
        }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function propertyDescriptorLegacyPatch(api, _global) {
        var _a = api.getGlobalObjects(), isNode = _a.isNode, isMix = _a.isMix;
        if (isNode && !isMix) {
            return;
        }
        if (!canPatchViaPropertyDescriptor(api, _global)) {
            var supportsWebSocket = typeof WebSocket !== 'undefined';
            // Safari, Android browsers (Jelly Bean)
            patchViaCapturingAllTheEvents(api);
            api.patchClass('XMLHttpRequest');
            if (supportsWebSocket) {
                apply(api, _global);
            }
            Zone[api.symbol('patchEvents')] = true;
        }
    }
    function canPatchViaPropertyDescriptor(api, _global) {
        var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
        if ((isBrowser || isMix) &&
            !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
            typeof Element !== 'undefined') {
            // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
            // IDL interface attributes are not configurable
            var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
            if (desc && !desc.configurable)
                return false;
            // try to use onclick to detect whether we can patch via propertyDescriptor
            // because XMLHttpRequest is not available in service worker
            if (desc) {
                api.ObjectDefineProperty(Element.prototype, 'onclick', { enumerable: true, configurable: true, get: function () { return true; } });
                var div = document.createElement('div');
                var result = !!div.onclick;
                api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
                return result;
            }
        }
        var XMLHttpRequest = _global['XMLHttpRequest'];
        if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return false;
        }
        var ON_READY_STATE_CHANGE = 'onreadystatechange';
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
        // add enumerable and configurable here because in opera
        // by default XMLHttpRequest.prototype.onreadystatechange is undefined
        // without adding enumerable and configurable will cause onreadystatechange
        // non-configurable
        // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
        // we should set a real desc instead a fake one
        if (xhrDesc) {
            api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, { enumerable: true, configurable: true, get: function () { return true; } });
            var req = new XMLHttpRequest();
            var result = !!req.onreadystatechange;
            // restore original desc
            api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
            return result;
        }
        else {
            var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
            api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
                enumerable: true,
                configurable: true,
                get: function () { return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1]; },
                set: function (value) { this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value; }
            });
            var req = new XMLHttpRequest();
            var detectFunc = function () { };
            req.onreadystatechange = detectFunc;
            var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
            req.onreadystatechange = null;
            return result;
        }
    }
    // Whenever any eventListener fires, we check the eventListener target and all parents
    // for `onwhatever` properties and replace them with zone-bound functions
    // - Chrome (for now)
    function patchViaCapturingAllTheEvents(api) {
        var eventNames = api.getGlobalObjects().eventNames;
        var unboundKey = api.symbol('unbound');
        var _loop_4 = function (i) {
            var property = eventNames[i];
            var onproperty = 'on' + property;
            self.addEventListener(property, function (event) {
                var elt = event.target, bound, source;
                if (elt) {
                    source = elt.constructor['name'] + '.' + onproperty;
                }
                else {
                    source = 'unknown.' + onproperty;
                }
                while (elt) {
                    if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                        bound = api.wrapWithCurrentZone(elt[onproperty], source);
                        bound[unboundKey] = elt[onproperty];
                        elt[onproperty] = bound;
                    }
                    elt = elt.parentElement;
                }
            }, true);
        };
        for (var i = 0; i < eventNames.length; i++) {
            _loop_4(i);
        }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function registerElementPatch(_global, api) {
        var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
        if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
            return;
        }
        var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    (function (_global) {
        var symbolPrefix = _global['__Zone_symbol_prefix'] || '__zone_symbol__';
        function __symbol__(name) { return symbolPrefix + name; }
        _global[__symbol__('legacyPatch')] = function () {
            var Zone = _global['Zone'];
            Zone.__load_patch('defineProperty', function (global, Zone, api) {
                api._redefineProperty = _redefineProperty;
                propertyPatch();
            });
            Zone.__load_patch('registerElement', function (global, Zone, api) {
                registerElementPatch(global, api);
            });
            Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
                eventTargetLegacyPatch(global, api);
                propertyDescriptorLegacyPatch(api, global);
            });
        };
    })(typeof window !== 'undefined' ?
        window :
        typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var taskSymbol = zoneSymbol('zoneTask');
    function patchTimer(window, setName, cancelName, nameSuffix) {
        var setNative = null;
        var clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        var tasksByHandleId = {};
        function scheduleTask(task) {
            var data = task.data;
            function timer() {
                try {
                    task.invoke.apply(this, arguments);
                }
                finally {
                    // issue-934, task will be cancelled
                    // even it is a periodic task such as
                    // setInterval
                    if (!(task.data && task.data.isPeriodic)) {
                        if (typeof data.handleId === 'number') {
                            // in non-nodejs env, we remove timerId
                            // from local cache
                            delete tasksByHandleId[data.handleId];
                        }
                        else if (data.handleId) {
                            // Node returns complex objects as handleIds
                            // we remove task reference from timer object
                            data.handleId[taskSymbol] = null;
                        }
                    }
                }
            }
            data.args[0] = timer;
            data.handleId = setNative.apply(window, data.args);
            return task;
        }
        function clearTask(task) { return clearNative(task.data.handleId); }
        setNative =
            patchMethod(window, setName, function (delegate) { return function (self, args) {
                if (typeof args[0] === 'function') {
                    var options = {
                        isPeriodic: nameSuffix === 'Interval',
                        delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                            undefined,
                        args: args
                    };
                    var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                    if (!task) {
                        return task;
                    }
                    // Node.js must additionally support the ref and unref functions.
                    var handle = task.data.handleId;
                    if (typeof handle === 'number') {
                        // for non nodejs env, we save handleId: task
                        // mapping in local cache for clearTimeout
                        tasksByHandleId[handle] = task;
                    }
                    else if (handle) {
                        // for nodejs env, we save task
                        // reference in timerId Object for clearTimeout
                        handle[taskSymbol] = task;
                    }
                    // check whether handle is null, because some polyfill or browser
                    // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                    if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                        typeof handle.unref === 'function') {
                        task.ref = handle.ref.bind(handle);
                        task.unref = handle.unref.bind(handle);
                    }
                    if (typeof handle === 'number' || handle) {
                        return handle;
                    }
                    return task;
                }
                else {
                    // cause an error by calling it directly.
                    return delegate.apply(window, args);
                }
            }; });
        clearNative =
            patchMethod(window, cancelName, function (delegate) { return function (self, args) {
                var id = args[0];
                var task;
                if (typeof id === 'number') {
                    // non nodejs env.
                    task = tasksByHandleId[id];
                }
                else {
                    // nodejs env.
                    task = id && id[taskSymbol];
                    // other environments.
                    if (!task) {
                        task = id;
                    }
                }
                if (task && typeof task.type === 'string') {
                    if (task.state !== 'notScheduled' &&
                        (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                        if (typeof id === 'number') {
                            delete tasksByHandleId[id];
                        }
                        else if (id) {
                            id[taskSymbol] = null;
                        }
                        // Do not cancel already canceled functions
                        task.zone.cancelTask(task);
                    }
                }
                else {
                    // cause an error by calling it directly.
                    delegate.apply(window, args);
                }
            }; });
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function patchCustomElements(_global, api) {
        var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
        if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
            return;
        }
        var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function eventTargetPatch(_global, api) {
        if (Zone[api.symbol('patchEventTarget')]) {
            // EventTarget is already patched.
            return;
        }
        var _a = api.getGlobalObjects(), eventNames = _a.eventNames, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
        //  predefine all __zone_symbol__ + eventName + true/false string
        for (var i = 0; i < eventNames.length; i++) {
            var eventName = eventNames[i];
            var falseEventName = eventName + FALSE_STR;
            var trueEventName = eventName + TRUE_STR;
            var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
            var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
            zoneSymbolEventNames[eventName] = {};
            zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
            zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }
        var EVENT_TARGET = _global['EventTarget'];
        if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
            return;
        }
        api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
        return true;
    }
    function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('legacy', function (global) {
        var legacyPatch = global[Zone.__symbol__('legacyPatch')];
        if (legacyPatch) {
            legacyPatch();
        }
    });
    Zone.__load_patch('timers', function (global) {
        var set = 'set';
        var clear = 'clear';
        patchTimer(global, set, clear, 'Timeout');
        patchTimer(global, set, clear, 'Interval');
        patchTimer(global, set, clear, 'Immediate');
    });
    Zone.__load_patch('requestAnimationFrame', function (global) {
        patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
    });
    Zone.__load_patch('blocking', function (global, Zone) {
        var blockingMethods = ['alert', 'prompt', 'confirm'];
        for (var i = 0; i < blockingMethods.length; i++) {
            var name_2 = blockingMethods[i];
            patchMethod(global, name_2, function (delegate, symbol, name) {
                return function (s, args) {
                    return Zone.current.run(delegate, global, args, name);
                };
            });
        }
    });
    Zone.__load_patch('EventTarget', function (global, Zone, api) {
        patchEvent(global, api);
        eventTargetPatch(global, api);
        // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
        var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
            api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
        }
        patchClass('MutationObserver');
        patchClass('WebKitMutationObserver');
        patchClass('IntersectionObserver');
        patchClass('FileReader');
    });
    Zone.__load_patch('on_property', function (global, Zone, api) {
        propertyDescriptorPatch(api, global);
    });
    Zone.__load_patch('customElements', function (global, Zone, api) {
        patchCustomElements(global, api);
    });
    Zone.__load_patch('XHR', function (global, Zone) {
        // Treat XMLHttpRequest as a macrotask.
        patchXHR(global);
        var XHR_TASK = zoneSymbol('xhrTask');
        var XHR_SYNC = zoneSymbol('xhrSync');
        var XHR_LISTENER = zoneSymbol('xhrListener');
        var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
        var XHR_URL = zoneSymbol('xhrURL');
        var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
        function patchXHR(window) {
            var XMLHttpRequest = window['XMLHttpRequest'];
            if (!XMLHttpRequest) {
                // XMLHttpRequest is not available in service worker
                return;
            }
            var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
            function findPendingTask(target) { return target[XHR_TASK]; }
            var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            if (!oriAddListener) {
                var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
                if (XMLHttpRequestEventTarget_1) {
                    var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                    oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                    oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                }
            }
            var READY_STATE_CHANGE = 'readystatechange';
            var SCHEDULED = 'scheduled';
            function scheduleTask(task) {
                var data = task.data;
                var target = data.target;
                target[XHR_SCHEDULED] = false;
                target[XHR_ERROR_BEFORE_SCHEDULED] = false;
                // remove existing event listener
                var listener = target[XHR_LISTENER];
                if (!oriAddListener) {
                    oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                    oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                }
                if (listener) {
                    oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
                }
                var newListener = target[XHR_LISTENER] = function () {
                    if (target.readyState === target.DONE) {
                        // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                        // readyState=4 multiple times, so we need to check task state here
                        if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                            // check whether the xhr has registered onload listener
                            // if that is the case, the task should invoke after all
                            // onload listeners finish.
                            var loadTasks = target[Zone.__symbol__('loadfalse')];
                            if (loadTasks && loadTasks.length > 0) {
                                var oriInvoke_1 = task.invoke;
                                task.invoke = function () {
                                    // need to load the tasks again, because in other
                                    // load listener, they may remove themselves
                                    var loadTasks = target[Zone.__symbol__('loadfalse')];
                                    for (var i = 0; i < loadTasks.length; i++) {
                                        if (loadTasks[i] === task) {
                                            loadTasks.splice(i, 1);
                                        }
                                    }
                                    if (!data.aborted && task.state === SCHEDULED) {
                                        oriInvoke_1.call(task);
                                    }
                                };
                                loadTasks.push(task);
                            }
                            else {
                                task.invoke();
                            }
                        }
                        else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                            // error occurs when xhr.send()
                            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                        }
                    }
                };
                oriAddListener.call(target, READY_STATE_CHANGE, newListener);
                var storedTask = target[XHR_TASK];
                if (!storedTask) {
                    target[XHR_TASK] = task;
                }
                sendNative.apply(target, data.args);
                target[XHR_SCHEDULED] = true;
                return task;
            }
            function placeholderCallback() { }
            function clearTask(task) {
                var data = task.data;
                // Note - ideally, we would call data.target.removeEventListener here, but it's too late
                // to prevent it from firing. So instead, we store info for the event listener.
                data.aborted = true;
                return abortNative.apply(data.target, data.args);
            }
            var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
                self[XHR_SYNC] = args[2] == false;
                self[XHR_URL] = args[1];
                return openNative.apply(self, args);
            }; });
            var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
            var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
            var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
            var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
                if (Zone.current[fetchTaskScheduling] === true) {
                    // a fetch is scheduling, so we are using xhr to polyfill fetch
                    // and because we already schedule macroTask for fetch, we should
                    // not schedule a macroTask for xhr again
                    return sendNative.apply(self, args);
                }
                if (self[XHR_SYNC]) {
                    // if the XHR is sync there is no task to schedule, just execute the code.
                    return sendNative.apply(self, args);
                }
                else {
                    var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                    var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                    if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                        task.state === SCHEDULED) {
                        // xhr request throw error when send
                        // we should invoke task instead of leaving a scheduled
                        // pending macroTask
                        task.invoke();
                    }
                }
            }; });
            var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
                var task = findPendingTask(self);
                if (task && typeof task.type == 'string') {
                    // If the XHR has already completed, do nothing.
                    // If the XHR has already been aborted, do nothing.
                    // Fix #569, call abort multiple times before done will cause
                    // macroTask task count be negative number
                    if (task.cancelFn == null || (task.data && task.data.aborted)) {
                        return;
                    }
                    task.zone.cancelTask(task);
                }
                else if (Zone.current[fetchTaskAborting] === true) {
                    // the abort is called from fetch polyfill, we need to call native abort of XHR.
                    return abortNative.apply(self, args);
                }
                // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
                // task
                // to cancel. Do nothing.
            }; });
        }
    });
    Zone.__load_patch('geolocation', function (global) {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
            patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
    });
    Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
            return function (e) {
                var eventTasks = findEventTasks(global, evtName);
                eventTasks.forEach(function (eventTask) {
                    // windows has added unhandledrejection event listener
                    // trigger the event listener
                    var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                    if (PromiseRejectionEvent) {
                        var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                        eventTask.invoke(evt);
                    }
                });
            };
        }
        if (global['PromiseRejectionEvent']) {
            Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
                findPromiseRejectionHandler('unhandledrejection');
            Zone[zoneSymbol('rejectionHandledHandler')] =
                findPromiseRejectionHandler('rejectionhandled');
        }
    });
})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ })
/******/ ]);