package main

func enqueue(queue []*TreeNode, element *TreeNode) []*TreeNode {
	queue = append(queue, element) // Simply append to enqueue.
	return queue
}

func dequeue(queue []*TreeNode) []*TreeNode {
	return queue[1:] // Slice off the element once it is dequeued.
}

func FindBottomLeftTree(root *TreeNode) int {
	var queue []*TreeNode
	queue = append(queue, root)
	var node *TreeNode
	for len(queue) > 0 {
		node = queue[0]
		queue = dequeue(queue)
		if node.Right != nil {
			queue = enqueue(queue, node.Right)
		}
		if node.Left != nil {
			queue = enqueue(queue, node.Left)
		}

	}
	return node.Val
}
