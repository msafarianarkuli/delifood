import React from 'react';
import { useField } from 'formik';

const CheckBoxInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          {...props}
          {...field}
          id="remember"
          type="checkbox"
          value=""
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
        />
      </div>
      <label
        for="remember"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBoxInput;
