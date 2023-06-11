import { FormControl, FormLabel, Select, type FormControlProps, Text } from '@chakra-ui/react'
import { type Dispatch, type SetStateAction } from 'react'

export interface OptionSelectProps {
  name: string
  value: string
}

export interface SelectInputProps extends FormControlProps {
  label: string
  select: string
  setSelect: Dispatch<SetStateAction<string>>
  data: OptionSelectProps[]
}

export const SelectInput = ({ label, data, select, setSelect, ...styles }: SelectInputProps): JSX.Element => {
  return (
    <FormControl position="relative" border="1px solid" borderColor="gray.300" {...styles} height="59px">
      <FormLabel position="absolute" marginBottom="none" marginInlineEnd="none" top="2px" >
        <Text fontSize={16} color="ink.standard" transform="scale(0.75)">
          {label}
        </Text>
      </FormLabel>
      <Select
        border="none"
        fontSize={16}
        height="54px"
        paddingTop={2}
        fontWeight={500}
        color="ink.normal"
        width="100%"
        value={select}
        onChange={(e) => { setSelect(e.target.value) }}>
        {data?.map((option) => {
          return <option key={option.value} value={option.value}>{option.name}</option>
        })}
      </Select>
    </FormControl>
  )
}
