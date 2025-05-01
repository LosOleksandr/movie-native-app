import { ScrollView } from 'react-native'

import SafeViewContainer from '@/components/shared/safe-view-container'
import TopicsList from '@/components/topics-list'

const Page = () => {
    return (
        <SafeViewContainer>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="gap-8 p-5">
                <TopicsList />
            </ScrollView>
        </SafeViewContainer>
    )
}

export default Page
