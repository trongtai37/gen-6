package main

import (
	"fmt"
)

func main() {
	firstNode := TreeNode{2,
		&TreeNode{1,
			nil,
			nil},
		&TreeNode{3, nil, nil}}

	fmt.Println(FindBottomLeftTree(&firstNode))
}
