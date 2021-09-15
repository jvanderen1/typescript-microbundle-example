const add = (...args: number[]): number => (
    args.reduce((acc, curr) => (
        acc + curr
    ))
)

export default add
