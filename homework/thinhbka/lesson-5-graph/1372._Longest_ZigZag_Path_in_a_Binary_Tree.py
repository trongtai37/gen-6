class Solution:
	def longestZigZag(self, root: Optional[TreeNode]) -> int:
		if not root: return 0
		self.res=0
		def find(root,count,a):
			if root:
				if a=='r':
					if root.left:
						find(root.left,count+1,'l')
					if root.right:
						find(root.right,1,'r')
				else:
					if root.left:
						find(root.left,1,'l')
					if root.right:
						find(root.right,count+1,'r')
			self.res=max(self.res,count)

		if root.right:find(root.right,1,'r')
		if root.left:find(root.left,1,'l')
		return self.res