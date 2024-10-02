

const CurrencyDropdown = ({
    currencies,
    currency,
    setCurrency,
    title = ''
}) => {
  return (
    <div>
      {/* Label for country of currency */}
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>

      <div className="mt-1 relative">
        <select
          id={title}  // Ensure the select matches the label's htmlFor
          aria-label={title}  // Optional for better accessibility
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 mt-1 focus:ring-2"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencies && currencies.length > 0 ? (
            currencies.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))
          ) : (
            <option disabled>No currencies available</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
