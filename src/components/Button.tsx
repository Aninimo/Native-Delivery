import { Button as ButtonNative} from 'native-base'

interface ButtonProps{
  title: string;
  onPress: () => void;
  variant?: 'bgGreen' | 'bgYellow'
}

export function Button({ title, variant, onPress }: ButtonProps){
  return(
    <ButtonNative
      bg={variant === 'bgGreen' ? 'green.500' : 'yellow.500'}
      onPress={onPress}
    >
      {title}
    </ButtonNative>
  )
}
