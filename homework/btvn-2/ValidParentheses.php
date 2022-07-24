<?php

class SimpleStack
{
    protected $stack = [];

    public function push($data)
    {
        $this->stack[] = $data;
    }

    public function pop()
    {
        array_pop($this->stack);
    }

    public function isEmpty()
    {
        return empty($this->stack);
    }

    public function peek()
    {
        if (!empty($this->stack)) {
            return $this->stack[count($this->stack) - 1];
        } else {
            return false;
        }
    }
}


class ValidParentheses {

    /**
     * @param String $s
     * @return Boolean
     */
    function isValid($s) {
        $stack = new SimpleStack();
        $arrayS = str_split($s);

        foreach ($arrayS as $singleString)
        {
            if ($singleString == '(' or $singleString == '{' or $singleString == '[') {
                $stack->push($singleString);
            }

            if ($singleString == '}' and $stack->peek() != '{') {
                $stack->push($singleString);
            }

            if ($singleString == ']' and $stack->peek() != '[') {
                $stack->push($singleString);
            }

            if ($singleString == ')' and $stack->peek() != '(') {
                $stack->push($singleString);
            }


            if ($singleString == '}' and $stack->peek() == '{') {
                $stack->pop();
            }

            if ($singleString == ']' and $stack->peek() == '[') {
                $stack->pop();
            }

            if ($singleString == ')' and $stack->peek()== '(') {
                $stack->pop();
            }
        }

        return $stack->isEmpty();
    }
}

$test = new ValidParentheses;

var_dump($test->isValid("{[]}"));
