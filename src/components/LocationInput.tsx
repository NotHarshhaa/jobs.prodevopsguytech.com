import citiesList from "@/lib/cities-list";
import { forwardRef, useMemo, useState, useEffect } from "react";
import { Input } from "./ui/input";

interface LocationInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onLocationSelected: (location: string) => void;
  defaultValue?: string;
}

export default forwardRef<HTMLInputElement, LocationInputProps>(
  function LocationInput({ onLocationSelected, defaultValue, ...props }, ref) {
    const [locationSearchInput, setLocationSearchInput] = useState(defaultValue || "");
    const [hasFocus, setHasFocus] = useState(false);

    useEffect(() => {
      if (defaultValue) {
        setLocationSearchInput(defaultValue);
      }
    }, [defaultValue]);

    const cities = useMemo(() => {
      if (!locationSearchInput.trim()) return [];

      const searchWords = locationSearchInput.split(" ");

      return citiesList
        .map((city) => `${city.name}, ${city.subcountry}, ${city.country}`)
        .filter(
          (city) =>
            city.toLowerCase().startsWith(searchWords[0].toLowerCase()) &&
            searchWords.every((word) =>
              city.toLowerCase().includes(word.toLowerCase()),
            ),
        )
        .slice(0, 5);
    }, [locationSearchInput]);

    const handleLocationSelect = (city: string) => {
      onLocationSelected(city);
      setLocationSearchInput(city);
      setHasFocus(false);
    };

    return (
      <div className="relative">
        <Input
          placeholder="Search for a city..."
          type="search"
          value={locationSearchInput}
          onChange={(e) => setLocationSearchInput(e.target.value)}
          onFocus={() => setHasFocus(true)}
          onBlur={(e) => {
            // Check if the related target is one of our location buttons
            const relatedTarget = e.relatedTarget as HTMLElement;
            if (!relatedTarget?.classList.contains('location-button')) {
              setHasFocus(false);
            }
          }}
          {...props}
          ref={ref}
        />
        {locationSearchInput.trim() && hasFocus && (
          <div 
            className="absolute z-20 w-full divide-y rounded-b-lg border-x border-b bg-background shadow-xl"
          >
            {!cities.length && <p className="p-3">No results found.</p>}
            {cities.map((city) => (
              <button
                key={city}
                className="location-button block w-full p-2 text-start hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                onMouseDown={(e) => {
                  e.preventDefault(); // Prevent blur
                  handleLocationSelect(city);
                }}
              >
                {city}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  },
);
