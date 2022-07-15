### Question: Imagine you have a 200 GB file on disk, with one string per line. Explain how you would sort the file with only 2 GB RAM machine.

The Solution come up with idea divide and conquer.
Constraint is 200 GB and only 2 GB RAM

# Solution:

1. Divide input file into 200 file with size 1 GB.
2. Sort each file   
```
    for (string fileName: listFileName) {
        ifstream file(fileName);
        
        vector<string> A;
        string str;
        
        // Save data of file to vector A: Complexity O(N)
        while (getline(file, str)) {
            A.push_back(str);
        }
        
        // Close and delete current file
        file.close();
        remove(fileName);
        
        // Sort data: Complexity O(N * log(N))
        sort(A.begin(), A.end(), compare);
        
        
        ifstream writeFile(fileName, ios::app);
        // Rewrite to file: Complexity O(N)
        for (string line: A) {
             writeFile << line;
        }
    }       
```
```
    int compare (string& s1, string& s2) {
        // loop 2 string to the end equal to the shorter string 
        for (condition) {
            if (s1[index] == s2[index])
                continue;
                
            return s1[index] > s2[index];
        }    
    
        return s1.length() > s2.length();
    }
```
3. After that, we have 200 file has been sort, next step we merge all file together
``` 
    // get first file
    mergeFile = fopen(firstFileName, 'r');

    // loop from second file: Complexity O(N) 
    for (condition) {
        file = fopen(fileName, 'r');
        ifstream term('term.txt', ios::app);
        
        // compare line by line of 2 file and write to term: Complexity O(N)
        // the file line will advance to 1 if this one line is shorter
        term << shorterLine;
        // close mergeFile, file, term
        // delete firstFile and rename term.txt to firstFileName   
    }
    
    // rename to input fileName
```

# Conclusion:
Base on a divide and conquer algorithm, this algorithm has:
Time Complexity O(N * log(N))
Space Complexity O(N) with N is the line of 1 file 1 GB 


