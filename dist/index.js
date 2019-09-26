'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

/**
 * Export `uid`
 */

var uid_1 = uid;

/**
 * Create a `uid`
 *
 * @param {String} len
 * @return {String} uid
 */

function uid(len) {
  len = len || 7;
  return Math.random().toString(35).substr(2, len);
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
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

var inherits = function (subClass, superClass) {
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
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var ReactNestedMenu = function (_Component) {
  inherits(ReactNestedMenu, _Component);

  function ReactNestedMenu(props) {
    classCallCheck(this, ReactNestedMenu);

    var _this = possibleConstructorReturn(this, (ReactNestedMenu.__proto__ || Object.getPrototypeOf(ReactNestedMenu)).call(this, props));

    _this.linkTransformer = function (navItem) {
      if (_this.props.linkTransformer) {
        return _this.props.linkTransformer(navItem);
      } else {
        var navItemEl = React__default.createElement(
          'a',
          { href: navItem[_this.props.navUrlProperty] },
          ' ',
          navItem[_this.props.navTitleProperty],
          ' '
        );

        return navItemEl;
      }
    };

    _this.buildMenu = function (menuData) {
      var parentClassname = null;
      if (_this.isTopLevelParent) {
        parentClassname = '' + _this.props.navTopLevelParentClassname;
        _this.isTopLevelParent = false;
      } else {
        parentClassname = '' + _this.props.navParentClassname;
      }

      var childMenuItems = menuData.map(function (el) {
        var ChildTag = '' + _this.props.navChildElement;
        var childChildren = React__default.createElement(
          ChildTag,
          { className: _this.props.navChildClassname, key: el[_this.props.arrayKey] ? el[_this.props.arrayKey] : uid_1(15) },
          _this.linkTransformer(el),
          el[_this.props.childMenuProperty] ? _this.buildMenu(el[_this.props.childMenuProperty]) : null
        );

        return childChildren;
      });

      var ParentTag = '' + _this.props.navParentElement;

      return React__default.createElement(
        ParentTag,
        { className: parentClassname },
        childMenuItems
      );
    };

    _this.state = { menu: null };
    _this.isTopLevelParent = true;
    return _this;
  }

  createClass(ReactNestedMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var menu = this.buildMenu(this.props.menuData);
      this.setState({ menu: menu });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.isTopLevelParent = true;
      var menu = this.buildMenu(nextProps.menuData);
      this.setState({ menu: menu });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.menu;
    }
  }]);
  return ReactNestedMenu;
}(React.Component);

ReactNestedMenu.propTypes = {

  navParentElement: PropTypes.string,
  navChildElement: PropTypes.string,
  navParentClassname: PropTypes.string,
  navTopLevelParentClassname: PropTypes.string,
  navChildClassname: PropTypes.string,
  childMenuProperty: PropTypes.string,
  navUrlProperty: PropTypes.string,
  navTitleProperty: PropTypes.string,
  arrayKey: PropTypes.string,
  linkTransformer: PropTypes.func,
  menuData: PropTypes.array.isRequired,
  isAutoExpand: PropTypes.bool
};

ReactNestedMenu.defaultProps = {
  navParentElement: 'ul',
  navChildElement: 'li',
  navParentClassname: '',
  navTopLevelParentClassname: '',
  navChildClassname: '',
  navUrlProperty: 'url',
  childMenuProperty: 'children',
  navTitleProperty: 'title',
  arrayKey: 'id',
  isAutoExpand: false
};

module.exports = ReactNestedMenu;
//# sourceMappingURL=index.js.map
