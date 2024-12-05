import React, { useState, useMemo } from 'react';
import './styles.css';


// Main component
const CustomTable = () => {
    const data = [
        { name: 'Lionel Messi', age: 36, email: 'lionel@gmail..com' },
        { name: 'Cristiano Ronaldo', age: 38, email: 'cristiano@gmail..com' },
        { name: 'Neymar Jr', age: 31, email: 'neymar@gmail..com' },
        { name: 'Kylian Mbappe', age: 25, email: 'kylian@gmail..com' },
        { name: 'Kevin De Bruyne', age: 32, email: 'kevin@gmail..com' },
        { name: 'Robert Lewandowski', age: 35, email: 'robert@gmail..com' },
        { name: 'Mohamed Salah', age: 31, email: 'mohamed@gmail..com' },
        { name: 'Virgil van Dijk', age: 32, email: 'virgil@gmail..com' },
        { name: 'Sadio Mane', age: 32, email: 'sadio@gmail..com' },
        { name: 'Sergio Ramos', age: 37, email: 'sergio@gmail..com' }
      ];
  
    const columns = [
      { key: 'name', sortable: true, filterable: true },
      { key: 'age', sortable: true, filterable: true },
      { key: 'email', sortable: true, filterable: true },
    ];
  
    return (
      <div className="App">
        <h1>Custom Table Component</h1>
        <TableContainer data={data} columns={columns} />
      </div>
    );
  };



// TableContainer Component
const TableContainer = ({ data, columns }) => {
  const [sortType, setsortType] = useState(null);
  const [filters, setFilters] = useState({});

  let sortedData = useMemo(() => {
    let sortableData = [...data];
    if (sortType != null) {
      sortableData.sort((a, b) => {
        if (a[sortType.key] < b[sortType.key]) {
          return sortType.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortType.key] > b[sortType.key]) {
          return sortType.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortType]);

  const handleSort = key => {
    let direction = 'ascending';
    if (sortType && sortType.key === key && sortType.direction === 'ascending') {
      direction = 'descending';
    }
    setsortType({ key, direction });
  };

  const filteredData = useMemo(() => {
    return sortedData.filter(row => {
      return columns.map(column => {
        const value = row[column.key].toString().toLowerCase();
        const filterValue = (filters[column.key] || '').toLowerCase();
        return value.includes(filterValue);
      });
    });
  }, [filters, sortedData, columns]);

  

  const handleFilterChange = (key, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  return (
    <div className="table-container">
      <table>
        <TableHeader columns={columns} onSort={handleSort} sortType={sortType} onFilterChange={handleFilterChange} />
        <TableBody data={filteredData} columns={columns} />
      </table>
    </div>
  );
};




// TableHeader Component
const TableHeader = ({ columns, onSort, sortType, onFilterChange }) => {
  const getSortIndicator = column => {
    if (!sortType || sortType.key !== column.key) {
      return null;
    }
    return sortType.direction === 'ascending' ? '🔼' : '🔽';
  };

  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th key={column.key}>
            <button type="button" onClick={() => onSort(column.key)}>
              {column.key.toUpperCase()} {getSortIndicator(column)}
            </button>
            {column.filterable && <FilterInput columnKey={column.key} onFilterChange={onFilterChange} />}
          </th>
        ))}
      </tr>
    </thead>
  );
};



// TableBody Component
const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((row, Idx) => (
        <tr key={Idx}>
          {columns.map((column, idx) =>(
            <td key={column.key}>{row[column.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};




// FilterInput Component
const FilterInput = ({ columnKey, onFilterChange }) => {
  return (
    <input type="text" onChange={e => onFilterChange(columnKey, e.target.value)} placeholder={`Filter ${columnKey}`}
    />
  );
};



export default CustomTable;