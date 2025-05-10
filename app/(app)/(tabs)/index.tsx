import { ScrollView } from 'react-native'

import FadeInContainer from '@/components/shared/fade-in-container'
import TrendingCarousel from '@/components/shared/lists/trending-carousel'
import SafeViewContainer from '@/components/shared/safe-view-container'
import TopicsList from '@/components/topics-list'

const Page = () => {
    return (
        <SafeViewContainer>
            <ScrollView>
                <FadeInContainer>
                    <TrendingCarousel />
                    <TopicsList />
                </FadeInContainer>
            </ScrollView>
        </SafeViewContainer>
    )
}

export default Page
