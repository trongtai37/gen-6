package main

import "fmt"

func getFood(grid [][]byte) int {
	var firstLocation = [2]int{0, 0}
	dr := []int{0, 1, 0, -1}
	dc := []int{1, 0, -1, 0}
	count := 0
	var location [2]int
	var queue [][2]int

	n := len(grid)
	m := len(grid[0])
	isVisit := make([][]bool, n)

	for i := range isVisit {
		isVisit[i] = make([]bool, m)
	}
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[i]); j++ {
			if grid[i][j] == '*' {
				firstLocation = [2]int{i, j}
				isVisit[i][j] = true
			}
		}
	}

	queue = append(queue, firstLocation)
	for len(queue) > 0 {
		size := len(queue)
		count++
		for l := 0; l < size; l++ {
			location = queue[0]
			queue = queue[1:]
			for k := 0; k < 4; k++ {
				i := location[0] + dr[k]
				j := location[1] + dc[k]

				if i >= 0 && i < n && j >= 0 && j < m && isVisit[i][j] == false {
					if grid[i][j] == 'O' {
						queue = append(queue, [2]int{i, j})
					} else if grid[i][j] == '#' {
						return count
					}
					isVisit[i][j] = true
				}
			}
		}

		fmt.Println(location)
	}

	return -1
}
