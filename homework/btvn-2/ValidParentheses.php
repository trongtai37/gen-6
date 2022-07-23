<?php

class SimpleStack
{
    protected $queue = [];

    public function push($data)
    {
        var_dump($this->queue);
        $this->queue[] = $data;
    }

    public function pop()
    {
        var_dump($this->queue);
        array_pop($this->queue);
    }

    public function isEmpty()
    {
        return empty($this->queue);
    }

    public function peek()
    {
        if (!empty($this->queue)) {
            return $this->queue[count($this->queue) - 1];
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
        $queue = new SimpleStack();
        $arrayS = str_split($s);

        foreach ($arrayS as $singleString)
        {
            if ($singleString == '(' or $singleString == '{' or $singleString == '[') {
                $queue->push($singleString);
            }

            if ($singleString == '}' and $queue->peek() != '{') {
                $queue->push($singleString);
            }

            if ($singleString == ']' and $queue->peek() != '[') {
                $queue->push($singleString);
            }

            if ($singleString == ')' and $queue->peek() != '(') {
                $queue->push($singleString);
            }


            if ($singleString == '}' and $queue->peek() == '{') {
                $queue->pop();
            }

            if ($singleString == ']' and $queue->peek() == '[') {
                $queue->pop();
            }

            if ($singleString == ')' and $queue->peek()== '(') {
                $queue->pop();
            }
        }

        return $queue->isEmpty();
    }
}

$test = new ValidParentheses;

//var_dump($test->isValid("()[]{}"));
//var_dump($test->isValid("()[]{}{"));
//var_dump($test->isValid("([)]"));
var_dump($test->isValid("{[]}"));
