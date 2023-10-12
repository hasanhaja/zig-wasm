# Zig WASM

This is a playground project to test Zig's WASM output. I've tried some Rust WASM in the past [hasanhaja/pixels](https://github.com/hasanhaja/pixels) but I never dove into how Rust setup all of the bindings to make the JS interface easy. I'm going the low-level route with this and writing the connectors myself.

## Todo

- [x] Simple math functions in Zig 
- [x] Explore making the WASM binary as small as possible
- [x] Implement fibonacci using this [tutorial](https://enarx.dev/docs/webassembly/zig)
- [ ] What is WASI?
- [ ] Allocator specific to WASM: Heap vs [WasmAllocator](https://ziglang.org/documentation/master/std/#A;std:heap.WasmAllocator)
- [ ] Compare performance differences with the different `-O` zig output modes
- [x] `extern` function in Zig 
- [ ] Load and execute WASM functions in a web worker
- [ ] Game of life

## Findings

- Adding the `-O ReleaseSmall` flag in the Zig build made the binary super small

## Resources

- https://dev.to/sleibrock/webassembly-with-zig-part-1-4onm
- https://ziglang.org/documentation/0.11.0/#WebAssembly 
- https://developer.mozilla.org/en-US/docs/WebAssembly/Loading_and_running
- https://www.sitepen.com/blog/using-webassembly-with-web-workers
- https://dev.to/sleibrock/webassembly-with-zig-pt-ii-ei7
