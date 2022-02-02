(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(5);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactStaticRoutes = __webpack_require__(7);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactStatic.Head,
        null,
        _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@1.0.0/build/pure-min.css', integrity: 'sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w', crossorigin: 'anonymous' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@1.0.0/build/grids-responsive-min.css' })
      )
    ),
    _react2.default.createElement(
      _reactStatic.Router,
      null,
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a'
          )
        ),
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};
/*
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: [],
      selectedFilters: [],
      offset: '',
      isLoading: false,
      selectedCategory: "Reference",
      selectedSubcategory: "Pattern"
    };

    this.availableFilters = this.availableFilters.bind(this);
  }

  componentDidMount() {
    window.addEventListener("beforeunload", () => window.scrollTo(0, 0))
    this.makeRequest();
  }

  availableFilters() {
    return (
      categories.find(category => category.title === this.state.selectedCategory)
        .subcategories
        .find(subcategory => subcategory.title === this.state.selectedSubcategory)
        .filters
    );
  }

  toggleFilter(value, filterCategory) {
    const index = this.state.selectedFilters.findIndex(filter => filter.value === value);
    let newState = {
      selectedFilters: [
        ...this.state.selectedFilters,
        {key: filterCategory, value: value}
      ]
    };

    if (index != -1) {
      newState = {
        selectedFilters: [
          ...this.state.selectedFilters.slice(0, index),
          ...this.state.selectedFilters.slice(index + 1)
        ]
      };
    }

    this.setState({offset: '', ...newState}, () => this.makeRequest());
  }

  changeView(key, newValue) {
    this.setState({
      [key]: newValue,
      offset: '',
      selectedFilters: []
    }, () => this.makeRequest());
  };

  makeRequest(appendResults = false) {
    const mapRecords = (records) => (
      records.map(record => (
        {
          id: record.id,
          mediaUrl: record.fields["Media URL"],
          thumbUrl: record.fields["Thumb URL"],
          title: record.fields["Name"]
        }
      ))
    );

    const airtableBase = "https://api.airtable.com/v0/appWzDTk29fbpI9kC";
    let url = `${airtableBase}/${this.state.selectedCategory}?pageSize=10&offset=${this.state.offset || ''}`;

    if (this.state.selectedFilters.length > 0) {
      url += buildFilterByFormula(this.state.selectedFilters);
    }

    axios.get(url, { headers: {Authorization: "Bearer keyHXT2ee1ZGTfuyq"} })
      .then(response => {
        if (appendResults) {
          this.setState({
            isLoading: false,
            offset: response.data.offset,
            records: [
              ...this.state.records,
              ...mapRecords(response.data.records)
            ]
          });
        } else {
          this.setState({
            isLoading: false,
            offset: response.data.offset,
            records: mapRecords(response.data.records)
          });
        }
      });
  }

  render () {
    return (
      <div>
        <h1 className="center-text">UXdb</h1>
        <CategoryContainer
          categories={categories}
          selectedCategory={this.state.selectedCategory}
          selectedSubcategory={this.state.selectedSubcategory}
          handleCategoryClick={(category) => this.changeView('selectedCategory', category)}
          handleSubcategoryClick={(subcategory) => this.changeView('selectedSubcategory', subcategory)}
        />
        <div>
          <FilterContainer
            filters={this.availableFilters()}
            handleFilterSelect={(filterCategory, filter) => this.toggleFilter(filter, filterCategory)}
          />
          <RecordsContainer
            records={this.state.records}
            isLoading={this.state.isLoading}
            requestMoreRecords={() => { if (!this.state.offset) return; this.setState({ isLoading: true }); this.makeRequest(true)}}
          />
        </div>
      </div>
    )
  }
}

export default App
*/

//import axios from 'axios';

// import FilterContainer from 'FilterContainer';
// import RecordsContainer from 'RecordsContainer';
// import CategoryContainer from 'CategoryContainer';
//
// import categories from 'categories';
// import { buildFilterByFormula } from 'helpers';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

var _PageContainer = __webpack_require__(9);

var _PageContainer2 = _interopRequireDefault(_PageContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Template Imports


// Template Map
var templateMap = {
  t_0: _PageContainer2.default

  // Template Tree
};var templateTree = { c: { "/": { t: "t_0" }, "pattern": { t: "t_0" }, "empathize": { t: "t_0" }, "define": { t: "t_0" } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/uxdb/' ? ['/uxdb/'] : path.split('/uxdb/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _FilterPage = __webpack_require__(10);

var _FilterPage2 = _interopRequireDefault(_FilterPage);

var _Page = __webpack_require__(13);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.getRouteProps)(function (_ref) {
  var title = _ref.title,
      description = _ref.description,
      filters = _ref.filters,
      airtableBase = _ref.airtableBase,
      location = _ref.location;
  return _react2.default.createElement(_FilterPage2.default, {
    airtableBase: airtableBase,
    render: function render(_ref2) {
      var records = _ref2.records,
          filterCallback = _ref2.filterCallback,
          toggleModal = _ref2.toggleModal,
          modalRecordImage = _ref2.modalRecordImage;
      return _react2.default.createElement(_Page2.default, {
        title: title,
        description: description,
        filters: filters,
        records: records,
        filterCallback: filterCallback,
        toggleModal: toggleModal,
        modalRecordImage: modalRecordImage,
        location: location
      });
    }
  });
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

var _reactStatic = __webpack_require__(1);

var _helpers = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterPage = function (_React$Component) {
  _inherits(FilterPage, _React$Component);

  function FilterPage(props) {
    _classCallCheck(this, FilterPage);

    var _this = _possibleConstructorReturn(this, (FilterPage.__proto__ || Object.getPrototypeOf(FilterPage)).call(this, props));

    _this.loadMoreRecords = (0, _helpers.debounce)(function () {
      return _this.setState({ loading: true }, function () {
        return _this.makeFilterRequest(_this.state.activeFilters, true);
      });
    }, 200);


    _this.state = {
      loading: false,
      modalRecordImage: null,
      activeFilters: [],
      records: [],
      offset: ""
    };

    _this.filterCallback = _this.filterCallback.bind(_this);
    _this.toggleModal = _this.toggleModal.bind(_this);
    return _this;
  }

  _createClass(FilterPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.makeFilterRequest(this.state.activeFilters);

      window.setTimeout(function () {
        return window.addEventListener('scroll', _this2.scrollCallback.bind(_this2));
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollCallback.bind(this));
    }
  }, {
    key: 'updateRecords',
    value: function updateRecords(records, append) {
      var mapRecords = records.map(function (record) {
        return {
          id: record.id,
          thumb: record.fields['Thumb URL'],
          image: record.fields['Media URL']
        };
      });

      return append ? [].concat(_toConsumableArray(this.state.records), _toConsumableArray(mapRecords)) : mapRecords;
    }
  }, {
    key: 'makeFilterRequest',
    value: function makeFilterRequest(activeFilters) {
      var _this3 = this;

      var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var data = { headers: { Authorization: "Bearer keyHXT2ee1ZGTfuyq" } };
      var filters = (0, _helpers.buildFilters)(activeFilters);
      var url = this.props.airtableBase + filters + (0, _helpers.buildPagination)(15, this.state.offset, filters !== '');

      _axios2.default.get(url, data).then(function (response) {
        _this3.setState({
          loading: false,
          offset: response.data.offset ? response.data.offset : null,
          records: _this3.updateRecords(response.data.records, append)
        });
      });
    }
  }, {
    key: 'scrollCallback',
    value: function scrollCallback() {
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        if (this.state.offset !== null && !this.state.loading) {
          this.loadMoreRecords();
        }
      }
    }
  }, {
    key: 'filterCallback',
    value: function filterCallback(category, name, airtableColumn, columnType) {
      var _this4 = this;

      var index = this.state.activeFilters.findIndex(function (activeFilter) {
        return activeFilter.name === name;
      });
      var activeFilters = [];

      if (index > -1) {
        activeFilters = [].concat(_toConsumableArray(this.state.activeFilters.slice(0, index)), _toConsumableArray(this.state.activeFilters.slice(index + 1)));
      } else {
        activeFilters = [].concat(_toConsumableArray(this.state.activeFilters), [{
          name: name,
          category: category,
          airtableColumn: airtableColumn,
          columnType: columnType
        }]);
      }

      this.setState({ activeFilters: activeFilters, offset: '' }, function () {
        return _this4.makeFilterRequest(_this4.state.activeFilters);
      });
    }
  }, {
    key: 'toggleModal',
    value: function toggleModal(recordId) {
      if (recordId === null) {
        this.setState({ modalRecordImage: null });
      } else {
        var recordForModal = this.state.records.find(function (record) {
          return record.id === recordId;
        });
        this.setState({ modalRecordImage: recordForModal.image });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.render(_extends({}, this.state, this.props, {
        filterCallback: this.filterCallback,
        toggleModal: this.toggleModal
      }));
    }
  }]);

  return FilterPage;
}(_react2.default.Component);

;

exports.default = (0, _reactStatic.getRouteProps)(FilterPage);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var counter = function counter(filters) {
  return filters.reduce(function (acc, f, index) {
    if (acc[f.category]) return _extends({}, acc, _defineProperty({}, f.category, [].concat(_toConsumableArray(acc[f.category]), [index])));else return _extends({}, acc, _defineProperty({}, f.category, [index]));
  }, {});
};

var filterString = function filterString(name, column, type) {
  var TYPES = {
    select: 'Find(%27' + name + '%27, ' + column + ')',
    text: '{' + column + '} = %27' + name + '%27'
  };

  return TYPES[type];
};

var buildOrQueries = function buildOrQueries(counterMapping, filters) {
  var totalQueries = [];
  Object.keys(counterMapping).map(function (key) {
    var orQueries = counterMapping[key].map(function (index) {
      var _filters$index = filters[index],
          name = _filters$index.name,
          airtableColumn = _filters$index.airtableColumn,
          columnType = _filters$index.columnType;

      return filterString(name, airtableColumn, columnType);
    });

    totalQueries.push('OR(' + orQueries.join(', ') + ')');
  });

  if (totalQueries.length > 1) {
    totalQueries = 'AND(' + totalQueries.join(', ') + ')';
  }

  return totalQueries;
};

var buildFilters = exports.buildFilters = function buildFilters(filters) {
  if (filters.length < 1) return '';

  var filterFormula = '';
  var counterMapping = counter(filters);

  filterFormula = buildOrQueries(counterMapping, filters);

  return '?filterByFormula=' + filterFormula;
};

var buildPagination = exports.buildPagination = function buildPagination(pageSize, offset, filterExists) {
  var joiner = filterExists ? '&' : '?';

  if (offset === "") return joiner + 'pageSize=' + pageSize;

  return joiner + 'pageSize=' + pageSize + '&offset=' + offset;
};

var debounce = exports.debounce = function debounce(fn, time) {
  var timeout = void 0;

  return function () {
    var _this = this,
        _arguments = arguments;

    var functionCall = function functionCall() {
      return fn.apply(_this, _arguments);
    };

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(2);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _Filters = __webpack_require__(14);

var _Filters2 = _interopRequireDefault(_Filters);

var _Navbar = __webpack_require__(15);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Records = __webpack_require__(16);

var _Records2 = _interopRequireDefault(_Records);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactModal2.default.defaultStyles.overlay.backgroundColor = "#142434e8";
_reactModal2.default.defaultStyles.content = { marginTop: "50px" };

var Page = function Page(_ref) {
  var title = _ref.title,
      description = _ref.description,
      filters = _ref.filters,
      records = _ref.records,
      filterCallback = _ref.filterCallback,
      location = _ref.location,
      toggleModal = _ref.toggleModal,
      modalRecordImage = _ref.modalRecordImage;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactModal2.default,
      {
        isOpen: modalRecordImage !== null,
        shouldCloseOnOverlayClick: true,
        onRequestClose: function onRequestClose() {
          return toggleModal(null);
        }
      },
      _react2.default.createElement(
        'div',
        { className: 'modal-close-button', onClick: function onClick() {
            return toggleModal(null);
          } },
        '\u2715'
      ),
      _react2.default.createElement('div', { style: { backgroundImage: 'url(' + modalRecordImage + ')' }, className: 'modal-image-container' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'process-wrapper' },
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
          'div',
          { className: 'pure-g' },
          _react2.default.createElement(
            'div',
            { className: 'l-box pure-u-1 pure-u-md-1 pure-u-lg-1' },
            _react2.default.createElement(
              'h1',
              null,
              title
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'l-box pure-u-1 pure-u-md-1 pure-u-lg-3-4' },
            _react2.default.createElement(
              'p',
              { className: 'process-text' },
              description
            )
          )
        ),
        _react2.default.createElement(_Navbar2.default, { location: location })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement(
        'div',
        { className: 'pure-g' },
        _react2.default.createElement(_Filters2.default, {
          filters: filters,
          filterCallback: filterCallback
        }),
        _react2.default.createElement(_Records2.default, {
          records: records,
          toggleModal: toggleModal
        })
      )
    )
  );
};

exports.default = Page;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filters = function Filters(_ref) {
  var filters = _ref.filters,
      filterCallback = _ref.filterCallback;
  return _react2.default.createElement(
    "div",
    { className: "l-box pure-u-1 pure-u-md-1-6 pure-u-lg-1-6" },
    filters.filterCategories.map(function (filterCategory) {
      return _react2.default.createElement(
        "div",
        { key: filterCategory.name, className: "pure-form pure-form-stacked" },
        _react2.default.createElement(
          "fieldset",
          null,
          _react2.default.createElement(
            "legend",
            null,
            filterCategory.name
          ),
          _react2.default.createElement(
            "div",
            { className: "filter-group" },
            filterCategory.filters.map(function (filterObj) {
              return _react2.default.createElement(
                "label",
                { key: filterObj.name, className: "pure-checkbox" },
                _react2.default.createElement("input", {
                  type: "checkbox",
                  onClick: function onClick() {
                    return filterCallback(filterCategory.name, filterObj.name, filterCategory.code, filterCategory.columnType);
                  }
                }),
                "\xA0",
                filterObj.name
              );
            })
          )
        )
      );
    })
  );
};

exports.default = Filters;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = ["Benchmark", "Pattern", "Empathize", "Define" /*
                                                            "Ideate",
                                                            "Explore",
                                                            "Validate",
                                                            "Implement"*/
];

exports.default = function (_ref) {
  var location = _ref.location;

  return _react2.default.createElement(
    'div',
    { className: 'pure-g' },
    _react2.default.createElement(
      'div',
      { className: 'l-box pure-u-1 pure-u-md-1 pure-u-lg-1' },
      _react2.default.createElement(
        'div',
        { className: 'pure-menu' },
        _react2.default.createElement(
          'ul',
          { className: 'pure-menu-list process-list' },
          routes.map(function (routeName) {
            var routePath = routeName === "Benchmark" ? "/" : '/uxdb/' + routeName.toLowerCase();

            return _react2.default.createElement(
              'li',
              {
                key: routeName,
                className: routePath === location.pathname ? "pure-menu-item pure-menu-selected" : "pure-menu-item"
              },
              _react2.default.createElement(
                _reactStatic.NavLink,
                {
                  className: 'pure-menu-link',
                  exact: routeName === "Benchmark",
                  to: routePath
                },
                routeName
              )
            );
          }),
          _react2.default.createElement(
            'li',
            { className: 'pure-menu-item pure-menu-disabled' },
            'Ideate'
          ),
          _react2.default.createElement(
            'li',
            { className: 'pure-menu-item pure-menu-disabled' },
            'Explore'
          ),
          _react2.default.createElement(
            'li',
            { className: 'pure-menu-item pure-menu-disabled' },
            'Validate'
          ),
          _react2.default.createElement(
            'li',
            { className: 'pure-menu-item pure-menu-disabled' },
            'Implement'
          )
        )
      )
    )
  );
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMasonryCss = __webpack_require__(17);

var _reactMasonryCss2 = _interopRequireDefault(_reactMasonryCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof document !== 'undefined') {
  var ReactModal = __webpack_require__(2);
  ReactModal.setAppElement('#root');
}
//import ReactModal from 'react-modal';


var breakpointColumns = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

exports.default = function (_ref) {
  var records = _ref.records,
      toggleModal = _ref.toggleModal;
  return _react2.default.createElement(
    'div',
    { className: 'l-box pure-u-1 pure-u-md-18-24 pure-u-lg-5-6' },
    _react2.default.createElement(
      _reactMasonryCss2.default,
      {
        breakpointCols: breakpointColumns,
        className: 'masonry-grid',
        columnClassName: 'masonry-grid-column'
      },
      records.map(function (record) {
        return _react2.default.createElement(
          'div',
          {
            key: record.id,
            className: 'record-container',
            onClick: function onClick() {
              return toggleModal(record.id);
            }
          },
          _react2.default.createElement('img', { src: record.thumb, alt: record.id })
        );
      })
    )
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-masonry-css");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.0a49badb.js.map