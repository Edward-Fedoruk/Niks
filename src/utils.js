// (b -> c) -> (a -> b) -> a -> c
export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

// ((a, b) -> c) -> (a -> b -> c)
export const curry = (fn, ...args) => ((fn.length <= args.length)
  ? fn(...args) : (...more) => curry(fn, ...args, ...more));

// [a] -> a
export const getLast = (arr) => arr.slice(-1)[0];

// Object o, String k => k -> o -> v
export const getProp = curry((p, o) => o[p]);

// a -> a
export const id = (a) => a;

// (a -> b) -> [a] -> [b]
export const map = curry((f, xs) => xs.map(f));
