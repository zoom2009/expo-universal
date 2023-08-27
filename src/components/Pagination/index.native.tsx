import { useEffect, useMemo, useRef } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import cn from "@/utilities/cn"
import { ACTIVE_OPACITY } from "@/components/Button"
import { Icon } from "@/components/Icon"
import theme from "@/utilities/theme"
import { IPaginationProps } from "./interface"

export const Pagination = (props: IPaginationProps) => {
  const {
    current,
    total,
    onPageChange,
  } = props

  const listRef = useRef({
    scrollToIndex: (props: any) => {},
  })

  const pageNo = useMemo(() => {
    let p: number[] = []
    for (let i = 1; i <= total; i++) {
      p.push(i)
    }
    return p
  }, [total])

  const onPageChangeFunction = (pageNo: number) => () => {
    onPageChange(pageNo)
    listRef.current.scrollToIndex({
      animated: true,
      index: pageNo - 1,
      viewPosition: 0.5
    })
  }

  const onBack = () => {
    onPageChangeFunction(current - 1)()
  }

  const onNext = () => {
    onPageChangeFunction(current + 1)()
  }

  const renderItem = ({ item }: { item: number }) => {
    const isActive = current === item

    return (
      <TouchableOpacity
        activeOpacity={ACTIVE_OPACITY}
        onPress={onPageChangeFunction(item)}
        className={cn([
          "w-11 h-11 justify-center items-center rounded-full",
          isActive ? 'bg-primary' : 'bg-none'
        ])}
      >
        <Text className={cn([isActive ? 'text-white' : 'text-black'])}>{item}</Text>
      </TouchableOpacity>
    )
  }

  useEffect(() => {
    setTimeout(() => {
      try {
        listRef.current.scrollToIndex({
          animated: false,
          index: current - 1,
          viewPosition: 0.5
        })
      } catch (e) {
        console.log('fail to init scroll pagination e:', e)
      }
    }, 500)
  }, [])

  return (
    <View className="flex w-full mx-auto flex-row justify-between items-center bg-[#d9d9d9] py-2.5 rounded-lg">
      <TouchableOpacity
        onPress={onBack}
        activeOpacity={ACTIVE_OPACITY}
        className="justify-center items-center pl-2 pr-1"
      >
        <Icon.CaretLeft weight="bold" size={28} color={current > 0 ? theme.colors.primary : theme.colors.disabled} />
      </TouchableOpacity>
      <View className="flex flex-1 items-center justify-center rounded-full bg-[#eee]">
        <FlatList
          ref={listRef as any}
          bounces={false}
          renderItem={renderItem}
          data={pageNo}
          horizontal
          keyExtractor={item => `${item}`}
          contentContainerStyle={{ paddingVertical: 6, paddingHorizontal: 10 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity
        onPress={onNext}
        activeOpacity={ACTIVE_OPACITY}
        className="justify-center items-center pr-2 pl-1"
      >
        <Icon.CaretRight weight="bold" size={28} color={current < total ? theme.colors.primary : theme.colors.disabled} />
      </TouchableOpacity>
    </View>
  )
}
