import { useSuspenseQuery, type QueryFunction } from '@tanstack/react-query'
import { FlatList, View, type FlatListProps } from 'react-native'

import type { TMDBListItem as TMDBListItemType, TMDBListResponse } from '@/types/tmdb'

import TMDBListItem from '../list-items/tmdb-list-item'

type TMDBListProps = {
    queryKey: string[]
    queryFn: QueryFunction<TMDBListResponse, string[], never>
} & Omit<FlatListProps<TMDBListItemType>, 'data' | 'renderItem' | 'keyExtractor'>

const TMDBList = ({ queryFn, queryKey, ...props }: TMDBListProps) => {
    const { data } = useSuspenseQuery({
        queryKey,
        queryFn,
    })

    return (
        <FlatList
            {...props}
            data={data.results}
            horizontal
            scrollEnabled
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TMDBListItem item={item} />}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-4" />}
            ListHeaderComponent={<View className="w-4" />}
            ListFooterComponent={<View className="w-4" />}
        />
    )
}

export default TMDBList
