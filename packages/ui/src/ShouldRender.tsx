// https://www.learn-ts.org/en/Truthy_and_Falsy
type IsTruthy<T> = T extends false | "" | 0 | null | undefined ? false : true

type Props<T> = {
  if: T
} & (IsTruthy<T> extends true
  ? { children: React.ReactNode }
  : { children?: never })

export const ShouldRender = <T,>({
  if: condition,
  children,
}: Props<T>): JSX.Element => <>{condition ? children : null}</>
