import { Select } from "@radix-ui/react-select";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { CalendarDays, ReceiptJapaneseYen } from "lucide-react";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const HeroSearchBox = () => {
  return (
    <div className="bg-background rounded-xl border p-4">
      <h1 className="mb-2 text-lg font-[550]">Search for available rooms</h1>
      <div className="mb-4 space-y-3">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="grid flex-1 gap-3 lg:grid-cols-2">
          <InputGroup>
            <InputGroupInput placeholder="Budget" />
            <InputGroupAddon>
              <ReceiptJapaneseYen />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Check In" />
            <InputGroupAddon>
              <CalendarDays />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <Button className="w-full" size={"lg"}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default HeroSearchBox;
