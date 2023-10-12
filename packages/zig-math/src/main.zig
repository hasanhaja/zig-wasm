const std = @import("std");
const testing = std.testing;

extern fn debug(i: u32) void;

export fn add(a: i32, b: i32) i32 {
    return a + b;
}

export fn multiply(a: i32, b: i32) i32 {
    return a * b;
}

export fn fibonacci(i: u32) u32 {
    debug(i);
    if (i <= 1) return i;

    return fibonacci(i - 1) + fibonacci(i - 2);
}

test "basic add functionality" {
    try testing.expect(add(3, 7) == 10);
}

test "basic multiply functionality" {
    try testing.expect(add(3, 7) == 21);
}
