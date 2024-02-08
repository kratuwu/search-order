import React from 'react'
import { useForm } from "react-hook-form"

export const SearchBar = (props) => {
  const { register, handleSubmit } = useForm();
  const today = new Date().toISOString().split('T')[0];

  const onSubmit = (data) => {
    props.onSearch(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex">
      
      <div className="flex items-center mr-4 mb-4">
        <label htmlFor="period" className="mr-1">Period</label>
        <select
          id="period"
          {...register('period')}
          style={{ height: '2.25rem' }} 
          defaultValue="transmission"
          className="border border-gray-300 rounded px-3 w-32"
        >
          <option value="transmission">Transmission</option>
        </select>
      </div>
      <div className="flex items-center mr-4 mb-4">
        <label htmlFor="status" className="mr-1">Status</label>
        <select
          id="status"
          {...register('status')}
          style={{ height: '2.25rem' }} 
          defaultValue="waiting"
          className="border border-gray-300 rounded px-3 w-32"
        >
          <option value="waiting">Waiting</option>
        </select>
      </div>
      <div className="flex items-center mr-4 mb-4">
        <label htmlFor="fromDate" className="mr-1">From</label>
        <input 
          type="date" 
          id="fromDate" 
          {...register('fromDate')} 
          defaultValue={today} 
          placeholder="From Date" 
          className="border border-gray-300 rounded px-3 py-1"
        />
      </div>
      <div className="flex items-center mr-4 mb-4">
        <label htmlFor="fromDate" className="mr-1">To</label>
        <input 
          type="date" 
          id="toDate" 
          {...register('toDate')} 
          defaultValue={today} 
          placeholder="To Date" 
          className="border border-gray-300 rounded px-3 py-1"
        />      </div>
      <button 
        type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-full ml-4"
        style={{ height: 'calc(2.25rem + 2px)' }} 
      >Search</button>
    </form>
  );
}
