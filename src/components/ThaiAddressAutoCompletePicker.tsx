import React, { memo, useMemo, useRef, useState } from 'react'
import { View } from 'react-native'
import * as R from 'ramda'
import { isEmpty } from '@/utilities/validate'
import Label from '@/components/Label'
import Input from '@/components/Input'
import { Layout } from '@/components/Layout'
import Dropdown from '@/components/Dropdown'
// @ts-ignore
import ThaiAddress from 'react-thai-address'

interface IThaiAddressAutoCompleteProps {
  label?: string
  currentState: {
    address?: string
    province?: { label: string, value: string }
    district?: { label: string, value: string }
    subDistrict?: { label: string, value: string }
    zipcode?: { label: string, value: string }
  }
  onChange: (addressFields: {
    address?: string
    province?: { label: string, value: string }
    district?: { label: string, value: string }
    subDistrict?: { label: string, value: string }
    zipcode?: { label: string, value: string }
  }) => void
  CustomHeaderSection?: any
  errors: {
    address: string
    province: string
    district: string
    subDistrict: string
    zipcode: string
  }
}

const delimiter = ', '

type TOnSelect = {
  subDistrict: string
  district: string
  province: string
  zipcode: string
}

interface IAutoCompleteProps {
  addressField: string
  label: string
  placeholder?: string
  onSelect: (props: TOnSelect) => void
  value: string
  erorrMessage?: string
}

const AutoComplete = memo((props: IAutoCompleteProps) => {
  const {
    addressField,
    label,
    placeholder,
    onSelect,
    value,
    erorrMessage,
  } = props

  const searchTextRef = useRef('')
  const [options, setOptions] = useState([])

  const handleChange = (text: string) => {
    let searchKey = addressField
    searchTextRef.current = text

    switch (searchKey) {
      case 'subDistrict': searchKey = 'tumbon'; break
      case 'district': searchKey = 'city'; break
      default:
    }

    const search = ThaiAddress.search({ [searchKey]: text }, 10)
    let _search = search
    _search = _search || search
    const _options = _search.map((item: any) => {
      const value = `${item.tumbon}${delimiter}${item.city}${delimiter}${item.province}${delimiter}${item.zipcode}`
      return { label: value, value }
    })
    setOptions(_options)
  }

  const handleSelect = (value: any) => {
    const address = value.split(delimiter)
    const valueSelected = {
      subDistrict: address[0],
      district: address[1],
      province: address[2],
      zipcode: address[3],
    }
    setTimeout(() => onSelect && onSelect(valueSelected), 100)
    searchTextRef.current = ''
  }

  const forceOptionsAfterSearch = useMemo(() => {
    const isFound = options.findIndex(({ value: v }) => v === value) !== -1
    if (isFound || isEmpty(value) || searchTextRef.current.length > 0) return options
    return [{ value, label: value }]
  }, [value, options])

  return (
    <Dropdown
      searchable
      label={label}
      placeholder={placeholder}
      options={forceOptionsAfterSearch}
      onChangeSearchText={handleChange}
      onChange={handleSelect}
      value={value}
      required
      searchPlaceholder="พิมพ์ค้นหาสถานที่"
      error={erorrMessage}
    />
  )
})

const ThaiAddressAutoCompletePicker = (props: IThaiAddressAutoCompleteProps) => {
  const {
    label,
    currentState,
    onChange,
    errors,
    CustomHeaderSection,
  } = props

  const onSelect = (fullAddress: any) => {
    const { subDistrict, district, province, zipcode } = fullAddress
    if (
      !isEmpty(subDistrict) &&
      !isEmpty(district) &&
      !isEmpty(province) &&
      !isEmpty(zipcode)
    ) {
      onChange({
        subDistrict: { label: subDistrict, value: subDistrict },
        district: { label: district, value: district },
        province: { label: province, value: province },
        zipcode: { label: zipcode, value: zipcode },
      })
    }
  }

  const onChangeAddress = (text: string) => {
    onChange({ address: text })
  }

  return (
    <View className="z-50">
      <View className="flex flex-row items-center">
        {label && <Label bold>{label}</Label>}
        {!!CustomHeaderSection && CustomHeaderSection}
      </View>
      {(label || !!CustomHeaderSection) && <View className="h-8" />}
      <View className="w-full">
        <Input
          label="ที่อยู่"
          required
          placeholder="บ้านเลขที่ / หมู่บ้าน / ถนน / ซอย"
          value={R.path(['address'], currentState) as string}
          onChangeEffect={onChangeAddress}
          error={R.propOr('', 'address', errors)}
        />
        <Layout.Wrapper className="items-start z-20">
          <Layout._2_1 gapSize={-1} className="sm:pr-2 z-50">
            <View className="h-6" />
            <AutoComplete
              label="ตำบล / แขวง"
              addressField="subDistrict"
              onSelect={onSelect}
              value={R.path(['subDistrict', 'value'], currentState) as string}
              placeholder="พิมพ์เพื่อค้นหา"
              erorrMessage={R.propOr('', 'subDistrict', errors)}
            />
          </Layout._2_1>
          <Layout._2_1 gapSize={-1} className="sm:pr-2 z-40">
            <View className="h-6" />
            <AutoComplete
              label="เขต / อำเภอ"
              addressField="district"
              onSelect={onSelect}
              value={R.path(['district', 'value'], currentState) as string}
              placeholder="พิมพ์เพื่อค้นหา"
              erorrMessage={R.propOr('', 'district', errors)}
            />
          </Layout._2_1>
        </Layout.Wrapper>
        <Layout.Wrapper className="items-start z-10">
          <Layout._2_1 gapSize={-1} className="sm:pr-2 z-30">
            <View className="h-6" />
            <AutoComplete
              label="จังหวัด"
              addressField="province"
              onSelect={onSelect}
              value={R.path(['province', 'value'], currentState) as string}
              placeholder="พิมพ์เพื่อค้นหา"
              erorrMessage={R.propOr('', 'province', errors)}
            />
          </Layout._2_1>
          <Layout._2_1 gapSize={-1} className="sm:pl-2 z-20">
            <View className="h-6" />
            <AutoComplete
              label="รหัสไปรษณีย์"
              addressField="zipcode"
              onSelect={onSelect}
              value={R.path(['zipcode', 'value'], currentState) as string}
              placeholder="พิมพ์เพื่อค้นหา"
              erorrMessage={R.propOr('', 'zipcode', errors)}
            />
          </Layout._2_1>
        </Layout.Wrapper>
      </View>
    </View>
  )
}

export default ThaiAddressAutoCompletePicker
