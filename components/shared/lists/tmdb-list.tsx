import { useSuspenseQuery } from '@tanstack/react-query'
import { FlatList, View, type FlatListProps } from 'react-native'

import type { TMDBListQuery } from '@/types/query'
import type { TMDBListItem as TMDBListItemType } from '@/types/tmdb'

import TMDBListItem from '../list-items/tmdb-list-item'

type TMDBListProps = {
    query: TMDBListQuery
} & Omit<FlatListProps<TMDBListItemType>, 'data' | 'renderItem' | 'keyExtractor'>

const TMDBList = ({ query, ...props }: TMDBListProps) => {
    const { queryKey, queryFn, queryOptions } = query

    const { data } = useSuspenseQuery({
        queryKey,
        queryFn,
        ...queryOptions,
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
