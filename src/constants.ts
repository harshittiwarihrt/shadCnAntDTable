/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProFieldValueEnumType } from "@ant-design/pro-components";
import {
  IconClockCancel,
  IconClockCheck,
  IconUserCancel,
} from "@tabler/icons-react";
import { Cascader } from "antd";
import { GetProp } from "antd/lib";

export const HEADER_HEIGHT = 64;
export const COMPANY_NAME = "HITA";
export const PRODUCT_NAME = "EForm";
export const MAIN_SIDEBAR_WIDTH = 64;
export const SECONDARY_SIDEBAR_WIDTH = 240;
export const DETAIL_PAGE_SIDEBAR_WIDTH = 290;
export const FullColumnWIdth = "100%" as "xl";
export const LOGOUT_ERROR_CODE = 777;

export const UNKNOWN_ERROR =
  "Unknown error occurred! Please contact to server admin";

// eslint-disable-next-line no-useless-escape
export const passwordRegex = /^[a-zA-Z0-9_.\-:,!\@#\$\%\^\&\*\_=+\s]+$/;
export const gstRegex =
  /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/;
export const panRegex = /(^([a-zA-Z]{5})([0-9]{4})([a-zA-Z]{1})$)/;
export const aadharRegex = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
export const pincodeRegex = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
export const phoneRegex =
  /^(?:(?:\+|0{0,2})91(\s*)?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9\s]+\.)+[a-zA-Z]{2,}))$/;

export const nameRegex = /^[a-zA-Z][a-zA-Z ]*$/;
export const drivingLicenseRegex =
  /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/;
export const websiteRegex =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/;

export const COMPANY_TYPE_OPTIONS = [
  { value: "Associates of person", label: "Associates of person" },
  { value: "Company", label: "Company" },
  { value: "Division", label: "Division" },
  { value: "Hindu undivided family", label: "Hindu undivided family" },
  {
    value: "Limited liability partnership",
    label: "Limited liability partnership",
  },
  { value: "Partnership firm", label: "Partnership firm" },
  { value: "Proprietorship", label: "Proprietorship" },
];

export const COMPANY_TYPE_ENUM = {
  ASSOCIATES_OF_PERSON: { text: "Associates of person" },
  COMPANY: { text: "Company" },
  DIVISION: { text: "Division" },
  HINDU_UNDIVIDED_FAMILY: { text: "Hindu undivided family" },
  LIMITED_LIABILITY_PARTNERSHIP: { text: "Limited liability partnership" },
  PARTNERSHIP_FIRM: { text: "Partnership firm" },
  PROPRIETORSHIP: { text: "Proprietorship" },
};

export const USER_TYPE_OPTIONS = [
  { label: "Admin", value: "ADMIN" },
  { label: "Regular", value: "REGULAR" },
];

export const ACTIVE_USER_TAB = "1";
export const INACTIVE_USER_TAB = "2";
export const INVITED_USER_TAB = "3";

export const ADD_COMPANY_DETAIL_TAB = "0";
export const ADD_OFFICIAL_ADDRESS_TAB = "1";
export const ADD_WORK_ADDRESS_TAB = "2";
export const ADD_TDS_USER_DETAIL_TAB = "3";

export const ACTIVE = "ACTIVE";
export const DELETED = "DELETED";
export const BLOCKED = "BLOCKED";
export const PENDING = "PENDING";

export const PAGE_SIZE_OPTIONS = [10, 25, 50, 100] as number[];
export const DEFAULT_PAGE_NO = 1;
export const DEFAULT_PER_PAGE_VALUE = PAGE_SIZE_OPTIONS[0];

export const ALL_CONTACTS = "All Contacts";
export const ALL_LEADS = "All Leads";
export const EVERYONE = "Everyone";
export const ALL_ORGANIZATIONS = "All Organizations";
export const ALL_PRIORITIES = "All Priorities";

export const CLASS_NAME_FOR_DISPLAY_NONE_WHEN_PRINT = "displayNone";

export const INDEX_COLUMN = [
  {
    dataIndex: "index",
    valueType: "indexBorder",
    width: 35,
    hideInSetting: true,
    hideInDescriptions: true,
    hideInSearch: true,
    hideInForm: true,
  },
];

export const FILE_ICON = {
  PDF: "material-symbols:picture-as-pdf-outline",
  IMAGE: "material-symbols:image-outline",
  DOC: "material-symbols:description-outline",
};

export type FileIconType = keyof typeof FILE_ICON;

export const FILE_ICON_PRIMARY_COLOR = {
  IMAGE: "warning6",
  PDF: "error6",
  DOC: "info6",
};

export type FileIconPrimaryColorType = keyof typeof FILE_ICON_PRIMARY_COLOR;

export const FILE_ICON_SECONDARY_COLOR = {
  IMAGE: "warning1",
  PDF: "error1",
  DOC: "info1",
};

export type FileIconSecondaryColorType = keyof typeof FILE_ICON_SECONDARY_COLOR;

export const CHIP_COLOR_IN_USER_LIST = {
  INACTIVE: {
    backgroundColor: "error1",
    textColor: "error6",
    borderColor: "error3",
  },
  ACTIVE: {
    backgroundColor: "success1",
    textColor: "success6",
    borderColor: "success3",
  },
};

export type ChipColorType = keyof typeof CHIP_COLOR_IN_USER_LIST;

export const ACTIVITY_LIST_TYPE = [
  {
    label: "Today",
    value: "TODAY",
  },

  {
    label: "Upcoming",
    value: "UPCOMING",
  },
  {
    label: "Past",
    value: "PAST",
  },
];

export const ROLE_OPTION = [
  { label: "Admin", value: "ADMIN" },
  { label: "Hr", value: "HR" },
  { label: "Accounting", value: "ACCOUNTING" },
  { label: "Finance", value: "FINANCE" },
];

export const ALL_ROLES = [
  "ADMIN",
  "SUPER ADMIN",
  "HR",
  "ACCOUNTING",
  "FINANCE",
];

export const ROUTE_TYPE_OPTIONS = [
  { value: "EXPRESS", label: "Express" },
  { value: "FASTTRACK", label: "Fast Track" },
  { value: "MULTIMODE", label: "Multimode" },
  { value: "NORMAL", label: "Normal" },
];

export const TRANSIT_MODE_OPTIONS = [
  { label: "Air", value: "AIR" },
  { label: "Ship", value: "SHIP" },
  { label: "Road", value: "ROAD" },
  { label: "Rail", value: "RAIL" },
];

export const TAX_REGISTRATION_TYPE = [
  { label: "Registered", value: "REGISTERED" },
  { label: "Unregistered", value: "UNREGISTERED" },
  { label: "Other", value: "OTHER" },
];
export const TAX_REGISTRATION_TYPE_ENUM: ProFieldValueEnumType = {
  REGISTERED: { text: "Registered" },
  UNREGISTERED: { text: "Unregistered" },
  OTHER: { text: "Other" },
};

export const MEASURING_UNIT_TYPE = [
  { label: "Countable", value: "COUNTABLE" },
  { label: "Weightable", value: "WEIGHTABLE" },
];

export const FREIGHT_TYPE = [
  { label: "To Pay", value: "TOPAY" },
  { label: "To Bill", value: "TOBILL" },
];

export const CARRIER_PAYMENT_REF_MODULE: ProFieldValueEnumType = {
  FREIGHT_MEMO: { text: "Freight Memo" },
};

export const FREIGHT_TYPE_ENUM: ProFieldValueEnumType = {
  TOPAY: { text: "To Pay", status: "Processing" },
  TOBILL: { text: "To Bill", status: "Success" },
};

export const GST_PAID_BY_ENUM: ProFieldValueEnumType = {
  BILLING_PARTY: { text: "Billing Party", status: "Processing" },
  CONSIGNEE: { text: "Consignee", status: "Info" },
  CONSIGNOR: { text: "Consignor", status: "Success" },
};
export const RISK_BY_ENUM: ProFieldValueEnumType = {
  OWNER: { text: "Owner", status: "Processing" },
  CARRIER: { text: "Carrier", status: "Success" },
};

export const MEASURING_UNIT_TYPE_ENUM: ProFieldValueEnumType = {
  COUNTABLE: { text: "Countable", status: "Processing" },
  WEIGHTABLE: { text: "Weightable", status: "Success" },
};

export const TRUE_FALSE_TO_YES_NO_ENUM: ProFieldValueEnumType = {
  true: { text: "Yes", status: "Processing" },
  false: { text: "No", status: "Error" },
};

export const ISSUE_TO_ENUM_GADGET_ISSUE = {
  BRANCH: { text: "Branch", status: "Success", color: "green" },
  SELF_VEHICLE: { text: "Self Vehicle", status: "Warning", color: "orange" },
  MARKET_VEHICLE: { text: "Market Vehicle", status: "Error", color: "red" },
};

export const VEHICLE_GROUP = [
  {
    label: "Self",
    value: "SELF",
  },
  {
    label: "Common",
    value: "COMMON",
  },
];
export const DETENTION_APPLICABLE_OPTIONS: ProFieldValueEnumType = {
  LOADING: { text: "Loading", status: "Success" },
  UNLOADING: { text: "Unloading", status: "Success" },
  BOTH: { text: "Both", status: "Success" },
};
export const FUEL_TYPE_OPTIONS: ProFieldValueEnumType = {
  PETROL: { text: "Petrol", status: "Success" },
  DIESEL: { text: "Diesel", status: "Success" },
  CNG: { text: "CNG", status: "Success" },
};
export const VEHICLE_GROUP_ENUM: ProFieldValueEnumType = {
  COMMON: { text: "Common", status: "Processing", color: "red" },
  SELF: { text: "Self", status: "Success" },
};

export const SHORTAGE_THRESHOLD_TYPE: ProFieldValueEnumType = {
  PERCENT: { text: "Percent", status: "Processing" },
  FIXED: { text: "Fixed", status: "Success" },
  NONE: { text: "None", color: "purple", status: "Processing" },
};

export const MATERIAL_SHORTAGE_TRANSPORT_FREIGHT_DEDUCTION_IN_BILL: ProFieldValueEnumType =
  {
    YES_BEYOND_THRESHOLD: {
      text: "Yes (Beyond Threshold)",
      color: "blue",
      status: "Processing",
    },
    YES_TOTAL_SHORTAGE_AMOUNT: {
      text: "Yes (Total Shortage Amount)",
      color: "blue",
      status: "Processing",
    },
    NO: { text: "No", color: "blue", status: "Processing" },
  };

export const AsyncOptionStarterPageNo = 2;

export const TRANSIT_TIME_APPLICABLE_FROM: ProFieldValueEnumType = {
  MATERIAL_INVOICE_00_00_TIME_OF_FOLLOWING_DATE: {
    text: "Material Invoice Date & Time(00:00 Hrs of following date)",
    color: "blue",
  },
  MATERIAL_INVOICE_DATE_AND_TIME: {
    text: "Material Invoice Date & Time",
    color: "blue",
  },
};

export const EVENT_FROM_OPTIONS: ProFieldValueEnumType = {
  CONSIGNMENT_NOTE_DATE: { text: "Consignment Note Date" },
  INVOICE_DATE: { text: "Invoice Date" },
  PLACEMENT_DATE: { text: "Placement Date" },
  PLANT_IN_DATE: { text: "Plant In Date" },
  TRIP_START_DATE: { text: "Trip Start Date" },
};

export const EVENT_TO_OPTIONS: ProFieldValueEnumType = {
  REPORTING_DATE: { text: "Reporting Date" },
  PLANT_OUT_DATE: { text: "Plant Out Date" },
  TRIP_END_DATE: { text: "Trip End Date" },
  UNLOADING_DATE: { text: "Unloading Date" },
};

export const DELAY_TRANSIT_PENALTY_APPLICABLE_FROM: ProFieldValueEnumType = {
  MATERIAL_INVOICE_00_00_TIME_OF_FOLLOWING_DATE: {
    text: "Material Invoice Date & Time(00:00 Hrs of following date)",
    color: "blue",
  },
  MATERIAL_INVOICE_DATE_AND_TIME: {
    text: "Material Invoice Date & Time",
    color: "blue",
  },
};
export const DELAY_PENALTY_CALCULATE_ON = {
  AMOUNT_PER_DAY_PER_VEHICLE: {
    text: "Amount per day/per vehicle",
    status: "Processing",
  },
  AMOUNT_PER_DAY_PER_RS_PER_TON: {
    text: "Amount per day/per ton",
    status: "Success",
  },
  AMOUNT_PER_DAY_PER_RS_PER_PIECE: {
    text: "Amount per day/per piece",
    status: "Error",
  },
};

export const YES_NO_RADIO = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];

export const PAYMENT_MODE = [
  { label: "CASH", value: "CASH" },
  { label: "CREDIT", value: "CREDIT" },
  { label: "DEMAND DRAFT", value: "DEMAND_DRAFT" },
  { label: "E PAYMENT", value: "E_PAYMENT" },
  { label: "FUND TRANSFER", value: "FUND_TRANSFER" },
  { label: "CHEQUE", value: "CHEQUE" },
  { label: "BANK TRANSFER", value: "BANK_TRANSFER" },
  { label: "NEFT", value: "NEFT" },
];

export const ONLY_ONE_LINE_ALERT_MESSAGE =
  "Only one row can be added at a time";

export const BILLING_TERMS_POD_APPLICABLE_FOR = [
  { label: "Stock Transfer", value: "1" },
  { label: "Direct Dispatch", value: "2" },
];

export const BILLING_TERMS_BILLING_QUANTITY_TYPE = {
  CONSIGNMENT_QUANTITY: "Consignment Quantity",
  GUARANTEED_QUANTITY: "Guranteed Quantity",
  RECEIPT_QUANTITY: "Receipt Quantity",
  WHICHEVER_IS_LESS: "Whichever is less",
};

export const BILLING_TERMS_BILLING_CYCLE_TYPE = {
  AT_THE_END_OF_EACH_LOADING_ORDER: "At The end of each loading order",
  FORTNIGHTLY: "Fortnightly",
  MONTHLY: "Monthly",
};

export const PAYMENT_TERMS_ADVANCE_PERCENT_TYPE = {
  CONSIGNMENT_BASIS: "Consigment Basis",
  LUMPSUM_ON_DAILY_BASIS: "Lumsum on daily basis",
};

export const DEDUCTION_RATE_TYPE_OPTIONS: ProFieldValueEnumType = {
  INVOICE_VALUE: { text: "Invoice Value" },
  FIXED: { text: "Fixed" },
};

export const REQUIRED_ERROR_MESSAGE = "Required!";
export const INVALID_ERROR_MESSAGE = "Invalid input!";
export const DEFAULT_DATE_FORMAT = "DD-MM-YYYY";
export const DEFAULT_BACKEND_DATE_TIME_FORMAT = "YYYY-MM-DD  HH:mm:ss";
export const DEFAULT_BACKEND_DATE_FORMAT = "YYYY-MM-DD";
export const DEFAULT_DATE_TIME_FORMAT = "DD-MM-YYYY h:mm A";
export const DEFAULT_DATE_MONTH_FORMAT = "DD MMM, YYYY";
export const VIEW_DATE_TIME_FORMAT = "DD MMM, YYYY h:mm A";

export const FREIGHT_CONTRACT_TAB_KEYS = {
  FREIGHT_RATE: "1",
  BILLING_TERMS: "2",
  PAYMENT_TERMS: "3",
  POD_TERMS: "4",
  DETENTION_MASTER: "5",
  ADDITIONAL_CHARGES: "6",
  MATERIAL_SHORTAGE: "7",
  TRANSIT_TIME: "8",
  DELAY_PENALTY: "9",
};

export const DEDUCTION_TYPE_OPTIONS: ProFieldValueEnumType = {
  TOTAL_QUANTITY: { text: "Total Quantity" },
  QUANTITY_BEYOND_SHORTAGE_THRESHOLD: {
    text: "Quantity Beyond Shortage Threshold",
  },
};

export const FREIGHT_BASIS: any = {
  CHARGE_WEIGHT_PER_UNIT: { text: "Charge Weight / Unit", status: "Success" },
  FIXED_PER_TRIP: { text: "Fixed / Trip", color: "pink" },
  PACK_PER_UNIT_BASIS: { text: "Pack / Unit basis", status: "Error" },
  WEIGHT_PER_UNIT_BASIS: { text: "Weight /  Unit basis", status: "Warning" },
};

export const DELIVERY_TYPE: ProFieldValueEnumType = {
  DIRECT_DELIVERY: { text: "Direct Delivery" },
  STOCK_TRANSFER: { text: "Stock Transfer" },
};

export const DOCUMENT_NATURE = [
  {
    label: "Open",
    value: "OPEN",
  },
  {
    label: "Close",
    value: "CLOSE",
  },
];
export const DOCUMENT_NATURE_ENUM: any = {
  OPEN: { text: "Open", status: "success" },
  CLOSE: { text: "Close", status: "error" },
};
export const RTGS_REF_MODULE_ENUM: any = {
  CARRIER_PAYMENT: { text: "Carrier Payment" },
};
export const RTGS_MODE_ENUM: any = {
  NEFT: { text: "NEFT" },
  RTGSß: { text: "RTGSß" },
};
export const NON_GST_SUPPLIES_ENUM: any = {
  COMPOSITE_TAXABLE_PERSON: { text: "Composite Taxable Person" },
  EXEMPTED_OTHER_THAN_NIL_RATED: {
    text: "Exempted (other than nil rated/non GST supply)",
  },
  NIL_RATED_SUPPLIES: { text: "Nil Rated Supplies" },
  NON_GST_SUPPLIES: { text: "Non-GST supplies" },
  OTHER_REVERSE_CHARGES: { text: "Other (Reverse Charges)" },
  TAXABLE_SUPPLIES: { text: "Taxable Supplies" },
};

export const FOOTER_NATURE_ENUM: any = {
  CR_NOT_TAKEN: { text: "CR. NOT TAKEN" },
  CR_TAKEN: { text: "CR.TAKEN" },
  COMPOSITION_SCHEME: { text: "Composition Scheme" },
  INELIGIBLE: { text: "INELIGIBLE" },
  INPUT_CAPITAL_GOODS: { text: "INPUT-CAPITAL GOODS" },
  INPUT_GOODS: { text: "INPUT-GOODS" },
  INPUT_SERVICE: { text: "INPUT-SERVICE" },
  PURCHASE_IMPORT_OF_INPUTS: { text: "PURCHASE IMPORT OF INPUTS" },
};

export const GST_INTER_STATE_ENUM: any = {
  GST_INTER_STATE: { text: "GST Inter State" },
  GST_INTRA_STATE: { text: "GST Intra State" },
  IMPORT: { text: "Import" },
  EXPORT: { text: "EXPORT" },
  SEZ: { text: "SEZ" },
};

export const CHARGE_NATURE: ProFieldValueEnumType = {
  ADDITION: { text: "Addition" },
  DEDUCTION: { text: "Deduction" },
};

export const SHORTAGE_BASIS: ProFieldValueEnumType = {
  CHARGE_WEIGHT: { text: "Charge Weight" },
  NET_WEIGHT: { text: "Net Weight" },
};
export const DEDUCTION_BASIS: ProFieldValueEnumType = {
  FREIGHT_VALUE: { text: "Freight Value" },
  INVOICE_VALUE: { text: "Invoice Value" },
};

export const SERVICE_TYPE: ProFieldValueEnumType = {
  DETENTION: { text: "Detention" },
  DELAY_PENALTY: { text: "Delay Penalty" },
  MATERIAL_SHORTAGE: { text: "Material Shortage" },
  TRANSIT_TIME: { text: "Transit Time" },
};

export const CHARGE_TYPES: ProFieldValueEnumType = {
  FIXED: { text: "Fixed" },
  ACTUAL: { text: "Actual" },
};

export const GADGET_CONDITION: ProFieldValueEnumType = {
  Working: { text: "Working", color: "green", status: "Processing" },
  "Not Working": { text: "Not Working", status: "Error" },
};
export const GENDER: ProFieldValueEnumType = {
  MALE: { text: "Male" },
  FEMALE: { text: "Female" },
  TRANSGENDER: { text: "Transgender" },
};

export const LOADING_DELIVERY_TYPE: ProFieldValueEnumType = {
  CHARGE_WEIGHT_PER_UNIT: { text: "Charge Weight / Unit" },
  FIXED_PER_TRIP: { text: "Fixed / Trip" },
  PACK_PER_UNIT_BASIS: { text: "Pack / Unit basis" },
  WEIGHT_PER_UNIT_BASIS: { text: "Weight /  Unit basis" },
};

export const LOADING_ORDER_TAB_KEYS = {
  MATERIAL_AND_BILLING_DETAILS: "1",
  SOURCE_DETAILS: "2",
  DESTINATION_DETAILS: "3",
  BILLNG_TERMS: "4",
  ADDITIONAL_CHARGES: "5",
};
export const PLACEMENT_ORDER_TAB_KEYS = {
  PARTY_DETAILS: "1",
  MATERIAL_AND_BILLING_DETAILS: "2",
  SOURCE_DETAILS: "3",
  DESTINATION_DETAILS: "4",
  ADDITIONAL_CHARGES: "5",
};
export const CONSIGNMENT_NOTE_TAB_KEYS = {
  CONSINOR_CONSIGNEE_DETAILS: "CONSINOR_CONSIGNEE_DETAILS",
  SOURCE_DESTINATION_DETAILS: "SOURCE_DESTINATION_DETAILS",
  EWAY_BILL_DETAILS: "EWAY_BILL_DETAILS",
  VEHICLE_DETAILS: "VEHICLE_DETAILS",
  ITEM_DETAILS: "ITEM_DETAILS",
  BILLING_DETAILS: "BILLING_DETAILS",
  FREIGHT_DETAILS: "FREIGHT_DETAILS",

  ADDITIONAL_CAHRGES: "ADDITIONAL_CAHRGES",
};

export const POD_TAB_KEYS = {
  CONSIGNMENT_NOTE_DETAILS: "1",
};
export const CARRIER_PAYMENT_TAB_KEYS = {
  FREIGHT_MEMO_DETAILS: "1",
  FREIGHT_MEMO_SUMMARY: "2",
};

export const CARRIER_CONTRACT_TAB_KEYS = {
  CARRIER_RATE: "1",
};

export const COMMON_CONTRACT_TAB_KEYS = {
  BILLING_TERMS: "2",
  PAYMENT_TERMS: "3",
  POD_TERMS: "4",
  DETENTION_MASTER: "5",
  MATERIAL_SHORTAGE: "6",
  TRANSIT_TIME: "7",
  DELAY_PENALTY: "8",
  ADDITIONAL_CHARGES: "9",
};

export const OPERATIONAL_MASTER_TAB_KEYS = {
  BRANCH: "BRANCH",
  LOCATION: "LOCATION",
};
export const ACTIVE_INACTIVE_ENUM = {
  ACTIVE: "Active",
  INACTIVE: "In Active",
};

export const LOGISTIC_ROSTER_MASTER_TAB_KEYS = {
  CUSTOMER: "CUSTOMER",
  TRANSPORTER: "TRANSPORTER",
};

export const FREIGHT_MEMO_TAB_KEYS = {
  CONSIGNMENT_NOTE: "1",
  OTHER_DETAILS: "2",
  PAYABLE_DETAILS: "3",
  ADVANCE_DETAILS: "4",
  TRACKING_DETAILS: "5",
  ADDITIONAL_CHARGES: "6",
};
export const ISSUE_TO: ProFieldValueEnumType = {
  BRANCH: { text: "Branch" },
  MARKET_VEHICLE: { text: "Market Vehicle" },
  SELF_VEHICLE: { text: "Self Vehicle" },
};

export const GADGET_TAB_KEYS = {
  TYPE: "1",
  REGISTRATION: "2",
  ISSUE: "3",
  RECEIVE: "4",
};

export const EMPLOYEE_MASTER_TAB_KEYS = {
  DEPARTMENT: "DEPARTMENT",
  DESIGNATION: "DESIGNATION",
  EMPLOYEE: "EMPLOYEE",
  Driver: "Driver",
};

export const ITEM_MASTER_TAB_KEYS = {
  ITEM: "ITEM",
  PACKING_TYPE: "PACKING_TYPE",
  MEASURING_UNIT: "MEASURING_UNIT",
  ITEM_GROUP: "ITEM_GROUP",
};

export const VEHICLE_MASTER_TAB_KEYS = {
  VEHICLE_GROUP: "VEHICLE_GROUP",
  VEHICLE_CATEGORY: "VEHICLE_CATEGORY",
  VEHICLE: "VEHICLE",
  VEHICLE_HANDOVER: "VEHICLE_HANDOVER",
  VEHICLE_TAKEOVER: "VEHICLE_TAKEOVER",
};
export const GADGET_MASTER_TAB_KEYS = {
  GADGET_TYPE_REGISTRATION: "GADGET_TYPE_REGISTRATION",
  GADGET_REGISTRATION: "GADGET_REGISTRATION",
  GADGET_ISSUE: "GADGET_ISSUE",
  GADGET_RECEIVE: "GADGET_RECEIVE",
  GADGET_DISCARD: "GADGET_DISCARD",
};

export const ADD_EMPLOYEE_TAB_KEYS = {
  ADDRESS_DETAILS: "1",
  PAYMENT_DETAILS: "2",
};

export const CONFIRM_DELETE_MESSAGE = "Sure to Delete?";

type EXPORT_TYPE_CASCADER_OPTIONS_OPTION_TYPE = GetProp<
  typeof Cascader,
  "options"
>[number];
export const EXPORT_TYPE_CASCADER_OPTIONS: EXPORT_TYPE_CASCADER_OPTIONS_OPTION_TYPE[] =
  [
    {
      value: "PDF",
      label: "PDF",
      children: [
        {
          value: "WITH_FILTER",
          label: "With Filter",
          children: [
            {
              value: "WITH_PAGINATION",
              label: "With Pagination",
            },
            {
              value: "WITHOUT_PAGINATION",
              label: "Without Pagination",
            },
          ],
        },
        {
          value: "WITHOUT_FILTER",
          label: "Without Filter",
          children: [
            {
              value: "WITH_PAGINATION",
              label: "With Pagination",
            },
            {
              value: "WITHOUT_PAGINATION",
              label: "Without Pagination",
            },
          ],
        },
      ],
    },
    {
      value: "CSV",
      label: "CSV",
      children: [
        {
          value: "WITH_FILTER",
          label: "With Filter",
          children: [
            {
              value: "WITH_PAGINATION",
              label: "With Pagination",
            },
            {
              value: "WITHOUT_PAGINATION",
              label: "Without Pagination",
            },
          ],
        },
        {
          value: "WITHOUT_FILTER",
          label: "Without Filter",
          children: [
            {
              value: "WITH_PAGINATION",
              label: "With Pagination",
            },
            {
              value: "WITHOUT_PAGINATION",
              label: "Without Pagination",
            },
          ],
        },
      ],
    },
  ];
export const EXPORT_TYPE_CASCADER_OPTIONS_WITHOUT_FILTER: EXPORT_TYPE_CASCADER_OPTIONS_OPTION_TYPE[] =
  [
    {
      value: "PDF",
      label: "PDF",
      children: [
        {
          value: "WITH_PAGINATION",
          label: "With Pagination",
        },
        {
          value: "WITHOUT_PAGINATION",
          label: "Without Pagination",
        },
      ],
    },
    {
      value: "CSV",
      label: "CSV",
      children: [
        {
          value: "WITH_PAGINATION",
          label: "With Pagination",
        },
        {
          value: "WITHOUT_PAGINATION",
          label: "Without Pagination",
        },
      ],
    },
  ];
export const EXPORT_TYPE_CASCADER_OPTIONS_WITH_CSV_ONLY: EXPORT_TYPE_CASCADER_OPTIONS_OPTION_TYPE[] =
  [
    {
      value: "CSV",
      label: "CSV",
      children: [
        {
          value: "WITH_FILTER",
          label: "With Filter",
          children: [
            {
              value: "WITH_PAGINATION",
              label: "With Pagination",
            },
            {
              value: "WITHOUT_PAGINATION",
              label: "Without Pagination",
            },
          ],
        },
        {
          value: "WITHOUT_FILTER",
          label: "Without Filter",
          children: [
            {
              value: "WITH_PAGINATION",
              label: "With Pagination",
            },
            {
              value: "WITHOUT_PAGINATION",
              label: "Without Pagination",
            },
          ],
        },
      ],
    },
  ];

export const ITEM_GROUP_TYPE = {
  GROUP: "Group",
  ITEM: "Item",
};
export const GST_TYPE_ENUM = {
  IGST: { text: "IGST" },
  CGST_SGST: { text: "CGST/SGST" },
};

export const SIDEBAR_COOKIE_NAME = "sidebar:state";
export const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
export const SIDEBAR_WIDTH = "16rem";
export const SIDEBAR_WIDTH_MOBILE = "18rem";
export const SIDEBAR_WIDTH_ICON = "3rem";
export const SIDEBAR_KEYBOARD_SHORTCUT = "b";
export const OPEN_ADD_FORM_KEYBOARD_SHORTCUT = "ctrl+a";

export const CUSTOMER_LEGAL_STATUS: ProFieldValueEnumType = {
  ASSOCIATION: { text: "Association" },
  FOREIGN_COMPANY: { text: "Foreign Company" },
  GOVERNMENT: { text: "Government" },
  HINDU_UNDIVIDED_FAMILY: { text: "Hindu Undivided Family" },
  LISTED_COMPANY: { text: "Listed Company" },
  LOCAL_AUTHORITY: { text: "Local Authority" },
  PARTNERSHIP: { text: "Partnership" },
  PRIVATE_LIMITED: { text: "Private Limited Company" },
  PROPRIETORSHIP: { text: "Proprietorship" },
  PUBLIC_COMPANY: { text: "Public Company" },
  PUBLIC_SECTOR_UNDERTAKING: { text: "Public Sector Undertaking" },
  REGISTERED_SOCIETY: { text: "Registered Society" },
};

export const FIELD_TYPE_ENUM: ProFieldValueEnumType = {
  STRING: { text: "String" },
  INTEGER: { text: "Integer" },
  DATE: { text: "Date" },
  DATETIME: { text: "Datetime" },
  SELECT: { text: "Select" },
  MULTISELECT: { text: "Multiselect" },
  BOOLEAN: { text: "Boolean" },
  ATTACHMENT: { text: "Attachment" },
  RADIO: { text: "Radio" },
  JSON: { text: "JSON" },
  TEXT: { text: "Text" },
};

export const ALL_OPERATORS = ["+", "-", "*", "/", "(", ")"];
export const ALL_DIGITS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

export const USER_ROLES: any = {
  ADMIN: { text: "Admin", status: "error" },
  SUPER_ADMIN: {
    text: "Super Admin",
    disabled: true,
    status: "error",
  },
  USER: { text: "User", status: "success" },
  GUEST: { text: "Guest", status: "processing" },
};

export const ALL_MODULES_ENUM: any = {
  COMPANY: {
    text: "Company",
  },
  USER: {
    text: "User",
  },
  Site: {
    text: "Site",
  },
  FORM_BUILDER: {
    text: "Form Builder",
  },
  FIELDS: {
    text: "Fields",
  },
  BASIC_SETTINGS: {
    text: "Basic Settings",
  },
};

export const FIELD_INPUT_VARIANT_OPTIONS = ["SELECT", "MULTISELECT", "RADIO"];

export const ENTRY_VISIBILITY_CONTROL: any = {
  ENTRIES_VISIBLE_TO_ALL_USERS: {
    text: "Entries Visible to All Users",
    status: "error",
  },
  ENTRIES_VISIBLE_ONLY_TO_THEIR_CREATORS: {
    text: "Entries Visible Only to Their Creators",
    status: "error",
  },
};

export const PERMISSIONS = {
  COMPANY: [
    "canCreateCompany",
    "canDeleteCompany",
    "canEditCompany",
    "canViewCompany",
  ],
  USER: ["canCreateUser", "canEditUser", "canDeleteUser", "canViewUser"],
  APPROVAL_SYSTEM: [
    "canCreateApprovalSystem",
    "canEditApprovalSystem",
    "canDeleteApprovalSystem",
    "canViewApprovalSystem",
  ],
  SITE: ["canCreateSite", "canEditSite", "canDeleteSite", "canViewSite"],
  FIELDS: ["canCreateField", "canEditField", "canDeleteField", "canViewField"],
  FORM_BUILDER: [
    "canCreateForm",
    "canEditForm",
    "canDeleteForm",
    "canViewForm",
  ],
  BASIC_SETTINGS: ["canFillCashIn", "canFillCashOut", "canManageBasicSettings"],
};

export const TRANSACTION_RESPONSE_TYPE: any = {
  CASH_IN: {
    text: "Cash In",
    status: "processing",
  },
  CASH_OUT: {
    text: "Cash Out",
    status: "error",
  },
};

export const REQUEST_ACTION_TYPE: any = {
  MANUAL: {
    text: "Manual",
    status: "processing",
  },
  AUTO: {
    text: "Auto",
    status: "error",
  },
  DELEGATED: {
    text: "Delegated",
    status: "error",
  },
};

export const CAHSFLOW_MONTH_OR_YEAR_WISE = {
  AT_THE_END_OF_EACH_LOADING_ORDER: "At The end of each loading order",
  FORTNIGHTLY: "Fortnightly",
  MONTHLY: "Monthly",
};
export const REQUEST_STATUS_ENUM: any = {
  PENDING: {
    text: "Pending",
    status: "warning",
    color: "yellow",
  },
  IN_PROGRESS: {
    text: "In Progress",
    status: "processing",
    color: "blue",
  },
  APPROVED: {
    text: "Approved",
    status: "success",
    color: "green",
  },
  REJECTED: {
    text: "Rejected",
    status: "error",
    color: "red",
  },
  CANCELLED: {
    text: "Cancelled",
    status: "error",
    color: "red",
  },
};

export const TIMEOUT_TYPE_ENUM: ProFieldValueEnumType = {
  NO_TIMEOUT: { text: "No Timeout" },
  ONE_DAY: { text: "24 hours" },
  TWO_DAYS: { text: "48 hours" },
  ONE_WEEK: { text: "One Week" },
  ONE_MONTH: { text: "One Month" },
};

export const DEFAULT_PER_PAGE_VALUE_FOR_NOTIFICATION = 5;
