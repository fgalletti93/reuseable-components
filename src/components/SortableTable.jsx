import { Table } from "./Table";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { useSortData } from "../hooks/useSortData";

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return <FaSort />;
  }

  if (sortOrder == null) {
    return <FaSort />;
  } else if (sortOrder === "asc") {
    return <FaSortUp />;
  } else if (sortOrder === "desc") {
    return <FaSortDown />;
  }
};

export const SortableTable = (props) => {
  const { config, data } = props;
  const { handleClick, sortBy, sortOrder, sortedData } = useSortData(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
};
