import * as React from "react";
import { cn } from "../../../lib";

const ShadcnTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className="relative w-full max-h-[500px] overflow-y-auto">
    <table
      className={cn("w-full caption-bottom text-sm ", className)}
      {...props}
    />
  </div>
));
ShadcnTable.displayName = "Table";

const ShadcnTableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "[&_tr]:brder-b sticky top-0 z-10 bg-winterWhisper rounded-s-3xl",
      className
    )}
    {...props}
  />
));
ShadcnTableHeader.displayName = "TableHeader";

const ShadcnTableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
ShadcnTableBody.displayName = "TableBody";

const ShadcnTableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t  font-medium [&>tr]:last:border-b-0 bottom-0 sticky bg-winterWhisper rounded-s-3xl z-20",
      className
    )}
    {...props}
  />
));
ShadcnTableFooter.displayName = "TableFooter";

const ShadcnTableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted w-full",
      className
    )}
    {...props}
  />
));
ShadcnTableRow.displayName = "TableRow";

const ShadcnTableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 text-left align-middle  text-muted-foreground [&:has([role=checkbox])]:pr-0  text-black relative  cursor-pointer border px-3  font-bold",
      className
    )}
    {...props}
  />
));
ShadcnTableHead.displayName = "TableHead";

const ShadcnTableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
ShadcnTableCell.displayName = "TableCell";

const ShadcnTableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
ShadcnTableCaption.displayName = "TableCaption";

export {
  ShadcnTable,
  ShadcnTableHeader,
  ShadcnTableBody,
  ShadcnTableFooter,
  ShadcnTableHead,
  ShadcnTableRow,
  ShadcnTableCell,
  ShadcnTableCaption,
};
