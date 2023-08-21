import { classnames } from 'tailwindcss-classnames'

const cn = (...inputs: string[]) => {
  return classnames(inputs as any)
}

export default cn
