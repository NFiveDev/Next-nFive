import { Switch } from "@chakra-ui/react"

type ToggleProps = {
    size: 'sm' | 'md' | 'lg'
    color?: string
}


export default function Toggle({size, color='teal.400'} : ToggleProps) {
    return (
        <Switch colorScheme={color} size={size}></Switch>
    )
}