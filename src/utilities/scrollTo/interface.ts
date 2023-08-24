export interface IScrollToProps {
  /** To use this you should call onLayout at view-target for get x, y to get x, y you can use getPositionView fn. */
  scrollViewRef: any
  x?: number
  y?: number
}
