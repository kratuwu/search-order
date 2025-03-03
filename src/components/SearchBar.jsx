import React from "react";
import { useForm } from "react-hook-form";

export const SearchBar = (props) => {
  const { register, handleSubmit } = useForm();
  const today = new Date().toISOString().split("T")[0];

  const onSubmit = (data) => {
    props.onSearch(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:flex self-center">
      <div className="flex items-center lg:mr-4 mb-4">
        <label htmlFor="period" className="mr-1">
          Period
        </label>
        <select
          id="period"
          {...register("period")}
          style={{ height: "2.25rem" }}
          defaultValue="transmission"
          className="border border-gray-300 rounded px-3 w-full lg:w-auto"
        >
          <option value="transmission">Transmission</option>
        </select>
      </div>
      <div className="flex items-center lg:mr-4 mb-4">
        <label htmlFor="status" className="mr-1">
          Status
        </label>
        <select
          id="status"
          {...register("status")}
          style={{ height: "2.25rem" }}
          defaultValue="waiting"
          className="border border-gray-300 rounded px-3 w-full lg:w-auto"
        >
          <option value="waiting">Waiting</option>
        </select>
      </div>
      <div className="flex flex-nowrap">
        <div className="flex items-center mr-4 mb-4 grow">
          <label htmlFor="fromDate" className="mr-1">
            From
          </label>
          <input
            type="date"
            id="fromDate"
            {...register("fromDate")}
            defaultValue={today}
            placeholder="From Date"
            className="border border-gray-300 rounded px-3 py-1 w-full lg:w-auto"
          />
        </div>
        <div className="flex items-center lg:mr-4 mb-4 grow">
          <label htmlFor="fromDate" className="mr-1">
            To
          </label>
          <input
            type="date"
            id="toDate"
            {...register("toDate")}
            defaultValue={today}
            placeholder="To Date"
            className="border border-gray-300 rounded px-3 py-1 w-full lg:w-auto"
          />{" "}
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-1 rounded-full lg:ml-1 w-full lg:w-auto"
        style={{ height: "calc(2.25rem)" }}
      >
        Search
      </button>
    </form>
  );
};
