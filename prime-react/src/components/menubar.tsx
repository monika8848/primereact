import React from "react";
import { Menubar } from "primereact/menubar";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Chart } from "primereact/chart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function App() {
  const items = [
    {
      label: "Dashboard",
      icon: "pi pi-fw pi-home",
      command: () => {
        // window.location = "#/";
      },
    },
    {
      label: "Reports",
      icon: "pi pi-fw pi-chart-line",
      command: () => {
        // window.location = "#/reports";
      },
    },
    {
      label: "Settings",
      icon: "pi pi-fw pi-cog",
      command: () => {
        // window.location = "#/settings";
      },
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="p-mr-2"
    ></img>
  );
  const end = (
    <Button
      label="Logout"
      icon="pi pi-sign-out"
      className="p-button-rounded p-button-danger"
    ></Button>
  );

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "#42A5F5",
        borderColor: "#42A5F5",
      },
      {
        label: "Revenue",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: "#66BB6A",
        borderColor: "#66BB6A",
      },
    ],
  };

  const customers = [
    {
      id: 1,
      name: "James",
      country: "USA",
      date: "2021-06-01",
      status: "Active",
    },
    {
      id: 2,
      name: "John",
      country: "UK",
      date: "2021-06-02",
      status: "Pending",
    },
    {
      id: 3,
      name: "Robert",
      country: "Canada",
      date: "2021-06-03",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Michael",
      country: "Australia",
      date: "2021-06-04",
      status: "Active",
    },
  ];

  return (
    <div className="App">
      <Menubar model={items} start={start} end={end} />
      <div className="p-grid p-m-3">
        <div className="p-col-12 p-md-6">
          <Card title="Sales Overview">
            <Chart type="line" data={lineData} />
          </Card>
        </div>
        <div className="p-col-12 p-md-6">
          <Card title="Latest Customers">
            <DataTable value={customers} responsiveLayout="scroll">
              <Column field="name" header="Name"></Column>
              <Column field="country" header="Country"></Column>
              <Column field="date" header="Date"></Column>
              <Column field="status" header="Status"></Column>
            </DataTable>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
