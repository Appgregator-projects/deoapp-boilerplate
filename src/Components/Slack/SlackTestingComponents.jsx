import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { errorSlack, loginSlack } from '../../Apis/slackApi'

function SlackTestingComponents() {

    const testSlack = async () => {
        const data = 'halo rifqy ganteng'
        try {
            const res = await loginSlack(data)
            console.log(res, 'ini ress')

        } catch (error) {
            console.log(error, 'ini error')
        }
    }

    const testErrorSlack = async () => {
        const data = 'error nih jing'
        try {
            const res = await errorSlack(data)
            console.log(res, 'ini ress')

        } catch (error) {
            console.log(error, 'ini error')
        }
    }
    return (
        <Stack>
            <Button onClick={() => testSlack()}>Click login</Button>
            <Button onClick={() => testErrorSlack()}>Error Slack</Button>
        </Stack>
    )
}

export default SlackTestingComponents