import { useState } from "react";
import { tableprops } from "../../Types/table.types";
import SearchInput from "../SearchInput";
import { Card, CardHeader, CardTitle, CardFooter } from "/@/components/ui/card";
import { Button } from "/@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "/@/components/ui/table";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

const TableComponent: React.FC<tableprops> = ({
  header,
  data,
  isSortable,
  isSearchable,
  isPagination,
  title,
}) => {
  const [table, settable] = useState({
    pageIndex: 0,
    size: 5,
    startindex: function () {
      return this.pageIndex * this.size;
    },
    endIndex: function () {
      return this.pageIndex * this.size + this.size;
    },
  });
  const isLast = () => {
    return data.length / table.size === table.pageIndex + 1;
  };

  const next = () => {
    if (!isLast()) {
      settable({
        ...table,
        pageIndex: table.pageIndex + 1,
      });
    }
  };

  const prev = () => {
    if (table.pageIndex !== 0) {
      settable({
        ...table,
        pageIndex: table.pageIndex - 1,
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className=" uppercase">
          {isSearchable ? (
            <SearchInput
              name="search"
              type="text"
              placeholder="Enter the Name"
              onChange={(e) => {
                console.log("handlechange");
              }}
            />
          ) : (
            title
          )}
        </CardTitle>
      </CardHeader>
      <Table>
        <TableHeader>
          <TableRow>
            {header.map(({ header }, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {(isPagination ? data : data.slice(0, 5)).map((item) => (
            <TableRow key={item.id}>
              {header.map(({ id }, index) => (
                <TableCell key={index}>{item[id]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isPagination && (
        <div className="flex justify-between p-6 w-full items-center">
          <p className="text-md font-semibold">page:{table.pageIndex + 1}</p>
          <div className="flex gap-3">
            <Button variant="outline" className="text-[20px]" onClick={prev}>
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>
            <Button variant="outline" onClick={next}>
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default TableComponent;
