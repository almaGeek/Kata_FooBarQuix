package com.kata.foobarquix.services

import org.springframework.stereotype.Component
import java.lang.StringBuilder

@Component
class FooBarQuixService {

    fun convertNumber(inputNumber: Int): String {
        var result : String = "";
        if (inputNumber == 1) return "1";
        var inputString: String = inputNumber.toString();
        if (inputNumber.rem(3) == 0) result += "Foo";
        if (inputNumber.rem(5) == 0) result += "Bar";
        inputString.toCharArray().forEach { c ->
            if (c == '3') result += "Foo";
            if (c == '5') result += "Bar";
            if (c == '7') result += "Quix";
        }
        return result;
    }
}