<?php


class BadCalculator
{
    public function plus($a, $b)
    {
        return $a + $b;
    }

    public function Minus($a, $b)
    {
        return $a - $b;
    }

    // for many calculation here
}


// TODO We should try to get a good solutions for this calculator
// BadCalculator has
// more than 2 reason to change logic,
// too easy to modified this class,
// Not have any sub-class to be use
// Logic have no separated,
// And no interface to be use

// TODO We should refactor it to follow SOLID Principles


// First, we create a interface that defined a calculation
// All logic we use has been write in this interface, and it only.

interface Calculation
{
    // we have Run function, input is 2 number and return 1 number, we dont care about what is calculation, it's just something abstracted
    public function run($a, $b);
}

// We have a class that subclass or interface ( for L principle and D principle )
class Plus implements Calculation
{
    public function run($a, $b)
    {
        return $a + $b;
    }
}
// another class
class Minus implements Calculation
{
    public function run($a, $b)
    {
        return $a - $b;
    }
}
// if we want to add more calculation, we just create new class, it's very easy,
// but we can not add more calculation by modified logic on each class
// single responsibility and open-closed been follow here


// The last thing here, the class GoodCalculator should depend on what exactly Calculation is,
// just depend on some input we throw into this class
class GoodCalculator
{
    // this class only depend on interface, and logic depend on interface too, so Dependency Inversion has been follow.
    //
    protected Calculation $calculation;

    public function __construct(string $calculation)
    {
        // Minus and Plus class is subclass of Calculation, we can run this function without any error, that mean L has been follow
        switch ($calculation) {
            case '-' : $this->calculation = new Minus(); break;
            default : $this->calculation = new Plus(); break;
        }
    }
    // return result here
    public function calculate($a, $b)
    {
        return $this->calculation->run($a, $b);
    }
}

// All logic has separated, each class has 1 reason to be change only.  class GoodCalculator only depend on interface and just do 1 thing.

// it's hard to explain as