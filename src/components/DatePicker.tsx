import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface DatePickerProps extends TouchableOpacityProps {
  value?: Date;
  label?: string;
  labelClasses?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  labelClasses,
  value,
  ...props
}) => {
  const [date, setDate] = useState(value || new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  return (
    <>
      <TouchableOpacity onPress={showDatePicker} {...props}>
        <Text className={labelClasses}>{label}</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </>
  );
};

export default DatePicker;
