import { FormControl, type FormControlProps, Input, FormLabel, Text } from '@chakra-ui/react'
import { type Dispatch, type SetStateAction } from 'react'

export interface DateProps extends FormControlProps {
  label: string
  date: string
  setDate: Dispatch<SetStateAction<string>>
}

export const DateInput = ({ label, date, setDate, ...styles }: DateProps): JSX.Element => {
  return (
    <FormControl position="relative" border="1px solid" borderColor="gray.300" {...styles} height="59px" label={label}>
      <FormLabel position="absolute" marginBottom="none" marginInlineEnd="none" top="2px" >
        <Text fontSize={16} color="ink.standard" transform="scale(0.75)">
          {label}
        </Text>
      </FormLabel>
      <Input
        border="none"
        fontSize={16}
        h="57px"
        outline="none"
        pt={2}
        pl="6px"
        fontWeight={500}
        color="ink.normal"
        _focusVisible={{
          border: 'none'
        }}
        w="100%"
        value={date}
        onChange={(e) => { setDate(e.target.value); console.log(e.target.value) }}
        type='date'
      />
    </FormControl >
  )
}
