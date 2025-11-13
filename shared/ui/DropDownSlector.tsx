import React from 'react';
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent
} from '@mui/material';

interface DropDownSelectorProps {
  data: string[];
  value?: string;
  onChange?: (value: string) => void;
  fullWidth?: boolean;
}

const DropDownSelector: React.FC<DropDownSelectorProps> = ({
  data,
  value = "",
  onChange,
  fullWidth = false,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange?.(event.target.value as string);
  };

  return (
    <Box sx={{ maxWidth: 60, my: 1 }}>
      <FormControl
        fullWidth={fullWidth}
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          "& .MuiSelect-outlined": {
            padding: "4px",
            paddingRight: "32px", // for icon space
            fontSize: 0, // hide text
          },
          "& .MuiSvgIcon-root": {
            color: "#555", // customize icon color if needed
          },
          backgroundColor: "transparent",
          minWidth: 40,
        }}
      >
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          IconComponent={(props) => (
            <svg {...props} viewBox="0 0 24 24" fill="none">
              <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
            </svg>
          )}
        >
          {data.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDownSelector;
