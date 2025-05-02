import { Suspense, type PropsWithChildren } from 'react'

import FadeInContainer from './fade-in-container'
import TopicSkeleton from './loading/topic-sketelon'
import ThemedText from './themed-text'

type TMDBTopicProps = {
    topic_title: string
}

export const TMDBTopic = ({ topic_title, children }: PropsWithChildren<TMDBTopicProps>) => {
    return (
        <FadeInContainer>
            <ThemedText className="mb-4 ml-4" size={'2xl'} font={'bold'}>
                {topic_title}
            </ThemedText>
            <Suspense fallback={<TopicSkeleton />}>{children}</Suspense>
        </FadeInContainer>
    )
}
