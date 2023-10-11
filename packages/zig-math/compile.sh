mkdir -p output
zig build-lib src/main.zig -target wasm32-freestanding -dynamic -rdynamic -O ReleaseSmall
mv main.* output
