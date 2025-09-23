<?php

use PHPUnit\Framework\TestCase;

class MathOperation
{
    public function add($a, $b)
    {
        return $a + $b;
    }

    public function subtract($a, $b)
    {
        return $a - $b;
    }

    public function multiply($a, $b)
    {
        return $a * $b;
    }

    public function divide($a, $b)
    {
        return $a / $b;
    }
}

class MathOperationTest extends TestCase
{
    public function test_addition()
    {
        $operations = new MathOperation();
        $result = $operations->add(2, 5);
        $this->assertEquals(7, $result);
    }

    public function test_multiply()
    {
        $operations = new MathOperation();
        $result = $operations->multiply(5,5);
        $this->assertEquals(25, $result);
    }

    public function test_subtraction()
    {
        $operations = new MathOperation();
        $result = $operations->subtract(5,5);
        $this->assertEquals(0, $result);
    }

    public function test_divide()
    {
        $operations = new MathOperation();
        $result = $operations->divide(5,5);
        $this->assertEquals(1, $result);
    }
}
