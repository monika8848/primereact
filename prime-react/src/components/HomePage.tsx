import React, { useState } from "react";
import { Knob } from "primereact/knob";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
// import { OTPInput } from "primereact/otpinput";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { Chips } from "primereact/chips";
import "primereact/resources/themes/saga-blue/theme.css"; // Choose a theme
import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
// import "primeflex/primeflex.css";

const HomePage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [knobValue, setKnobValue] = useState<number>(50);
  const [date, setDate] = useState<Date | null>(null);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [chips, setChips] = useState<string[]>([]);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const countries = [
    { name: "USA", code: "US" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
    { name: "Japan", code: "JP" },
  ];

  return (
    <div className="container">
      <div className="content">
        <h2 className="p-text-center">PrimeReact</h2>
        <div className="p-fluid">
          <div className="p-field p-float-label">
            <InputText
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="p-field p-float-label" style={{ marginTop: "1rem" }}>
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="p-field p-float-label" style={{ marginTop: "1rem" }}>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="p-field p-float-label" style={{ marginTop: "1rem" }}>
            <Calendar
              id="calendar"
              value={date}
              onChange={(e: any) => setDate(e.value)}
              showIcon
            />
            <label htmlFor="calendar">Date</label>
          </div>

          <div className="p-field p-float-label" style={{ marginTop: "1rem" }}>
            <MultiSelect
              id="cities"
              value={selectedCities}
              options={cities}
              onChange={(e) => setSelectedCities(e.value)}
              optionLabel="name"
            />
            <label htmlFor="cities">Select Cities</label>
          </div>
          <div className="p-field p-float-label" style={{ marginTop: "2rem" }}>
            <Chips
              id="chips"
              value={chips}
              onChange={(e: any) => setChips(e.value)}
            />
            <label htmlFor="chips">Enter skills</label>
          </div>
          <div className="p-field p-float-label" style={{ marginTop: "1rem" }}>
            <Dropdown
              id="country"
              value={selectedCountry}
              options={countries}
              onChange={(e) => setSelectedCountry(e.value)}
              optionLabel="name"
              placeholder="Select a Country"
            />
            <label htmlFor="country">Country</label>
          </div>

          <div className="p-field" style={{ marginTop: "1rem" }}>
            <Knob value={knobValue} onChange={(e) => setKnobValue(e.value)} />
            <label>Knob Value: {knobValue}</label>
          </div>

          <div className="p-field">
            {/* <OTPInput value={otp} onChange={(e) => setOtp(e.value)} />
            <label>OTP</label> */}
          </div>

          <Divider />

          <Button
            label="Submit"
            icon="pi pi-check"
            onClick={() => alert("Form Submitted")}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
