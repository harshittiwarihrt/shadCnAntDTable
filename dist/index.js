'use strict';

var React21 = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var chrono = require('chrono-node');
var CollapsiblePrimitive = require('@radix-ui/react-collapsible');
var reactTable = require('@tanstack/react-table');
var ahooks = require('ahooks');
var antd = require('antd');
var antdStyle = require('antd-style');
var proComponents = require('@ant-design/pro-components');
var react = require('@iconify/react');
var iconsReact = require('@tabler/icons-react');
var icons = require('@ant-design/icons');
var dayjs2 = require('dayjs');
var constants = require('constants');
var sortable = require('@dnd-kit/sortable');
var _ = require('lodash');
var reactHotkeysHook = require('react-hotkeys-hook');
var Link = require('antd/es/typography/Link');
var Form = require('antd/es/form/Form');
var isBetween = require('dayjs/plugin/isBetween');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React21__namespace = /*#__PURE__*/_interopNamespace(React21);
var chrono__namespace = /*#__PURE__*/_interopNamespace(chrono);
var CollapsiblePrimitive__namespace = /*#__PURE__*/_interopNamespace(CollapsiblePrimitive);
var dayjs2__default = /*#__PURE__*/_interopDefault(dayjs2);
var ___default = /*#__PURE__*/_interopDefault(_);
var Link__default = /*#__PURE__*/_interopDefault(Link);
var isBetween__default = /*#__PURE__*/_interopDefault(isBetween);

// src/components/customIntegration/ui/table.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var formatter = new Intl.NumberFormat("en-IN", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
});
var amountFormatter = (value) => {
  if (value || value === 0) {
    return formatter.format(value);
  }
  return "";
};
var parseDateTime = (str) => {
  if (str instanceof Date) return str;
  return chrono__namespace.parseDate(str);
};
var formatDateTime = (datetime) => {
  return new Date(datetime).toLocaleTimeString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
};

// src/components/customIntegration/ui/table.tsx
var ShadcnTable = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21__namespace.createElement("div", { ref, className: "relative w-full max-h-[500px] overflow-y-auto" }, /* @__PURE__ */ React21__namespace.createElement(
  "table",
  {
    className: cn("w-full caption-bottom text-sm ", className),
    ...props
  }
)));
ShadcnTable.displayName = "Table";
var ShadcnTableHeader = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21__namespace.createElement(
  "thead",
  {
    ref,
    className: cn(
      "[&_tr]:brder-b sticky top-0 z-10 bg-winterWhisper rounded-s-3xl",
      className
    ),
    ...props
  }
));
ShadcnTableHeader.displayName = "TableHeader";
var ShadcnTableBody = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21__namespace.createElement(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
ShadcnTableBody.displayName = "TableBody";
var ShadcnTableFooter = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21__namespace.createElement(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t  font-medium [&>tr]:last:border-b-0 bottom-0 sticky bg-winterWhisper rounded-s-3xl z-20",
      className
    ),
    ...props
  }
));
ShadcnTableFooter.displayName = "TableFooter";
var ShadcnTableRow = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21__namespace.createElement(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted w-full",
      className
    ),
    ...props
  }
));
ShadcnTableRow.displayName = "TableRow";
var ShadcnTableHead = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21__namespace.createElement(
  "th",
  {
    ref,
    className: cn(
      "h-12 text-left align-middle  text-muted-foreground [&:has([role=checkbox])]:pr-0  text-black relative  cursor-pointer border px-3  font-bold",
      className
    ),
    ...props
  }
));
ShadcnTableHead.displayName = "TableHead";
var ShadcnTableCell = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21__namespace.createElement(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
ShadcnTableCell.displayName = "TableCell";
var ShadcnTableCaption = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21__namespace.createElement(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
ShadcnTableCaption.displayName = "TableCaption";
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ React21__namespace.default.createElement(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-muted", className),
      ...props
    }
  );
}
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React21__namespace.useState(void 0);
  React21__namespace.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
var Collapsible = CollapsiblePrimitive__namespace.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive__namespace.CollapsibleTrigger;
var CollapsibleContent2 = CollapsiblePrimitive__namespace.CollapsibleContent;
var { defaultAlgorithm, darkAlgorithm, useToken } = antd.theme;
var useAppTheme = () => {
  const { token } = useToken();
  return token;
};

// src/components/common/Button/style.tsx
var useStyles = ({ buttonVariant, size }) => {
  const token = useAppTheme();
  const backgroundColor = {
    default: token.neutral3,
    transparent: "transparent",
    primary: token.primary1,
    success: token.success1,
    error: token.error1,
    warning: token.warning1,
    info: token.info1,
    blue: "#2341D8"
  };
  const backgroundHoverColor = {
    blue: "#2341D8",
    default: token.neutral4,
    transparent: "transparent",
    primary: token.primary2,
    success: token.success2,
    error: token.error2,
    warning: token.warning2,
    info: token.info2
  };
  const color = {
    default: token.neutral7,
    transparent: token.neutral7,
    primary: token.primary8,
    success: token.success7,
    error: token.error7,
    warning: token.warning7,
    blue: "#FEFE",
    info: token.info7
  };
  const colorHover = {
    default: token.neutral6,
    transparent: token.neutral6,
    primary: token.primary4,
    success: token.success4,
    error: token.error4,
    warning: token.warning4,
    info: token.info4,
    blue: "#FEFE"
  };
  const fontSize = {
    small: "22px !important",
    middle: "36px !important",
    large: "46px !important",
    extraLarge: "54px !important"
  };
  return antdStyle.createStyles((_3, { buttonVariant: buttonVariant2, size: size2 }) => ({
    button: {
      backgroundColor: `${backgroundColor[buttonVariant2]} !important`,
      color: `${color[buttonVariant2]} !important`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: fontSize[size2 || "small"],
      minWidth: fontSize[size2 || "small"],
      height: fontSize[size2 || "small"],
      ":hover": {
        border: `1px solid ${colorHover[buttonVariant2]} !important`,
        backgroundColor: `${backgroundHoverColor[buttonVariant2]} !important`
      }
    }
  }))({ buttonVariant, size });
};
var useENoobButtonStyles = ({
  buttonVariant,
  size,
  wantHoverEffect
}) => {
  const token = useAppTheme();
  const backgroundColor = {
    default: token.neutral3,
    transparent: "transparent",
    primary: token.primary2,
    success: token.success2,
    error: token.error2,
    warning: token.warning2,
    info: token.info2,
    blue: "#2341D8"
  };
  const backgroundHoverColor = {
    default: token.neutral4,
    transparent: "transparent",
    primary: token.primary2,
    success: token.success2,
    error: token.error2,
    warning: token.warning2,
    info: token.info2,
    blue: "#2341D8"
  };
  const color = {
    default: token.neutral8,
    transparent: token.neutral8,
    primary: token.primary8,
    success: token.success8,
    error: token.error8,
    warning: token.warning8,
    info: token.info8,
    blue: "#FEFE"
  };
  const colorHover = {
    default: token.neutral6,
    transparent: token.neutral6,
    primary: token.primary4,
    success: token.success4,
    error: token.error4,
    warning: token.warning4,
    info: token.info6,
    blue: "#FEFE"
  };
  return antdStyle.createStyles((_3, { buttonVariant: buttonVariant2 }) => ({
    button: {
      backgroundColor: `${backgroundColor[buttonVariant2]} !important`,
      color: `${color[buttonVariant2]} !important`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ":hover": {
        border: wantHoverEffect ? `1px solid ${colorHover[buttonVariant2]} !important` : "none !important",
        backgroundColor: wantHoverEffect ? `${backgroundHoverColor[buttonVariant2]} !important` : "none !important"
      }
    }
  }))({ buttonVariant, size });
};
var useButtonGroupStyles = () => {
  const token = useAppTheme();
  return antdStyle.createStyles(() => ({
    button: {
      fontWeight: "500",
      "&.ant-btn-default": {
        color: token.neutral7,
        backgroundColor: token.colorWhite
      }
    }
  }))();
};
var EButton = ({ ref, ...props }) => {
  return (
    // Note: Render Button component with styles from props and additional props passed down
    /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Button,
      {
        ...props,
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...props == null ? void 0 : props.style
        }
      }
    )
  );
};
var EIconButtonIcon = ({
  eIconButtonVariant = "default",
  shape = "round",
  size = "small",
  ...props
}) => {
  const { styles } = useStyles({ buttonVariant: eIconButtonVariant, size });
  return /* @__PURE__ */ React21__namespace.default.createElement(EButton, { size, shape, className: styles.button, ...props });
};
var ENoobButton = ({
  buttonVariant = "default",
  shape = "default",
  size = "small",
  wantHoverEffect = false,
  ...props
}) => {
  const { styles } = useENoobButtonStyles({
    buttonVariant,
    size,
    wantHoverEffect
  });
  return /* @__PURE__ */ React21__namespace.default.createElement(EButton, { shape, className: styles.button, ...props });
};
var EButtonGroup = ({
  options,
  value,
  onChange = () => null,
  size,
  ...rest
}) => {
  var _a;
  const [selected, setSelected] = React21.useState(value || ((_a = options == null ? void 0 : options[0]) == null ? void 0 : _a.value));
  const { styles, cx } = useButtonGroupStyles();
  return (
    // Note: Render a compact Space component to create space between buttons
    /* @__PURE__ */ React21__namespace.default.createElement(antd.Space.Compact, null, options == null ? void 0 : options.map((item, key) => /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Button,
      {
        ...rest,
        className: cx(rest.className, styles.button),
        key,
        type: selected === (item == null ? void 0 : item.value) ? "primary" : "default",
        value: item == null ? void 0 : item.value,
        onClick: () => {
          setSelected(item == null ? void 0 : item.value);
          onChange(item == null ? void 0 : item.value);
        }
      },
      item == null ? void 0 : item.label
    )))
  );
};
var EIconButton = ({
  icon,
  title,
  ...rest
}) => {
  return /* @__PURE__ */ React21__namespace.default.createElement(EButton, { ...rest }, /* @__PURE__ */ React21__namespace.default.createElement(
    EIcon,
    {
      fontSize: 18,
      style: { marginRight: "4px" },
      icon
    }
  ), title);
};
var EButtonTransparent = ({
  ref,
  ...props
}) => {
  const token = useAppTheme();
  return (
    // Note: Render Button component with styles from props and additional props passed down
    /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Button,
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          border: `1px solid ${token.lightBorderWinterWhisper}`,
          ...props == null ? void 0 : props.style
        },
        ...props
      }
    )
  );
};
var TableDeleteButton = ({
  indicator,
  ...rest
}) => {
  return /* @__PURE__ */ React21__namespace.default.createElement(EButton, { type: "primary", danger: true, size: "middle", ...rest }, /* @__PURE__ */ React21__namespace.default.createElement(EIcon, { icon: "ic:baseline-delete", style: { marginRight: 4 } }), "Delete (", indicator, ")");
};
var TableClearButton = ({
  indicator,
  ...rest
}) => {
  return /* @__PURE__ */ React21__namespace.default.createElement(
    EButton,
    {
      type: "link",
      style: { fontWeight: "500", display: "flex", alignItems: "center" },
      ...rest
    },
    "Clear(",
    indicator,
    ")"
  );
};
var EThirdPartyLogInButtonProps = ({
  children,
  ...rest
}) => {
  const token = useAppTheme();
  return /* @__PURE__ */ React21__namespace.default.createElement(
    EButton,
    {
      style: {
        width: "100%",
        color: token.neutral8,
        fontWeight: "500",
        marginBottom: 14
      },
      ...rest
    },
    children
  );
};
var showShakeEffectConfig = (node, { component }) => {
  if (component !== "Button") {
    return;
  }
  const seq = [0, -15, 15, -5, 5, 0];
  const itv = 10;
  let steps = 0;
  function loop() {
    cancelAnimationFrame(node.effectTimeout);
    node.effectTimeout = requestAnimationFrame(() => {
      const currentStep = Math.floor(steps / itv);
      const current = seq[currentStep];
      const next = seq[currentStep + 1];
      if (!next) {
        node.style.transform = "";
        node.style.transition = "";
        return;
      }
      const angle = current + (next - current) / itv * (steps % itv);
      node.style.transform = `rotate(${angle}deg)`;
      node.style.transition = "none";
      steps += 1;
      loop();
    });
  }
  loop();
};
var ShakeButtonWrapper = ({
  showShakeEffect = true,
  showEffect = showShakeEffectConfig,
  children,
  ...wave
}) => {
  return /* @__PURE__ */ React21__namespace.default.createElement(
    antd.ConfigProvider,
    {
      wave: {
        showEffect: showShakeEffect ? showEffect : void 0,
        ...wave
      }
    },
    children
  );
};
var ShakeButton = ({
  showShakeEffect = true,
  showEffect = showShakeEffectConfig,
  children,
  buttonProps,
  ...wave
}) => {
  return /* @__PURE__ */ React21__namespace.default.createElement(ShakeButtonWrapper, { showShakeEffect, ...wave }, /* @__PURE__ */ React21__namespace.default.createElement(EButton, { type: "primary", ...buttonProps }, children));
};
var ECheckbox = ({
  label,
  error,
  ...rest
}) => {
  return /* @__PURE__ */ React21__namespace.default.createElement(proComponents.ProFormCheckbox, { ...rest }, label);
};
var EHeading = ({
  children,
  fontWeight = "400",
  textAlign = "left",
  color,
  ...rest
}) => {
  const renderTypography = () => {
    return /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Typography.Title,
      {
        ...rest,
        style: { color, fontWeight, textAlign, ...rest.style }
      },
      children
    );
  };
  return /* @__PURE__ */ React21__namespace.default.createElement(React21__namespace.default.Fragment, null, renderTypography());
};
var EParagraph = ({
  children,
  fontWeight = "400",
  textAlign = "left",
  color,
  ...rest
}) => {
  const renderTypography = () => {
    return /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Typography.Paragraph,
      {
        ...rest,
        style: { color, fontWeight, textAlign, ...rest.style }
      },
      children
    );
  };
  return /* @__PURE__ */ React21__namespace.default.createElement(React21__namespace.default.Fragment, null, renderTypography());
};
var EText = ({
  children,
  fontWeight = "400",
  textAlign = "left",
  fontSize = "14px",
  color,
  ...rest
}) => {
  const renderTypography = () => {
    return /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Typography.Text,
      {
        ...rest,
        style: {
          color,
          fontWeight,
          textAlign,
          fontSize,
          ...rest == null ? void 0 : rest.style
        }
      },
      children
    );
  };
  return /* @__PURE__ */ React21__namespace.default.createElement(React21__namespace.default.Fragment, null, renderTypography());
};
var ETextForSearchFilterDropDown = ({
  children,
  fontWeight = "500",
  textAlign,
  fontSize = "12px",
  color,
  ...rest
}) => {
  const token = useAppTheme();
  const renderTypography = () => {
    return /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Typography.Text,
      {
        style: {
          color: token.neutral6,
          fontWeight,
          textAlign,
          fontSize,
          ...rest == null ? void 0 : rest.style
        },
        ...rest
      },
      children
    );
  };
  return /* @__PURE__ */ React21__namespace.default.createElement(React21__namespace.default.Fragment, null, renderTypography());
};
var ETextForSearchFilterLabel = ({
  children,
  fontWeight = "500",
  fontSize = "13px",
  color,
  marginLeft = "2px",
  ...rest
}) => {
  const token = useAppTheme();
  const renderTypography = () => {
    return /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Typography.Text,
      {
        style: {
          color: token.neutral7,
          fontWeight,
          fontSize,
          marginLeft,
          ...rest == null ? void 0 : rest.style
        },
        ...rest
      },
      children
    );
  };
  return /* @__PURE__ */ React21__namespace.default.createElement(React21__namespace.default.Fragment, null, renderTypography());
};
var VerticalText = ({
  heading,
  desc,
  vertical = true,
  divider = true,
  colon = false,
  align = "center",
  styles,
  headingProps
}) => {
  const token = useAppTheme();
  const colonMark = colon ? ":" : void 0;
  return /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, null, /* @__PURE__ */ React21__namespace.default.createElement(
    antd.Flex,
    {
      vertical,
      gap: vertical ? 0 : 14,
      justify: vertical ? "center" : "flex-start",
      align: "center",
      flex: 1,
      style: {
        textAlign: align
      }
    },
    /* @__PURE__ */ React21__namespace.default.createElement(
      EText,
      {
        color: token.neutral7,
        fontSize: "12px",
        style: styles == null ? void 0 : styles.heading,
        ...headingProps
      },
      heading,
      " ",
      colonMark
    ),
    typeof desc === "string" ? /* @__PURE__ */ React21__namespace.default.createElement(
      EParagraph,
      {
        ellipsis: {
          rows: 2,
          tooltip: desc
        },
        style: {
          fontSize: "14px",
          fontWeight: "500",
          ...styles == null ? void 0 : styles.desc
        },
        color: token.neutral9
      },
      desc
    ) : desc
  ), divider && /* @__PURE__ */ React21__namespace.default.createElement(
    EDividerWithNoStyle,
    {
      type: "vertical",
      orientation: "right",
      style: {
        height: "36px",
        fontWeight: 800,
        ...styles == null ? void 0 : styles.divider
      }
    }
  ));
};
var TextWithIcon = ({
  img,
  text,
  infoText,
  ellipsisRows = 1,
  textMaxWidth = 120,
  styles,
  imgProps
}) => {
  const token = useAppTheme();
  return /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { gap: 4, align: "center", justify: "flex-start" }, /* @__PURE__ */ React21__namespace.default.createElement(ETooltip, { title: infoText }, typeof img === "string" ? /* @__PURE__ */ React21__namespace.default.createElement(
    antd.Image,
    {
      preview: false,
      src: img,
      wrapperStyle: {
        ...imgProps == null ? void 0 : imgProps.wrapperStyle,
        display: "inline-flex"
      },
      style: styles == null ? void 0 : styles.img,
      height: 16,
      ...imgProps,
      loading: "lazy"
    }
  ) : img), typeof text === "string" ? /* @__PURE__ */ React21__namespace.default.createElement(
    EParagraph,
    {
      style: {
        height: "100%",
        marginBottom: 0,
        maxWidth: textMaxWidth,
        fontSize: 14,
        color: token.neutral9,
        fontWeight: "500"
      },
      ellipsis: {
        rows: ellipsisRows,
        tooltip: text
      }
    },
    text
  ) : text);
};
var Header = ({
  heading,
  subHeading,
  extra
}) => {
  const token = useAppTheme();
  return /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { justify: "space-between" }, /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { vertical: true, gap: 4 }, /* @__PURE__ */ React21__namespace.default.createElement(EText, { fontWeight: "600" }, heading), /* @__PURE__ */ React21__namespace.default.createElement(
    EParagraph,
    {
      style: {
        maxWidth: 900
      },
      ellipsis: {
        rows: 2
      },
      fontWeight: "500",
      color: token.neutral7
    },
    subHeading
  )), extra && extra);
};
var EDivider = ({
  marginTop = 24,
  marginBottom = 24,
  children,
  ...rest
}) => {
  return /* @__PURE__ */ React21__namespace.default.createElement(antd.Divider, { style: { marginTop, marginBottom, ...rest == null ? void 0 : rest.style }, ...rest }, children);
};
var EFullDivider = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ React21__namespace.default.createElement("div", null, /* @__PURE__ */ React21__namespace.default.createElement(
    antd.Divider,
    {
      ...rest,
      style: {
        marginInline: "-24px",
        marginTop: "0",
        width: "calc(100% + 48px)"
      }
    },
    children
  ));
};
var EDividerWithNoStyle = ({
  marginTop = 6,
  marginBottom = 6,
  children,
  ...rest
}) => {
  return /* @__PURE__ */ React21__namespace.default.createElement(antd.Divider, { style: { marginTop, marginBottom, ...rest == null ? void 0 : rest.style }, ...rest }, children);
};
var EDividerWithText = ({
  dividerProps,
  textProps,
  styles,
  ghost = false,
  children
}) => {
  var _a;
  const token = useAppTheme();
  return /* @__PURE__ */ React21__namespace.default.createElement(
    EDivider,
    {
      orientation: "left",
      style: {
        borderColor: token.neutral5,
        fontWeight: "500",
        margin: ghost ? 0 : (_a = styles == null ? void 0 : styles.dividerStyles) == null ? void 0 : _a.margin,
        ...styles == null ? void 0 : styles.dividerStyles
      },
      ...dividerProps
    },
    children && /* @__PURE__ */ React21__namespace.default.createElement(
      EText,
      {
        fontWeight: "500",
        color: token.neutral6,
        style: {
          ...styles == null ? void 0 : styles.textStyles
        },
        ...textProps
      },
      children
    )
  );
};
var ETooltip = ({ ...rest }) => {
  return /* @__PURE__ */ React21__namespace.default.createElement("div", null, /* @__PURE__ */ React21__namespace.default.createElement(antd.Tooltip, { ...rest }));
};
var EPopover = ({ ...rest }) => {
  return /* @__PURE__ */ React21__namespace.default.createElement("div", null, /* @__PURE__ */ React21__namespace.default.createElement(antd.Popover, { ...rest }));
};
var useStyles2 = () => {
  return antdStyle.createStyles((_3) => ({
    tabWrapper: {
      "& .ant-tabs-tab-btn": {
        fontWeight: 500
      }
    }
  }))();
};

// src/components/common/Tab/Tab.tsx
var ETab = ({ ...rest }) => {
  const { styles } = useStyles2();
  return /* @__PURE__ */ React21__namespace.default.createElement(React21__namespace.default.Fragment, null, /* @__PURE__ */ React21__namespace.default.createElement(antd.Tabs, { className: styles.tabWrapper, ...rest }));
};
var EDatePicker = ({ ...rest }) => {
  return /* @__PURE__ */ React21__namespace.default.createElement("div", null, /* @__PURE__ */ React21__namespace.default.createElement(antd.DatePicker, { ...rest }));
};
var EIcon = ({ ...rest }) => {
  return /* @__PURE__ */ React21__namespace.default.createElement(react.Icon, { ...rest });
};
var EPrimaryIcon = ({
  child = false,
  isActive = false,
  ...rest
}) => {
  const token = useAppTheme();
  return /* @__PURE__ */ React21__namespace.default.createElement(
    react.Icon,
    {
      color: isActive ? token.primary7 : token.neutral7,
      fontSize: 16,
      ...rest,
      style: { ...rest == null ? void 0 : rest.style }
    }
  );
};

// src/assets/images/noDataImg.svg
var noDataImg_default = "./noDataImg-AM4J6UAZ.svg";

// src/assets/index.tsx
var assets = {
  noDataImg: noDataImg_default};

// src/components/common/NoData/NoData.tsx
var NoData = ({
  width = "100%",
  height = "100%",
  style
}) => {
  const token = useAppTheme();
  return /* @__PURE__ */ React21__namespace.default.createElement(
    antd.Flex,
    {
      justify: "center",
      align: "center",
      gap: 41,
      vertical: true,
      style: { minHeight: 243, width, height, ...style }
    },
    /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Image,
      {
        src: assets.noDataImg,
        preview: false,
        style: { width: 110, height: 110 }
      }
    ),
    /* @__PURE__ */ React21__namespace.default.createElement(
      EHeading,
      {
        level: 3,
        fontWeight: "500",
        color: token.neutral7,
        style: { marginLeft: 20 }
      },
      "No data found"
    )
  );
};

// src/constants.ts
var gstRegex = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/;
var panRegex = /(^([a-zA-Z]{5})([0-9]{4})([a-zA-Z]{1})$)/;
var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9\s]+\.)+[a-zA-Z]{2,}))$/;
var REQUIRED_ERROR_MESSAGE = "Required!";
var INVALID_ERROR_MESSAGE = "Invalid input!";

// src/components/common/CustomInputFields/Fields.tsx
var EAmount = ({
  fieldProps,
  ...rest
}) => {
  const token = useAppTheme();
  const amountFormatter2 = (value) => {
    if (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };
  return /* @__PURE__ */ React21__namespace.default.createElement(
    proComponents.ProFormDigit,
    {
      fieldProps: {
        prefix: /* @__PURE__ */ React21__namespace.default.createElement(iconsReact.IconCurrencyRupee, { color: token.neutral6, size: 18 }),
        controls: false,
        formatter: amountFormatter2,
        ...fieldProps
      },
      ...rest,
      style: { width: "100%", ...rest == null ? void 0 : rest.style }
    }
  );
};
var EEmail = ({
  fieldProps,
  required = false,
  ...rest
}) => {
  const token = useAppTheme();
  return /* @__PURE__ */ React21__namespace.default.createElement(
    proComponents.ProFormText,
    {
      placeholder: "Enter Email address",
      fieldProps: {
        prefix: /* @__PURE__ */ React21__namespace.default.createElement(iconsReact.IconMail, { color: token.neutral6, size: 19 }),
        ...fieldProps
      },
      required: true,
      ...rest,
      style: { ...rest == null ? void 0 : rest.style },
      rules: [
        {
          validator(_3, value, callback) {
            if (!value) {
              if (required) {
                callback(REQUIRED_ERROR_MESSAGE);
                return;
              }
              return callback();
            }
            if (!emailRegex.test(value)) {
              callback(INVALID_ERROR_MESSAGE);
            } else {
              callback();
            }
          }
        }
      ]
    }
  );
};
var EPan = ({
  fieldProps,
  required = true,
  rules,
  ...rest
}) => {
  const handlePanInput = (e) => {
    var _a, _b;
    e.target.value = (_b = (_a = e == null ? void 0 : e.target) == null ? void 0 : _a.value) == null ? void 0 : _b.toUpperCase();
  };
  return /* @__PURE__ */ React21__namespace.default.createElement(
    proComponents.ProFormText,
    {
      placeholder: "Enter Pan Number",
      required: true,
      fieldProps: {
        onInput: handlePanInput,
        maxLength: 10,
        ...fieldProps
      },
      ...rest,
      style: { ...rest == null ? void 0 : rest.style },
      rules: [
        {
          validator(_3, value, callback) {
            if (!value) {
              if (required) {
                callback(REQUIRED_ERROR_MESSAGE);
                return;
              }
              return callback();
            }
            if (!panRegex.test(value)) {
              callback(INVALID_ERROR_MESSAGE);
            } else {
              callback();
            }
          }
        }
      ]
    }
  );
};
var EGstNo = ({
  fieldProps,
  required = true,
  ...rest
}) => {
  const handlePanInput = (e) => {
    var _a, _b;
    e.target.value = (_b = (_a = e == null ? void 0 : e.target) == null ? void 0 : _a.value) == null ? void 0 : _b.toUpperCase();
  };
  return /* @__PURE__ */ React21__namespace.default.createElement(
    proComponents.ProFormText,
    {
      placeholder: "Enter GST Number",
      fieldProps: {
        onInput: handlePanInput,
        maxLength: 15,
        ...fieldProps
      },
      required: true,
      ...rest,
      style: { ...rest == null ? void 0 : rest.style },
      rules: [
        {
          validator(_3, value, callback) {
            if (!value) {
              if (required) {
                callback(REQUIRED_ERROR_MESSAGE);
                return;
              }
              return callback();
            }
            if (!gstRegex.test(value)) {
              callback(INVALID_ERROR_MESSAGE);
            } else {
              callback();
            }
          }
        }
      ]
    }
  );
};
var EPinCode = ({
  fieldProps,
  ...rest
}) => {
  const token = useAppTheme();
  return /* @__PURE__ */ React21__namespace.default.createElement(
    proComponents.ProFormDigit,
    {
      fieldProps: {
        prefix: /* @__PURE__ */ React21__namespace.default.createElement(iconsReact.IconMapPinCode, { color: token.neutral6, size: 17 }),
        maxLength: 6,
        controls: false,
        formatter(value) {
          if (value) {
            return value.toString().replace(",", "");
          }
          return "";
        },
        ...fieldProps
      },
      ...rest,
      style: { width: "100%", ...rest == null ? void 0 : rest.style }
    }
  );
};
var ELatitude = ({
  fieldProps,
  type = "latitude",
  ...rest
}) => {
  const token = useAppTheme();
  return /* @__PURE__ */ React21__namespace.default.createElement(
    proComponents.ProFormDigit,
    {
      fieldProps: {
        precision: 6,
        maxLength: 11,
        controls: false,
        prefix: type === "latitude" ? /* @__PURE__ */ React21__namespace.default.createElement(iconsReact.IconWorldLatitude, { color: token.neutral6, size: 16 }) : /* @__PURE__ */ React21__namespace.default.createElement(iconsReact.IconWorldLongitude, { color: token.neutral6, size: 16 }),
        ...fieldProps
      },
      placeholder: type,
      ...rest,
      style: { width: "100%", ...rest == null ? void 0 : rest.style }
    }
  );
};
var ProDigitNumber = ({
  fieldProps,
  ...rest
}) => {
  return /* @__PURE__ */ React21__namespace.default.createElement(
    proComponents.ProFormDigit,
    {
      fieldProps: {
        precision: 2,
        formatter: (value) => `${value}`.replace(/,/g, ""),
        ...fieldProps
      },
      ...rest
    }
  );
};
var ProWeightNumber = ({
  fieldProps,
  ...rest
}) => {
  return /* @__PURE__ */ React21__namespace.default.createElement(
    proComponents.ProFormDigit,
    {
      fieldProps: {
        precision: 3,
        ...fieldProps
      },
      ...rest
    }
  );
};
var ProAmount = ({
  fieldProps,
  ...rest
}) => {
  const token = useAppTheme();
  const amountFormatter2 = (value) => {
    if (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };
  return /* @__PURE__ */ React21__namespace.default.createElement(
    proComponents.ProFormDigit,
    {
      fieldProps: {
        precision: 2,
        prefix: /* @__PURE__ */ React21__namespace.default.createElement(iconsReact.IconCurrencyRupee, { color: token.neutral6, size: 18 }),
        controls: false,
        formatter: amountFormatter2,
        ...fieldProps
      },
      ...rest,
      style: { width: "100%", ...rest == null ? void 0 : rest.style }
    }
  );
};
var ProAmountField = ({
  amount,
  iconColor,
  textProps,
  info,
  suffix,
  infoTitle,
  popoverProps
}) => {
  const token = useAppTheme();
  iconColor = iconColor || token.neutral7;
  return /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { align: "center", gap: 4 }, /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { flex: 1, align: "center" }, /* @__PURE__ */ React21__namespace.default.createElement(iconsReact.IconCurrencyRupee, { size: 16, color: iconColor }), /* @__PURE__ */ React21__namespace.default.createElement(EText, { ...textProps }, amountFormatter(amount)), typeof suffix === "string" ? /* @__PURE__ */ React21__namespace.default.createElement(EText, { ...textProps, color: token.neutral7 }, "\xA0", suffix) : suffix), info && /* @__PURE__ */ React21__namespace.default.createElement(
    EPopover,
    {
      title: infoTitle,
      showArrow: true,
      content: info,
      trigger: ["hover"],
      ...popoverProps
    },
    /* @__PURE__ */ React21__namespace.default.createElement(icons.InfoCircleOutlined, { color: token.neutral8 })
  ));
};
var ProDatePicker = ({
  name,
  width = constants.FullColumnWIdth,
  fieldProps,
  ...rest
}) => {
  const [date, setDate] = ahooks.useSafeState(void 0);
  const handleInputChange = (e) => {
    var _a;
    const input = (_a = e == null ? void 0 : e.target) == null ? void 0 : _a.value;
    setDate(input);
  };
  return /* @__PURE__ */ React21__namespace.default.createElement(
    proComponents.ProFormDatePicker,
    {
      name,
      width,
      fieldProps: {
        ...fieldProps,
        format: constants.DEFAULT_DATE_FORMAT,
        picker: "date",
        value: date,
        onChange: handleInputChange,
        onBlur: (e) => {
          if (e.target.value.length > 0) {
            const parsedDateTime = parseDateTime(e.target.value);
            if (parsedDateTime) {
              e.target.value = formatDateTime(parsedDateTime);
              setDate(formatDateTime(parsedDateTime));
            }
          }
        }
      },
      transform: () => {
        if (date) {
          const isDateValid = dayjs2__default.default(date, constants.DEFAULT_DATE_FORMAT, true).isValid();
          const formatValue = isDateValid ? date : dayjs2__default.default(date).format(constants.DEFAULT_DATE_FORMAT);
          return {
            [name]: dayjs2__default.default(formatValue, constants.DEFAULT_DATE_FORMAT).format(
              constants.DEFAULT_BACKEND_DATE_FORMAT
            )
          };
        } else {
          return "";
        }
      },
      ...rest
    }
  );
};
var ELoader = ({
  width = "100%",
  height = "100%",
  ...rest
}) => {
  return (
    // Note: Render a Flex container with centered content and specified width and height
    /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Flex,
      {
        justify: "center",
        align: "center",
        vertical: true,
        flex: 1,
        style: { width, height }
      },
      /* @__PURE__ */ React21__namespace.default.createElement(
        antd.Spin,
        {
          size: "large",
          tip: null,
          spinning: true,
          ...rest,
          style: { zIndex: 2e3, ...rest == null ? void 0 : rest.style }
        }
      )
    )
  );
};
var MainLoader = () => {
  return /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { justify: "center", align: "center", flex: 1, style: { height: "100vh" } }, /* @__PURE__ */ React21__namespace.default.createElement(antd.Spin, { size: "large", tip: null, spinning: true, style: { zIndex: 2e3 } }));
};
var PageLoader = () => {
  return /* @__PURE__ */ React21__namespace.default.createElement(
    antd.Flex,
    {
      style: {
        height: "60vh"
      },
      justify: "center",
      align: "center",
      flex: 1
    },
    /* @__PURE__ */ React21__namespace.default.createElement(antd.Spin, null)
  );
};
var TableInput = ({
  type = "text",
  ...rest
}) => {
  switch (type) {
    case "digit":
      return /* @__PURE__ */ React21__namespace.default.createElement(
        proComponents.ProFormDigit,
        {
          ...rest,
          style: { width: "100%" }
        }
      );
    case "amount":
      return /* @__PURE__ */ React21__namespace.default.createElement(ProAmount, { ...rest, noStyle: false });
    default:
      return (
        // NOTE: Default Input component with themed styles
        /* @__PURE__ */ React21__namespace.default.createElement(proComponents.ProFormText, { ...rest })
      );
  }
};
var useTanstackTable = () => {
  const columnHelper = reactTable.createColumnHelper();
  const rowSelectionColumn = columnHelper.display({
    id: "rowSelection",
    enablePinning: false,
    enableHiding: false,
    header: ({ table }) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const isArray3 = Array.isArray(
        (_c = (_b = (_a = table.options) == null ? void 0 : _a.meta) == null ? void 0 : _b.rowSelection) == null ? void 0 : _c.selections
      );
      return ((_f = (_e = (_d = table.options) == null ? void 0 : _d.meta) == null ? void 0 : _e.rowSelection) == null ? void 0 : _f.selectionType) !== "radio" ? /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { justify: "flex-start", align: "center" }, /* @__PURE__ */ React21__namespace.default.createElement(
        IndeterminateCheckbox,
        {
          ...{
            checked: table.getIsAllPageRowsSelected(),
            indeterminate: table.getIsSomePageRowsSelected(),
            onChange: table.getToggleAllPageRowsSelectedHandler()
          }
        }
      ), isArray3 || ((_i = (_h = (_g = table.options) == null ? void 0 : _g.meta) == null ? void 0 : _h.rowSelection) == null ? void 0 : _i.selections) ? /* @__PURE__ */ React21__namespace.default.createElement(
        EButton,
        {
          type: "text",
          icon: /* @__PURE__ */ React21__namespace.default.createElement(EIcon, { icon: "material-symbols:add-rounded" })
        }
      ) : void 0) : void 0;
    },
    cell: ({ row, getValue }) => {
      return row.getCanMultiSelect() ? /* @__PURE__ */ React21__namespace.default.createElement("div", { className: "text-start" }, /* @__PURE__ */ React21__namespace.default.createElement(
        IndeterminateCheckbox,
        {
          ...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler()
          }
        }
      ), getValue()) : /* @__PURE__ */ React21__namespace.default.createElement("div", { className: " text-center" }, /* @__PURE__ */ React21__namespace.default.createElement(
        antd.Radio,
        {
          style: {
            marginInlineEnd: 0
          },
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          onChange: row.getToggleSelectedHandler(),
          onClick: (e) => e.stopPropagation()
        }
      ));
    },
    size: 8
  });
  const expandableColumn = columnHelper.display({
    id: "expandable",
    enablePinning: false,
    enableHiding: false,
    header: "",
    size: 20,
    cell: ({ row }) => row.getCanExpand() ? /* @__PURE__ */ React21__namespace.default.createElement(
      "button",
      {
        className: "ml-8",
        ...{
          onClick: row.getToggleExpandedHandler(),
          style: { cursor: "pointer" }
        }
      },
      row.getIsExpanded() ? "\u{1F447}" : "\u{1F449}"
    ) : "\u{1F535}"
  });
  const indexColumn = columnHelper.display({
    id: "index",
    enablePinning: false,
    enableHiding: false,
    header: "",
    size: 10,
    cell: ({ table, row }) => {
      const allRows = table.getFilteredRowModel().rows;
      const visualIndex = allRows.findIndex((r) => r.id === row.id) + 1;
      return /* @__PURE__ */ React21__namespace.default.createElement(proComponents.IndexColumn, { border: true }, visualIndex);
    }
  });
  const token = useAppTheme();
  const getFilterColumn = (threeDot) => {
    return columnHelper.display({
      id: "filter",
      size: 40,
      header: "",
      cell: (info) => /* @__PURE__ */ React21__namespace.default.createElement("a", { onClick: (event) => event.stopPropagation() }, /* @__PURE__ */ React21__namespace.default.createElement(EIcon, { icon: "bi:three-dots-vertical", color: token.neutral7 }))
    });
  };
  const [rowSelectionState, setRowSelectionState] = React21.useState(
    {}
  );
  const [selectedRowKeys, setSelectedRowKeys] = React21.useState([]);
  return {
    rowSelectionState,
    setRowSelectionState,
    columnHelper,
    rowSelectionColumn,
    getFilterColumn,
    expandableColumn,
    selectedRowKeys,
    setSelectedRowKeys,
    indexColumn
  };
};

// src/components/customIntegration/Tanstack/tableUtils.tsx
var getHiddenColumns = (columns) => {
  const hiddenColumns = columns.reduce((acc, column) => {
    var _a;
    return {
      ...acc,
      [column.id || column.accessorKey]: !((_a = column == null ? void 0 : column.meta) == null ? void 0 : _a.hidden)
    };
  }, {});
  return hiddenColumns;
};
var getRowIds = (table) => {
  var _a;
  return ___default.default.keys(___default.default.pickBy((_a = table == null ? void 0 : table.getState()) == null ? void 0 : _a.rowSelection, ___default.default.identity));
};
var getSelectedRowModel = (table) => {
  var _a, _b;
  return (_b = (_a = table == null ? void 0 : table.getSelectedRowModel()) == null ? void 0 : _a.flatRows) == null ? void 0 : _b.map((row) => row.original);
};
var getCellSize = (type) => {
  switch (type) {
    case "small":
      return "py-2";
    case "middle":
      return "py-4";
    case "large":
      return "py-6";
    default:
      return "py-2";
  }
};
var getBordered = (bordered) => {
  return bordered ? "border" : "";
};
var handlePinColumn = (columnId, pinType, table) => {
  var _a, _b, _c;
  const currentPinned = table.getState().columnPinning;
  const newPinned = { ...currentPinned };
  if (pinType === "right") {
    newPinned.left = ((_a = newPinned.left) == null ? void 0 : _a.filter((id) => id !== columnId)) || [];
    newPinned.right = ((_b = newPinned.right) == null ? void 0 : _b.filter((id) => id !== columnId)) || [];
    const filterIndex = newPinned.right.findIndex((id) => id === "filter");
    if (filterIndex !== -1) {
      newPinned.right.splice(filterIndex, 0, columnId);
    } else {
      newPinned.right.push(columnId);
    }
  } else if (pinType === "left") {
    newPinned.right = ((_c = newPinned.right) == null ? void 0 : _c.filter((id) => id !== columnId)) || [];
    newPinned.left = [...newPinned.left || [], columnId];
  }
  table.setColumnPinning(newPinned);
};
var getExtraColumns = ({
  rowSelection,
  rowExpandable
}) => {
  const { rowSelectionColumn, expandableColumn } = useTanstackTable();
  const allExtraColumns = {
    rowSelection: rowSelectionColumn,
    rowExpandable: expandableColumn
  };
  return Object.values(
    ___default.default.pickBy(allExtraColumns, (_3, key) => {
      return rowSelection && key === "rowSelection" || rowExpandable && key === "rowExpandable";
    })
  );
};
var isIndeterminate = (selected, allOptions) => {
  return (selected == null ? void 0 : selected.length) > 0 ? selected == null ? void 0 : selected.some((item) => allOptions == null ? void 0 : allOptions.includes(item)) : false;
};
var isCheckAll = (selected, allOptions) => (selected == null ? void 0 : selected.length) === (allOptions == null ? void 0 : allOptions.length) && (allOptions == null ? void 0 : allOptions.length) > 0;
var getColumnAggregation = (rows, accessor) => {
  const values = rows.map((row) => row[accessor]).filter(Boolean);
  return {
    sum: values.reduce((a, b) => a + (Number(b) || 0), 0),
    avg: values.length ? values.reduce((a, b) => a + (Number(b) || 0), 0) / values.length : 0,
    min: Math.min(...values.map((v) => Number(v) || 0)),
    max: Math.max(...values.map((v) => Number(v) || 0)),
    count: values.length
  };
};

// src/components/customIntegration/Tanstack/tableConstant.tsx
var PAGINATION_PAGE_SIZE_OPTIONS = [
  { value: "10", label: "10 / Page" },
  { value: "20", label: "20 / Page" },
  { value: "50", label: "50 / Page" },
  { value: "100", label: "100 / Page" }
];
var FilterDropDown = ({ column }) => {
  var _a, _b, _c, _d;
  const { filterVariant = "search", valueEnum } = (_a = column.columnDef.meta) != null ? _a : {};
  const token = useAppTheme();
  const [value, setValue] = ahooks.useSafeState(void 0);
  const searchInputRef = React21.useRef(null);
  const [isDropdownVisible, setIsDropdownVisible] = React21.useState(false);
  const sortedUniqueValues = React21.useMemo(
    () => filterVariant === "range" ? [] : (
      // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
      Array.from(column.getFacetedUniqueValues().keys()).sort().slice(0, 5e3).filter((item) => item)
    ),
    [column.getFacetedUniqueValues(), filterVariant, isDropdownVisible]
  );
  const items = [
    {
      key: "search",
      label: /* @__PURE__ */ React21__namespace.default.createElement(
        antd.Input,
        {
          ref: searchInputRef,
          width: "sm",
          type: "text",
          onFocusCapture: (e) => {
            var _a2;
            if (e.target.value) {
              (_a2 = searchInputRef.current) == null ? void 0 : _a2.select();
            }
          },
          value,
          onChange: (e) => {
            var _a2;
            setValue((_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.value);
            ___default.default.debounce(() => column == null ? void 0 : column.setFilterValue(e.target.value), 300)();
          },
          placeholder: `Search...`,
          onClick: (e) => e.stopPropagation()
        }
      ),
      disabled: filterVariant !== "search"
    },
    {
      key: "date",
      label: /* @__PURE__ */ React21__namespace.default.createElement(
        ProDatePicker,
        {
          ref: searchInputRef,
          width: "sm",
          fieldProps: {
            open: isDropdownVisible,
            size: "middle",
            value,
            onClick: (e) => e.stopPropagation(),
            onChange: (e) => {
              if (e) {
                setValue(e);
                column == null ? void 0 : column.setFilterValue(
                  dayjs2__default.default(dayjs2__default.default(e).toISOString()).format("YYYY-MM-DD")
                );
              } else {
                setValue(void 0);
                column == null ? void 0 : column.setFilterValue(void 0);
              }
            },
            placeholder: "Select date"
          }
        }
      ),
      disabled: filterVariant !== "date"
    },
    {
      key: "date-range",
      label: /* @__PURE__ */ React21__namespace.default.createElement(
        proComponents.ProFormDateRangePicker,
        {
          fieldProps: {
            showNow: true,
            value,
            onClick: (e) => {
              e.stopPropagation();
              setIsDropdownVisible(true);
            },
            onChange: (e) => {
              if (e) {
                setValue(e);
                column == null ? void 0 : column.setFilterValue([
                  dayjs2__default.default(dayjs2__default.default(e[0]).toISOString()).format("YYYY-MM-DD"),
                  dayjs2__default.default(dayjs2__default.default(e[1]).toISOString()).format("YYYY-MM-DD")
                ]);
                setIsDropdownVisible(false);
              } else {
                setValue(void 0);
                column == null ? void 0 : column.setFilterValue(void 0);
                setIsDropdownVisible(false);
              }
            }
          }
        }
      ),
      disabled: filterVariant !== "date-range"
    },
    {
      key: "multi-select",
      onMouseEnter: () => {
        var _a2;
        (_a2 = searchInputRef.current) == null ? void 0 : _a2.focus();
      },
      label: /* @__PURE__ */ React21__namespace.default.createElement(
        "div",
        {
          onClick: (e) => {
            e.stopPropagation();
          },
          style: { width: "100%", padding: "4px" }
        },
        /* @__PURE__ */ React21__namespace.default.createElement(
          antd.Checkbox,
          {
            className: "mb-3",
            indeterminate: _.isArray(column == null ? void 0 : column.getFilterValue()) ? isIndeterminate(
              column == null ? void 0 : column.getFilterValue(),
              sortedUniqueValues
            ) && !isCheckAll(
              column == null ? void 0 : column.getFilterValue(),
              sortedUniqueValues
            ) : false,
            checked: isCheckAll(
              column == null ? void 0 : column.getFilterValue(),
              sortedUniqueValues
            ),
            onChange: (e) => {
              if (e.target.checked) {
                column == null ? void 0 : column.setFilterValue(sortedUniqueValues);
              } else {
                column == null ? void 0 : column.setFilterValue(void 0);
              }
            }
          },
          "Select all items"
        ),
        /* @__PURE__ */ React21__namespace.default.createElement("div", { className: "mb-2" }, sortedUniqueValues == null ? void 0 : sortedUniqueValues.map((item) => {
          var _a2;
          return /* @__PURE__ */ React21__namespace.default.createElement("div", { className: "pl-5", key: item }, /* @__PURE__ */ React21__namespace.default.createElement(
            antd.Checkbox,
            {
              className: "mb-1 hover:bg-gray-100 w-full rounded-sm",
              style: {
                color: token.neutral9
              },
              name: item,
              checked: (_a2 = column == null ? void 0 : column.getFilterValue()) == null ? void 0 : _a2.includes(
                item
              ),
              onChange: (e) => {
                e.stopPropagation();
                column == null ? void 0 : column.setFilterValue((prev) => {
                  if (prev == null ? void 0 : prev.includes(item)) {
                    return prev == null ? void 0 : prev.filter((i) => i !== item);
                  } else {
                    return [...prev != null ? prev : [], item];
                  }
                });
              }
            },
            item
          ));
        })),
        /* @__PURE__ */ React21__namespace.default.createElement(
          EDividerWithNoStyle,
          {
            style: {
              marginInline: "-18px",
              marginTop: "0",
              marginBottom: 4,
              width: "calc(100% + 34px)"
            }
          }
        ),
        /* @__PURE__ */ React21__namespace.default.createElement(
          Link__default.default,
          {
            disabled: _.isArray(column.getFilterValue()) ? ((_b = column.getFilterValue()) == null ? void 0 : _b.length) === 0 : true,
            onClick: (e) => {
              e.stopPropagation();
              column.setFilterValue(void 0);
            }
          },
          "Reset"
        )
      ),
      onClick: (e) => e.stopPropagation(),
      disabled: filterVariant !== "multi-select"
    },
    {
      key: "select",
      onMouseEnter: () => {
        var _a2;
        (_a2 = searchInputRef.current) == null ? void 0 : _a2.focus();
      },
      label: /* @__PURE__ */ React21__namespace.default.createElement(
        "select",
        {
          style: {
            width: "100%",
            padding: "4px"
          },
          onChange: (e) => {
            column.setFilterValue(e.target.value);
            setValue(e.target.value);
          },
          value: (_c = column.getFilterValue()) == null ? void 0 : _c.toString(),
          onClick: (e) => e.stopPropagation()
        },
        /* @__PURE__ */ React21__namespace.default.createElement("option", { value: "" }, "All"),
        sortedUniqueValues.map((value2) => {
          var _a2;
          return (
            // note dynamically generated select options from faceted values feature
            /* @__PURE__ */ React21__namespace.default.createElement("option", { value: value2, key: value2 }, valueEnum ? (_a2 = valueEnum == null ? void 0 : valueEnum[value2]) == null ? void 0 : _a2.text : value2)
          );
        })
      ),
      disabled: filterVariant !== "select"
    }
  ].filter((item) => !item.disabled);
  return /* @__PURE__ */ React21__namespace.default.createElement(antd.Popover, { content: (_d = items[0]) == null ? void 0 : _d.label, title: void 0, trigger: "click" }, filterVariant === "search" ? value ? /* @__PURE__ */ React21__namespace.default.createElement(
    iconsReact.IconZoomExclamation,
    {
      size: 16,
      style: {
        color: token.info7
      }
    }
  ) : /* @__PURE__ */ React21__namespace.default.createElement(
    icons.SearchOutlined,
    {
      onClick: (e) => {
        var _a2;
        e.stopPropagation();
        (_a2 = searchInputRef.current) == null ? void 0 : _a2.focus();
      },
      style: {
        marginRight: 2,
        marginLeft: 12,
        color: value ? `${token.StormyNight}` : `${token.neutral7}`
      }
    }
  ) : /* @__PURE__ */ React21__namespace.default.createElement(
    icons.FilterOutlined,
    {
      onClick: (e) => {
        var _a2;
        e.stopPropagation();
        (_a2 = searchInputRef.current) == null ? void 0 : _a2.focus();
      },
      style: {
        marginRight: 2,
        marginLeft: 12,
        fontWeight: 500,
        color: value || column.getFilterValue() ? `${token.info7}` : `${token.neutral7}`
      }
    }
  ));
};
var ColumnDropDown = (table) => {
  var _a, _b;
  const token = useAppTheme();
  const defaultPinnedColumns = ["rowSelection", "filter"];
  const handleColumnVisibilityChange = (columnId, isVisible) => {
    table.column.setColumnVisibility((prev) => ({
      ...prev,
      [columnId]: isVisible
    }));
  };
  const allColumns = (_b = (_a = table == null ? void 0 : table.column) == null ? void 0 : _a.getAllLeafColumns()) == null ? void 0 : _b.filter((column) => !defaultPinnedColumns.includes(column.id));
  const leftColumns = React21.useMemo(() => {
    return allColumns == null ? void 0 : allColumns.filter((column) => column.getIsPinned() === "left");
  }, [table]);
  const rightColumns = React21.useMemo(() => {
    return allColumns == null ? void 0 : allColumns.filter((column) => column.getIsPinned() === "right");
  }, [table]);
  const unPinnedColumns = React21.useMemo(() => {
    return allColumns == null ? void 0 : allColumns.filter(
      (column) => !column.getIsPinned() && (column == null ? void 0 : column.getCanPin())
    );
  }, [table]);
  const Content = () => {
    return /* @__PURE__ */ React21__namespace.default.createElement(React21__namespace.default.Fragment, null, leftColumns.length > 0 && /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { vertical: true, gap: 8, flex: 1 }, /* @__PURE__ */ React21__namespace.default.createElement(EText, null, "Fixed to Left"), leftColumns.map((column) => {
      return /* @__PURE__ */ React21__namespace.default.createElement(React21__namespace.default.Fragment, null, /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { key: column.id, gap: 8 }, /* @__PURE__ */ React21__namespace.default.createElement(
        antd.Checkbox,
        {
          checked: column.getIsVisible(),
          disabled: !column.getCanHide(),
          onChange: column.getToggleVisibilityHandler()
        }
      ), " ", /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { flex: 1, justify: "space-between" }, /* @__PURE__ */ React21__namespace.default.createElement(EText, null, column.columnDef.header), /* @__PURE__ */ React21__namespace.default.createElement(antd.Space.Compact, null, column.getIsPinned() === "left" ? /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, null, /* @__PURE__ */ React21__namespace.default.createElement(ETooltip, { title: "Unpin" }, /* @__PURE__ */ React21__namespace.default.createElement(
        icons.VerticalAlignMiddleOutlined,
        {
          onClick: () => {
            column == null ? void 0 : column.pin(false);
          },
          className: "cursor-pointer"
        }
      )), /* @__PURE__ */ React21__namespace.default.createElement(ETooltip, { title: "Pin Right" }, /* @__PURE__ */ React21__namespace.default.createElement(
        icons.VerticalAlignBottomOutlined,
        {
          onClick: () => {
            column == null ? void 0 : column.pin("right");
            handlePinColumn(
              column.id,
              "right",
              table.column
            );
          },
          className: "cursor-pointer"
        }
      ))) : /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, null, /* @__PURE__ */ React21__namespace.default.createElement(ETooltip, { title: "Pin Left" }, /* @__PURE__ */ React21__namespace.default.createElement(
        icons.VerticalAlignTopOutlined,
        {
          onClick: () => {
            column == null ? void 0 : column.pin("left");
          },
          className: "cursor-pointer"
        }
      )), /* @__PURE__ */ React21__namespace.default.createElement(ETooltip, { title: "Unpin" }, /* @__PURE__ */ React21__namespace.default.createElement(
        icons.VerticalAlignMiddleOutlined,
        {
          onClick: () => {
            column == null ? void 0 : column.pin(false);
          },
          className: "cursor-pointer"
        }
      )))))));
    })), (unPinnedColumns == null ? void 0 : unPinnedColumns.length) > 0 && /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { vertical: true, gap: 8, flex: 1 }, /* @__PURE__ */ React21__namespace.default.createElement(EText, null, "Unpinned"), unPinnedColumns == null ? void 0 : unPinnedColumns.map((column) => {
      return /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { key: column.id, gap: 8 }, /* @__PURE__ */ React21__namespace.default.createElement(
        antd.Checkbox,
        {
          checked: column.getIsVisible(),
          disabled: !column.getCanHide(),
          onChange: (e) => handleColumnVisibilityChange(column.id, e.target.checked)
        }
      ), " ", /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { flex: 1, justify: "space-between" }, /* @__PURE__ */ React21__namespace.default.createElement(EText, null, column.columnDef.header), /* @__PURE__ */ React21__namespace.default.createElement(antd.Space.Compact, null, /* @__PURE__ */ React21__namespace.default.createElement(ETooltip, { title: "Pin Left" }, /* @__PURE__ */ React21__namespace.default.createElement(
        icons.VerticalAlignTopOutlined,
        {
          onClick: () => {
            column == null ? void 0 : column.pin("left");
          },
          className: "cursor-pointer"
        }
      )), /* @__PURE__ */ React21__namespace.default.createElement(ETooltip, { title: "Pin Right" }, /* @__PURE__ */ React21__namespace.default.createElement(
        icons.VerticalAlignBottomOutlined,
        {
          onClick: () => {
            column == null ? void 0 : column.pin("right");
            handlePinColumn(
              column.id,
              "right",
              table.column
            );
          },
          className: "cursor-pointer"
        }
      )))));
    })), rightColumns.length > 0 && /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { vertical: true, gap: 8, flex: 1 }, /* @__PURE__ */ React21__namespace.default.createElement(EText, null, "Fixed to right"), rightColumns.map((column) => {
      return /* @__PURE__ */ React21__namespace.default.createElement(React21__namespace.default.Fragment, null, /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { key: column.id, gap: 8 }, /* @__PURE__ */ React21__namespace.default.createElement(
        antd.Checkbox,
        {
          checked: column.getIsVisible(),
          disabled: !column.getCanHide(),
          onChange: column.getToggleVisibilityHandler()
        }
      ), " ", /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { flex: 1, justify: "space-between" }, /* @__PURE__ */ React21__namespace.default.createElement(EText, null, column.columnDef.header), /* @__PURE__ */ React21__namespace.default.createElement(antd.Space.Compact, null, column.getIsPinned() === "left" ? /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, null, /* @__PURE__ */ React21__namespace.default.createElement(ETooltip, { title: "Pin Right" }, /* @__PURE__ */ React21__namespace.default.createElement(
        icons.VerticalAlignBottomOutlined,
        {
          onClick: () => {
            column == null ? void 0 : column.pin("right");
          },
          className: "cursor-pointer"
        }
      )), /* @__PURE__ */ React21__namespace.default.createElement(ETooltip, { title: "Unpin" }, /* @__PURE__ */ React21__namespace.default.createElement(
        icons.VerticalAlignMiddleOutlined,
        {
          onClick: () => {
            column == null ? void 0 : column.pin(false);
          },
          className: "cursor-pointer"
        }
      ))) : /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, null, /* @__PURE__ */ React21__namespace.default.createElement(ETooltip, { title: "Unpin" }, /* @__PURE__ */ React21__namespace.default.createElement(
        icons.VerticalAlignMiddleOutlined,
        {
          onClick: () => {
            column == null ? void 0 : column.pin(false);
          },
          className: "cursor-pointer"
        }
      )), /* @__PURE__ */ React21__namespace.default.createElement(ETooltip, { title: "Pin Left" }, /* @__PURE__ */ React21__namespace.default.createElement(
        icons.VerticalAlignTopOutlined,
        {
          onClick: () => {
            column == null ? void 0 : column.pin("left");
          },
          className: "cursor-pointer"
        }
      )))))));
    })));
  };
  const Title = () => {
    var _a2, _b2;
    return /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { gap: 8 }, /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Checkbox,
      {
        checked: (_a2 = table == null ? void 0 : table.column) == null ? void 0 : _a2.getIsAllColumnsVisible(),
        onChange: (_b2 = table == null ? void 0 : table.column) == null ? void 0 : _b2.getToggleAllColumnsVisibilityHandler()
      }
    ), /* @__PURE__ */ React21__namespace.default.createElement(EText, null, "Columns Display"));
  };
  return /* @__PURE__ */ React21__namespace.default.createElement(
    EPopover,
    {
      placement: "bottomRight",
      content: /* @__PURE__ */ React21__namespace.default.createElement(Content, null),
      title: /* @__PURE__ */ React21__namespace.default.createElement(Title, null),
      trigger: "click",
      arrow: false
    },
    /* @__PURE__ */ React21__namespace.default.createElement(
      icons.SettingOutlined,
      {
        className: "cursor-pointer text-md",
        style: {
          color: token.neutral10
        }
      }
    )
  );
};
var SortableHeader = ({ header }) => {
  const token = useAppTheme();
  const { column } = header;
  const getIconColor = (direction) => column.getIsSorted() === direction ? token.primary7 : token.neutral7;
  const sortingIcons = /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { className: "cursor-pointer", vertical: true, gap: 0 }, /* @__PURE__ */ React21__namespace.default.createElement(
    icons.CaretUpOutlined,
    {
      style: {
        color: getIconColor("asc"),
        fontSize: "12px",
        margin: "0"
      }
    }
  ), /* @__PURE__ */ React21__namespace.default.createElement(
    icons.CaretDownOutlined,
    {
      style: {
        color: getIconColor("desc"),
        fontSize: "12px",
        margin: "0"
      }
    }
  ));
  return /* @__PURE__ */ React21__namespace.default.createElement("div", { className: "font-bold" }, sortingIcons);
};
var EditableCell = ({
  valueType = "text",
  getValue,
  row: { index },
  column: { id },
  table,
  inputItemProps = {},
  form
}) => {
  var _a;
  const initialValue = (_a = inputItemProps == null ? void 0 : inputItemProps.initialValue) != null ? _a : getValue();
  const searchInputRef = React21.useRef(null);
  const [value, setValue] = ahooks.useSafeState(initialValue);
  const onBlur = () => {
    var _a2;
    (_a2 = table.options.meta) == null ? void 0 : _a2.updateData(index, id, value);
  };
  const handleKeyDown = React21.useCallback((e) => {
    var _a2;
    if (e.key.length === 1 && e.key !== "enter") {
      (_a2 = searchInputRef.current) == null ? void 0 : _a2.focus();
    }
  }, []);
  React21.useEffect(() => {
    setValue(initialValue);
  }, [initialValue, form.getFieldError(id)[0]]);
  return /* @__PURE__ */ React21__namespace.default.createElement(
    ETooltip,
    {
      title: form.getFieldError(id)[0],
      trigger: ["hover", "focus", "click"],
      forceRender: true,
      autoAdjustOverflow: true,
      placement: "bottom"
    },
    /* @__PURE__ */ React21__namespace.default.createElement("div", { key: id, tabIndex: 0, onKeyDown: handleKeyDown }, /* @__PURE__ */ React21__namespace.default.createElement(
      TableInput,
      {
        tooltip: form.getFieldError(id)[0],
        name: id,
        ...inputItemProps,
        type: valueType,
        size: "middle",
        initialValue: value,
        hasFeedback: true,
        fieldProps: {
          ref: searchInputRef,
          ...inputItemProps.fieldProps,
          size: "middle",
          value,
          onChange: (e) => {
            var _a2;
            if (typeof e === "object") {
              setValue((_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.value);
            } else {
              setValue(e);
            }
          },
          onBlur,
          onKeyDown: (e) => {
            if (e.key === "Enter") {
              onBlur();
            }
          },
          onFocusCapture: (e) => {
            var _a2;
            if (e.target.value) {
              (_a2 = searchInputRef.current) == null ? void 0 : _a2.select();
            }
          }
        },
        rules: inputItemProps == null ? void 0 : inputItemProps.rules
      }
    ))
  );
};
var SortableColumns = ({ children, id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = sortable.useSortable({ id });
  return /* @__PURE__ */ React21__namespace.default.createElement(
    "div",
    {
      ref: setNodeRef,
      style: {
        transform: `translateY(${transform == null ? void 0 : transform.y}px)`,
        transition,
        ...attributes
      },
      ...listeners
    },
    children
  );
};
var IndeterminateCheckbox = ({
  indeterminate,
  className = "",
  ...rest
}) => {
  const ref = React21.useRef(null);
  React21.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);
  return /* @__PURE__ */ React21__namespace.default.createElement(
    "input",
    {
      type: "checkbox",
      ref,
      size: 200,
      className: className + " cursor-pointer",
      ...rest
    }
  );
};
var TanstackTablePagination = ({
  tableInstance,
  table
}) => {
  const { pageSize, pageIndex } = tableInstance.pagination;
  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, table == null ? void 0 : table.getRowCount());
  const token = useAppTheme();
  return /* @__PURE__ */ React21__namespace.default.createElement(
    antd.Flex,
    {
      justify: "space-between",
      align: "center",
      gap: 4,
      style: { marginBottom: 16 },
      wrap: "wrap"
    },
    /* @__PURE__ */ React21__namespace.default.createElement("div", { className: "flex items-center gap-2 justify-end align-middle" }, /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Flex,
      {
        align: "center",
        justify: "center",
        gap: 3,
        wrap: "wrap",
        style: { width: "max-content", marginRight: 16 }
      },
      /* @__PURE__ */ React21__namespace.default.createElement(EText, { fontSize: "12px", color: token.neutral7, fontWeight: "500" }, "Displaying"),
      /* @__PURE__ */ React21__namespace.default.createElement(EText, { fontWeight: "500" }, startRow.toLocaleString(), " - ", endRow.toLocaleString()),
      /* @__PURE__ */ React21__namespace.default.createElement(EText, { fontSize: "12px", color: token.neutral7, fontWeight: "500" }, "out of"),
      /* @__PURE__ */ React21__namespace.default.createElement(EText, { fontWeight: "500" }, table.getRowCount().toLocaleString(), " ")
    ), /* @__PURE__ */ React21__namespace.default.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React21__namespace.default.createElement(EText, { fontSize: "12px", color: token.neutral7 }, "Page"), /* @__PURE__ */ React21__namespace.default.createElement("div", null, /* @__PURE__ */ React21__namespace.default.createElement(EText, { fontWeight: "500" }, table.getState().pagination.pageIndex + 1, " "), /* @__PURE__ */ React21__namespace.default.createElement(EText, { fontSize: "12px", color: token.neutral7 }, "of ", ""), /* @__PURE__ */ React21__namespace.default.createElement(EText, { fontWeight: "500" }, table.getPageCount().toLocaleString()))), /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Select,
      {
        value: table.getState().pagination.pageSize.toString(),
        onChange: (e) => {
          table.setPageSize(Number(e));
        },
        style: { width: 120 },
        size: "small",
        options: PAGINATION_PAGE_SIZE_OPTIONS
      }
    )),
    /* @__PURE__ */ React21__namespace.default.createElement("div", { className: "flex items-center gap-2 justify-end" }, /* @__PURE__ */ React21__namespace.default.createElement(ETooltip, { title: "Go to First page" }, /* @__PURE__ */ React21__namespace.default.createElement(
      EButton,
      {
        size: "small",
        style: { fontWeight: 400 },
        className: "border rounded p-1 cursor-pointer",
        onClick: () => table.firstPage(),
        disabled: !table.getCanPreviousPage(),
        type: "link"
      },
      "<<"
    )), /* @__PURE__ */ React21__namespace.default.createElement(
      EButton,
      {
        size: "small",
        style: { fontWeight: 400, fontSize: 13 },
        className: "border rounded p-1 cursor-pointer",
        onClick: () => table.previousPage(),
        disabled: !table.getCanPreviousPage()
      },
      "Prev"
    ), /* @__PURE__ */ React21__namespace.default.createElement(
      EButton,
      {
        size: "small",
        style: { fontWeight: 400, fontSize: 13 },
        className: "border rounded p-1 cursor-pointer",
        onClick: () => table.nextPage(),
        disabled: !table.getCanNextPage()
      },
      "Next"
    ), /* @__PURE__ */ React21__namespace.default.createElement(ETooltip, { title: "Go to last page" }, /* @__PURE__ */ React21__namespace.default.createElement(
      EButton,
      {
        size: "small",
        style: { fontWeight: 400 },
        className: "border rounded p-1 cursor-pointer",
        onClick: () => table.lastPage(),
        disabled: !table.getCanNextPage(),
        type: "link"
      },
      ">>"
    )), /* @__PURE__ */ React21__namespace.default.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React21__namespace.default.createElement(EText, { fontSize: "12px", color: token.neutral7 }, "| Go to page:"), /* @__PURE__ */ React21__namespace.default.createElement(
      antd.InputNumber,
      {
        max: table.getPageCount(),
        min: 1,
        defaultValue: table.getState().pagination.pageIndex + 1,
        onChange: (e) => {
          const page = e ? Number(e) - 1 : 0;
          table.setPageIndex(page);
        },
        size: "small"
      }
    )))
  );
};
var TanstackTableEmpty = () => {
  const token = useAppTheme();
  return /* @__PURE__ */ React21__namespace.default.createElement(
    antd.Flex,
    {
      justify: "center",
      align: "center",
      gap: 41,
      vertical: true,
      style: { marginTop: 43 }
    },
    /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Image,
      {
        src: assets.noDataImg,
        preview: false,
        style: { width: 110, height: 110 }
      }
    ),
    /* @__PURE__ */ React21__namespace.default.createElement(
      EHeading,
      {
        level: 3,
        fontWeight: "500",
        color: token.neutral7,
        style: { marginLeft: 20 }
      },
      "No data found"
    )
  );
};
var TanstackToolbar = React21.forwardRef(
  (props, ref) => {
    var _a;
    const { actions, menu, options, subTitle, table, title } = props;
    const token = useAppTheme();
    const isMenuEmpty = Object.keys(menu || {}).length === 0 && (menu == null ? void 0 : menu.constructor) === Object;
    return /* @__PURE__ */ React21__namespace.default.createElement(React21__namespace.default.Fragment, null, /* @__PURE__ */ React21__namespace.default.createElement(
      antd.Flex,
      {
        justify: "space-between",
        flex: 1,
        gap: 6,
        wrap: "wrap",
        style: {
          marginBlock: 16,
          padding: 16,
          backgroundColor: token.winterWhisper,
          borderRadius: 16
        }
      },
      /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { justify: "flex-start", gap: 8, align: "center", wrap: "wrap" }, isMenuEmpty && (title || subTitle) ? /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { vertical: true, gap: 2 }, typeof title === "string" ? /* @__PURE__ */ React21__namespace.default.createElement(
        EHeading,
        {
          style: {
            marginBottom: 0
          },
          level: 5,
          fontWeight: "500",
          color: token.neutral7
        },
        title
      ) : title, typeof subTitle === "string" ? /* @__PURE__ */ React21__namespace.default.createElement(EText, { color: token.neutral7 }, subTitle) : subTitle) : /* @__PURE__ */ React21__namespace.default.createElement("div", null), isMenuEmpty && (options == null ? void 0 : options.search) ? /* @__PURE__ */ React21__namespace.default.createElement(
        TanstackGlobalFilter,
        {
          ref,
          table,
          options: options == null ? void 0 : options.search
        }
      ) : /* @__PURE__ */ React21__namespace.default.createElement("div", null), (menu == null ? void 0 : menu.type) === "tab" && /* @__PURE__ */ React21__namespace.default.createElement(
        ETab,
        {
          type: "line",
          size: "small",
          tabBarStyle: {
            borderBottom: "none"
          },
          items: menu == null ? void 0 : menu.items,
          activeKey: menu == null ? void 0 : menu.activeKey,
          defaultActiveKey: menu == null ? void 0 : menu.defaultActiveKey,
          onChange: menu == null ? void 0 : menu.onChange
        }
      ), (menu == null ? void 0 : menu.type) === "dropdown" && /* @__PURE__ */ React21__namespace.default.createElement(
        antd.Select,
        {
          options: (_a = menu == null ? void 0 : menu.items) == null ? void 0 : _a.map((item) => ({
            label: item.label,
            value: item.key
          })),
          value: menu == null ? void 0 : menu.activeKey,
          allowClear: false,
          defaultValue: menu == null ? void 0 : menu.defaultActiveKey,
          onChange: menu == null ? void 0 : menu.onChange,
          style: { width: 200 }
        }
      )),
      /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { justify: "flex-end", align: "center", gap: 8, wrap: "wrap" }, !isMenuEmpty && (options == null ? void 0 : options.search) ? /* @__PURE__ */ React21__namespace.default.createElement(
        TanstackGlobalFilter,
        {
          table,
          options: options == null ? void 0 : options.search
        }
      ) : void 0, actions == null ? void 0 : actions.map((Action, index) => /* @__PURE__ */ React21__namespace.default.createElement(React21.Fragment, { key: index }, Action)))
    ));
  }
);
var TanstackTableRowSelection = ({ table, render }) => {
  var _a, _b, _c, _d, _e;
  const token = useAppTheme();
  const rowCount = (Object == null ? void 0 : Object.keys((_a = table.getState()) == null ? void 0 : _a.rowSelection).filter(
    (key) => {
      var _a2;
      return (_a2 = table.getState()) == null ? void 0 : _a2.rowSelection[key];
    }
  ).length) === table.getRowModel().rows.length && (Object == null ? void 0 : Object.keys((_b = table.getState()) == null ? void 0 : _b.rowSelection).filter(
    (key) => {
      var _a2;
      return (_a2 = table.getState()) == null ? void 0 : _a2.rowSelection[key];
    }
  ).length) !== table.getRowCount();
  const selectedRowCount = (_d = Object == null ? void 0 : Object.values(
    (_c = table.getState()) == null ? void 0 : _c.rowSelection
  ).filter((item) => item)) == null ? void 0 : _d.length;
  return /* @__PURE__ */ React21__namespace.default.createElement(
    antd.Flex,
    {
      justify: "space-between",
      flex: 1,
      wrap: "wrap",
      gap: 6,
      style: {
        marginBlock: 16,
        padding: 16,
        backgroundColor: token.winterWhisper,
        borderRadius: 16
      }
    },
    /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { justify: "flex-start", gap: 8, align: "center", wrap: "wrap" }, rowCount ? /* @__PURE__ */ React21__namespace.default.createElement(React21__namespace.default.Fragment, null, /* @__PURE__ */ React21__namespace.default.createElement(EText, { fontWeight: "500", color: token.neutral7 }, "All ", selectedRowCount, " items on this page are selected."), /* @__PURE__ */ React21__namespace.default.createElement(
      EButton,
      {
        type: "link",
        onClick: () => {
          table.toggleAllRowsSelected();
        }
      },
      "Select all \xA0",
      table.getPreFilteredRowModel().rows.length,
      "\xA0 items in the table."
    )) : /* @__PURE__ */ React21__namespace.default.createElement(EText, { fontWeight: "500", color: token.neutral7 }, selectedRowCount, " items selected")),
    // Note: Displaying the 'render' prop if it is passed
    render ? /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { justify: "flex-end" }, render) : /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { justify: "flex-end", align: "center", gap: 8, wrap: "wrap" }, /* @__PURE__ */ React21__namespace.default.createElement(antd.Space, { size: "small" }, render, /* @__PURE__ */ React21__namespace.default.createElement(
      TableClearButton,
      {
        onClick: () => {
          table.resetRowSelection();
        },
        indicator: Object.keys((_e = table.getState()) == null ? void 0 : _e.rowSelection).length
      }
    )))
  );
};
var TanstackGlobalFilter = React21.forwardRef(({ table, options }, ref) => {
  const token = useAppTheme();
  const [searchText, setSearchText] = React21.useState("");
  const searchInputRef = React21.useRef(null);
  reactHotkeysHook.useHotkeys("meta+f", (e) => {
    var _a;
    (_a = searchInputRef.current) == null ? void 0 : _a.focus();
    e.preventDefault();
  });
  const { placeholder, autoFocus } = options;
  React21.useImperativeHandle(ref, () => ({
    reload: () => {
      var _a;
      (_a = table == null ? void 0 : table.options.meta) == null ? void 0 : _a.reload();
    },
    focus: () => {
      var _a;
      (_a = searchInputRef.current) == null ? void 0 : _a.focus();
    },
    blur: () => {
      var _a;
      (_a = searchInputRef.current) == null ? void 0 : _a.blur();
    }
  }));
  return /* @__PURE__ */ React21__namespace.default.createElement(
    antd.Input,
    {
      autoFocus: autoFocus != null ? autoFocus : true,
      ref: searchInputRef,
      style: {
        width: 200,
        borderRadius: 8,
        borderColor: token.neutral7,
        color: token.neutral7
      },
      onFocusCapture: (e) => {
        var _a;
        if (e.target.value) {
          (_a = searchInputRef.current) == null ? void 0 : _a.select();
        }
      },
      onBlur: () => {
        var _a;
        (_a = searchInputRef.current) == null ? void 0 : _a.blur();
      },
      value: searchText,
      onChange: (e) => {
        setSearchText(e.target.value);
        ___default.default.debounce(() => table.setGlobalFilter(e.target.value), 500)();
      },
      placeholder: placeholder || "Search...",
      prefix: /* @__PURE__ */ React21__namespace.default.createElement(
        icons.SearchOutlined,
        {
          style: {
            color: token.neutral7,
            fontSize: 16
          }
        }
      )
    }
  );
});
TanstackGlobalFilter.displayName = "TanstackGlobalFilter";
TanstackToolbar.displayName = "TanstackToolbar";
var getCommonPinningStyles = (column, isRow) => {
  var _a, _b;
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn = isPinned === "left" && column.getIsLastColumn("left");
  const isFirstRightPinnedColumn = isPinned === "right" && column.getIsFirstColumn("right");
  const leftValue = column.columns.length > 0 ? `${(_a = column.columns[0]) == null ? void 0 : _a.getStart("left")}px` : `${column.getStart("left")}px`;
  const rightValue = column.columns.length > 0 ? `${(_b = column.columns[column.columns.length - 1]) == null ? void 0 : _b.getAfter("right")}px` : `${column.getAfter("right")}px`;
  return {
    boxShadow: isLastLeftPinnedColumn ? "-4px 0 4px -4px gray inset" : isFirstRightPinnedColumn ? "4px 0 4px -4px gray inset" : void 0,
    left: isPinned === "left" ? leftValue : void 0,
    right: isPinned === "right" ? rightValue : void 0,
    // left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    // right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    opacity: 1,
    position: isPinned ? "sticky" : "relative",
    width: column.getSize(),
    backgroundColor: isPinned ? isRow ? "white" : "#F9FAFB" : void 0,
    zIndex: isPinned ? 1 : 0
  };
};
var InternalTable = ({
  table,
  loading,
  tableLoadingRowCount = 15,
  bordered = false,
  onRow
}) => {
  var _a, _b, _c, _d, _e;
  const columnSizeVars = React21.useMemo(() => {
    const headers = table.getFlatHeaders();
    const colSizes = {};
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      colSizes[`--header-${header.id}-size`] = header.getSize();
      colSizes[`--col-${header.column.id}-size`] = header.column.getSize();
    }
    return colSizes;
  }, [table.getState().columnSizingInfo, table.getState().columnSizing]);
  const parentRef = React21.useRef(null);
  return /* @__PURE__ */ React21__namespace.default.createElement(
    ShadcnTable,
    {
      className: "table-auto w-full",
      style: {
        ...columnSizeVars,
        minWidth: table.getTotalSize()
      },
      ref: parentRef
    },
    /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableHeader, null, (_a = table == null ? void 0 : table.getHeaderGroups()) == null ? void 0 : _a.map((headerGroup) => {
      var _a2;
      return /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableRow, { key: headerGroup.id }, (_a2 = headerGroup == null ? void 0 : headerGroup.headers) == null ? void 0 : _a2.map((header) => {
        return /* @__PURE__ */ React21__namespace.default.createElement(
          ShadcnTableHead,
          {
            colSpan: header == null ? void 0 : header.colSpan,
            key: header.id,
            style: {
              ...getCommonPinningStyles(header.column, false),
              width: `calc(var(--header-${header == null ? void 0 : header.id}-size) * 1px)`
            },
            onClick: header.column.getCanSort() ? header.column.getToggleSortingHandler() : void 0
          },
          (header == null ? void 0 : header.isPlaceholder) ? null : /* @__PURE__ */ React21__namespace.default.createElement("div", { className: "flex items-center justify-between font-bold w-full" }, /* @__PURE__ */ React21__namespace.default.createElement(
            antd.Flex,
            {
              gap: 16,
              flex: 1,
              align: "center",
              justify: header.subHeaders.length > 0 ? "center" : "space-between"
            },
            /* @__PURE__ */ React21__namespace.default.createElement(
              EText,
              {
                fontWeight: "600",
                fontSize: "14px",
                className: "text-center font-medium w-max"
              },
              reactTable.flexRender(
                header.column.columnDef.header,
                header.getContext()
              )
            ),
            /* @__PURE__ */ React21__namespace.default.createElement(antd.Flex, { gap: 2 }, header.column.getCanSort() && /* @__PURE__ */ React21__namespace.default.createElement(
              SortableHeader,
              {
                header
              }
            ), header.column.getCanFilter() ? /* @__PURE__ */ React21__namespace.default.createElement(
              FilterDropDown,
              {
                key: "filter",
                column: header.column
              }
            ) : null)
          ), header.column.getCanResize() && /* @__PURE__ */ React21__namespace.default.createElement(
            "div",
            {
              className: "absolute right-0 top-0 bottom-0 w-4",
              onClick: (e) => e.stopPropagation()
            },
            /* @__PURE__ */ React21__namespace.default.createElement(ResizeHandle, { header })
          ))
        );
      }));
    })),
    table.getState().columnSizingInfo.isResizingColumn ? /* @__PURE__ */ React21__namespace.default.createElement(MemoizedTableBody, { table }) : /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableBody, { className: `p-0 ${getBordered(bordered)}` }, (_c = (_b = table == null ? void 0 : table.getRowModel()) == null ? void 0 : _b.rows) == null ? void 0 : _c.map((row) => {
      return /* @__PURE__ */ React21__namespace.default.createElement(
        EditableRow,
        {
          index: row.id,
          key: row.id,
          row,
          onRow,
          table,
          bordered
        }
      );
    })),
    ((_d = table.getFlatHeaders()) == null ? void 0 : _d.flatMap((header) => {
      var _a2, _b2;
      return (_b2 = (_a2 = header == null ? void 0 : header.column) == null ? void 0 : _a2.columnDef) == null ? void 0 : _b2.footer;
    }).filter(Boolean).length) > 0 && /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableFooter, null, table.getFooterGroups().map((footerGroup) => {
      var _a2;
      return /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableRow, { key: footerGroup.id }, (_a2 = footerGroup.headers) == null ? void 0 : _a2.map((header) => {
        var _a3, _b2;
        return /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableHead, { key: header.id }, (header == null ? void 0 : header.isPlaceholder) ? null : reactTable.flexRender(
          (_b2 = (_a3 = header == null ? void 0 : header.column) == null ? void 0 : _a3.columnDef) == null ? void 0 : _b2.footer,
          header == null ? void 0 : header.getContext()
        ));
      }));
    })),
    loading && ((_e = [...Array(tableLoadingRowCount)].map((_3, index) => ({
      key: `key${index}`
    }))) == null ? void 0 : _e.map((item) => {
      var _a2;
      return /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableRow, { key: item.key }, (_a2 = table == null ? void 0 : table.getAllColumns()) == null ? void 0 : _a2.map((column) => {
        return /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableCell, { className: "p-3", key: column.id }, /* @__PURE__ */ React21__namespace.default.createElement(antd.Skeleton, { active: true, title: true, paragraph: false }));
      }));
    })),
    !loading && (table == null ? void 0 : table.getRowCount()) === 0 && /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableRow, null, /* @__PURE__ */ React21__namespace.default.createElement(
      ShadcnTableCell,
      {
        colSpan: 12,
        className: "h-24 text-center text-gray-500"
      },
      /* @__PURE__ */ React21__namespace.default.createElement(TanstackTableEmpty, null)
    ))
  );
};
var TableBody = ({
  table,
  bordered,
  onRow
}) => {
  const token = useAppTheme();
  return /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableBody, { className: `p-0 ${bordered}` }, table == null ? void 0 : table.getRowModel().rows.map((row) => {
    return /* @__PURE__ */ React21__namespace.default.createElement(
      ShadcnTableRow,
      {
        key: row.id,
        style: {
          width: "100%",
          backgroundColor: row.getIsSelected() ? token.primary1 : void 0,
          borderBottom: `1px solid ${token.primary1}`
        }
      },
      row.getVisibleCells().map((cell) => {
        var _a, _b;
        return /* @__PURE__ */ React21__namespace.default.createElement(React21.Fragment, { key: (_a = cell == null ? void 0 : cell.row) == null ? void 0 : _a.id }, /* @__PURE__ */ React21__namespace.default.createElement(
          EditableRow,
          {
            index: (_b = cell == null ? void 0 : cell.row) == null ? void 0 : _b.id,
            row: cell == null ? void 0 : cell.row,
            onRow,
            table,
            bordered
          }
        ), row.getIsExpanded() && /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableRow, null, /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableCell, { colSpan: row.getAllCells().length }, "The number of columns you wish to span for the expanded data if it is not a row that shares the same columns as the parent row // Your custom UI goes here")));
      })
    );
  }));
};
var VirtualTableBody = ({
  data,
  table,
  bordered,
  totalSize = 0,
  onRow
}) => {
  var _a;
  const paddingTop = data && (data == null ? void 0 : data.length) > 0 ? data[0].start || 0 : 0;
  const paddingBottom = data && (data == null ? void 0 : data.length) > 0 ? totalSize - (((_a = data == null ? void 0 : data.at(-1)) == null ? void 0 : _a.end) || 0) : 0;
  const [rowHeights, setRowHeights] = React21.useState([]);
  const measureRowHeight = React21.useCallback(() => {
    const heights = data == null ? void 0 : data.map(({ index }) => {
      const row = table.getRowModel().rows[index];
      const rowElement = document.getElementById(`row-${row == null ? void 0 : row.id}`);
      return rowElement ? rowElement.getBoundingClientRect().height : 50;
    });
    setRowHeights(heights);
  }, [table, data]);
  React21.useEffect(() => {
    measureRowHeight();
  }, [data, measureRowHeight]);
  console.count("body");
  return /* @__PURE__ */ React21__namespace.default.createElement(
    ShadcnTableBody,
    {
      style: {
        height: "400px",
        width: "100%",
        position: "relative"
      },
      className: `p-0 ${bordered}`
    },
    paddingTop ? /* @__PURE__ */ React21__namespace.default.createElement(
      ShadcnTableRow,
      {
        style: {
          height: paddingTop
        }
      },
      /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableCell, { colSpan: table.getFlatHeaders().length })
    ) : void 0,
    data == null ? void 0 : data.map(({ index, ...rest }) => {
      const row = table.getRowModel().rows[index];
      return /* @__PURE__ */ React21__namespace.default.createElement(React21.Fragment, { key: index }, /* @__PURE__ */ React21__namespace.default.createElement(
        EditableRow,
        {
          data,
          index,
          row,
          onRow,
          table,
          bordered,
          ref: rest.measureElement,
          height: rowHeights[index]
        }
      ), row.getIsExpanded() && /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableRow, null, /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableCell, { colSpan: row.getAllCells().length }, "The number of columns you wish to span for the expanded data if it is not a row that shares the same columns as the parent row // Your custom UI goes here")));
    }),
    paddingBottom ? /* @__PURE__ */ React21__namespace.default.createElement(
      ShadcnTableRow,
      {
        style: {
          height: paddingBottom
        }
      },
      /* @__PURE__ */ React21__namespace.default.createElement(ShadcnTableCell, { colSpan: table.getFlatHeaders().length })
    ) : void 0
  );
};
var MemoizedTableBody = React21.memo(TableBody);
var MemoizedCell = React21.memo(
  ({ cell, token, table, bordered }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const [isEditing, setIsEditing] = React21.useState(false);
    const [localValue, setLocalValue] = React21.useState(cell.getValue());
    React21.useEffect(() => {
      if (!isEditing) {
        setLocalValue(cell.getValue());
      }
    }, [cell.getValue(), isEditing]);
    const onValueChange = React21.useCallback((e) => {
      var _a2, _b2;
      const newValue = (_b2 = (_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.value) != null ? _b2 : e;
      setLocalValue(newValue);
    }, []);
    const onBlur = React21.useCallback(() => {
      var _a2, _b2;
      setIsEditing(false);
      (_b2 = (_a2 = table.options.meta) == null ? void 0 : _a2.updateData) == null ? void 0 : _b2.call(
        _a2,
        cell.row.index,
        cell.column.id,
        localValue
      );
    }, [cell.column.id, cell.row.index, localValue, table.options.meta]);
    if (!((_b = (_a = cell.column.columnDef) == null ? void 0 : _a.meta) == null ? void 0 : _b.editable)) {
      return /* @__PURE__ */ React21__namespace.default.createElement(
        ShadcnTableCell,
        {
          style: {
            ...getCommonPinningStyles(cell.column, true),
            width: cell.column.getSize(),
            fontWeight: 400,
            color: token.neutral9
          },
          className: `${getCellSize((_c = table.getState()) == null ? void 0 : _c.density)} ${bordered}`,
          key: cell.id
        },
        reactTable.flexRender(cell.column.columnDef.cell, cell.getContext())
      );
    }
    return /* @__PURE__ */ React21__namespace.default.createElement(
      ShadcnTableCell,
      {
        style: {
          ...getCommonPinningStyles(cell.column, true),
          width: cell.column.getSize(),
          fontWeight: 400,
          color: token.neutral9
        },
        className: `${getCellSize((_d = table.getState()) == null ? void 0 : _d.density)} ${bordered}`,
        key: cell.id
      },
      /* @__PURE__ */ React21__namespace.default.createElement(
        TableInput,
        {
          value: localValue,
          onChange: onValueChange,
          onBlur,
          onFocus: () => setIsEditing(true),
          type: (_f = (_e = cell.column.columnDef) == null ? void 0 : _e.meta) == null ? void 0 : _f.valueType,
          ...(_j = (_h = (_g = cell.column.columnDef) == null ? void 0 : _g.meta) == null ? void 0 : _h.inputItemProps) == null ? void 0 : _j.call(_h, (_i = cell.row) == null ? void 0 : _i.original)
        }
      )
    );
  },
  (prev, next) => {
    return prev.cell.getValue() === next.cell.getValue() && prev.cell.row.index === next.cell.row.index;
  }
);
MemoizedCell.displayName = "MemoizedCell";
var EditableRow = React21.memo(
  ({ index, row, onRow, table, bordered }) => {
    const token = useAppTheme();
    const [form] = Form.useForm();
    const rowHandlers = React21.useMemo(
      () => ({
        ...onRow == null ? void 0 : onRow(row.original, row == null ? void 0 : row.id)
      }),
      [row.id, row.original, onRow]
    );
    return /* @__PURE__ */ React21__namespace.default.createElement(proComponents.ProForm, { key: index, submitter: false, form, component: false }, /* @__PURE__ */ React21__namespace.default.createElement(
      ShadcnTableRow,
      {
        ...rowHandlers,
        "data-index": index,
        key: row == null ? void 0 : row.id,
        id: `row-${row.id}`,
        style: {
          width: "100%",
          backgroundColor: (row == null ? void 0 : row.getIsSelected()) ? token.primary1 : void 0,
          borderBottom: `1px solid ${token.primary1}`
        }
      },
      row == null ? void 0 : row.getVisibleCells().map((cell) => {
        return /* @__PURE__ */ React21__namespace.default.createElement(
          MemoizedCell,
          {
            key: cell.id,
            cell,
            token,
            table,
            bordered
          }
        );
      }),
      " "
    ));
  },
  (prev, next) => {
    return prev.row.id === next.row.id && prev.row.getIsSelected() === next.row.getIsSelected() && prev.table.options.meta === next.table.options.meta;
  }
);
EditableRow.displayName = "EditableRow";
var ResizeHandle = React21.memo(({ header }) => /* @__PURE__ */ React21__namespace.default.createElement(
  "div",
  {
    className: `resizer ${header.column.getIsResizing() ? "isResizing" : ""}`,
    onMouseDown: (e) => {
      e.preventDefault();
      e.stopPropagation();
      const handler = header.getResizeHandler();
      handler(e);
    },
    style: {
      transform: header.column.getIsResizing() ? `translateX(${header.getResizingOffset() * (header.column.getCanResize() ? 1 : 0)}px)` : void 0
    }
  }
));
ResizeHandle.displayName = "ResizeHandle";
dayjs2__default.default.extend(isBetween__default.default);
var NoobTanstackTable = React21.forwardRef(
  // eslint-disable-next-line @typescript-eslint/ban-types
  (props, ref) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const {
      request,
      onRow,
      tableLoading,
      dataSource = void 0,
      columns,
      refreshDeps,
      toolbar,
      editable,
      tableProps,
      rowSelection,
      rowExpandable,
      density = "small",
      bordered = false,
      tableLoadingRowCount,
      paginationType = "pagination",
      pagination = {
        pageIndex: 0,
        pageSize: 5
      },
      options = {
        reload: true,
        search: {
          autoFocus: true,
          placeholder: void 0
        }
      },
      tableAlertOptionRender
    } = props;
    const token = useAppTheme();
    const [rowData, setRowData] = React21.useState(dataSource != null ? dataSource : []);
    const { loading, refresh } = ahooks.useRequest(
      request != null ? request : () => Promise.resolve({ data: [], total: 0, success: true }),
      {
        onSuccess: (response) => {
          if (dataSource) {
            setRowData(() => dataSource);
          } else {
            setRowData(() => response.data);
          }
        },
        defaultParams: [
          {
            pageSize: 10,
            current: 1
          }
        ],
        onBefore() {
          if ((rowData == null ? void 0 : rowData.length) === 0) {
            return true;
          } else {
            setRowData([]);
          }
        },
        refreshDeps
      }
    );
    const [columnVisibility, setColumnVisibility] = React21.useState({
      ...getHiddenColumns(columns != null ? columns : [])
    });
    const [tablePagination, setTablePagination] = React21.useState({
      ...pagination
    });
    const { indexColumn } = useTanstackTable();
    const extraColumns = getExtraColumns({ rowSelection, rowExpandable });
    const [rowSelectionState, setRowSelectionState] = ahooks.useSafeState({
      ...(_a = tableProps == null ? void 0 : tableProps.initialState) == null ? void 0 : _a.rowSelection
    });
    const [expanded, setExpanded] = React21.useState({});
    const [selectionKey, setSelectionKey] = React21.useState(0);
    const memoizedColumn = React21.useMemo(() => {
      return [...extraColumns, indexColumn, ...columns != null ? columns : []];
    }, [columns, rowSelectionState]);
    const table = reactTable.useReactTable({
      data: dataSource && (dataSource == null ? void 0 : dataSource.length) > 0 ? dataSource : rowData,
      defaultColumn: {
        minSize: 30,
        size: 150,
        maxSize: 500
      },
      columns: memoizedColumn,
      columnResizeMode: "onEnd",
      enableColumnResizing: true,
      autoResetPageIndex: true,
      getCoreRowModel: reactTable.getCoreRowModel(),
      getColumnCanGlobalFilter(column) {
        return column.getIsVisible();
      },
      ...tableProps,
      initialState: {
        ...tableProps == null ? void 0 : tableProps.initialState,
        columnPinning: {
          left: [
            "rowSelection",
            "index",
            ...(_d = (_c = (_b = tableProps == null ? void 0 : tableProps.initialState) == null ? void 0 : _b.columnPinning) == null ? void 0 : _c.left) != null ? _d : []
          ],
          right: [
            "filter",
            ...(_g = (_f = (_e = tableProps == null ? void 0 : tableProps.initialState) == null ? void 0 : _e.columnPinning) == null ? void 0 : _f.right) != null ? _g : []
          ]
        }
      },
      state: {
        ...tableProps == null ? void 0 : tableProps.state,
        pagination: tablePagination,
        columnVisibility,
        density,
        expanded,
        rowSelection: rowSelectionState
      },
      enableMultiRowSelection: (rowSelection == null ? void 0 : rowSelection.selectionType) && rowSelection.selectionType !== "radio",
      paginateExpandedRows: false,
      onExpandedChange: setExpanded,
      onRowSelectionChange: (newSelection) => {
        var _a2;
        setRowSelectionState(newSelection);
        setSelectionKey((prev) => prev + 1);
        (_a2 = rowSelection == null ? void 0 : rowSelection.onChange) == null ? void 0 : _a2.call(
          rowSelection,
          Object.keys(newSelection).filter(
            (key) => newSelection[key]
          ),
          getSelectedRowModel(table)
        );
      },
      filterFns: {
        ISODateFilter: (value, row, key) => {
          var _a2;
          const dateValue = (_a2 = value == null ? void 0 : value.original) == null ? void 0 : _a2[row];
          if (!dateValue) return false;
          try {
            const rowDate = dayjs2__default.default(dateValue);
            if (!rowDate.isValid()) return false;
            if (_.isArray(key)) {
              const [startDate, endDate] = key;
              if (!startDate || !endDate) return false;
              return rowDate.isBetween(startDate, endDate, "day", "[]");
            }
            if (key) {
              const filterDate = dayjs2__default.default(key);
              if (!filterDate.isValid()) return false;
              return rowDate.format("YYYY-MM-DD") === filterDate.format("YYYY-MM-DD");
            }
            return false;
          } catch (error) {
            console.error("Error in ISODateFilter:", error);
            return false;
          }
        },
        BooleanFn: (row, value, key) => {
          var _a2;
          const isKeyFalse = key === "false";
          return ((_a2 = row == null ? void 0 : row.original) == null ? void 0 : _a2[value]) !== isKeyFalse;
        }
      },
      getRowCanExpand: () => true,
      onColumnVisibilityChange: setColumnVisibility,
      meta: {
        reload: refresh,
        updateData: (rowIndex, columnId, value) => {
          const data = dataSource != null ? dataSource : rowData;
          const editedRow = { ...data[rowIndex], [columnId]: value };
          const updateData = data == null ? void 0 : data.map((row, index) => {
            if (index === rowIndex) {
              return {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unnecessary-type-assertion
                ...data[rowIndex],
                [columnId]: value
              };
            }
            return row;
          });
          const res = { record: editedRow, recordList: updateData };
          setRowData(updateData);
          return editable == null ? void 0 : editable.onDataSourceChange(res);
        },
        rowSelection,
        rowExpandable
      },
      getPaginationRowModel: paginationType === "pagination" ? reactTable.getPaginationRowModel() : void 0,
      /* todo / getSubRows: (row) => {
      //   return row.children
      // } */
      onPaginationChange: setTablePagination,
      getFilteredRowModel: reactTable.getFilteredRowModel(),
      getSortedRowModel: reactTable.getSortedRowModel(),
      getGroupedRowModel: reactTable.getGroupedRowModel(),
      getExpandedRowModel: reactTable.getExpandedRowModel(),
      getFacetedRowModel: reactTable.getFacetedRowModel(),
      getFacetedUniqueValues: reactTable.getFacetedUniqueValues(),
      getFacetedMinMaxValues: reactTable.getFacetedMinMaxValues()
    });
    ahooks.useUpdateEffect(() => {
      var _a2;
      if ((_a2 = table == null ? void 0 : table.getState()) == null ? void 0 : _a2.rowSelection) {
        rowSelection == null ? void 0 : rowSelection.onChange(getRowIds(table), getSelectedRowModel(table));
      }
    }, [(_h = table == null ? void 0 : table.getState()) == null ? void 0 : _h.rowSelection]);
    ahooks.useUpdateEffect(() => {
      setColumnVisibility(getHiddenColumns(columns != null ? columns : []));
    }, [(_i = toolbar == null ? void 0 : toolbar.menu) == null ? void 0 : _i.activeKey]);
    React21.useImperativeHandle(
      ref,
      () => ({
        reload: () => {
          refresh();
          table == null ? void 0 : table.resetRowSelection();
        }
      }),
      [refresh]
    );
    const internalTableProps = {
      bordered,
      tableLoadingRowCount,
      onRow
    };
    return /* @__PURE__ */ React21__namespace.default.createElement(React21__namespace.default.Fragment, null, /* @__PURE__ */ React21__namespace.default.createElement("div", { key: selectionKey }, /* @__PURE__ */ React21__namespace.default.createElement(
      TanstackToolbar,
      {
        ref,
        table,
        options,
        ...toolbar,
        actions: [
          ...(toolbar == null ? void 0 : toolbar.actions) && Array.isArray(toolbar.actions) ? [...toolbar.actions] : [],
          (options == null ? void 0 : options.reload) && /* @__PURE__ */ React21__namespace.default.createElement(
            "div",
            {
              className: "cursor-pointer text-md",
              onClick: () => refresh()
            },
            (options == null ? void 0 : options.reloadIcon) ? options.reloadIcon : /* @__PURE__ */ React21__namespace.default.createElement(
              icons.ReloadOutlined,
              {
                style: {
                  color: token.neutral10
                },
                key: "refresh"
              }
            )
          ),
          /* @__PURE__ */ React21__namespace.default.createElement(ColumnDropDown, { column: table, key: "setting" })
        ],
        menu: {
          ...toolbar == null ? void 0 : toolbar.menu
        }
      }
    ), Object.keys((_j = table == null ? void 0 : table.getState()) == null ? void 0 : _j.rowSelection).length > 0 && (rowSelection == null ? void 0 : rowSelection.selectionType) !== "radio" && /* @__PURE__ */ React21__namespace.default.createElement(
      TanstackTableRowSelection,
      {
        table,
        render: tableAlertOptionRender == null ? void 0 : tableAlertOptionRender(
          getRowIds(table),
          getSelectedRowModel(table),
          () => {
            table.resetRowSelection();
          }
        )
      }
    ), paginationType === "pagination" && /* @__PURE__ */ React21__namespace.default.createElement(
      TanstackTablePagination,
      {
        table,
        tableInstance: table == null ? void 0 : table.getState()
      }
    ), /* @__PURE__ */ React21__namespace.default.createElement("div", null, /* @__PURE__ */ React21__namespace.default.createElement(
      InternalTable,
      {
        loading: loading || tableLoading,
        table,
        ...internalTableProps
      }
    ))));
  }
);
var useTableStyles = () => {
  const token = useAppTheme();
  return antdStyle.createStyles((_3) => ({
    body: {
      ".ant-form-item": {
        marginBottom: "0px !important"
      }
    },
    dropDown: {
      ".ant-dropdown-menu": {
        padding: 0,
        borderRadius: "none",
        "&:hover": {
          backgroundColor: "white !important"
        }
      },
      ".ant-dropdown-menu-item": {
        padding: "8px 12px",
        "&:hover": {
          backgroundColor: "white !important"
        }
      }
    },
    tableHead: {
      backgroundColor: token.neutral10,
      color: token.neutral9,
      textAlign: "left",
      fontWeight: 600,
      margin: 0,
      maxWidth: "50%"
    }
  }))();
};

exports.Collapsible = Collapsible;
exports.CollapsibleContent = CollapsibleContent2;
exports.CollapsibleTrigger = CollapsibleTrigger2;
exports.ColumnDropDown = ColumnDropDown;
exports.EAmount = EAmount;
exports.EButton = EButton;
exports.EButtonGroup = EButtonGroup;
exports.EButtonTransparent = EButtonTransparent;
exports.ECheckbox = ECheckbox;
exports.EDatePicker = EDatePicker;
exports.EDivider = EDivider;
exports.EDividerWithNoStyle = EDividerWithNoStyle;
exports.EDividerWithText = EDividerWithText;
exports.EEmail = EEmail;
exports.EFullDivider = EFullDivider;
exports.EGstNo = EGstNo;
exports.EHeading = EHeading;
exports.EIcon = EIcon;
exports.EIconButton = EIconButton;
exports.EIconButtonIcon = EIconButtonIcon;
exports.ELatitude = ELatitude;
exports.ELoader = ELoader;
exports.ENoobButton = ENoobButton;
exports.EPan = EPan;
exports.EParagraph = EParagraph;
exports.EPinCode = EPinCode;
exports.EPopover = EPopover;
exports.EPrimaryIcon = EPrimaryIcon;
exports.ETab = ETab;
exports.EText = EText;
exports.ETextForSearchFilterDropDown = ETextForSearchFilterDropDown;
exports.ETextForSearchFilterLabel = ETextForSearchFilterLabel;
exports.EThirdPartyLogInButtonProps = EThirdPartyLogInButtonProps;
exports.ETooltip = ETooltip;
exports.EditableCell = EditableCell;
exports.EditableRow = EditableRow;
exports.FilterDropDown = FilterDropDown;
exports.Header = Header;
exports.IndeterminateCheckbox = IndeterminateCheckbox;
exports.InternalTable = InternalTable;
exports.MainLoader = MainLoader;
exports.MemoizedCell = MemoizedCell;
exports.MemoizedTableBody = MemoizedTableBody;
exports.NoData = NoData;
exports.NoobTanstackTable = NoobTanstackTable;
exports.PAGINATION_PAGE_SIZE_OPTIONS = PAGINATION_PAGE_SIZE_OPTIONS;
exports.PageLoader = PageLoader;
exports.ProAmount = ProAmount;
exports.ProAmountField = ProAmountField;
exports.ProDatePicker = ProDatePicker;
exports.ProDigitNumber = ProDigitNumber;
exports.ProWeightNumber = ProWeightNumber;
exports.ShadcnTable = ShadcnTable;
exports.ShadcnTableBody = ShadcnTableBody;
exports.ShadcnTableCaption = ShadcnTableCaption;
exports.ShadcnTableCell = ShadcnTableCell;
exports.ShadcnTableFooter = ShadcnTableFooter;
exports.ShadcnTableHead = ShadcnTableHead;
exports.ShadcnTableHeader = ShadcnTableHeader;
exports.ShadcnTableRow = ShadcnTableRow;
exports.ShakeButton = ShakeButton;
exports.ShakeButtonWrapper = ShakeButtonWrapper;
exports.Skeleton = Skeleton;
exports.SortableColumns = SortableColumns;
exports.SortableHeader = SortableHeader;
exports.TableBody = TableBody;
exports.TableClearButton = TableClearButton;
exports.TableDeleteButton = TableDeleteButton;
exports.TableInput = TableInput;
exports.TanstackGlobalFilter = TanstackGlobalFilter;
exports.TanstackTableEmpty = TanstackTableEmpty;
exports.TanstackTablePagination = TanstackTablePagination;
exports.TanstackTableRowSelection = TanstackTableRowSelection;
exports.TanstackToolbar = TanstackToolbar;
exports.TextWithIcon = TextWithIcon;
exports.VerticalText = VerticalText;
exports.VirtualTableBody = VirtualTableBody;
exports.getBordered = getBordered;
exports.getCellSize = getCellSize;
exports.getColumnAggregation = getColumnAggregation;
exports.getExtraColumns = getExtraColumns;
exports.getHiddenColumns = getHiddenColumns;
exports.getRowIds = getRowIds;
exports.getSelectedRowModel = getSelectedRowModel;
exports.handlePinColumn = handlePinColumn;
exports.isCheckAll = isCheckAll;
exports.isIndeterminate = isIndeterminate;
exports.useIsMobile = useIsMobile;
exports.useTableStyles = useTableStyles;
exports.useTanstackTable = useTanstackTable;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map