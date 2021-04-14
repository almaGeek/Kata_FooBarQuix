package com.kata.foobarquix.services

import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class FooBarQuixServiceTest {

    private val fooBarQuixService = FooBarQuixService()

    @Test
    fun convertNumber() {
        Assertions.assertEquals(fooBarQuixService.convertNumber(1), "1")
        Assertions.assertEquals(fooBarQuixService.convertNumber(3), "FooFoo")
        Assertions.assertEquals(fooBarQuixService.convertNumber(5), "BarBar")
        Assertions.assertEquals(fooBarQuixService.convertNumber(7), "Quix")
        Assertions.assertEquals(fooBarQuixService.convertNumber(9), "Foo")
        Assertions.assertEquals(fooBarQuixService.convertNumber(51), "FooBar")
        Assertions.assertEquals(fooBarQuixService.convertNumber(53), "BarFoo")
        Assertions.assertEquals(fooBarQuixService.convertNumber(33), "FooFooFoo")
        Assertions.assertEquals(fooBarQuixService.convertNumber(27), "FooQuix")
        Assertions.assertEquals(fooBarQuixService.convertNumber(15), "FooBarBar")
    }
}