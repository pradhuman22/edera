"use client";
import { Select } from "@radix-ui/react-select";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { CalendarIcon, ReceiptJapaneseYen } from "lucide-react";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { locations } from "@/constant";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import { useRouter } from "next/navigation"; // Import useRouter

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// Helper to format date to YYYY-MM-DD for URL parameters
function formatUrlDate(date: Date | undefined) {
  if (!date) {
    return "";
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

const HeroSearchBox = () => {
  const router = useRouter(); // Initialize useRouter

  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState<string>(""); // State for selected location
  const [budget, setBudget] = useState<string>(""); // State for budget input
  const [date, setDate] = useState<Date | undefined>(undefined); // Initial date is undefined
  const [month, setMonth] = useState<Date | undefined>(date); // Month for calendar display
  const [value, setValue] = useState(formatDate(date)); // Value for date input field

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (location) {
      params.append("location", location);
    }
    if (budget) {
      params.append("rent", budget);
    }
    if (date) {
      params.append("check_in_date", formatUrlDate(date));
    }

    router.push(`/rooms?${params.toString()}`);
  };

  return (
    <div className="bg-background rounded-xl border p-4">
      <h1 className="mb-2 text-lg font-[550]">Search for available rooms</h1>
      <div className="mb-4 space-y-3">
        <Select value={location} onValueChange={setLocation}>
          {" "}
          {/* Bind value and onValueChange */}
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {locations.map(
                (
                  loc,
                  idx, // Renamed location to loc to avoid conflict with state
                ) => (
                  <SelectItem value={loc.value} key={idx}>
                    {loc.label}
                  </SelectItem>
                ),
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="mb-5 grid flex-1 gap-3 lg:grid-cols-2">
          <InputGroup>
            <InputGroupInput
              placeholder="Budget"
              value={budget} // Bind value
              onChange={(e) => setBudget(e.target.value)} // Bind onChange
              type="number" // Suggest type number for budget
            />
            <InputGroupAddon>
              <ReceiptJapaneseYen />
            </InputGroupAddon>
          </InputGroup>
          <div className="relative flex gap-2">
            <Input
              id="date"
              value={value}
              placeholder="Select Date" // Changed placeholder
              className="bg-background pl-10"
              onChange={(e) => {
                const newDate = new Date(e.target.value);
                setValue(e.target.value);
                if (isValidDate(newDate)) {
                  setDate(newDate);
                  setMonth(newDate);
                } else {
                  setDate(undefined); // Clear date if input is invalid
                  setMonth(undefined); // Clear month as well
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setOpen(true);
                }
              }}
            />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  id="date-picker"
                  variant="ghost"
                  className="absolute top-1/2 left-2 size-6 -translate-y-1/2 cursor-pointer"
                >
                  <CalendarIcon className="size-3.5" />
                  <span className="sr-only">Select date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align={"start"}
                side={"top"}
                alignOffset={-22}
                sideOffset={16}
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  month={month}
                  onMonthChange={setMonth}
                  onSelect={(selectedDate) => {
                    // Renamed date to selectedDate to avoid conflict
                    setDate(selectedDate);
                    setValue(formatDate(selectedDate));
                    setOpen(false);
                    if (selectedDate) {
                      // Ensure month is set if a date is selected
                      setMonth(selectedDate);
                    }
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <Button className="w-full" size={"lg"} onClick={handleSearch}>
          {" "}
          {/* Add onClick handler */}
          Search
        </Button>
      </div>
    </div>
  );
};

export default HeroSearchBox;
