import { classnames } from 'tailwindcss-classnames'

const cn = (...inputs: string[] | any[]) => {
  return classnames(inputs as any)
}

export default cn
