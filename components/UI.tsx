'use client';

import React from 'react';
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  SelectChangeEvent,
  Typography,
  Stack,
} from '@mui/material';

/* ===================== ControlGroup ===================== */

interface ControlGroupProps {
  label: string;
  children: React.ReactNode;
}

export const ControlGroup = React.memo(function ControlGroup({
  label,
  children,
}: ControlGroupProps) {
  return (
    <Stack spacing={0.5} sx={{ mb: 2 }} style={{ marginTop: 0 }}>
      {/* Label */}
      <Typography
        variant='caption'
        color='text.secondary'
        sx={{ fontWeight: 600 }}
      >
        {label}
      </Typography>

      {/* Control (Slider / Select / etc) */}
      {children}
    </Stack>
  );
});

/* ===================== Select ===================== */

interface SelectProps<T extends string> {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: readonly T[];
}

export function Select<T extends string>({
  label,
  value,
  onChange,
  options,
}: SelectProps<T>) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as T);
  };

  return (
    <FormControl fullWidth size='small'>
      <MuiSelect
        value={value}
        onChange={handleChange}
        sx={{
          backgroundColor: '#f8fafc',
          borderRadius: '10px',
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
