import { Placeholder, PlaceholderMedia, Fade } from 'rn-placeholder'

interface ISkeletonProps {
  width: number
  height: number
  borderRadius?: number
  backgroundColor?: string
  isCenter?: boolean
}

export const Skeleton = (props: ISkeletonProps) => {
  const { width, height, borderRadius, backgroundColor = 'white', isCenter = false } = props

  return (
    <Placeholder Animation={Fade}>
      <PlaceholderMedia style={{ alignSelf: isCenter ? 'center' : 'flex-start', width, height, borderRadius, backgroundColor }} />
    </Placeholder>
  )
}
