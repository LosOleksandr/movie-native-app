import { Text, View } from 'react-native'

import Button from '@/components/shared/button'
import SafeViewContainer from '@/components/shared/safe-view-container'

const Page = () => {
    return (
        <SafeViewContainer className="justify-center">
            <Text>Home</Text>
            <View className="items-start gap-4 p-4">
                <Button text="Click me" className="p-5 text-3xl" />
                {/* <Button text="Click me" size={'small'} />
                <Button text="Click me" size={'medium'} />
                <Button text="Click me" size={'large'} /> */}
            </View>
        </SafeViewContainer>
    )
}

export default Page
