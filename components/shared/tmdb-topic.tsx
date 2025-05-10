import { Suspense, type PropsWithChildren } from 'react'
import { View, type ViewProps } from 'react-native'

import { TopicSkeletonItem, TopicSkeletonList } from './loading/topic-sketelon'
import ThemedText from './themed-text'

type TMDBTopicProps = {
    topic_title?: string
} & ViewProps

export const TMDBTopic = ({ topic_title, className, children, ...props }: PropsWithChildren<TMDBTopicProps>) => {
    return (
        <View className={className} {...props}>
            {topic_title ? (
                <ThemedText className="mb-4 ml-4" size={'2xl'} font={'bold'}>
                    {topic_title}
                </ThemedText>
            ) : null}
            <Suspense
                fallback={
                    <TopicSkeletonList
                        numItems={20}
                        contentContainerClassName="gap-4 ml-4"
                        renderItem={() => <TopicSkeletonItem className="h-80 w-48 rounded-xl" />}
                    />
                }
            >
                {children}
            </Suspense>
        </View>
    )
}
