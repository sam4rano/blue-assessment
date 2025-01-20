"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  useReactTable,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Eye,
  Search,
  ArrowUpDown,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { DateRange, TransactionEvacuation } from "@/app/types/type";



// Enhanced SearchFilterBar with DatePicker
const SearchFilterBar = ({
  onSearch,
  onDateChange,
  onTypeChange,
  dateRange,
  selectedType,
}: {
  onSearch: (term: string) => void;
  onDateChange: (range: DateRange) => void;
  onTypeChange: (type: string) => void;
  dateRange: DateRange;
  selectedType: string;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;

    if (!dateRange.startDate || (dateRange.startDate && dateRange.endDate)) {
      onDateChange({ startDate: date, endDate: null });
    } else {
      if (date < dateRange.startDate) {
        onDateChange({ startDate: date, endDate: dateRange.startDate });
      } else {
        onDateChange({ startDate: dateRange.startDate, endDate: date });
      }
      setIsCalendarOpen(false);
    }
  };

  return (
    <div className="flex flex-row justify-between items-center p-4 bg-primary_lighter rounded-xl border-border_grey border-[1px]">
      <div className="relative flex items-center w-[370px]">
        <Search className="absolute left-3 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search for Amount, Code or Branch name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-10 py-2  text-sm text-gray-700 bg-gray-100 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-row gap-4 justify-center align-middle items-center">
        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm">
                {dateRange.startDate
                  ? dateRange.endDate
                    ? `${format(
                        dateRange.startDate,
                        "MMM dd, yyyy"
                      )} - ${format(dateRange.endDate, "MMM dd, yyyy")}`
                    : format(dateRange.startDate, "MMM dd, yyyy")
                  : "Select Date Range"}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={dateRange.startDate || undefined}
              onSelect={handleDateSelect}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">All Types</option>
          <option value="Fulfilled">Fulfilled</option>
          <option value="Unfulfilled">Unfulfilled</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
    </div>
  );
};

export function TransactionTable() {
  // State management
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  const [selectedType, setSelectedType] = useState("");
  const [globalFilter, setGlobalFilter] = useState("");
  const [filteredData, setFilteredData] = useState<TransactionEvacuation[]>([]);

  const data = useMemo<TransactionEvacuation[]>(
    () => [
      {
        originator: {
          name: "Babalola Oluwatoyini",
          id: "TI-338-3737-2882",
        },
        fromBranch: "Oke Arin Br.",

        code: "CRQ-36941",
        amount: 38995000,
        currency: "Nigerian Naira (NGN)",
        status: "Fulfilled",
        date: new Date("2024-01-15"),
      },
      {
        originator: {
          name: "Chinwe Nnadi",
          id: "TI-948-3829-2738",
        },
        fromBranch: "Enugu Br.",
        
        code: "CRQ-83947",
        amount: 450000,
        currency: "British Pounds (GBP)",
        status: "Fulfilled",
        date: new Date("2024-01-16"),
      },
      {
        originator: {
          name: "Fatima Bello",
          id: "TI-394-4829-3847",
        },
        fromBranch: "Ibadan Br.",
    
        code: "CRQ-59473",
        amount: 1045000,
        currency: "Canadian Dollars (CAD)",
        status: "Pending",
        date: new Date("2024-01-17"),
      },
      {
        originator: {
          name: "Ahmed Musa",
          id: "TI-847-2950-4859",
        },
        fromBranch: "Abuja Central Br.",
       
        code: "CRQ-48594",
        amount: 2234500,
        currency: "Japanese Yen (JPY)",
        status: "Pending",
        date: new Date("2024-01-18"),
      },
      {
        originator: {
          name: "Ngozi Chukwuka",
          id: "TI-493-8493-3748",
        },
        fromBranch: "Ikeja Br.",
       
        code: "CRQ-93748",
        amount: 7845000,
        currency: "United States Dollar (USD)",
        status: "Fulfilled",
        date: new Date("2024-01-19"),
      },
      {
        originator: {
          name: "Samuel Ojo",
          id: "TI-274-4920-3847",
        },
        fromBranch: "Ajah Br.",
        
        code: "CRQ-74829",
        amount: 3250000,
        currency: "Swiss Franc (CHF)",
        status: "Pending",
        date: new Date("2024-01-20"),
      },
      {
        originator: {
          name: "Adetayo Adebayo",
          id: "TI-129-2394-4598",
        },
        fromBranch: "Marina Br.",
        
        code: "CRQ-48293",
        amount: 1500000,
        currency: "Australian Dollar (AUD)",
        status: "Unfulfilled",
        date: new Date("2024-01-21"),
      },
      {
        originator: {
          name: "Grace Okonkwo",
          id: "TI-583-9472-3850",
        },
        fromBranch: "Port Harcourt Br.",
       
        code: "CRQ-29483",
        amount: 1200000,
        currency: "South African Rand (ZAR)",
        status: "Fulfilled",
        date: new Date("2024-01-22"),
      },
      {
        originator: {
          name: "David Omotayo",
          id: "TI-483-5739-4957",
        },
        fromBranch: "Ibadan Br.",
        
        code: "CRQ-74839",
        amount: 2150000,
        currency: "Euro (EUR)",
        status: "Fulfilled",
        date: new Date("2024-01-23"),
      },
      {
        originator: {
          name: "Amaka Eze",
          id: "TI-293-8495-5847",
        },
        fromBranch: "Enugu Br.",
        
        code: "CRQ-94857",
        amount: 980000,
        currency: "Chinese Yuan (CNY)",
        status: "Pending",
        date: new Date("2024-01-24"),
      },
    ],
    []
  ); // Empty dependency array since data is static

  // Then update your useEffect dependency array:
  useEffect(() => {
    let result = [...data];

    // Global search filter
    if (globalFilter) {
      const searchTerm = globalFilter.toLowerCase();
      result = result.filter(
        (item) =>
          item.code.toLowerCase().includes(searchTerm) ||
          item.fromBranch.toLowerCase().includes(searchTerm) ||
          item.amount.toString().includes(searchTerm)
      );
    }

    // Date range filter
	if (dateRange.startDate && dateRange.endDate) {
		result = result.filter(
		  (item) =>
			item.date >= (dateRange.startDate ?? new Date(0)) && 
			item.date <= (dateRange.endDate ?? new Date())
		);
	  }
	  
    // Type/Status filter
    if (selectedType) {
      result = result.filter((item) => item.status === selectedType);
    }

    setFilteredData(result);
  }, [globalFilter, dateRange, selectedType, data]); // data is now memoized

  // Column definitions
  const columns: ColumnDef<TransactionEvacuation>[] = [
    {
      accessorKey: "originator",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1"
        >
          Originator
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2 font-roboto">
          <div className="w-10 h-10 rounded-xl bg-brand_primary_inverse flex items-center justify-center text-base font-extrabold">
            {row.original.originator.name[0]}
          </div>
          <div>
            <div className="font-roboto font-normal text-base text-[#353535]">
              {row.original.originator.name}
            </div>
            {row.original.originator.id && (
              <div className="text-sm text-body_text_dark">
                {row.original.originator.id}
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      accessorKey: "fromBranch",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1"
        >
          From Branch
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
   
    {
      accessorKey: "code",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1 text-sm text-grey_100"
        >
          Code
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1 text-sm text-grey_100"
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <span>₦{row.original.amount.toLocaleString()}</span>,
    },
    {
      accessorKey: "currency",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1 text-sm text-grey_100"
        >
          Currency
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1"
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const status = row.original.status;
        const colors = {
          Fulfilled: "bg-green-100 text-green-800 border-[2px]",
          Unfulfilled: "bg-red-100 text-red-800 border-[2px]",
          Pending:
            "border-[2px] border-color_yellow-light bg-color_yellow-light text-color_yellow-deeper ",
        };

        return (
          <span className={`px-2 py-1 rounded-md text-sm  ${colors[status]}`}>
            {status}
          </span>
        );
      },
    },
    {
      id: "actions",
      header: "Action",
      cell: () => (
        <Button variant="ghost" size="icon" className="rounded-xl bg-brand_primary_inverse flex items-center justify-center text-base font-extrabold">
          <Eye className="w-10 h-10" />
        </Button>
      ),
    },
  ];

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  // Filter handlers
  const handleSearch = (term: string) => {
    setGlobalFilter(term);
  };

  const handleDateChange = (range: DateRange) => {
    setDateRange(range);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  return (
    <div className="space-y-4">
      <SearchFilterBar
        onSearch={handleSearch}
        onDateChange={handleDateChange}
        onTypeChange={handleTypeChange}
        dateRange={dateRange}
        selectedType={selectedType}
      />

      <div className="rounded-sm border bg-white">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="py-2 text-normal font-inter italis text-xs">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-[22px] px-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-row items-center justify-between pt-2 pb-4 px-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
		  className="py-2 px-3 text-sm font-medium"
        >
          <ArrowLeft />
          Previous
        </Button>
        <div className="text-sm text-gray-500">
          Showing{" "}
          {table.getState().pagination.pageIndex *
            table.getState().pagination.pageSize +
            1}{" "}
          to{" "}
          {Math.min(
            (table.getState().pagination.pageIndex + 1) *
              table.getState().pagination.pageSize,
            filteredData.length
          )}{" "}
          of {filteredData.length} results
        </div>

        <Button
          variant="outline"
          size="sm"
		  className="py-2 px-3 text-sm font-medium"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default TransactionTable;
