mkdir -p output
zig build-lib src/main.zig -target wasm32-freestanding -dynamic -rdynamic
mv main.* output
