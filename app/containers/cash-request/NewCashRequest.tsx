"use client";
import { useState } from "react";

const denominations = [100, 200, 500, 1000];

const NewCashRequest = () => {
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState<number | string>("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [approver, setApprover] = useState("");
  const [note, setNote] = useState("");
  const [denominationValues, setDenominationValues] = useState(
    denominations.map(() => "")
  );

  const handleDenominationChange = (index: number, value: string) => {
    const updatedValues = [...denominationValues];
    updatedValues[index] = value;
    setDenominationValues(updatedValues);
  };

  const handleRemoveDenomination = (index: number) => {
    const updatedValues = [...denominationValues];
    updatedValues[index] = "";
    setDenominationValues(updatedValues);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { currency, amount, date, time, approver, note };
    console.log("Form Data Submitted:", formData);
    // Add your submission logic here
  };

  return (
    <div className="max-w-[613px] w-full mx-auto bg-white px-10 py-4 my-4 rounded-[20px] drop-shadow-2xl font-roboto">
      <h2 className="text-xl font-bold mb-6">New Cash Request</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-between align-middle items-center w-full"
      >
        {/* Currency */}
        <div className="grid grid-cols-3 gap-2 items-center align-middle w-full">
          <label
            htmlFor="currency"
            className="block text-justify text-sm font-medium text-gray-700 "
          >
            Currency
          </label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full px-4 py-2  col-span-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="">Select a currency</option>
            <option value="NGN">Nigerian Naira (₦)</option>
            <option value="USD">US Dollar ($)</option>
            <option value="EUR">Euro (€)</option>
          </select>
        </div>

        {/* Amount */}
        <div className="w-full grid grid-cols-3 gap-2 align-middle items-center justify-between">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="How much are you requesting?"
            className="max-w-[370px] col-span-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        {amount && (
          <div className="mb-4 flex flex-col justify-end items-end">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Denominations
            </h3>
            <div className="space-y-2">
              {denominations.map((denomination, index) => (
                <div key={denomination} className="flex justify-end">
                  <span className="w-16 px-4 py-2 border rounded-lg bg-gray-100 text-center">
                    ₦{denomination}
                  </span>
                  <input
                    type="number"
                    value={denominationValues[index]}
                    onChange={(e) =>
                      handleDenominationChange(index, e.target.value)
                    }
                    placeholder={`e.g., ${Number(amount) / denomination}`}
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveDenomination(index)}
                    className="p-2 text-red-500 hover:bg-red-100 rounded-lg focus:outline-none"
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setDenominationValues(denominations.map(() => ""))}
              className="text-blue-500 mt-2 hover:underline"
            >
              Remove Denominations
            </button>
          </div>
        )}

        {/* Expected Delivery Date */}
        <div className="w-full grid grid-cols-3 gap-2 align-middle items-center justify-between">
          <label className="block text-sm font-medium text-gray-700 w-full">
            Expected delivery date
          </label>
          <div className="flex flex-row divide-x-2 col-span-2 w-full rounded-xl border-[1px] border-border_grey">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-1/2 px-4 py-2  focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-1/2 px-4 py-2  focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Approver */}
        <div className="w-full grid grid-cols-3 gap-2 align-middle items-center justify-between">
          <label
            htmlFor="approver"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Approver
          </label>
          <select
            id="approver"
            value={approver}
            onChange={(e) => setApprover(e.target.value)}
            className="max-w-[370px] col-span-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="">Who will approve this?</option>
            <option value="Manager">Manager</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Director">Director</option>
          </select>
        </div>

        {/* Note */}
        <div className="w-full grid grid-cols-3 gap-2 align-middle items-center">
          <label
            htmlFor="note"
            className="block text-sm font-medium text-gray-700"
          >
            Note
          </label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Any other information about your request?"
            className="max-w-[370px] col-span-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows={4}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-row justify-between  ">
          <h1></h1>
          <div className="flex flex-row gap-4 justify-end items-end">
            <button
              type="button"
              onClick={() => console.log("Cancel action")}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewCashRequest;
