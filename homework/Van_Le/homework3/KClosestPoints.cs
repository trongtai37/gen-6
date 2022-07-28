public class KClosestPoints {
    public int[][] KClosest(int[][] points, int k)
        {
            return QuickSelect(points, k);
        }
        private int[][] QuickSelect(int[][] points, int k)
        {
            int[][] result = new int[k][];
            int left = 0, right = points.Length - 1;
            int pivotIndex = points.Length;
            while (pivotIndex != k)
            {
                pivotIndex = Partition(points, left, right);
                if (pivotIndex < k)
                {
                    left = pivotIndex;
                }
                else
                {
                    right = pivotIndex - 1;
                }
            }

            Array.Copy(points, 0, result, 0, k);
            return result;
        }

        private int Partition(int[][] points, int left, int right)
        {
            int[] pivot = ChoosePivot(points, left, right);
            int pivotDist = SquaredDistance(pivot);
            while (left < right)
            {
                if (SquaredDistance(points[left]) >= pivotDist)
                {
                    int[] temp = points[left];
                    points[left] = points[right];
                    points[right] = temp;
                    right--;
                }
                else
                {
                    left++;
                }
            }

            if (SquaredDistance(points[left]) < pivotDist)
                left++;
            return left;
        }

        private int[] ChoosePivot(int[][] points, int left, int right)
        {
            return points[left + (right - left) / 2];
        }

        private int SquaredDistance(int[] point)
        {
            return point[0] * point[0] + point[1] * point[1];
        }
}