import { createContext, useContext, useRef, type PropsWithChildren } from 'react'
import { View } from 'react-native'
import { useSharedValue, type SharedValue } from 'react-native-reanimated'
import * as RnCarousel from 'react-native-reanimated-carousel'

import { cn } from '@/utils/cn'
import { colors } from '@/utils/colors'

type CarouselContextType<T extends Record<string, any>> = {
    data: T[]
    progress: SharedValue<number>
    ref: React.RefObject<RnCarousel.ICarouselInstance>
    scrollTo: (index: number) => void
}

type CarouselProps<T> = {
    containerClassname?: string
    id: string
} & RnCarousel.TCarouselProps<T>

const CarouselContext = createContext<CarouselContextType<Record<string, any>> | null>(null)

const useCarousel = <T extends Record<string, any>>() => {
    const context = useContext(CarouselContext)

    if (!context) {
        throw new Error('useCarousel must be used within a Carousel component')
    }
    return context as CarouselContextType<T>
}

const Carousel = <T extends Record<string, any>>({
    data,
    id,
    renderItem,
    containerClassname,
    children,
    ...props
}: PropsWithChildren<CarouselProps<T>>) => {
    const scrollOffsetValue = useSharedValue<number>(0)
    const ref = useRef<RnCarousel.ICarouselInstance>(null)
    const progress = useSharedValue<number>(0)

    const scrollTo = (index: number) => {
        ref.current?.scrollTo({
            count: index - progress.value,
            animated: true,
        })
    }

    const contextValue = {
        data,
        progress,
        ref,
        scrollTo,
    }

    return (
        <CarouselContext.Provider value={contextValue}>
            <View id={id} className={cn('relative flex-1', containerClassname)}>
                <RnCarousel.default
                    ref={ref}
                    onProgressChange={progress}
                    data={data}
                    defaultScrollOffsetValue={scrollOffsetValue}
                    renderItem={renderItem}
                    style={{
                        width: '100%',
                    }}
                    loop={true}
                    autoPlay={false}
                    pagingEnabled
                    snapEnabled
                    {...props}
                />
                {children}
            </View>
        </CarouselContext.Provider>
    )
}

type PaginationBasicProps = Omit<Parameters<typeof RnCarousel.Pagination.Basic>[0], 'data' | 'progress'>

type PaginationCustomProps = Omit<Parameters<typeof RnCarousel.Pagination.Custom>[0], 'data' | 'progress'>

type PaginationSharedProps<T extends Record<string, any>> = {
    data: T[]
    progress: SharedValue<number>
    onPress: (index: number) => void
}

type PaginationProps = ({ variant: 'custom' } & PaginationCustomProps) | ({ variant?: 'basic' } & PaginationBasicProps)

export const Pagination = ({ variant = 'basic', ...props }: PaginationProps) => {
    const { data, progress, scrollTo } = useCarousel()

    const sharedProps = {
        data,
        progress,
        onPress: scrollTo,
    }

    if (variant === 'custom') {
        return <Custom {...(props as PaginationCustomProps)} {...sharedProps} />
    }

    return <Basic {...(props as PaginationBasicProps)} {...sharedProps} />
}

const Basic = <T extends Record<string, any>>({
    data,
    progress,
    onPress,
    containerStyle,
    dotStyle,
    activeDotStyle,
    ...props
}: PaginationBasicProps & PaginationSharedProps<T>) => (
    <RnCarousel.Pagination.Basic
        data={data}
        progress={progress}
        onPress={onPress}
        activeDotStyle={{
            backgroundColor: colors.accent.foreground,
            ...activeDotStyle,
        }}
        dotStyle={{
            backgroundColor: colors.muted.default,
            borderRadius: 50,
            ...dotStyle,
        }}
        containerStyle={containerStyle}
        {...props}
    />
)

const Custom = <T extends Record<string, any>>({
    data,
    progress,
    onPress,
    containerStyle,
    dotStyle,
    activeDotStyle,
    ...props
}: PaginationCustomProps & PaginationSharedProps<T>) => (
    <RnCarousel.Pagination.Custom
        data={data}
        progress={progress}
        onPress={onPress}
        activeDotStyle={{
            backgroundColor: colors.accent.foreground,
            ...activeDotStyle,
        }}
        dotStyle={{
            backgroundColor: colors.muted.default,
            borderRadius: 50,
            ...dotStyle,
        }}
        containerStyle={containerStyle}
        {...props}
    />
)

Carousel.Pagination = Pagination

export default Carousel
export { useCarousel }
