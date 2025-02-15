# 🎯 **antd-shadcn-tanstack-table**

> Because life's too short for slow tables! A blazingly fast table component that combines the best of TanStack Table, ShadCN UI, and Ant Design.

## 🤔 **Why This Exists**

The limitations of default Ant Design table rendering for large datasets are well-documented. Our innovative approach integrates TanStack Table's efficient data processing, ShadCN's clean and contemporary UI, and Ant Design's comprehensive feature set to deliver a superior table experience

## ✨ **Features**

    🚀 Lightning-fast performance (bye-bye, laggy edits!)
    🎨 Beautiful ShadCN UI components
    📊 Powerful TanStack Table features
    ✏️ Smooth inline editing
    🔍 Advanced filtering & sorting
    📱 Responsive design
    🎯 TypeScript support

## 🔧 **Installation**

```bash
npm install antd-shadcn-tanstack-table
```

## 🎮 **Quick Start**

```tsx
import { NoobTanstackTable } from "antd-shadcn-tanstack-table";

const MyTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      editable: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      editable: true,
    },
  ];

  const data = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
  ];

  return (
    <NoobTanstackTable
      columns={columns}
      dataSource={data}
      editable={{
        onDataSourceChange: (changes) => console.log(changes),
      }}
    />
  );
};
```

## 🔄 **Migration from Ant Design Table**

Most Ant Design table props work out of the box:

- columns configuration
- dataSource structure
- rowSelection behavior
- pagination settings
- Event handlers

Simply replace:

```tsx
- import { Table } from 'antd';
+ import { NoobTanstackTable } from 'antd-shadcn-tanstack-table';

- <Table />
+ <NoobTanstackTable />
```

## 🤓 **Why "NoobTanstack"?**

We're humble enough to admit we're still learning and growing. This project is actively evolving, just like our skills! (Plus, it's way more fun than calling it "SuperAdvancedMegaTable3000")

## 🤝 **Contributing**

PRs are welcome! We're all noobs here, learning and growing together
